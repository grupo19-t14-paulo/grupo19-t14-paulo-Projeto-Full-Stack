import Car from "../../assets/Photo.png";
import {} from "../../assets/error-svgrepo-com.svg";
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
} from "./style";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import FooterBase from "../../components/Footer";
import { IAnnouncementResponse, IApiFilters, IFilters } from "./types";
import { api } from "../../services/api";
import { HeaderProfile } from "../../components/HeaderProfile";

const HomePage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [queryString, setQueryString] = useState(``);
  const [filteredProducts, setFilteredProducts] = useState(
    [] as IAnnouncementResponse[]
  );
  const [availableFilters, setAvailableFilters] = useState({} as IApiFilters);
  const [filters, setFilters] = useState({} as IFilters);

  useEffect(() => {
    requestProducts(queryString);
  }, [filters, queryString]);

  const requestSetting = (field: string, filter: string) => {
    const updateParams = { ...filters, [field]: filter };
    if (filters[field] === filter) {
      delete updateParams[field];
    }
    if (updateParams[field] === "") {
      delete updateParams[field];
    }
    setFilters(updateParams);
    setQueryString(generateQueryString(updateParams));
  };

  const requestProducts = async (queryString: string) => {
    const products = await api.get(`/adverts?${queryString}`);
    setFilteredProducts(products.data);
    const possibleFilters = await api.get("/adverts/filters");
    setAvailableFilters(possibleFilters.data);
  };
  const toggleShowFilterBtns = () => {
    setShowFilters(!showFilters);
  };

  const generateQueryString = (filters: IFilters) => {
    const queryParams = new URLSearchParams();
    for (const key in filters) {
      queryParams.set(key, filters[key] || "");
    }
    return queryParams.toString();
  };

  const translation = (key: string) => {
    const words: { [key: string]: string } = {
      brand: "Marca",
      fuel: "Combustível",
      color: "Cor",
      year: "Ano",
      model: "Modelo",
    };
    return words[key];
  };

  return (
    <StyledHome>
      <HeaderProfile
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
          
          {Object.keys(availableFilters).map((key) => (
            <FilterSession key={key}>
              <FilterName>{translation(key)}</FilterName>
              {availableFilters[key].map((filter) => (
                <Filter
                  key={filter}
                  onClick={() => requestSetting(key, filter)}
                  className={filters[key] === filter ? "selected" : ""}
                >
                  {filter}
                </Filter>
              ))}
            </FilterSession>
          ))}

          <FilterSession>
            <FilterName>Km</FilterName>
            <FilterInputWrapper>
              <FilterInput
                placeholder="Mínima"
                onChange={(event) =>
                  requestSetting("minMileage", event.target.value)
                }
              />
              <FilterInput
                placeholder="Máxima"
                onChange={(event) =>
                  requestSetting("maxMileage", event.target.value)
                }
              />
            </FilterInputWrapper>
          </FilterSession>
          <FilterSession>
            <FilterName>Preço</FilterName>
            <FilterInputWrapper>
              <FilterInput
                type="number"
                placeholder="Mínimo"
                onChange={(event) =>
                  requestSetting("minPrice", event.target.value)
                }
              />
              <FilterInput
                placeholder="Máximo"
                onChange={(event) =>
                  requestSetting("maxPrice", event.target.value)
                }
              />
            </FilterInputWrapper>
          </FilterSession>
          <ClearFiltersBtn
            onClick={() => {
              setQueryString(""), setFilters({});
            }}
          >
            Limpar Filtros
          </ClearFiltersBtn>
        </ProductFilters>
        {showFilters && (
          <ProductFiltersMobile>
            <CloseFiltersHeader>
              <h3>Filtros</h3>
              <button onClick={toggleShowFilterBtns}>X</button>
            </CloseFiltersHeader>

            {Object.keys(availableFilters).map((key) => (
              <FilterSession key={key}>
                <FilterName>{translation(key)}</FilterName>
                {availableFilters[key].map((filter) => (
                  <Filter
                    key={filter}
                    onClick={() => requestSetting(key, filter)}
                    className={filters[key] === filter ? "selected" : ""}
                  >
                    {filter}
                  </Filter>
                ))}
              </FilterSession>
            ))}

            <FilterSession>
              <FilterName>Km</FilterName>
              <FilterInputWrapper>
                <FilterInput
                  placeholder="Mínima"
                  onChange={(event) =>
                    requestSetting("minMileage", event.target.value)
                  }
                />
                <FilterInput
                  placeholder="Máxima"
                  onChange={(event) =>
                    requestSetting("maxMileage", event.target.value)
                  }
                />
              </FilterInputWrapper>
            </FilterSession>
            <FilterSession>
              <FilterName>Preço</FilterName>
              <FilterInputWrapper>
                <FilterInput
                  type="number"
                  placeholder="Mínimo"
                  onChange={(event) =>
                    requestSetting("minPrice", event.target.value)
                  }
                />
                <FilterInput
                  placeholder="Máximo"
                  onChange={(event) =>
                    requestSetting("maxPrice", event.target.value)
                  }
                />
              </FilterInputWrapper>
            </FilterSession>
            <ClearFiltersBtn
              onClick={() => {
                setQueryString(""), setFilters({});
              }}
            >
              Limpar Filtros
            </ClearFiltersBtn>
          </ProductFiltersMobile>
        )}
        <ProductPage>
          <ProductFeed>
            {filteredProducts.length > 0 ? (
              filteredProducts.map(
                ({
                  id,
                  model,
                  description,
                  images,
                  mileage,
                  value,
                  price,
                  year,
                  user,
                  active,
                }) =>
                  active && (
                    <ProductCard
                      key={id}
                      id={id}
                      title={model}
                      advertiser={user.name}
                      description={description}
                      img={images[0].image }
                      km={mileage}
                      fipePrice={value}
                      price={price}
                      year={year}
                      active={active}
                      showActive={false}
                    />
                  )
              )
            ) : (
              <h1>{"Não há nenhum veículo com essas características :("}</h1>
            )}
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
