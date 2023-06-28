import { BackgroundModal } from "../ModalSuccessRegister/style";
import {
  ContainerModalDelete,
  ContainerTitleButtonModalDelete,
  ContainerButtonModalDelete,
} from "./styled";
import { ButtonColorAlert2, ButtonColorGrey6 } from "../../styles/buttons";
import useOutClick from "../../hook/useOutClick";
import { useKeydowns } from "../../hook/useKeydown";
import { useContext } from "react";
import { AnnouncementContext } from "../../contexts/AnnouncementContext/AnnouncementContext";
import { ModalEditAndDeleteProps } from "../ModalEditAd";
import { createPortal } from "react-dom";

const ModalDeleteAd = ({ idAdvertiser }: ModalEditAndDeleteProps) => {
  const { deleteModal, setDeleteModal, removeAd } =
    useContext(AnnouncementContext);

  const modalRef = useOutClick(() => {
    setDeleteModal(false);
  });

  const buttonRef = useKeydowns("Escape", (element) => {
    element?.click();
  });

  if (!deleteModal) return null;

  return createPortal(
    <BackgroundModal>
      <ContainerModalDelete ref={modalRef}>
        <ContainerTitleButtonModalDelete>
          <h2>Excluir anúncio</h2>
          <button
            ref={buttonRef}
            onClick={() => {
              setDeleteModal(false);
            }}
          >
            x
          </button>
        </ContainerTitleButtonModalDelete>
        <p className="question">Tem certeza que deseja remover este anúncio?</p>
        <p>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
          conta e removerá seus dados de nossos servidores.
        </p>
        <ContainerButtonModalDelete>
          <ButtonColorGrey6
            className="cancel"
            onClick={() => {
              setDeleteModal(false);
            }}
          >
            Cancelar
          </ButtonColorGrey6>
          <ButtonColorAlert2
            onClick={() => {
              removeAd(idAdvertiser!);
            }}
          >
            Sim, excluir anúncio
          </ButtonColorAlert2>
        </ContainerButtonModalDelete>
      </ContainerModalDelete>
    </BackgroundModal>,
    document.body
  );
};

export default ModalDeleteAd;
