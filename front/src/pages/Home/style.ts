import styled from "styled-components";

const StyledHome = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

const ContainerImgCar = styled.div`
    width: 100%;
    height: 60vh;
    overflow: hidden;

    display: flex;
    justify-content: center;

    background: linear-gradient(
        360deg,
        var(--color--grey-0) 0%,
        var(--color--whiteFixed) 100%
    );

    img {
        height: 100%;
        transform: scale(1);
        transition: transform 0.3 ease;
    }
    @media (max-width: 630px) {
        img {
            transform: scale(0.7);
        }
        background: linear-gradient(
            360deg,
            var(--color--grey-0) 25%,
            var(--color--whiteFixed) 100%
        );
    }
`;

const Containerbackground = styled.div`
    width: 100%;
    height: 60vh;
    position: absolute;
    top: 90px;

    background: linear-gradient(
        360deg,
        var(--color--grey-0) 0%,
        var(--color--grey-0) 100%
    );
    opacity: 0.7;
`;

const ContainerTitle = styled.div`
    width: 100%;
    position: absolute;
    top: 32%;

    h1 {
        text-align: center;
        font-family: var(--font--lexend);
        font-size: 30px;

        color: var(--color--grey-10);

        margin-bottom: 20px;
    }

    h2 {
        text-align: center;
        font-family: var(--font--lexend);
        font-size: 20px;

        color: var(--color--grey-10);
    }

    @media (max-width: 630px) {
        top: 25%;
        h1 {
            font-size: 20px;
        }

        h2 {
            font-size: 12px;
        }
    }
`;

const Container = styled.div`
    width: 200px;
    position: relative;
    @media (max-width: 650px) {
        display: flex;
        justify-content: flex-end;
    }
`;

const ButtonsContainer = styled.div`
    width: 100px;
    height: 60px;
    display: flex;
    flex-direction: column;

    position: absolute;
    bottom: -30px;
    right: 0;

    padding: 10px;
    border: solid 1px var(--color--grey-7);
    border-radius: 10px;

    background-color: var(--color--grey-10);

    @media (min-width: 650px) {
        display: none;
    }
`;

const Button = styled.button`
    font-size: 10px;
    font-family: var(--font--inter);

    background-color: transparent;
    border: none;
    border-bottom: solid 1px var(--color--grey-7);

    padding: 5px;
`;

const CloseButton = styled.button`
    font-size: 9px;
    font-family: var(--font--inter);

    position: absolute;
    top: 5px;
    right: 10px;

    background-color: transparent;
    border: none;
`;

const MenuImage = styled.img`
    width: 40px;
    height: 25px;
    padding-right: 2vw;
    cursor: pointer;

    @media (min-width: 650px) {
        display: none;
    }
`;

const HomeMain = styled.main`
    width: 100vw;
    max-width: 100vw;
    margin-top: 25px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media (max-width: 650px) {
        justify-content: center;
    }
`;

const ProductFilters = styled.section`
    width: 25.2vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 650px) {
        display: none;
    }
`;

const ProductFiltersMobile = styled.section`
    width: 100vw;
    height: fit-content;
    position: absolute;
    top: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color--whiteFixed);
    z-index: 1;
    h2 {
        padding-left: 3vw;
    }
    a {
        padding-left: 4vw;
    }
    @media (min-width: 650px) {
        display: none;
    }
`;

const CloseFiltersHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 100%;
    padding: 5px 7vw;

    h3 {
        font-size: 2em;
    }
    button {
        width: 30px;
        border: none;
        font-size: 2em;
        background-color: var(--color--whiteFixed);
    }
`;

const FilterSession = styled.div`
    width: 100%;
    padding: 15px 1vw 15px 3vw;
    display: flex;
    flex-direction: column;
`;

const FilterName = styled.h2`
    font-size: 2.7em;
    margin-bottom: 15px;
`;

const Filter = styled.a`
    color: var(--color--grey-3);
    text-decoration: none;
    font-size: 2.3em;
    margin-left: 10px;
`;

const FilterInput = styled.input`
    background-color: var(--color--grey-5);
    width: 85px;
    height: 37px;
    border: none;
    display: flex;
    text-align: center;
    @media (max-width: 840px) {
        width: 90%;
    }
`;

const FilterInputWrapper = styled.div`
    display: flex;
    gap: 12px;
    @media (max-width: 840px) {
        flex-direction: column;
    }
`;

const FilterInputWrapperMobile = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 12px;
    padding: 0 6vw;
    input {
        width: 40vw;
        max-width: 220px;
    }
`;

const ProductFeed = styled.div`
    width: 70vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40px;
    padding-right: 2vw;
    margin-top: 30px;
    @media (max-width: 650px) {
        height: 400px;
        width: 80vw;
        flex-wrap: nowrap;
        overflow-x: scroll;
        flex-direction: row;
    }
`;

const ProductPage = styled.section`
    width: fit-content;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    @media (min-width: 650px) {
        min-height: 1485px;
    }
`;

const PageSelector = styled.button`
    width: fit-content;
    padding: 8px 12px;
    border: none;
    background-color: transparent;
    color: var(--color--brand2);
    font-weight: 600;
    font-size: 2em;
`;

const Footer = styled.footer`
    width: 100vw;
    height: 100px;
    font-size: 2em;
    background-color: var(--color--grey-0);
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 3vw;
    /* img {
        filter: invert(80%);
    } */
    @media (max-width: 650px) {
        flex-direction: column;
        gap: 20px;
        height: fit-content;
        padding-bottom: 20px;
    }
`;

const AuthoralRights = styled.p`
    color: var(--color--whiteFixed);
    position: relative;
    right: 5.5vw;
    @media (max-width: 650px) {
        right: 0;
    }
`;

const BackToTopBtn = styled.button`
    width: 45px;
    height: 45px;
    background-color: var(--color--grey-1);
    border: none;
    border-radius: 0.5em;
    color: var(--color--whiteFixed);
`;

const ClearFiltersBtn = styled.button`
    width: 240px;
    max-width: 90%;
    height: 40px;
    background-color: var(--color--brand2);
    color: var(--color--whiteFixed);
    border: none;
`;

const ShowFiltersBtn = styled.button`
    width: 260px;
    height: 40px;
    background-color: var(--color--brand2);
    color: var(--color--whiteFixed);
    border: none;
    margin: 15px 0;
    cursor: pointer;
    @media (min-width: 650px) {
        display: none;
    }
`;

export {
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
    AuthoralRights,
    BackToTopBtn,
    Footer,
    ClearFiltersBtn,
    ShowFiltersBtn,
    ProductFiltersMobile,
    CloseFiltersHeader,
    FilterInputWrapperMobile,
};
