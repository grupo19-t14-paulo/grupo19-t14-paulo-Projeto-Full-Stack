import FooterBase from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styles";

import SendEmailForm from "../../components/SendEmailForm";

const SendEmailResetPassword = () => {
    return (
        <>
            <Header
                button1="Fazer Login"
                button2="Cadastrar"
                page1="/login"
                page2="/register"
            />
            <Container>
                <SendEmailForm />
            </Container>
            <FooterBase />
        </>
    );
};

export { SendEmailResetPassword };
