import { StyledButton } from "../Buttons/style";
import { StyledProductCard } from "./style";

interface IProductProps {
  img: string;
  title: string;
  description: string;
  advertiser: string;
  km: string;
  year: string;
  price: number;
  active?: boolean;
  fipePrice: number;
}

const ProductCard = ({
  img,
  title,
  description,
  advertiser,
  km,
  year,
  price,
  active,
  fipePrice,
}: IProductProps) => {
  const findPercentage = (price: number, fipePrice: number): number => {
    const value = ((fipePrice - price) / price) * 100;
    return Number(value.toFixed(2));
  };

  return (
    <StyledProductCard>
      <div>
        {active ? (
          <StyledButton
            buttonStyle={active ? "brand1-medium" : "negative-medium"}
          >
            {"Ativo"}
          </StyledButton>
        ) : (
          <StyledButton buttonStyle={"negative-medium"}>
            {"Inativo"}
          </StyledButton>
        )}

        {findPercentage(price, fipePrice) > 5 ? <span>{"$"}</span> : null}

        <img src={img} alt={title} />
      </div>
      <div>
        <h3>{title}</h3>
        <span>{description}</span>
        <div>
          <span>{advertiser[0]}</span>
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
