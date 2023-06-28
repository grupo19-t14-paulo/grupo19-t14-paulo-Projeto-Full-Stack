import styled from "styled-components";

const ContainerModal = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.5);

  .content__modal {
    width: 90%;
    max-width: 370px;
    max-height: 93vh;

    position: fixed;

    background-color: var(--color--whiteFixed);

    border-radius: 4px;

    animation: showModal 1.5s ease;

    margin-top: 50px;
    margin-bottom: 50px;

    overflow-y: auto;
  }

  .headerModal {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 1.375rem;

    height: 3.125rem;

    background-color: var(--gray-scale-3);
  }

  .subTitleModal {
    margin-left: 18px;

    margin-top: 10px;

    font-size: 12px;

    color: var(--color--grey-0);
  }

  .close__modal {
    background-color: transparent;
    color: var(--color--grey-3);

    font-size: 16px;
    font-weight: var(-weigth-semiBold);

    border: none;

    cursor: pointer;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    width: 100%;

    padding: 2rem 1.375rem;

    background-color: var(--color--whiteFixed);

    border-radius: 4px;

    position: relative;
  }

  .textLabel {
    font-size: 12px;
    font-weight: 500;

    color: var(--color--grey-1);
  }

  form > input {
    height: 48px;

    padding-left: 0.85rem;
    margin-top: -15px;

    color: var(--color--grey-3);

    border-radius: 4px;
    border: 1px solid var(--color--grey-3);
  }

  form > select {
    height: 48px;

    padding-left: 0.85rem;
    margin-top: -15px;

    color: var(--color--grey-1);

    border-radius: 4px;
    border: 1px solid var(--color--grey-3);
  }
  option {
    color: var(--color--grey-1);
  }

  form > section {
    display: flex;
    margin-bottom: 1rem;
  }

  form > section > div {
    display: flex;
    flex-direction: column;
  }

  form > section > div > input {
    width: 100%;
    height: 48px;

    padding-left: 0.85rem;
  }

  .secInput {
    margin-left: 10px;
  }

  form > .inputDescription {
    height: 90px;

    padding: 10px;
    margin-top: -12px;
  }

  p {
    margin-top: -1.3rem;
    font-size: var(--text-size2);
    color: var(--gray-scale-4);
  }

  .errorDubleInput {
    margin-top: 0.2rem;
  }

  span {
    display: flex;
    flex-direction: column;
    gap: 1.65rem;
  }

  span > input {
    height: 48px;

    padding-left: 0.85rem;
    margin-top: -15px;

    color: var(--color--grey-3);

    border-radius: 4px;
    border: 1px solid var(--color--grey-3);
  }

  .addImage {
    width: 60%;

    background-color: var(--color--brand3);
    color: var(--color--brand1);

    font-size: 12px;
    font-weight: 600;

    padding: 3px;

    border-radius: 4px;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .divButtons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    margin-bottom: 10px;
    width: 100%;
  }

  .btnDelete {
    background-color: var(--color--grey-6);

    border-radius: 4px;
    border: none;

    padding: 10px;

    font-weight: 600;
    font-size: 13px;

    width: 50%;

    color: var(--color--grey-2);
  }

  .btnSave {
    background-color: var(--color--brand3);

    border-radius: 4px;
    border: none;

    padding: 10px;

    font-weight: 600;
    font-size: 13px;

    width: 50%;

    color: var(--color--grey-9);
  }

  @keyframes showModal {
    0% {
      opacity: 0;
      top: -25%;
    }

    50% {
      opacity: 1;
      top: -2%;
    }
  }

  .dataResult {
    position: absolute;
    top: 163px;
    width: 92.5%;
    height: fit-content;
    max-height: 150px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;
    overflow-y: auto;
    border-radius: 4px;
  }

  .dataResult::-webkit-scrollbar {
    display: none;
  }

  #model,
  #brand {
    text-transform: capitalize;
  }
`;

export { ContainerModal };
