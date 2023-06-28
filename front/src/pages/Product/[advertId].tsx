import {
  Container,
  MediaContainer,
  StuledDescriptionField,
  StyledAdvertCard,
  StyledAdvertContainer,
  StyledAside,
  StyledComment,
  StyledCommentSection,
  StyledGaleryCard,
  StyledMainImage,
  StyledSellerCardAdvert,
  StyledSpaceContainer,
  StyledUserCommentField,
} from "./styles";
import { userData, commentsData } from "./data";
import FooterBase from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { HeaderProfile } from "../../components/HeaderProfile";
import Button from "../../components/Buttons";

interface IImage {
  image: string;
}

interface IUserData {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthDate: string;
  description: string | null;
  type: string;
}

interface IAdvertData {
  id: string;
  brand: string;
  model: string;
  year: string;
  fuel: string;
  mileage: string;
  color: string;
  value: string;
  price: string;
  description: string | null;
  images: IImage[];
  active: boolean;
  user: IUserData;
}

interface IComments {
  id: string;
  comment: string;
  createdAt: string;
  user_id: string;
  advert_id: string;
}

const DinamicProductPage = () => {
  const navigate = useNavigate();

  const [advert, setAdvert] = useState<IAdvertData>({} as IAdvertData);

  const [loading, setLoading] = useState<boolean>(true);

  const user: IUserData = userData;

  const comments: IComments[] = commentsData;

  const { advertId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await api.get(`/adverts/${advertId}`);

      setAdvert(response.data);

      setLoading(false);
    })();
  }, []);

  const createInitials = (userName: string) => {
    const trimnedName = userName.trim();

    let initials = "";

    let splitedName = [];

    if (trimnedName.indexOf(" ") === -1) {
      initials = initials + trimnedName.charAt(0);
    } else {
      splitedName = trimnedName.split(" ");
      initials =
        splitedName[0].charAt(0) +
        splitedName[splitedName.length - 1].charAt(0);
    }

    return initials.toUpperCase();
  };

  const userId = advert.user?.id;

  return (
    <>
      <HeaderProfile
        button1="Fazer Login"
        button2="Cadastrar"
        page1="/login"
        page2="/register"
      />
      <Container>
        <StyledSpaceContainer></StyledSpaceContainer>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <StyledAdvertContainer>
            <div>
              <StyledMainImage>
                <img src={advert.images[0].image} alt={advert.model} />
              </StyledMainImage>
              <StyledAdvertCard>
                <h2>{`${advert.brand} - ${advert.model}`.toUpperCase()}</h2>
                <div>
                  <div>
                    <div>
                      <p>{advert.year}</p>
                    </div>
                    <div>
                      <p>{advert.mileage} KM</p>
                    </div>
                  </div>
                  <h3>
                    {Number(advert.price).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </h3>
                </div>
                <Button buttonStyle="brand1-medium">Comprar</Button>
              </StyledAdvertCard>
              <StuledDescriptionField>
                <h2>Descrição</h2>
                <p>{advert.description}</p>
              </StuledDescriptionField>
            </div>
            <StyledAside>
              <StyledGaleryCard>
                <h2>Fotos</h2>
                <ul>
                  {advert.images.map((img) => {
                    return (
                      <li>
                        <figure>
                          <img src={img.image} alt={advert.model} />
                        </figure>
                      </li>
                    );
                  })}
                </ul>
              </StyledGaleryCard>
              <StyledSellerCardAdvert>
                <div>
                  <div>
                    <h1>{createInitials(advert.user.name)}</h1>
                  </div>
                  <h2>{advert.user.name}</h2>
                  <p>{advert.user.description}</p>
                  <Button
                    buttonStyle="grey-1-big"
                    onClick={() => navigate(`/adsSpecific/${userId}`)}
                  >
                    Ver todos os anúncios
                  </Button>
                </div>
              </StyledSellerCardAdvert>
            </StyledAside>
          </StyledAdvertContainer>
        )}
        <MediaContainer>
          <StyledCommentSection>
            <h2>Comentários</h2>
            <ul>
              <StyledComment>
                <div id="userDataComment">
                  <div>
                    <h3>{createInitials("Júlia Lima")}</h3>
                  </div>
                  <h3>Júlia Lima</h3>
                  <div id="elipseComment"> </div>
                  <p>há 3 dias</p>
                </div>
                <p id="commentParagraph">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                  culpa corrupti rerum voluptate accusamus, dolor distinctio
                  suscipit labore aliquid ipsa, dolorem sequi adipisci,
                  doloremque eveniet error natus minus obcaecati iure?
                </p>
              </StyledComment>
              <StyledComment>
                <div id="userDataComment">
                  <div>
                    <h3>{createInitials("Marcos Antônio")}</h3>
                  </div>
                  <h3>Marcos Antônio</h3>
                  <div id="elipseComment"> </div>
                  <p>há 3 dias</p>
                </div>
                <p id="commentParagraph">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                  culpa corrupti rerum voluptate accusamus, dolor distinctio
                  suscipit labore aliquid ipsa, dolorem sequi adipisci,
                  doloremque eveniet error natus minus obcaecati iure?
                </p>
              </StyledComment>
              <StyledComment>
                <div id="userDataComment">
                  <div>
                    <h3>{createInitials("Camila Silva")}</h3>
                  </div>
                  <h3>Camila Silva</h3>
                  <div id="elipseComment"> </div>
                  <p>há 3 dias</p>
                </div>
                <p id="commentParagraph">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                  culpa corrupti rerum voluptate accusamus, dolor distinctio
                  suscipit labore aliquid ipsa, dolorem sequi adipisci,
                  doloremque eveniet error natus minus obcaecati iure?
                </p>
              </StyledComment>
            </ul>
          </StyledCommentSection>
          <StyledUserCommentField>
            <div id="userCommentFieldUserData">
              <div>
                <h3>{createInitials(user.name)}</h3>
              </div>
              <h3>{user.name}</h3>
            </div>
            <div id="userCommentField">
              <textarea
                name="commentsField"
                id=""
                placeholder="Carro muuito confortável, foi uma ótima experiência de compra..."
              ></textarea>
              <button id="postCommentButton">Comentar</button>
            </div>
            <div id="autoCommentButtons">
              <button id="likeCommentButton">Gostei muito!</button>
              <button id="incredibleCommentButton">Incrível</button>
              <button id="recommendCommentButton">
                Recomendarei para meus amigos!
              </button>
            </div>
          </StyledUserCommentField>
          <StyledSpaceContainer></StyledSpaceContainer>
        </MediaContainer>
      </Container>
      <FooterBase />
    </>
  );
};

export { DinamicProductPage };
