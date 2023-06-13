import styled from "styled-components"

const ContainerForm = styled.div`
  width: 30%;

  position: relative;
  left: 35%;
  bottom: -30px;

  border-radius: 10px;
  background-color: var(--color--grey-10);

  padding: 20px;
  margin-bottom: 70px;

  h2 {
    font-family: var(--font--lexend);
    font-weight: 500;
    font-size: 24px;

    color: var(--color--grey-2);

    padding-bottom: 15px;
  }

  h4 {
    font-weight: 550;
    font-size: 13px;

    color: var(--color--grey-2);

    margin-bottom: 20px;
  }


  @media(max-width: 740px){
    width: 70%;
    left: 15%;
  }

  @media(max-width: 440px){
    width: 90%;
    left: 5%;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 600;
    font-size: 10.5px;

    color: var(--color--grey-2);
  }

  input {
    width: 100%;
    height: 48px;
    font-size: 11.3px;

    border: 1.7px solid var(--color--grey-6); 
    border-radius: 4px;

    padding-left: 25px;
    margin: 5px 0 10px 0;
    
  }

  input:focus {
    outline-color: var(--color--brand1);
  }

  textarea {
    width: 100%;
    height: 60px;
    font-size: 11.3px;

    border: 1.7px solid var(--color--grey-6); 
    border-radius: 4px;

    padding: 20px;
    margin: 5px 0 10px 0;
  }

  textarea:focus {
    outline-color: var(--color--brand1);
  }

  button {
    width: 100%;
    height: 48px;

    border: transparent;
    border-radius: 5px;

    color: var(--color--grey-10);
    background-color: var(--color--brand1);
  }
  
`

const DivInput = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

`

const DivRadio = styled.div`
  width: 75%;

  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;

  @media(max-width: 397px) {
    width: 82%;
  }

  @media(max-width: 321px) {
    width: 90%;
  }
`;

const RadioInput = styled.input`
  display: none;

  &:checked + label {
    color: var(--color--grey-10);
    background-color: var(--color--brand1);
  }
`;

const RadioLabel = styled.label`
  border: 1.7px solid var(--color--grey-6);
  border-radius: 4px;

  padding: 20% 52%;
  cursor: pointer;

  @media(max-width: 397px) {
    padding: 20% 30%;
  }

  @media(max-width: 321px) {
    padding: 15% 15%;
  }
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RadioText = styled.span`
  font-weight: 600;
  font-size: 14px;
  text-align: center;
`;


export {
  ContainerForm,
  Form,
  DivInput,
  DivRadio,
  RadioLabel,
  RadioText,
  RadioWrapper,
  RadioInput
}