import {
    ResetPasswordData,
    resetPasswordSchema,
} from "../../pages/ResetPassword/validator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useNavigate } from "react-router-dom";
import { ContainerForm, Form } from "../../styles/Form";
import Button from "../Buttons";
import { Input } from "../Input";

interface ResetPasswordFormProps {
    token: string;
}

const ResetPasswordForm = ({ token }: ResetPasswordFormProps) => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ResetPasswordData>({
        resolver: zodResolver(resetPasswordSchema),
    });

    const resetPassword = (
        resetPasswordData: ResetPasswordData,
        token: string
    ) => {
        api.patch(`/users/resetPassword/${token}`, {
            password: resetPasswordData.password,
        })
            .then(() => {
                toast.success("Nova senha cadastrada com sucesso!");
            })
            .then(() => {
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Ops! Algo deu errado! Tente novamente!");
            });
    };

    const onFormSubmit = (formData: ResetPasswordData) => {
        console.log(formData);
        console.log(token);
        resetPassword(formData, token);
    };

    return (
        <ContainerForm>
            <h2>Recuperação de senha</h2>
            <Form onSubmit={handleSubmit(onFormSubmit)}>
                <div>
                    <label htmlFor="email">Nova senha</label>
                    <div>
                        <Input
                            type="password"
                            placeholder="Sua nova senha"
                            {...register("password")}
                            error={errors.password}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="password">Confirmação de senha</label>
                    <div>
                        <Input
                            type="password"
                            placeholder="Confirmação da senha"
                            {...register("passwordConfirm")}
                            error={errors.passwordConfirm}
                        />
                    </div>
                </div>
                <div>
                    <Button buttonStyle="brand1-big" type="submit">
                        Atualizar senha
                    </Button>
                </div>
            </Form>
        </ContainerForm>
    );
};

export default ResetPasswordForm;
