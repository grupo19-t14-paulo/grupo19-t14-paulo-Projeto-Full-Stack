import Logo from "../../assets/LogoMotorsShop.png";
import MenuImg from "../../assets/Menu.png";
import { useState } from "react";
import {
    ConteinerHeader,
    ConteinerButtonHeader,
    LinkNoMargin,
    LinkRegister,
    Container,
    ButtonsContainer,
    StyledLink,
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
                        <StyledLink to={props.page1}>
                            {props.button1}
                        </StyledLink>
                        <StyledLink to={props.page2}>
                            {props.button2}
                        </StyledLink>
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
            <ConteinerButtonHeader>
                <LinkNoMargin to={props.page1}>{props.button1}</LinkNoMargin>
                <LinkRegister to={props.page2}>{props.button2}</LinkRegister>
            </ConteinerButtonHeader>
        </ConteinerHeader>
    );
};

export { Header };
