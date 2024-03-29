import { useContext, useEffect } from "react";
import FooterBase from "../../components/Footer";
import { BackgroundBody, ContainerAdverts, ContainerDivBlue } from "./style";
import { AnnouncementContext } from "../../contexts/AnnouncementContext/AnnouncementContext";
import { api } from "../../services/api";
import { HeaderProfile } from "../../components/HeaderProfile";
import { useNavigate, useParams } from "react-router-dom";
import { IAdvertiser } from "../../interfaces/AdvertsInterfaces";
import Loading from "../../components/Loading";
/*eslint-disable react-hooks/exhaustive-deps*/

const AdsSpecificPage = () => {
  const {
    ad,
    setAd,
    userAdvertiser,
    setUserAdvertiser,
    loadingAdivertiser,
    setloadingAdivertiser,
  } = useContext(AnnouncementContext);

  const navegate = useNavigate();

  const { userId } = useParams();

  useEffect(() => {
    (async () => {
      const resAds = await api.get<IAdvertiser[]>(`/adverts/seller/${userId}`);

      const user = resAds.data[0].user;

      setUserAdvertiser(user);
      setAd(resAds.data);
      setloadingAdivertiser(true);
    })();
  }, [ad]);

  const userNameHeader1 = userAdvertiser?.name.split(" ");

  const userNameHeader2 = `${userNameHeader1 ? userNameHeader1[0] : ""} ${
    userNameHeader1 ? userNameHeader1[1] : ""
  }`;

  const findPercentage = (price: number, fipePrice: number): number => {
    const value = ((fipePrice - price) / price) * 100;
    return Number(value.toFixed(2));
  };

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
              <p className="tagInfo">{userAdvertiser?.type}</p>
            </div>

            <p className="paragraph">{userAdvertiser?.description}</p>
          </section>
        </ContainerDivBlue>
        {!loadingAdivertiser && <Loading />}
        <ContainerAdverts>
          <div className="adsArea">
            <h2 className="advertiserName">Anúncios</h2>

            <section className="sectionCards">
              {ad?.map((ads) =>
                ads.active ? (
                  <div
                    className="card"
                    key={ads.id}
                    onClick={() => navegate(`/product/${ads.id}`)}
                  >
                    {findPercentage(Number(ads.price), Number(ads.value)) >
                    5 ? (
                      <span className="dollarSign">{"$"}</span>
                    ) : null}
                    <figure>
                      {ads.images?.map((img, i) =>
                        i === 0 ? (
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
                      </div>
                    </div>
                  </div>
                ) : null
              )}
            </section>
          </div>
        </ContainerAdverts>
        <FooterBase />
      </BackgroundBody>
    </>
  );
};

export default AdsSpecificPage;
