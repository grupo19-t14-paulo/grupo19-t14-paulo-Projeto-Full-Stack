import styled from "styled-components";

const Header = styled.header`
    width: 90%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 20px auto;
`;

const ConteinerButtonHeader = styled.div`
    display: flex;
    gap: 20px;


    @media(max-width: 649px) {
        button {
            display: none;
        };
    };
`;

const ButtonNoMargin = styled.button`
    font-size: 14px;
    font-family: var(--font--inter);

    border: none;
    color: var(--color--grey-2);
    background-color: transparent;
`;

const ButtonRegister = styled.button`
    width: 100px;
    height: 35px;

    font-size: 14px;
    font-family: var(--font--inter);

    border: solid 1px var(--color--grey-6);
    border-radius: 5px;

    color: var(--color--grey-0);
    background-color: transparent;
`;

const ContainerImgCar = styled.div`
    width: 100%;
    height: 60vh;

    display: flex;
    justify-content: center;

    background: linear-gradient(360deg, var(--color--grey-0) 0%, var(--color--whiteFixed) 100%);
        
    img {
        height: 100%;
    };

    @media(max-width: 630px){
        img {
            width: 100%;
        };
    };
`;

const Containerbackground = styled.div `
    width: 100%;
    height: 60vh;

    position: absolute;
    top: 12.5%;

    background: linear-gradient(360deg, var(--color--grey-0) 0%, var(--color--grey-0) 100%);
    opacity: 0.7;
`;

const ContainerTitile = styled.div`
    width: 100%;
    position: absolute;
    top: 35%;

    h1 {
        text-align: center;
        font-family: var(--font--lexend);
        font-size: 30px;

        color: var(--color--grey-10);

        margin-bottom: 20px;
    };

    h2 {
        text-align: center;
        font-family: var(--font--lexend);
        font-size: 20px;

        color: var(--color--grey-10);
    };

    @media(max-width: 630px){
        h1 {
            font-size: 20px;
        };

        h2 {
            font-size: 12px;
        };
    };
`;


const Container = styled.div`
    width: 200px; 
    position: relative;
`;

const ButtonsContainer = styled.div`
    width: 100px;
    height:60px;
    display: flex;
    flex-direction: column;

    position: absolute;
    bottom: -30px;
    right: 0; 

    padding: 10px;
    border: solid 1px var(--color--grey-7);
    border-radius: 10px;

    background-color: var(--color--grey-10);

    @media(min-width: 650px){
        display: none;
    };

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
    margin-left: 85%;

    cursor: pointer;

    @media(min-width: 650px){
        display: none;
    };

    @media(max-width: 470px) {
        margin-left: 90px;
    };

    @media(max-width: 347px) {
        margin-left: 20px;
    };
`;

export {
    Header,
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
    MenuImage
};