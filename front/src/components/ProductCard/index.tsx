import { useNavigate } from "react-router-dom";
import { StyledButton } from "../Buttons/style";
import { StyledProductCard } from "./style";
import { useContext } from "react";
import { ContextRegister } from "../../contexts/RegisterContext/RegisterContext";

interface IProductProps {
    id: string;
    img: string;
    title: string;
    description: string;
    advertiser: string;
    km: string;
    year: string;
    price: number;
    active?: boolean;
    fipePrice: number;
    showActive?: boolean ;
}

const ProductCard = ({
    img,
    title,
    description,
    advertiser,
    id,
    km,
    year,
    price,
    active,
    fipePrice,
    showActive = true
}: IProductProps) => {
    const navigate = useNavigate();
    const { getUserColor, createInitials } = useContext(ContextRegister)

    const genericErrorImg = "https://cdn-icons-png.flaticon.com/512/4380/4380788.png"

    const findPercentage = (price: number, fipePrice: number): number => {
        const value = ((fipePrice - price) / price) * 100;
        return Number(value.toFixed(2));
    };

    const advertId = id;

    return (
        <StyledProductCard onClick={() => navigate(`/product/${advertId}`)}>
            <div className="product-img-wrapper">
                {showActive && (
                active ? (
                    <StyledButton
                        buttonStyle={
                            active ? "brand1-medium" : "negative-medium"
                        }
                    >
                        {"Ativo"}
                    </StyledButton>
                ) : (
                    <StyledButton buttonStyle={"negative-medium"}>
                        {"Inativo"}
                    </StyledButton>
                )
                )}

                {findPercentage(price, fipePrice) > 5 ? (
                    <span>{"$"}</span>
                ) : null}

                <img src={img || genericErrorImg } alt={title} />
            </div>
            <div>
                <h3>{title}</h3>
                <span className="description">{description}</span>
                <div className="advertiser-info">
                    <span style={{ background: getUserColor( advertiser)}}>{createInitials(advertiser)}</span>
                    <span>{advertiser}</span>
                </div>
                <div>
                    <div>
                        <span>{`${km} KM`}</span>
                        <span>{year}</span>
                    </div>
                    <span>
                        {price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        })}
                    </span>
                </div>
            </div>
        </StyledProductCard>
    );
};

export default ProductCard;
