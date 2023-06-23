import { useContext, useEffect } from "react";
import FooterBase from "../../components/Footer";
import { BackgroundBody, ContainerAdverts, ContainerDivBlue } from "./style";
import {
  AnnouncementContext,
  IAdvertiser,
} from "../../contexts/AnnouncementContext/AnnouncementContext";
import { ContextLogin } from "../../contexts/LoginContext/LoginContex";
import { api } from "../../services/api";
import { HeaderProfile } from "../../components/HeaderProfile";

const AdsSpecificPage = () => {
  const { ad, setAd } = useContext(AnnouncementContext);
  const { user, setUser } = useContext(ContextLogin);

  useEffect(() => {
    (async () => {
      const resUser = await api.get("/users");
      setUser(resUser.data);

      const id = resUser.data.id;

      const resAds = await api.get<IAdvertiser[]>(`/adverts/seller/${id}`);
      setAd(resAds.data);
    })();
  }, []);

  const userNameHeader1 = user?.name.split(" ");

  const userNameHeader2 = `${userNameHeader1 ? userNameHeader1[0] : ""} ${
    userNameHeader1 ? userNameHeader1[1] : ""
  }`;

  return (
    <>
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
              <h1>
                {userNameHeader1 && userNameHeader1.length > 0 ? userNameHeader1[0][0] : ""}
                {userNameHeader1 && userNameHeader1.length > 1 ? (userNameHeader1[1] ? ` ${userNameHeader1[1][0]}` : "") : ""}
              </h1>
            </span>

            <div>
              <h3>{userNameHeader2 && userNameHeader2.replace("undefined", "").trim()}</h3>
              <p className="tagInfo">{user?.type}</p>
            </div>

            <p className="paragraph">{user?.description}</p>
          </section>
        </ContainerDivBlue>
        <ContainerAdverts>
          <div className="adsArea">
            <h2 className="advertiserName">Anúncios</h2>
            <section className="sectionCards">
              {ad?.map((ads) => (
                <div className="card" key={ads.id}>
                  <figure>
                    {ads.images?.map((img, i) =>
                      i === 0 ? (
                        <img key={i} src={img.image} alt="Imagem do veículo" />
                      ) : (
                        <img key={i} src="" alt="Imagem do veículo" />
                      )
                    )}
                  </figure>
                  <div className="infoCard">
                    <h3>
                      {ads.brand} - {ads.model}
                    </h3>
                    <p className="description">{ads.description}</p>
                    <div className="divNameUserCard">
                      <span>
                        <h2 className="initials">
                          {userNameHeader1 && userNameHeader1.length > 0 ? userNameHeader1[0][0] : ""}
                          {userNameHeader1 && userNameHeader1.length > 1 ? (userNameHeader1[1] ? ` ${userNameHeader1[1][0]}` : "") : ""}
                        </h2>
                      </span>
                      <h3>{userNameHeader2 && userNameHeader2.replace("undefined", "").trim()}</h3>
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
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </ContainerAdverts>
        <FooterBase />
      </BackgroundBody>
    </>
  );
};

export default AdsSpecificPage;
