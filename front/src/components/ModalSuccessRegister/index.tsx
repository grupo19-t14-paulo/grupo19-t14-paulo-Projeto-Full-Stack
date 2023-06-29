import { IModal } from "../../interfaces/ModalInterfaces";
import { BackgroundModal, ContainerModal, LinkModalSuccess } from "./style";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ModalSuccessRegister = ({ modalOpen, setModalOpen}: IModal) => {

  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const closeModalAndRedirect = () => {
    setModalOpen(false);
    setSuccess(false);
    if(success){
      console.log("src/components/ModalSuccessRegister.tsx")
    }
    navigate("/login");
  };

  useEffect(() => {
    if (modalOpen) {
      setSuccess(true);
    }
  }, [modalOpen]);

  if(!modalOpen) return null

  return (
      <BackgroundModal>
          <ContainerModal>
              <div>
                  <h2>Sucesso!</h2>
                  <button type="button" onClick={() => { setModalOpen(false) }}>X</button>
              </div>

              <h3>Sua conta foi criada com sucesso!</h3>
              <p>Agora você poderá ver seus negócios crescendo em grande escala</p>
              <LinkModalSuccess to="/login" onClick={closeModalAndRedirect}>Ir para o login</LinkModalSuccess>
          </ContainerModal>
      </BackgroundModal>
  );
};

export {
    ModalSuccessRegister
}