import { useNavigate } from "react-router-dom";
import Logo from "../../assets/LogoMotorsShop.png";
import Car from "../../assets/Photo.png";
import MenuImg from "../../assets/Menu.png";
import { Header,
    ButtonNoMargin,
    ConteinerButtonHeader,
    ButtonRegister,
    ContainerImgCar,
    Containerbackground,
    ContainerTitile,
    Container,
    ButtonsContainer,
    Button,
    CloseButton,
    MenuImage } from "./style";
import { useState } from "react";

const HomePage = () => {
    const navigate = useNavigate()

    const PageLogin = () =>{
        navigate("/login");
    };

    const PageRegister = () => {
        navigate("/register");
    };

    const [showButtons, setShowButtons] = useState(false);

    const toggleButtons = () => {
      setShowButtons(!showButtons);
    };
  

    return (
        <>
            <Header>
                
                <div>
                    <img src={Logo} alt="Logo"/>
                </div>
                <Container>
                    {showButtons ? (
                    <ButtonsContainer>
                    <Button onClick={() => PageLogin()}>Login</Button>
                    <Button onClick={() => { PageRegister()}}>Cadastrar</Button>
                    <CloseButton onClick={toggleButtons}>X</CloseButton>
                    </ButtonsContainer>
                    ) : (
                        <MenuImage onClick={toggleButtons} src={MenuImg} alt="Menu" />
                    )}
                </Container>
                <ConteinerButtonHeader>
                    <ButtonNoMargin onClick={() => PageLogin()}>Fazer Login</ButtonNoMargin>
                    <ButtonRegister onClick={() => { PageRegister()}}>Cadastrar</ButtonRegister>
                </ConteinerButtonHeader>
            </Header>

            <ContainerImgCar>
                <img src={Car} alt="Car" />
            </ContainerImgCar>
            <Containerbackground>
            </Containerbackground>
            <ContainerTitile>
                <h1>
                    Motors Shop 
                </h1>
                <h2>
                    A melhor plataforma de anúncios de carros do país
                </h2>
            </ContainerTitile>
        </>
        
    );
};

export { HomePage };
