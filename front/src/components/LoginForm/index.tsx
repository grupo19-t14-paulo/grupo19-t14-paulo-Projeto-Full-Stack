import { useForm, SubmitHandler } from "react-hook-form";
import { Form,
    ButtonColorBrand1,
    SpanTextIforgotMyPassword
} from "../../styles/Form";
import { Input } from "../Input";
import { TFormPropsLogin, loginFormSchema } from "./loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormPropsLogin>({
    resolver: zodResolver(loginFormSchema),
  });

  const submit: SubmitHandler<TFormPropsLogin> = (formData) => {
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <h2>Login</h2>

      <Input
        label="Email"
        type="email"
        id="email"
        placeholder="Digitar email"
        {...register("email")}
        error={errors.email}
      />

      <Input
        label="Senha"
        type="password"
        id="password"
        placeholder="Digitar senha"
        {...register("password")}
        error={errors.password}
      />

      <SpanTextIforgotMyPassword>Esqueci minha senha</SpanTextIforgotMyPassword>

      <ButtonColorBrand1 type="submit">Entrar</ButtonColorBrand1>

    </Form>
  );
};
