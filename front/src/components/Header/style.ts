import styled from "styled-components";
import { Link } from "react-router-dom";

const ConteinerHeader = styled.header`
    width: 100vw;
    height: 90px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: solid 1px var(--color--grey-6);
    box-shadow: 1px 1px var(--color--grey-6);
    background-color: var(--color--grey-10);

    padding: 0 20px;

    > div {
        cursor: pointer;
    }
`;

const ConteinerButtonHeader = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;

    @media (max-width: 649px) {
        display: none;
        button {
            display: none;
        }
    }
`;

const LinkNoMargin = styled(Link)`
    font-size: 14px;
    font-family: var(--font--inter);
    text-decoration: none;

    color: var(--color--grey-2);
`;

const LinkRegister = styled(Link)`
    width: 100px;
    height: 35px;
    text-align: center;

    font-size: 14px;
    font-family: var(--font--inter);
    text-decoration: none;

    border: solid 1px var(--color--grey-6);
    border-radius: 5px;

    padding-top: 8px;

    color: var(--color--grey-0);
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

const StyledLink = styled(Link)`
    font-size: 10px;
    font-family: var(--font--inter);
    text-decoration: none;

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

export {
    ConteinerHeader,
    ConteinerButtonHeader,
    LinkNoMargin,
    LinkRegister,
    Container,
    ButtonsContainer,
    StyledLink,
    CloseButton,
    MenuImage,
};
