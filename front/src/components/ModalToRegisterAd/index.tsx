import { ContainerModal } from "./styled";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast, ToastContainer } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPortal } from "react-dom";
import useOutClick from "../../hook/useOutClick";
import { useState } from "react";
import { api } from "../../services/api";

interface IAdvertiser {
  id?: string;
  brand: string;
  model: string;
  year: string;
  fuel: string;
  mileage: string;
  color: string;
  value: number;
  price: number;
  description: string;
  image?: [];
  active?: boolean;
}
const ModalRegisterAd = () => {
  const [modal, setModal] = useState(false);
  const [ad, setAd] = useState<IAdvertiser[] | undefined>([]);

  const refModal = useOutClick(() => {
    setModal(false);
  });

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
    image: z.string().nonempty("Ao menos uma imagem é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAdvertiser>({
    resolver: zodResolver(schema),
  });

  const closeModal = () => {
    setModal(false);
  };

  const submitAddAnnouncement = async (data: IAdvertiser): Promise<void> => {
    try {
      const res = await api.post("adverts", data);

      toast.success("Anúncio adicionado com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setAd(res.data);
    } catch (err) {
      toast.error(`${err}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(err);
    }
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
            <input
              type="text"
              id="brand"
              placeholder="Mercedes Benz"
              {...register("brand")}
            />
            <p>{errors.brand?.message}</p>

            <label className="textLabel" htmlFor="model">
              Modelo
            </label>

            <input
              type="text"
              id="model"
              placeholder="A 200 CGI ADVANCE SEDAN"
              {...register("model")}
            />
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
                <p>{errors.year?.message}</p>
              </div>
              <div className="secInput">
                <label className="textLabel" htmlFor="fuel">
                  Combustível
                </label>

                <input
                  type="text"
                  id="fuel"
                  placeholder="Gasolina / Etanol"
                  {...register("fuel")}
                />
                <p>{errors.fuel?.message}</p>
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
                <p>{errors.mileage?.message}</p>
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
                <p>{errors.color?.message}</p>
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
                  {...register("value")}
                />
                <p>{errors.value?.message}</p>
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
                <p>{errors.price?.message}</p>
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

            <label className="textLabel" htmlFor="image">
              Imagem da Capa
            </label>
            <input
              type="text"
              id="image"
              placeholder="https://image.com"
              {...register("image")}
            />
            <p>{errors.image?.message}</p>

            <label className="textLabel" htmlFor="image">
              1º imagem da galeria
            </label>
            <input
              type="text"
              id="image"
              placeholder="https://image.com"
              {...register("image")}
            />
            <p>{errors.image?.message}</p>
            <label className="textLabel" htmlFor="image">
              2º imagem da galeria
            </label>
            <input
              type="text"
              id="image"
              placeholder="https://image.com"
              {...register("image")}
            />
            <p>{errors.image?.message}</p>
            <button className="addImage" type="button">
              Adicionar campo para imagem da galeria
            </button>
            <div className="divButtons">
              <button className="btnCancel" type="button">
                Cancelar
              </button>
              <button className="btnCreate" type="button">
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
