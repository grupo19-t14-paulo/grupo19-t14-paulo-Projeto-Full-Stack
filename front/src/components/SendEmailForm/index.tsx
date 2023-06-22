import {
    SendEmailResetPasswordData,
    sendEmailResetPasswordSchema,
} from "../../pages/ResetPassword/validator";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import Button from "../Buttons";
import { ContainerForm, Form } from "../../styles/Form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const SendEmailForm = () => {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm<SendEmailResetPasswordData>({
        resolver: zodResolver(sendEmailResetPasswordSchema),
    });

    const sendEmail = (
        sendEmailResetPasswordData: SendEmailResetPasswordData
    ) => {
        api.post("/users/resetPassword", sendEmailResetPasswordData)
            .then(() => {
                toast.success(
                    "Email enviado! Você receberá um link para poder cadastrar uma nova senha."
                );
                // router.push("/");
            })
            .then(() => {
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                toast.error(
                    "Ops! Algo deu errado! Verifique o e-mail e tente novamente!"
                );
            });
    };

    const onFormSubmit = (formData: SendEmailResetPasswordData) => {
        console.log(formData);
        sendEmail(formData);
    };

    return (
        <ContainerForm>
            <Form onSubmit={handleSubmit(onFormSubmit)}>
                <div>
                    <h2>Informe um e-mail para a recuperação de senha</h2>
                    <div>
                        <input
                            type="email"
                            placeholder="Ex: samuel@kenzie.com.br"
                            {...register("email")}
                        />
                    </div>
                </div>
                <div>
                    <Button buttonStyle="brand1-big" type="submit">
                        Enviar
                    </Button>
                </div>
            </Form>
        </ContainerForm>
    );
};

export default SendEmailForm;
