import styled from "styled-components";
const ContainerForm = styled.div`
  width: 411px;
  left: 15%;
  margin: 20px 0;

  border-radius: 10px;
  background-color: var(--color--grey-10);
  padding: 20px 20px 40px 20px;

  h2 {
    font-family: var(--font--lexend);
    font-weight: 500;
    font-size: 24px;

    color: var(--color--grey-0);
    padding-bottom: 15px;
  };

  h4 {
    font-weight: 550;
    font-size: 13px;

    color: var(--color--grey-2);
    margin-bottom: 20px;
  };

  h3 {
    text-align: center;
    color: var(--color--grey-2);
    margin: 20px 0 35px 0;
  };

  p {
    color: var(--color--alert1);
    margin-bottom: 10px;
  };

  @media(max-width: 370px){
    width: 90%;
    left: 5%;
  };
`
const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 600;
    font-size: 10.5px;
    color: var(--color--grey-1);
  };

  input {
    width: 100%;
    height: 48px;
    font-size: 11.3px;

    border: 1.7px solid var(--color--grey-6);
    border-radius: 4px;
    padding-left: 25px;
    margin: 5px 0 10px 0;
  };

  input:focus {
    outline-color: var(--color--brand1);
  };

  textarea {
    width: 100%;
    height: 60px;
    font-size: 11.3px;

    border: 1.7px solid var(--color--grey-6);
    border-radius: 4px;
    padding: 20px;
    margin: 5px 0 10px 0;
  };

  textarea:focus {
    outline-color: var(--color--brand1);
  };

  button {
    width: 100%;
    height: 48px;
    font-weight: 600;
    font-size: 13.5px;

    border-radius: 5px;
    margin-top: 25px;
  };
`;

const ButtonColorBrand1 = styled.button`
  border: transparent;
  color: var(--color--grey-10);
  background-color: var(--color--brand1);
`;

const SpanTextIforgotMyPassword = styled.span`
  text-align: right;
  font-weight: 600;
  font-size: 12px;
  color: var(--color--grey-2);
  padding-right: 5px ;
`;

const DivInput = styled.span`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const DivRadio = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  gap: 8px;

  margin-bottom: 20px;

  @media (max-width: 440px) {
    gap: none;
  }
`;

const RadioInput = styled.input`
  display: none;

  &:checked + label {
    color: var(--color--grey-10);
    background-color: var(--color--brand1);
  };
`;

const RadioLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  border: 1.7px solid var(--color--grey-6);
  border-radius: 4px;
  cursor: pointer;
`;

const RadioWrapper = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 380px) {
    width: 115px;
  }
`;

const RadioText = styled.span`
  font-weight: 600;
  font-size: 14px;
  text-align: center;
`;

const Container = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerFormEditProfile = styled.div`
  width: 450px;
  height: 650px;
  margin: 90px 0 20px 0;

  border-radius: 10px;
  background-color: var(--color--grey-10);
  padding: 20px;

  overflow-y: auto;

  h2 {
    font-weight: 600;
    font-size: 12px;

    color: var(--color--grey-1);
    padding-bottom: 15px;
  };

  p {
    color: var(--color--alert1);
    margin-bottom: 10px;
  };
  
  form {

    div {
      display: flex;
      flex-direction: column;

      label {
        font-weight: 600;
        font-size: 10.5px;
        color: var(--color--grey-1);
      };

      input {
        width: 100%;
        height: 48px;
        font-size: 11.3px;

        border: 1.7px solid var(--color--grey-6);
        border-radius: 4px;
        padding-left: 25px;
        margin: 5px 0 10px 0;
      };

      input:focus {
      outline-color: var(--color--brand1);
    };

    textarea {
      width: 100%;
      height: 60px;
      font-size: 11.3px;

      border: 1.7px solid var(--color--grey-6);
      border-radius: 4px;
      padding: 20px;
      margin: 5px 0 10px 0;
    };

    textarea:focus {
      outline-color: var(--color--brand1);
    };
    };

  };

  @media(max-width: 370px){
    width: 90%;
    left: 5%;
  };
`

const ContainerButtonEditProfile = styled.span`
  display: flex;
  justify-content: space-between;

  button {
    font-weight: 600;
    width: 32%;
    height: 48px;

    border-radius: 5px;
    border: transparent;
  }
  
`

const ContainerButtonEditAddress = styled.span`
  display: flex;
  justify-content: flex-end;
  gap: 20px;

  button {
    font-weight: 600;
    width: 37%;
    height: 48px;

    border-radius: 5px;
    border: transparent;
  }
`
const ContainerTitleButton = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;

  h2 {
    font-size: 14px;
  }

  button {

      color: var(--color--grey-4);

      border: transparent;
      background-color: transparent;
  };
`

export {
  ContainerForm,
  Form,
  ButtonColorBrand1,
  SpanTextIforgotMyPassword,
  DivInput,
  DivRadio,
  RadioLabel,
  RadioText,
  RadioWrapper,
  RadioInput,
  Container,
  ContainerFormEditProfile,
  ContainerButtonEditProfile,
  ContainerButtonEditAddress,
  ContainerTitleButton
};