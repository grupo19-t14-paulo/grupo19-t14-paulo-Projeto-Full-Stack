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
import FooterBase from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { HeaderProfile } from "../../components/HeaderProfile";
import Button from "../../components/Buttons";
import { CommentsForm } from "../../components/CommentForm";
import { ContextComment } from "../../contexts/CommentContex/CommentContex";
import moment from "moment";
import { ContextLogin } from "../../contexts/LoginContext/LoginContex";
import MenuImg from "../../assets/Menu.png";
import { ModalMenuComment } from "../../components/ModalMenuComment";
import { ProductImagesModal } from "../../components/ModalBase";
import { ContextRegister } from "../../contexts/RegisterContext/RegisterContext";

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

const DinamicProductPage = () => {
  const navigate = useNavigate();

  const { listComments, listCommentsProduct, steCommentId, retiveComment } = useContext(ContextComment);
  const { user } = useContext(ContextLogin);
  const { getUserColor, createInitials } = useContext(ContextRegister);

  const [advert, setAdvert] = useState<IAdvertData>({} as IAdvertData);
  const [loading, setLoading] = useState<boolean>(true);
  const [modalOpenMenuComment, setModalOpenMenuComment] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [showImagesModal, setShowImagesModal] = useState<boolean>(false);
  const [menuModalStyle, setMenuModalStyle] = useState({ display: "block" });
  const toggleModal = () => setShowImagesModal(!showImagesModal);

  const { advertId } = useParams();

  useEffect(() => {
    if (advertId) {
      (async () => {
        const response = await api.get(`/adverts/${advertId}`);

        setAdvert(response.data);
        listCommentsProduct(advertId);

        setLoading(false);
      })();
    }
  }, []);

  const userId = advert.user?.id;

  const formatElapsedTime = (createdAt: string) => {
    const now = moment();
    const commentDate = moment(createdAt);

    const duration = moment.duration(now.diff(commentDate));

    const years = duration.years();
    const months = duration.months();
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();

    if (years > 0) {
      return `há ${years} ano${years > 1 ? "s" : ""}`;
    } else if (months > 0) {
      return `há ${months} mês${months > 1 ? "es" : ""}`;
    } else if (days > 0) {
      0;
      return `há ${days} dia${days > 1 ? "s" : ""}`;
    } else if (hours > 0) {
      return `há ${hours} hora${hours > 1 ? "s" : ""}`;
    } else if (minutes > 0) {
      return `há ${minutes} minuto${minutes > 1 ? "s" : ""}`;
    } else {
      return "Agora";
    }
  };

  const handleMenuClick = (cardId: string) => {
    if (modalOpenMenuComment && selectedCard === cardId) {
      setModalOpenMenuComment(false);
    } else {
      setSelectedCard(cardId);
      setModalOpenMenuComment(true);
    }
  };

  const toWhatsapp = (phone: string, text: string) => {
    const checkPrefix = phone.slice(0, 2);
    if (checkPrefix === "55") {
      return (window.location.href = `https://api.whatsapp.com/send?phone=${phone}&text=Olá, estou interessado em obter mais informações sobre o anúncio do ${text}`);
    }

    return (window.location.href = `https://api.whatsapp.com/send?phone=55${phone}&text=Olá, estou interessado em obter mais informações sobre o anúncio do ${text}`);
  };

  return (
    <>
      {showImagesModal ? (
        <ProductImagesModal toggleModal={toggleModal}>
          <div>
            <li>
              <figure>
                <img src={advert.images[0].image} alt={advert.model} />
              </figure>
            </li>
          </div>
        </ProductImagesModal>
      ) : (
        ""
      )}
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
                <h2>{`${advert.brand} - ${advert.model}`}</h2>
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
                <Button
                  buttonStyle="brand1-medium"
                  onClick={() => toWhatsapp(advert.user.phone!, advert.model)}
                  disable={!user}
                >
                  Comprar
                </Button>
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
                      <li onClick={toggleModal}>
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
              {listComments !== undefined && listComments?.length <= 0 && (
                <h3>Nenhum comentário disponível.</h3>
              )}
              {listComments !== undefined &&
                listComments.map((comment) => (
                  <StyledComment key={comment.id}>
                    <div id="userDataComment">
                      <div
                        style={{
                          background: getUserColor(comment.user.name),
                        }}
                      >
                        <h3>{createInitials(`${comment.user.name}`)}</h3>
                      </div>
                      <h3>{comment.user.name}</h3>
                      <div id="elipseComment"> </div>
                      <p>{formatElapsedTime(comment.created_at)}</p>
                    </div>
                    <p id="commentParagraph">{comment.comment}</p>
                    {user?.name === comment.user.name && (
                      <img
                        onClick={() => 
                          { handleMenuClick(comment.id);
                            steCommentId(comment.id);
                            retiveComment(comment.id);
                            setMenuModalStyle({ display: "block" });
                          }
                        }
                        src={MenuImg}
                        alt="Menu"
                      />
                    )}
                    {selectedCard === comment.id && (
                      <ModalMenuComment
                        modalOpenMenuComment={true}
                        setModalOpenMenuComment={setModalOpenMenuComment}
                        setSelectedCard={setSelectedCard}
                        selectedCard={selectedCard}
                        menuModalStyle ={menuModalStyle}
                        setMenuModalStyle={setMenuModalStyle}
                      />
                    )}
                  </StyledComment>
                ))}
            </ul>
          </StyledCommentSection>
          <StyledUserCommentField>
            {user && (
              <div id="userCommentFieldUserData">
                <div
                  style={{
                    background: getUserColor(user.name),
                  }}
                >
                  <h3>{createInitials(`${user?.name}`)}</h3>
                </div>
                <h3>{user?.name}</h3>
              </div>
            )}
            <div id="userCommentField">
              <CommentsForm advertsId={advert.id} />
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
