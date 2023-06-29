import StyledFooter from "./style";
import Logo from "../../images/motorsShopLogoWhite.svg";

const FooterBase = () => {
  const ScrollToTopButton = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  return (
    <StyledFooter>
      <figure>
        <img src={Logo} alt="Logo" />
      </figure>
      <p>© 2022 - Todos os direitos reservador.</p>
      <button onClick={ScrollToTopButton}>^</button>
    </StyledFooter>
  );
};

export default FooterBase;
