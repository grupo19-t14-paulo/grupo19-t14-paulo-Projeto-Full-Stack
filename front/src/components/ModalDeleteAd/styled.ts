import styled from "styled-components";

const ContainerModalDelete = styled.div`
  max-width: 95vw;
  width: 500px;
  position: absolute;
  margin-top: 89px;

  background-color: var(--color--whiteFixed);
  border-radius: 10px;

  h2 {
    font-weight: 600;
    font-size: 14px;
    font-family: var(--font--lexend);
  }

  .question {
    font-size: 16px;
    color: var(--color--grey-0);

    padding: 20px 20px 0 20px;

    font-weight: 600;
  }

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

  border-radius: 10px 10px 0 0;
  padding: 10px 20px;

  button {
    font-size: 16px;
    font-weight: 500;

    color: var(--color--alert1);
    background-color: transparent;

    border: transparent;
  }
`;

const ContainerButtonModalDelete = styled.div`
  width: 95%;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-bottom: 35px;

  margin-top: 30px;

  button {
    width: 45%;
    height: 48px;
    font-size: 15px;
    font-weight: 500;

    border: transparent;
    border-radius: 5px;

    padding: 0 12px;
  }

  .cancel {
    width: 35%;
  }

  @media (max-width: 504px) {
    font-size: 12px;
  }
`;

export {
  ContainerModalDelete,
  ContainerTitleButtonModalDelete,
  ContainerButtonModalDelete,
};
