import { useContext } from "react";
import FooterBase from "../../components/Footer";
import { Header } from "../../components/Header";
import ModalRegisterAd from "../../components/ModalToRegisterAd";
import { advertData } from "../Product/data";
import { BackgroundBody, ContainerAdverts, ContainerDivBlue } from "./style";
import { AnnouncementContext } from "../../contexts/AnnouncementContext/AnnouncementContext";
//import { ContextLogin } from "../../contexts/LoginContext/LoginContex";
//import { api } from "../../services/api";

const AdvertiserPage = () => {
  const { modal, setModal } = useContext(AnnouncementContext);
  //const {user, setUser } = useContext(ContextLogin);

  const openModal = () => {
    setModal(true);
  };

  const user = {
    name: "Diego Delli Colli Ramos",
    email: "dellicolli@mail.com",
    cpf: "125.854.658-19",
    phone: "11 982446057",
    birthDate: "15/11/1989",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    password: "123456",
    type: "Anunciante",
  };

  /* useEffect(() => {
    (async () => {
      const res = await api.get("/users/");

      setUser(res.data);
    })();
  }, []); */

  const userNameHeader1 = user.name.split(" ");
  const userNameHeader2 = `${userNameHeader1[0]} ${userNameHeader1[1]}`;

  return (
    <>
      {modal ? <ModalRegisterAd /> : modal}
      <BackgroundBody>
        <Header
          button1={userNameHeader2}
          button2="Sair"
          page1="/advertiser"
          page2="/"
        />
        <ContainerDivBlue>
          <section>
            <span className="initialsName">
              <h1>
                {userNameHeader1[0][0]}
                {userNameHeader1[1][0]}
              </h1>
            </span>

            <div>
              <h3>{userNameHeader2}</h3>
              <p className="tagInfo">{user.type}</p>
            </div>

            <p className="paragraph">{user.description}</p>

            <button
              className="button"
              type="button"
              onClick={() => openModal()}
            >
              Criar Anúncio
            </button>
          </section>
        </ContainerDivBlue>
        <ContainerAdverts>
          <div className="adsArea">
            <h2 className="advertiserName">Anúncios</h2>
            <section className="sectionCards">
              <div className="card">
                <figure>
                  <img src={advertData.image} alt="Imagem do veículo" />
                </figure>
                <div className="infoCard">
                  <h3>
                    {advertData.brand} - {advertData.model}
                  </h3>
                  <p>{advertData.description}</p>
                  <div className="divNameUserCard">
                    <span>
                      <h2 className="initials">
                        {userNameHeader1[0][0]}
                        {userNameHeader1[1][0]}
                      </h2>
                    </span>
                    <h3>{userNameHeader2}</h3>
                  </div>

                  <div className="divKmPriceYear">
                    <div className="divKmYear">
                      <span className="tagInfo">{advertData.mileage} KM</span>
                      <span className="tagInfo">{advertData.year}</span>
                      <p className="price">R$ {advertData.price}</p>
                    </div>
                    <div className="divButton">
                      <button className="buttonCard" type="button">
                        Editar
                      </button>
                      <button className="buttonCard" type="button">
                        Ver detalhes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </ContainerAdverts>
        <FooterBase />
      </BackgroundBody>
    </>
  );
};

export default AdvertiserPage;
