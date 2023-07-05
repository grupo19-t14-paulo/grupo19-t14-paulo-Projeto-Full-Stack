import { useContext, useEffect, useState } from "react";
import FooterBase from "../../components/Footer";
import ModalRegisterAd from "../../components/ModalToRegisterAd";
import {
  BackgroundBody,
  ContainerAdverts,
  ContainerDivBlue,
  StyledButton,
} from "./style";
import { AnnouncementContext } from "../../contexts/AnnouncementContext/AnnouncementContext";
import { ContextLogin } from "../../contexts/LoginContext/LoginContex";
import { api } from "../../services/api";
import { HeaderProfile } from "../../components/HeaderProfile";
import { IAdvertiser } from "../../interfaces/AdvertsInterfaces";
import ModalEditAd from "../../components/ModalEditAd";
import ModalDeleteAd from "../../components/ModalDeleteAd";
import { useNavigate } from "react-router";
import Loading from "../../components/Loading";
/*eslint-disable react-hooks/exhaustive-deps*/


const AdvertiserPage = () => {
  const {
    modal,
    setModal,
    ad,
    setAd,
    editModal,
    setEditModal,
    deleteModal,
    loadingAd,
    setloadingAd,
  } = useContext(AnnouncementContext);
  const { user, loading } = useContext(ContextLogin);
  const [idAd, setIdAd] = useState<string | undefined>("");

  const navegate = useNavigate();

  const openModal = () => {
    setModal(true);
  };

  const seeDetails = (id: string | undefined) => {
    navegate(`/product/${id}`);
  };

  const openModalEdit = (id: string | undefined) => {
    setEditModal(true);

    setIdAd(id);
  };

  if (deleteModal) {
    setEditModal(false);
  }

  useEffect(() => {
    const initPage = async () => {
      const id = user?.id;
      const resAds = await api.get<IAdvertiser[]>(`/adverts/seller/${id}`);
      setAd(resAds.data);
      setloadingAd(true);
    }
    initPage()
  }, []);

  const userNameHeader1 = user?.name.split(" ");

  const userNameHeader2 = `${userNameHeader1 ? userNameHeader1[0] : ""} ${
    userNameHeader1 ? userNameHeader1[1] : ""
  }`;

  return (
    <>
      {modal ? <ModalRegisterAd /> : modal}
      {editModal ? <ModalEditAd idAdvertiser={idAd} /> : editModal}
      {deleteModal ? <ModalDeleteAd idAdvertiser={idAd} /> : deleteModal}
      <BackgroundBody>
        <HeaderProfile
          button1="Fazer Login"
          button2="Cadastrar"
          page1="/login"
          page2="/register"
        />

        <ContainerDivBlue>
          <section>
            <span className="initialsName">
              {loading && <Loading />}
              <h1>
                {userNameHeader1 && userNameHeader1.length > 0
                  ? userNameHeader1[0][0]
                  : ""}
                {userNameHeader1 && userNameHeader1.length > 1
                  ? userNameHeader1[1]
                    ? ` ${userNameHeader1[1][0]}`
                    : ""
                  : ""}
              </h1>
            </span>

            <div>
              <h3>
                {userNameHeader2 &&
                  userNameHeader2.replace("undefined", "").trim()}
              </h3>
              <p className="tagInfo">{user?.type}</p>
            </div>

            <p className="paragraph">{user?.description}</p>

            <button
              className="button"
              type="button"
              onClick={() => openModal()}
            >
              Criar Anúncio
            </button>
          </section>
        </ContainerDivBlue>
        {!loadingAd && <Loading />}
        <ContainerAdverts>
          <div className="adsArea">
            { ad && ad.length > 0 ? (
              <section className="sectionCards">
                {ad?.map((ads) => (
                  <div className="card" key={ads.id}>
                    {ads.active ? (
                      <StyledButton buttonStyle={ads.active}>
                        {"Ativo"}
                      </StyledButton>
                    ) : (
                      <StyledButton buttonStyle={ads.active}>
                        {"Inativo"}
                      </StyledButton>
                    )}

                    <figure>
                      {ads.images?.map((img, i) =>
                        i === 0 && img.image !== undefined ? (
                          <img
                            key={i}
                            src={img.image}
                            alt="Imagem do veículo"
                          />
                        ) : (
                          <img key={i} src="" alt="Imagem do veículo" />
                        )
                      )}
                    </figure>
                    <div className="infoCard">
                      <h3>
                        {ads.brand} - {ads.model}
                      </h3>
                      {ads.description === "" ? (
                        <p className="description">
                          Anúncio não possui descrição!
                        </p>
                      ) : (
                        <p className="description">{ads.description}</p>
                      )}
                      <div className="divNameUserCard">
                        <span>
                          <h2 className="initials">
                            {userNameHeader1 && userNameHeader1.length > 0
                              ? userNameHeader1[0][0]
                              : ""}
                            {userNameHeader1 && userNameHeader1.length > 1
                              ? userNameHeader1[1]
                                ? `${userNameHeader1[1][0]}`
                                : ""
                              : ""}
                          </h2>
                        </span>
                        <h3>
                          {userNameHeader2 &&
                            userNameHeader2.replace("undefined", "").trim()}
                        </h3>
                      </div>

                      <div className="divKmPriceYear">
                        <div className="divKmYear">
                          <span className="tagInfo">{ads.mileage} KM</span>
                          <span className="tagInfo">{ads.year}</span>
                          <p className="price">
                            {new Intl.NumberFormat("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            }).format(Number(ads.price))}
                          </p>
                        </div>
                        <div className="divButton">
                          <button
                            className="buttonCard"
                            type="button"
                            onClick={() => openModalEdit(ads.id)}
                          >
                            Editar
                          </button>
                          <button
                            className="buttonCard"
                            type="button"
                            onClick={() => seeDetails(ads.id)}
                          >
                            Ver detalhes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            ) : (
              <h2 className="IHaveNoAds">Você não possuí anúncios!</h2>
            )}
          </div>
        </ContainerAdverts>
        <FooterBase />
      </BackgroundBody>
    </>
  );
};

export default AdvertiserPage;
