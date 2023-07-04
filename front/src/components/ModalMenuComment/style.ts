import styled from "styled-components";

interface ContainerMenuProps {
    styledCSS: string | any
}

const ContainerMenuComment = styled.div<ContainerMenuProps>`
    width: 120px;
    display: flex;
    flex-direction: column;
    padding: 10px;

    position: absolute;
    top: 0;
    left: 80%;
    z-index: 1;

    background-color: var(--color--grey-10);
    border-radius: 4px;
    box-shadow: 2px 2px 2px 2px var(--color--grey-8);

    ${props => props.styledCSS};

    button {
        font-size: 13px;
        font-weight: 600;
        align-items: center;

        border: transparent;
        background-color: transparent;
        color: var(--color--grey-2);
        padding-left: 30px;
        margin-bottom: 10px;
    }

    div {
        display: flex;
        justify-content: end;
    }

    @media (max-width: 601px){
        left: 55%;
    }

`;

export {
    ContainerMenuComment
}