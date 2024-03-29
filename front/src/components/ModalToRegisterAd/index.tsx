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

const ModalRegisterAd = () => {
  const { setModal, submitAddAnnouncement } = useContext(AnnouncementContext);
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
    setModal(false);
  });

  const closeModal = () => {
    setModal(false);
  };

  const schema = z.object({
    brand: z.string().nonempty("Marca é obrigatório"),
    model: z.string().nonempty("Modelo é obrigatório"),
    year: z.string().nonempty("Ano é obrigatório"),
    fuel: z.string().nonempty("Tipo do combustível é obrigatório"),
    mileage: z.string().nonempty("KM é obrigatório"),
    color: z.string().nonempty("Cor é obrigatório"),
    value: z.string().nonempty("Valor da tabela Fipe é obrigatório"),
    price: z.string().nonempty("Preço de venda é obrigatório"),
    description: z.string(),
    images: z.array(
      z.object({
        image: z.string().max(1500, "É permito até 1500 caracteres"),
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

  return createPortal(
    <>
      <ToastContainer />

      <ContainerModal>
        <div className="content__modal" ref={refModal}>
          <div className="headerModal">
            <h3 className="">Criar Anúncio</h3>
            <button
              className="close__modal"
              type="button"
              onClick={() => closeModal()}
            >
              x
            </button>
          </div>
          <h4 className="subTitleModal">Informações do veículo</h4>
          <form onSubmit={handleSubmit(submitAddAnnouncement)}>
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
                className="btnCancel"
                type="button"
                onClick={() => closeModal()}
              >
                Cancelar
              </button>
              <button className="btnCreate" type="submit">
                Criar anúncio
              </button>
            </div>
          </form>
        </div>
      </ContainerModal>
    </>,
    document.body
  );
};

export default ModalRegisterAd;
