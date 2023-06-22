import FooterBase from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styles";

import ResetPasswordForm from "../../components/ResetPasswordForm";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
    const { token } = useParams();
    return (
        <>
            <Header
                button1="Fazer Login"
                button2="Cadastrar"
                page1="/login"
                page2="/register"
            />
            <Container>
                <ResetPasswordForm token={token as string} />
            </Container>
            <FooterBase />
        </>
    );
};

export { ResetPassword };
