import { SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  ButtonColorBrand1,
  DivInput,
  DivRadio,
  RadioLabel,
  RadioText,
  RadioWrapper,
  RadioInput,
} from "../../styles/Form";
import { Input } from "../Input";
import { TFormProps, registerFormSchema } from "./registerFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useContext } from "react";
import { ContextRegister } from "../../contexts/RegisterContext/RegisterContext";

const RegisterForm = () => {

  const { userRegister } = useContext(ContextRegister)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormProps>({
    resolver: zodResolver(registerFormSchema),
  });

  const [accountType, setAccountType] = useState("Cliente");

  const submit: SubmitHandler<TFormProps> = (formData) => {
    userRegister(formData);
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <h2>Cadastro</h2>
      <h4>Informações pessoais</h4>

      <Input
        label="Nome"
        type="text"
        id="name"
        placeholder="Ex: Samuel Leão"
        {...register("name")}
        error={errors.name}
      />

      <Input
        label="Email"
        type="email"
        id="email"
        placeholder="Ex: samuel@kenzie.com.br"
        {...register("email")}
        error={errors.email}
      />

      <Input
        label="CPF"
        type="text"
        id="cpf"
        placeholder="000.000.000-00"
        {...register("cpf")}
        error={errors.cpf}
      />

      <Input
        label="Celular"
        type="text"
        id="phone"
        placeholder="(DDD) 90000-0000"
        {...register("phone")}
        error={errors.phone}
      />

      <Input
        label="Data de nascimento"
        type="date"
        id="birthDate"
        placeholder="00/00/00"
        {...register("birthDate")}
        error={errors.birthDate}
      />

      <label id="description">Descrição</label>
      <textarea
        id="description"
        placeholder="Digitar descrição"
        {...register("description")}
      />

      {/* <h4>Infomações de endereço</h4>

      <Input label="CEP" placeholder="00000.000" />

      <DivInput>
        <Input label="Estado" placeholder="Digitar Estado" />
        <Input label="Cidade" placeholder="Digitar cidade" />
      </DivInput>

      <Input label="Rua" placeholder="Ex: Avenida José" />

      <DivInput>
        <Input label="Número" placeholder="Digitar número" />
        <Input label="Complemento" placeholder="Ex: apart 307" />
      </DivInput> */}

      <h4>Tipo de conta</h4>

      <DivRadio>
        <RadioWrapper>
          <RadioInput
            type="radio"
            id="Cliente"
            value="Cliente"
            {...register("type")}
            checked={accountType === "Cliente"}
            onChange={() => setAccountType("Cliente")}
          />
          <RadioLabel htmlFor="Cliente">
            <RadioText>Comprador</RadioText>
          </RadioLabel>
        </RadioWrapper>

        <RadioWrapper>
          <RadioInput
            type="radio"
            id="Vendedor"
            value="Vendedor"
            {...register("type")}
            checked={accountType === "Vendedor"}
            onChange={() => setAccountType("Vendedor")}
          />
          <RadioLabel htmlFor="Vendedor">
            <RadioText>Anunciante</RadioText>
          </RadioLabel>
        </RadioWrapper>
      </DivRadio>

      <Input
        label="Senha"
        type="password"
        id="password"
        placeholder="Digitar senha"
        {...register("password")}
        error={errors.password}
      />

      <Input
        label="Confirmar Senha"
        type="password"
        id="confirm"
        placeholder="Digitar senha"
        {...register("confirm")}
        error={errors.confirm}
      />

      <ButtonColorBrand1 type="submit">Finalizar cadastro</ButtonColorBrand1>
    </Form>
  );
};

export { RegisterForm };
