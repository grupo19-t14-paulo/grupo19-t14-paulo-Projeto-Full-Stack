import { Header } from "../../components/Header";

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
import { advertData, userData, sellerData, commentsData } from "./data";
import FooterBase from "../../components/Footer";
import { useNavigate } from "react-router-dom";

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
    image: string;
    active: boolean;
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

interface IComments {
    id: string;
    comment: string;
    createdAt: string;
    user_id: string;
    advert_id: string;
}

const ProductPage = () => {
    const navigate = useNavigate();

    const advert: IAdvertData = advertData;

    const user: IUserData = userData;

    const seller: IUserData = sellerData;

    const comments: IComments[] = commentsData;

    return (
        <>
            <Header
                button1="Fazer Login"
                button2="Cadastrar"
                page1="/login"
                page2="/register"
            />
            <Container>
                <StyledSpaceContainer></StyledSpaceContainer>
                <StyledAdvertContainer>
                    <div>
                        <StyledMainImage>
                            <img src={advert.image} alt={advert.model} />
                        </StyledMainImage>
                        <StyledAdvertCard>
                            <h2>{advert.model}</h2>
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
                                    {Number(advert.price).toLocaleString(
                                        "pt-br",
                                        {
                                            style: "currency",
                                            currency: "BRL",
                                        }
                                    )}
                                </h3>
                            </div>
                            <button>Comprar</button>
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
                                <li>
                                    <figure>
                                        <img
                                            src={advert.image}
                                            alt={advert.model}
                                        />
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <img
                                            src={advert.image}
                                            alt={advert.model}
                                        />
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <img
                                            src={advert.image}
                                            alt={advert.model}
                                        />
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <img
                                            src={advert.image}
                                            alt={advert.model}
                                        />
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <img
                                            src={advert.image}
                                            alt={advert.model}
                                        />
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <img
                                            src={advert.image}
                                            alt={advert.model}
                                        />
                                    </figure>
                                </li>
                            </ul>
                        </StyledGaleryCard>
                        <StyledSellerCardAdvert>
                            <div>
                                <div>
                                    <h1>SL</h1>
                                </div>
                                <h2>{seller.name}</h2>
                                <p>{seller.description}</p>
                                <button onClick={() => navigate("/advertiser")}>
                                    Ver todos os anúncios
                                </button>
                            </div>
                        </StyledSellerCardAdvert>
                    </StyledAside>
                </StyledAdvertContainer>
                <MediaContainer>
                    <StyledCommentSection>
                        <h2>Comentários</h2>
                        <ul>
                            <StyledComment>
                                <div id="userDataComment">
                                    <div>
                                        <h3>JL</h3>
                                    </div>
                                    <h3>Júlia Lima</h3>
                                    <div id="elipseComment"> </div>
                                    <p>há 3 dias</p>
                                </div>
                                <p id="commentParagraph">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Quod culpa corrupti rerum
                                    voluptate accusamus, dolor distinctio
                                    suscipit labore aliquid ipsa, dolorem sequi
                                    adipisci, doloremque eveniet error natus
                                    minus obcaecati iure?
                                </p>
                            </StyledComment>
                            <StyledComment>
                                <div id="userDataComment">
                                    <div>
                                        <h3>MA</h3>
                                    </div>
                                    <h3>Marcos Antônio</h3>
                                    <div id="elipseComment"> </div>
                                    <p>há 3 dias</p>
                                </div>
                                <p id="commentParagraph">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Quod culpa corrupti rerum
                                    voluptate accusamus, dolor distinctio
                                    suscipit labore aliquid ipsa, dolorem sequi
                                    adipisci, doloremque eveniet error natus
                                    minus obcaecati iure?
                                </p>
                            </StyledComment>
                            <StyledComment>
                                <div id="userDataComment">
                                    <div>
                                        <h3>CS</h3>
                                    </div>
                                    <h3>Camila Silva</h3>
                                    <div id="elipseComment"> </div>
                                    <p>há 3 dias</p>
                                </div>
                                <p id="commentParagraph">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Quod culpa corrupti rerum
                                    voluptate accusamus, dolor distinctio
                                    suscipit labore aliquid ipsa, dolorem sequi
                                    adipisci, doloremque eveniet error natus
                                    minus obcaecati iure?
                                </p>
                            </StyledComment>
                        </ul>
                    </StyledCommentSection>
                    <StyledUserCommentField>
                        <div id="userCommentFieldUserData">
                            <div>
                                <h3>SL</h3>
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
                            <button id="likeCommentButton">
                                Gostei muito!
                            </button>
                            <button id="incredibleCommentButton">
                                Incrível
                            </button>
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

export { ProductPage };
