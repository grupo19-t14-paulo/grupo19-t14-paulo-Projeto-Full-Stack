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
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ContextRegister } from "../../contexts/RegisterContext/RegisterContext";
import { ModalSuccessRegister } from "../ModalSuccessRegister";
import { IRegisterFormData } from "../../interfaces/RegisterInterfaces";

const RegisterForm = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const { userRegister, seller, setSeller} = useContext(ContextRegister)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });

  const [accountType, setAccountType] = useState<"Cliente" | "Vendedor">("Cliente");

  const submit: SubmitHandler<TFormProps> = (formData) => {
    console.log(formData)
    formData.type = accountType;
    userRegister(formData);

  };

  useEffect(() => {
    if (seller) {
      setTimeout(() => {
        setModalOpen(true);
        setSeller(undefined); 
      });
    }
  }, [seller]);

  return (
    <>
      <ModalSuccessRegister modalOpen={modalOpen} setModalOpen={setModalOpen}/>
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

        <h4>Infomações de endereço</h4>

        <Input label="CEP"
        placeholder="00000.000"
        type="text"
        id="cep"
        {...register("cep")}
        error={errors.cep} />

        <DivInput>
          <Input label="Estado" 
          placeholder="Digitar Estado" 
          type="text"
          id="state"
          {...register("state")}
          error={errors.state}/>

          <Input label="Cidade" 
          placeholder="Digitar cidade" 
          type="text"
          id="city"
          {...register("city")}
          error={errors.city} />
        </DivInput>

        <Input label="Rua" 
        placeholder="Ex: Avenida José" 
        type="text"
        id="street"
        {...register("street")}
        error={errors.street}/>

        <DivInput>
          <Input label="Número"
          placeholder="Digitar número"
          type="text"
          id="number"
          {...register("number")}
          error={errors.number} />

          <Input label="Complemento"
          placeholder="Ex: apart 307"
          type="text"
          id="complement"
          {...register("complement")}
          error={errors.complement}/>
        </DivInput>

        <h4>Tipo de conta</h4>

        <DivRadio>
          <RadioWrapper>
            <RadioInput
              type="radio"
              id="Cliente"
              value="Cliente"
              {...register("type")}
              defaultChecked={accountType === "Cliente"}
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
              defaultChecked={accountType === "Vendedor"}
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
    </>
  );
};

export { RegisterForm };
