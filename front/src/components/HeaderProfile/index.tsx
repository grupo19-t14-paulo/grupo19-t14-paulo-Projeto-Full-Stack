import Logo from "../../assets/LogoMotorsShop.png";
import { useContext, useState } from "react";
import MenuImg from "../../assets/Menu.png";
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
    MenuImage,} from "../Header/style";
import { ConteinerButtonHeaderProfile, ButtonInitials, ButtonName } from "./style";
import { useNavigate } from "react-router-dom";
import { ContextLogin } from "../../contexts/LoginContext/LoginContex";
import { ModalMenuProfile } from "../ModalMenuProfile";
import { IHeaderProps } from "../../interfaces/HeaderInterface";

const HeaderProfile = (props: IHeaderProps) => {

    const { user } = useContext(ContextLogin);
    const navigate = useNavigate();
    const [modalOpenMenuProfile, setModalOpenMenuProfile] = useState(false);

    const token = window.localStorage.getItem("@token")

    const [showButtons, setShowButtons] = useState(false);
    
    const toggleButtons = () => {
        setShowButtons(!showButtons);
    };

    const userNameHeader1 = user?.name.split(" ");

    const userNameHeader2 = `${userNameHeader1 ? userNameHeader1[0] : ""} ${
      userNameHeader1 ? userNameHeader1[1] : ""
    }`;

    const Menu = () => {
        if(!modalOpenMenuProfile){
            setModalOpenMenuProfile(true);
        }else {
            setModalOpenMenuProfile(false);
        }
    };

    return (
        <ConteinerHeader>
            <ModalMenuProfile modalOpenMenuProfile={modalOpenMenuProfile} setModalOpenMenuProfile={setModalOpenMenuProfile}/>
            <div onClick={() => navigate("/")}>
                <img src={Logo} alt="Logo" />
            </div>
            {
                token ? (
                    <ConteinerButtonHeaderProfile >
                        <ButtonInitials onClick={() => Menu()}>
                            {userNameHeader1 ? userNameHeader1[0][0] : ""}
                            {userNameHeader1 ? userNameHeader1[1][0] : ""}
                        </ButtonInitials>
                        <ButtonName onClick={() => Menu()}>{userNameHeader2}</ButtonName>
                    </ConteinerButtonHeaderProfile>
                ): 
                (   
                    <div>
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
                        </div>
                )
            }

        </ConteinerHeader>
    );
};

export { HeaderProfile };
