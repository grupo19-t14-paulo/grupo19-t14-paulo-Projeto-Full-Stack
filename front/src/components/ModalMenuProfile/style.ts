import styled from "styled-components";

const ContainerMenu = styled.div`
    width: 200px;
    height: 160px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 15px 0;

    position: absolute;
    top: 70px;
    right: 25px;
    z-index: 1;

    background-color: var(--color--grey-10);
    border-radius: 4px;
    box-shadow: 2px 2px 2px 2px var(--color--grey-8);

    button {
        font-size: 16px;
        font-weight: 500;
        text-align: left;

        border: transparent;
        background-color: transparent;
        color: var(--color--grey-2);
        padding-left: 20px;
    }

`;

export {
    ContainerMenu
}