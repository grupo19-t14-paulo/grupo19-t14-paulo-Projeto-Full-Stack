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
import { useEffect, useState } from "react";

import { IProductProps, mockCarros, mockFilters } from "./mock";
import ProductCard from "../../components/ProductCard";
import FooterBase from "../../components/Footer";
import { IAnnouncementResponse } from "./types";
import { api } from "../../services/api";

const HomePage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [queryString, setQueryString] = useState(``)
  const [filters, setFilters] = useState({})
  const [filteredProducts, setFilteredProducts] = useState([] as IAnnouncementResponse[]);

  useEffect(() => {
    requestProducts(queryString)
  }, [queryString])

  const requestSetting = (field: string, filter: string) => {
    const updateParams = { ...filters, [field]: filter }
    if (filters[field] === filter) { delete updateParams[field] }
    setFilters(updateParams)
    setQueryString(generateQueryString(updateParams))
  }


  const requestProducts = async (queryString: string) => {
    const response = await api.get(`/adverts?${queryString}`)
    setFilteredProducts(response.data)
  }
  const toggleShowFilterBtns = () => { setShowFilters(!showFilters) };

  const generateQueryString = (filters: any) => {
    const queryParams = new URLSearchParams();
    for (const key in filters) { queryParams.set(key, filters[key]) }
    return queryParams.toString();
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
      <Containerbackground />
      <ContainerTitle>
        <h1>Motors Shop</h1>
        <h2>A melhor plataforma de anúncios de carros do país</h2>
      </ContainerTitle>
      <HomeMain>
        <ProductFilters>
          <FilterSession>
            <FilterName>Marca</FilterName>
            {mockFilters.brand.map((filter) => (
              <Filter key={filter} onClick={() => requestSetting("brand", filter)}>{filter}</Filter>
            ))}
          </FilterSession>
          <FilterSession>
            <FilterName>Modelo</FilterName>
            {mockFilters.model.map((filter) => (
              <Filter key={filter} onClick={() => requestSetting("model", filter)}>{filter}</Filter>
            ))}
          </FilterSession>
          <FilterSession>
            <FilterName>Cor</FilterName>
            {mockFilters.color.map((filter) => (
              <Filter key={filter} onClick={() => requestSetting("color", filter)}>{filter}</Filter>
            ))}
          </FilterSession>
          <FilterSession>
            <FilterName>Ano</FilterName>
            {mockFilters.year.map((filter) => (
              <Filter key={filter} onClick={() => requestSetting("year", filter)}>{filter}</Filter>
            ))}
          </FilterSession>
          <FilterSession>
            <FilterName>Combustível</FilterName>
            {mockFilters.fuel.map((filter) => (
              <Filter key={filter} onClick={() => requestSetting("fuel", filter)}>{filter}</Filter>
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
              {mockFilters.brand.map((filter) => (
                <Filter key={filter} >{filter}</Filter>
              ))}
            </FilterSession>
            <FilterSession>
              <FilterName>Modelo</FilterName>
              {mockFilters.model.map((filter) => (
                <Filter key={filter}>{filter}</Filter>
              ))}
            </FilterSession>
            <FilterSession>
              <FilterName>Cor</FilterName>
              {mockFilters.color.map((filter) => (
                <Filter key={filter}>{filter}</Filter>
              ))}
            </FilterSession>
            <FilterSession>
              <FilterName>Ano</FilterName>
              {mockFilters.year.map((filter) => (
                <Filter key={filter}>{filter}</Filter>
              ))}
            </FilterSession>
            <FilterSession>
              <FilterName>Combustível</FilterName>
              {mockFilters.fuel.map((filter) => (
                <Filter key={filter}>{filter}</Filter>
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
            {filteredProducts.map(({ id, model, description, images, mileage, value, price, year, active }) => (
              <ProductCard
                key={id}
                title={model}
                advertiser={"vendedor"}
                description={description}
                img={sampleCar}
                km={mileage}
                fipePrice={value}
                price={price}
                year={year}
                active={active}
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
