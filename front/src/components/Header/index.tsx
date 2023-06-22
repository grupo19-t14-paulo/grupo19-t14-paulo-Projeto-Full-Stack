import Logo from "../../assets/LogoMotorsShop.png";
import MenuImg from "../../assets/Menu.png";
import { useState } from "react";
import {
    ConteinerHeader,
    ContainerButtonHeader,
    LinkNoMargin,
    LinkRegister,
    Container,
    ButtonsContainer,
    StyledLinkLogin,
    StyledLinkRegister,
    CloseButton,
    MenuImage,
} from "./style";
import { useNavigate } from "react-router-dom";

interface IHeaderProps {
    button1?: string;
    button2?: string;
    page1: string;
    page2: string;
}

const Header = (props: IHeaderProps) => {
    const navigate = useNavigate();
    const [showButtons, setShowButtons] = useState(false);
    
    const toggleButtons = () => {
        setShowButtons(!showButtons);
    };

    return (
        <ConteinerHeader>
            <div onClick={() => navigate("/")}>
                <img src={Logo} alt="Logo" />
            </div>
            <Container>
                {showButtons ? (
                    <ButtonsContainer>
                        <StyledLinkLogin to={props.page1}>
                            {props.button1}
                        </StyledLinkLogin>
                        <StyledLinkRegister to={props.page2}>
                            {props.button2}
                        </StyledLinkRegister>
                        <CloseButton onClick={toggleButtons}>X</CloseButton>
                    </ButtonsContainer>
                ) : (
                    <MenuImage
                        onClick={toggleButtons}
                        src={MenuImg}
                        alt="Menu"
                    />
                )}
            </Container>
            <ContainerButtonHeader>
                <LinkNoMargin to={props.page1}>{props.button1}</LinkNoMargin>
                <LinkRegister to={props.page2}>{props.button2}</LinkRegister>
            </ContainerButtonHeader>
        </ConteinerHeader>
    );
};

export { Header };
