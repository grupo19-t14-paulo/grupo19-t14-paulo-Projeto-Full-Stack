import styled from "styled-components";
import { Link } from "react-router-dom";

const BackgroundModal = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    
    background: rgba(18, 18, 20, 0.5);
`;

const ContainerModal = styled.div`
    max-width: 95vw;
    width: 450px;
    position: absolute;
    margin-top: 89px;

    background-color: var(--color--whiteFixed);

    overflow-y: auto;

    border-radius: 10px 10PX;
    padding: 20px 20px 40px 20px;

    div {
        display: flex;
        justify-content: space-between;

        margin-bottom: 20px;

        button {

            color: var(--color--grey-4);

            border: transparent;
            background-color: transparent;
        };

    };

    h2 {
        font-weight: 600;
        font-size: 16px;
        color: var(--color--grey-1);
        font-family: var(--font--lexend);
    };

    h3 {
        font-size: 14px;
        font-family: var(--font--lexend);
        color: var(--color--grey-1);
        text-align: left;
        margin-bottom: 20px;
    }

    h4 {
        font-size: 13px;
        color: var(--color--grey-2);

        margin-bottom: 30px;
    }
`;

const LinkModalSuccess = styled(Link)`
    font-weight: 500;
    font-size: 13px;
    text-decoration: none;

    color: var(--color--whiteFixed);
    background-color: var(--color--brand1);
    border-radius: 5px;

    padding: 10px 20px;

`;

export {
    BackgroundModal,
    ContainerModal,
    LinkModalSuccess
};