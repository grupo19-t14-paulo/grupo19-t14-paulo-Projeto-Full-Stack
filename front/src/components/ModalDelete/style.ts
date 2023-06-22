import styled from "styled-components";

const ContainerModalDelete = styled.div`
    max-width: 95vw;
    width: 500px;
    height: 330px;
    position: absolute;
    margin-top: 89px;
    
    background-color: var(--color--whiteFixed);
    border-radius: 10px;


    h2 {
        font-weight: 600;
        font-size: 16px;
        color: var(--color--alert1);
        font-family: var(--font--lexend);
    };

    p {
        font-size: 16px;
        color: var(--color--grey-0);

        padding: 20px 20px 0 20px;
    }

`;

const ContainerTitleButtonModalDelete = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--color--alert2);
    border-radius: 10px 10px 0 0;
    padding: 10px 20px;

    button {
        font-size: 16px;
        font-size: 500;

        color: var(--color--alert1);
        background-color: transparent;
        border: transparent;
    }
`;

const ContainerButtonModalDelete = styled.div`
    width: 95%;
    height: 35px;
    display: flex;
    justify-content: flex-end;
    gap: 20px;

    margin-top: 30px;
    
    button {
        width: 35%;
        height: 48px;
        font-size: 15px;
        font-weight: 500;

        border: transparent;
        border-radius: 5px;

        
        @media(max-width: 504px){
            font-size: 12px;
        }
    }
`;

export {
    ContainerModalDelete,
    ContainerTitleButtonModalDelete,
    ContainerButtonModalDelete
}