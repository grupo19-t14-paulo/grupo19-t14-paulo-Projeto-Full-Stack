import styled from "styled-components";

const ContainerModalEditComment = styled.div`
    width: 450px;
    height: 280px;
    margin: 90px 0 20px 0;

    border-radius: 10px;
    background-color: var(--color--grey-10);
    padding: 20px;

    #container-titile-modal {
        display: flex;
        justify-content: space-between;
        justify-items: center;

        button {
            height: 20px;

            background-color: transparent;
            border: transparent;
        }
    }

    form {
        textarea {
            width: 100%;
            height: 100px;

            margin-bottom: 20px;
            padding: 15px;
            border: 0.15rem solid var(--color--grey-7);

        }

        textarea:focus {
            border: 2px solid var(--color--brand1);
            outline: none;
        }
    }

    #container-buttons {
        height: 40px;
        display: flex;
        justify-content: space-between;

        button {
            width: 40%;
            border: transparent;
            border-radius: 5px;
        }

    }

    @media(max-width: 600px){
        max-width: 350px;
    }

    @media(max-width: 360px){
        max-width: 250px;
    }

`;

export {
    ContainerModalEditComment
}