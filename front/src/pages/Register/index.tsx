import FooterBase from "../../components/Footer";
import { Header } from "../../components/Header";
import { RegisterForm } from "../../components/RegisterForm";
import { ContainerForm } from "../../styles/form";
const RegisterPage = () => {
  return (
    <>
      <Header button1="Fazer Login" button2="Home" page1="/login" page2="/" />
      <ContainerForm>
        <RegisterForm />
      </ContainerForm>
      <FooterBase />
    </>
  );
};

export { RegisterPage };
