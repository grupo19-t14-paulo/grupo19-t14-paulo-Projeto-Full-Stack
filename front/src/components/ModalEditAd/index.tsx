import { ContainerModal } from "./styled";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { ToastContainer } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPortal } from "react-dom";
import useOutClick from "../../hook/useOutClick";
import { useContext, useEffect, useState } from "react";
import { AnnouncementContext } from "../../contexts/AnnouncementContext/AnnouncementContext";
import axios from "axios";
import { IAdvertiser } from "../../interfaces/AdvertsInterfaces";
import {
  DivRadio,
  RadioInput,
  RadioLabel,
  RadioText,
  RadioWrapper,
} from "../../styles/Form";
import { toast } from "react-toastify";
import { api } from "../../services/api";

interface Car {
  name: string;
}

interface Brand {
  [brand: string]: Car[];
}

interface FullCar {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: 1 | 2 | 3;
  value: number;
}

export interface ModalEditAndDeleteProps {
  idAdvertiser: string | undefined;
}

const ModalEditAd = ({ idAdvertiser }: ModalEditAndDeleteProps) => {
  const { setloadingAd, ad, setAd, setEditModal, setDeleteModal } =
    useContext(AnnouncementContext);
  const [carsList, setCarsList] = useState<Brand>({} as Brand);
  const [carsByBrand, setCarsByBrand] = useState<FullCar[]>([] as FullCar[]);
  const [carInfos, setCarInfos] = useState<FullCar[]>([] as FullCar[]);

  useEffect(() => {
    (async () => {
      const getCarNames = await axios.get(
        "https://kenzie-kars.herokuapp.com/cars"
      );

      setCarsList(getCarNames.data);
    })();
  }, []);

  const refModal = useOutClick(() => {
    setEditModal(false);
  });

  const closeModal = () => {
    setEditModal(false);
  };

  const openModalDelete = () => {
    setDeleteModal(true);
  };

  const schema = z.object({
    brand: z.string(),
    model: z.string(),
    year: z.string(),
    fuel: z.string(),
    mileage: z.string(),
    color: z.string(),
    value: z.string(),
    price: z.string(),
    description: z.string(),
    active: z.union([z.literal("true"), z.literal("false")]),
    images: z.array(
      z.object({
        image: z.string(),
      })
    ),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IAdvertiser>({
    defaultValues: {
      images: [{ image: "" }],
    },
    resolver: zodResolver(schema),
  });

  const { fields, append } = useFieldArray({
    name: "images",
    control,
  });

  const selectBrand = async (value: string) => {
    const getCarByBrand = await axios.get(
      `https://kenzie-kars.herokuapp.com/cars?brand=${value}`
    );

    setCarsByBrand(getCarByBrand.data);
  };

  const selectModel = ({ target }: any) => {
    const filter = carsByBrand.filter((car) => car.name === target.value);

    setCarInfos(filter);
  };

  const carFuel = (type: number) => {
    if (type === 1) {
      return "Gasolina / Etanol";
    }
    if (type === 2) {
      return "Híbrido";
    }
    return "Elétrico";
  };

  const editAnnouncement = async (data: IAdvertiser) => {
    try {
      setloadingAd(true);

      if (data.active === "true") {
        data.active = true;
      } else if (data.active === "false") {
        data.active = false;
      }

      const oldAd = await api.get(`adverts/${idAdvertiser}`);

      let announcement = { ...data };

      delete announcement.images;

      if (data.brand === "Escolha a marca") {
        announcement.brand = oldAd.data.brand;
      }

      if (data.model === "Escolha o modelo") {
        announcement.model = oldAd.data.model;
      }

      if (data.year === "") {
        announcement.year = oldAd.data.year;
      }

      if (data.fuel === "") {
        announcement.fuel = oldAd.data.fuel;
      }

      if (data.mileage && data.mileage !== "") {
        announcement.mileage = announcement.mileage.replace(/[^\d]+/g, "");
      } else if (data.mileage === "") {
        announcement.mileage = oldAd.data.mileage;
      }

      if (data.color === "") {
        announcement.color = oldAd.data.color;
      }

      if (data.value && data.value !== "") {
        announcement.value = announcement.value
          .replace(/[^\d]+/g, "")
          .slice(0, -2);
      } else if (data.value === "") {
        announcement.value = oldAd.data.value;
      }

      if (data.price && data.price !== "") {
        announcement.price = announcement.price
          .replace(/[^\d]+/g, "")
          .slice(0, -2);
      } else if (data.price === "") {
        announcement.price = oldAd.data.price;
      }

      if (data.description === "") {
        announcement.description = oldAd.data.description;
      }

      if (data.images?.length !== 0 && data.images?.[0].image !== "") {
        const imgs = await api.get(`adverts/images/${idAdvertiser}`);

        imgs.data.map(
          async (e: any) => await api.delete(`adverts/images/${e.id}`)
        );

        data.images!.forEach(async (img) => {
          const newImage = {
            image: img.image,
          };

          await api.post(`adverts/images/${idAdvertiser}`, newImage);
        });
      }

      const res = await api.patch(`adverts/${idAdvertiser}`, announcement);

      const upAds = ad?.map((ads) =>
        ads.id === idAdvertiser ? (ads = res.data) : ads
      );

      toast.success("Anúncio editado com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setAd(upAds);
      setEditModal(false);
      setloadingAd(true);
    } catch (err) {
      toast.error("Ops algo de errado, revise os campo!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(err);
    } finally {
      setloadingAd(true);
    }
  };

  return createPortal(
    <>
      <ToastContainer />
      <ContainerModal>
        <div className="content__modal" ref={refModal}>
          <div className="headerModal">
            <h3 className="">Editar anúncio</h3>
            <button
              className="close__modal"
              type="button"
              onClick={() => closeModal()}
            >
              x
            </button>
          </div>
          <h4 className="subTitleModal">Informações do veículo</h4>
          <form onSubmit={handleSubmit(editAnnouncement)}>
            <label className="textLabel" htmlFor="brand">
              Marca
            </label>
            <select
              id="brand"
              placeholder="Mercedes Benz"
              {...register("brand")}
              onChange={({ target }) => {
                selectBrand(target.value);
              }}
            >
              <option>Escolha a marca</option>
              {Object.keys(carsList).map((brand, key) => {
                return (
                  <option className="dataItem" value={brand} key={key}>
                    {brand}
                  </option>
                );
              })}
            </select>
            <p>{errors.brand?.message}</p>

            <label className="textLabel" htmlFor="model">
              Modelo
            </label>

            <select
              id="model"
              placeholder="A 200 CGI ADVANCE SEDAN"
              {...register("model")}
              onChange={selectModel}
            >
              <option>Escolha o modelo</option>
              {carsByBrand.map((car) => {
                return (
                  <option className="dataItem" value={car.name} key={car.id}>
                    {car.name}
                  </option>
                );
              })}
            </select>
            <p>{errors.model?.message}</p>

            <section>
              <div>
                <label className="textLabel" htmlFor="year">
                  Ano
                </label>
                <input
                  type="text"
                  id="year"
                  placeholder="2018"
                  {...register("year")}
                />
                <p className="errorDubleInput">{errors.year?.message}</p>
              </div>
              <div className="secInput">
                <label className="textLabel" htmlFor="fuel">
                  Combustível
                </label>

                <input
                  type="text"
                  id="fuel"
                  placeholder="Gasolina / Etanol"
                  value={carInfos.length != 0 ? carFuel(carInfos[0].fuel) : ""}
                  {...register("fuel")}
                />
                <p className="errorDubleInput">{errors.fuel?.message}</p>
              </div>
            </section>

            <section>
              <div>
                <label className="textLabel" htmlFor="mileage">
                  Quilometragem
                </label>
                <input
                  type="text"
                  id="mileage"
                  placeholder="30.000"
                  {...register("mileage")}
                />
                <p className="errorDubleInput">{errors.mileage?.message}</p>
              </div>
              <div className="secInput">
                <label className="textLabel" htmlFor="color">
                  Color
                </label>

                <input
                  type="text"
                  id="color"
                  placeholder="Branco"
                  {...register("color")}
                />
                <p className="errorDubleInput">{errors.color?.message}</p>
              </div>
            </section>
            <section>
              <div>
                <label className="textLabel" htmlFor="value">
                  Preço tabela FIPE
                </label>
                <input
                  type="text"
                  id="value"
                  placeholder="R$ 48.000,00"
                  value={
                    carInfos.length != 0
                      ? carInfos[0].value.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })
                      : ""
                  }
                  {...register("value")}
                />
                <p className="errorDubleInput">{errors.value?.message}</p>
              </div>
              <div className="secInput">
                <label className="textLabel" htmlFor="price">
                  Preço
                </label>

                <input
                  type="text"
                  id="price"
                  placeholder="R$ 50.000,00"
                  {...register("price")}
                />
                <p className="errorDubleInput">{errors.price?.message}</p>
              </div>
            </section>

            <label className="textLabel" htmlFor="description">
              Descrição
            </label>

            <textarea
              className="inputDescription"
              id="description"
              placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              {...register("description")}
            />
            <p>{errors.description?.message}</p>

            <h4 className="textLabel">Publicado</h4>

            <DivRadio>
              <RadioWrapper>
                <RadioInput
                  type="radio"
                  id="active"
                  value="true"
                  {...register("active")}
                />
                <RadioLabel htmlFor="active">
                  <RadioText>Sim</RadioText>
                </RadioLabel>
              </RadioWrapper>

              <RadioWrapper>
                <RadioInput
                  type="radio"
                  id="noActive"
                  value="false"
                  {...register("active")}
                />
                <RadioLabel htmlFor="noActive">
                  <RadioText>Não</RadioText>
                </RadioLabel>
              </RadioWrapper>
            </DivRadio>

            {fields.map((fields, index) => {
              return (
                <span key={fields.id}>
                  <label className="textLabel" htmlFor="images">
                    {index == 0
                      ? "Imagem de Capa"
                      : `${index}º imagem da galeria`}
                  </label>
                  <input
                    type="text"
                    id="images"
                    placeholder="https://image.com"
                    {...register(`images.${index}.image`)}
                  />
                  <p>{errors.images?.message}</p>
                </span>
              );
            })}

            <button
              className="addImage"
              type="button"
              onClick={() =>
                append({
                  image: "https://image.com",
                })
              }
            >
              Adicionar mais imagem
            </button>

            <div className="divButtons">
              <button
                className="btnDelete"
                type="button"
                onClick={() => openModalDelete()}
              >
                Excluir anúncio
              </button>
              <button className="btnSave" type="submit">
                Salvar alteralções
              </button>
            </div>
          </form>
        </div>
      </ContainerModal>
    </>,
    document.body
  );
};

export default ModalEditAd;
