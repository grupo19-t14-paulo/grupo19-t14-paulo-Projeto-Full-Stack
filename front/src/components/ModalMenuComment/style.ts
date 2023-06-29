import styled from "styled-components";

const ContainerMenuComment = styled.div`
    width: 120px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px 10px 20px 10px;

    position: absolute;
    top: 0;
    left: 80%;
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

    div {
        display: flex;
        justify-content: end;
    }

`;

export {
    ContainerMenuComment
}