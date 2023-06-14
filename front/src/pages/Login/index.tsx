import FooterBase from "../../components/Footer";
import { Header } from "../../components/Header";
import { LoginForm } from "../../components/LoginForm";
import { ContainerForm } from "../../styles/Form";
import { LinkRegister } from "./style";


const LoginPage = () => {
  return (
    <>
      <Header button1="Home" button2="Cadastrar" page1="/" page2="/register" />
      <ContainerForm>
        <LoginForm />
        <h3>Ainda não possui conta?</h3>
        <LinkRegister to={"/register"}>Cadastrar</LinkRegister>
      </ContainerForm>
      <FooterBase />
    </>
  );
};

export { LoginPage };
