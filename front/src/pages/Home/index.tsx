import Car from "../../assets/Photo.png";
import sampleCar from "../../images/carroExample.png";
import { Header } from "../../components/Header";
import {
  ContainerImgCar,
  Containerbackground,
  ContainerTitle,
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
  ClearFiltersBtn,
  ShowFiltersBtn,
  ProductFiltersMobile,
  CloseFiltersHeader,
  FilterInputWrapperMobile,
} from "./style";
import { useState } from "react";

import { mockCarros, mockFilters } from "./mock";
import ProductCard from "../../components/ProductCard";
import FooterBase from "../../components/Footer";

const HomePage = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleShowFilterBtns = () => {
    setShowFilters(!showFilters);
  };

  return (
    <StyledHome>
      <Header
        button1="Fazer Login"
        button2="Cadastrar"
        page1="/login"
        page2="/register"
      />
      <ContainerImgCar>
        <img src={Car} alt="Car" />
      </ContainerImgCar>
      <Containerbackground></Containerbackground>
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
        {showFilters && (
          <ProductFiltersMobile>
            <CloseFiltersHeader>
              <h3>Filtros</h3>
              <button onClick={toggleShowFilterBtns}>X</button>
            </CloseFiltersHeader>
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
              <FilterInputWrapperMobile>
                <FilterInput placeholder="Mínima" />
                <FilterInput placeholder="Máxima" />
              </FilterInputWrapperMobile>
            </FilterSession>
            <FilterSession>
              <FilterName>Preço</FilterName>
              <FilterInputWrapperMobile>
                <FilterInput placeholder="Mínimo" />
                <FilterInput placeholder="Máximo" />
              </FilterInputWrapperMobile>
            </FilterSession>
            <ClearFiltersBtn>Limpar Filtros</ClearFiltersBtn>
          </ProductFiltersMobile>
        )}
        <ProductPage>
          <ProductFeed>
            {mockCarros.map((car) => (
              <ProductCard
                key={car.id}
                title={car.title}
                advertiser={car.advertiser}
                description={car.description}
                img={sampleCar}
                km={car.km}
                fipePrice={car.fipePrice}
                price={car.price}
                year={car.year}
                active={car.active}
              />
            ))}
          </ProductFeed>
          <ShowFiltersBtn onClick={toggleShowFilterBtns}>
            Mostrar Filtros
          </ShowFiltersBtn>
          <PageSelector>Seguinte {">"}</PageSelector>
        </ProductPage>
      </HomeMain>
      <FooterBase />
    </StyledHome>
  );
};

export { HomePage };
