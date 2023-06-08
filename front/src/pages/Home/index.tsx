import { useNavigate } from "react-router-dom";
import Logo from "../../assets/LogoMotorsShop.png";
import Car from "../../assets/Photo.png";
import MenuImg from "../../assets/Menu.png";
import {
    Header,
    ButtonNoMargin,
    ConteinerButtonHeader,
    ButtonRegister,
    ContainerImgCar,
    Containerbackground,
    ContainerTitle,
    Container,
    ButtonsContainer,
    Button,
    CloseButton,
    MenuImage,
    ProductFeed,
    HomeMain,
    ProductFilters,
    StyledHome,
    FilterSession,
    Filter,
    FilterName,
    ProductPage,
    PageSelector,
    FilterInput,
    FilterInputWrapper,
    Footer,
    AuthoralRights,
    BackToTopBtn,
    ClearFiltersBtn,
    ShowFiltersBtn
} from "./style";
import { useState } from "react";

import { mockCarros, mockFilters } from "./mock";
import ProductCard from "../../components/ProductCard";

const HomePage = () => {
    const navigate = useNavigate()

    const PageLogin = () => {
        navigate("/login");
    };

    const PageRegister = () => {
        navigate("/register");
    };

    const [showButtons, setShowButtons] = useState(false);
    const [showFilters, setShowFilters] = useState(false)

    const toggleButtons = () => {
        setShowButtons(!showButtons);
    };
    const toggleShowFilterBtns = () => {
        setShowFilters(!showFilters)
    }

    const ScrollToTopButton = () => {
        window.scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    return (
        <StyledHome>
            <Header>

                <div>
                    <img src={Logo} alt="Logo" />
                </div>
                <Container>
                    {showButtons ? (
                        <ButtonsContainer>
                            <Button onClick={() => PageLogin()}>Login</Button>
                            <Button onClick={() => { PageRegister() }}>Cadastrar</Button>
                            <CloseButton onClick={toggleButtons}>X</CloseButton>
                        </ButtonsContainer>
                    ) : (
                        <MenuImage onClick={toggleButtons} src={MenuImg} alt="Menu" />
                    )}
                </Container>
                <ConteinerButtonHeader>
                    <ButtonNoMargin onClick={() => PageLogin()}>Fazer Login</ButtonNoMargin>
                    <ButtonRegister onClick={() => { PageRegister() }}>Cadastrar</ButtonRegister>
                </ConteinerButtonHeader>
            </Header>

            <ContainerImgCar>
                <img src={Car} alt="Car" />
            </ContainerImgCar>
            <Containerbackground>
            </Containerbackground>
            <ContainerTitle>
                <h1>Motors Shop</h1>
                <h2>A melhor plataforma de anúncios de carros do país</h2>
            </ContainerTitle>
            <HomeMain>
                <ProductFilters>
                    <FilterSession>
                        <FilterName>Marca</FilterName>
                        {mockFilters.marca.map((filter) => (
                            <Filter>{filter}</Filter>
                        ))}
                    </FilterSession>
                    <FilterSession>
                        <FilterName>Modelo</FilterName>
                        {mockFilters.modelo.map((filter) => (
                            <Filter>{filter}</Filter>
                        ))}
                    </FilterSession>
                    <FilterSession>
                        <FilterName>Cor</FilterName>
                        {mockFilters.cor.map((filter) => (
                            <Filter>{filter}</Filter>
                        ))}
                    </FilterSession>
                    <FilterSession>
                        <FilterName>Ano</FilterName>
                        {mockFilters.ano.map((filter) => (
                            <Filter>{filter}</Filter>
                        ))}
                    </FilterSession>
                    <FilterSession>
                        <FilterName>Combustível</FilterName>
                        {mockFilters.combustivel.map((filter) => (
                            <Filter>{filter}</Filter>
                        ))}
                    </FilterSession>
                    <FilterSession>
                        <FilterName>Km</FilterName>
                        <FilterInputWrapper>
                            <FilterInput placeholder="Mínima" />
                            <FilterInput placeholder="Máxima" />
                        </FilterInputWrapper>
                    </FilterSession>
                    <FilterSession>
                        <FilterName>Preço</FilterName>
                        <FilterInputWrapper>
                            <FilterInput placeholder="Mínimo" />
                            <FilterInput placeholder="Máximo" />
                        </FilterInputWrapper>
                    </FilterSession>
                    <ClearFiltersBtn>Limpar Filtros</ClearFiltersBtn>
                </ProductFilters>
                <ProductPage>
                    <ProductFeed>
                        {mockCarros.map((car) => (
                            <ProductCard
                                key={car.id}
                                title={car.title}
                                advertiser={car.advertiser}
                                description={car.description}
                                img={car.img}
                                km={car.km}
                                fipePrice={car.fipePrice}
                                price={car.price}
                                year={car.year}
                                active={car.active}
                            />
                        ))}
                    </ProductFeed>
                    <ShowFiltersBtn onClick={toggleShowFilterBtns}>Mostrar Filtros</ShowFiltersBtn>
                    <PageSelector>Seguinte {">"} </PageSelector>
                </ProductPage>
            </HomeMain>
            <Footer>
                <div><img src={Logo} alt="Logo" /></div>
                <AuthoralRights>© 2022 -  Todos os direitos reservados.</AuthoralRights>
                <BackToTopBtn onClick={ScrollToTopButton}>Início</BackToTopBtn>
            </Footer>
        </StyledHome>

    );
};

export { HomePage };
