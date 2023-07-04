export interface IModal {
  modalOpen: boolean;
  setModalOpen: boolean | any;
}

export interface IModalMenuProfile {
  modalOpenMenuProfile: boolean;
  setModalOpenMenuProfile: boolean | any;
}

export interface IModalMenuComment {
  modalOpenMenuComment: boolean;
  setModalOpenMenuComment: boolean | any;
  setSelectedCard: React.Dispatch<React.SetStateAction<string | null>>;
  selectedCard: string;
  menuModalStyle: {display: string;};
  setMenuModalStyle: React.Dispatch<React.SetStateAction<{display: string;}>>;
}

export interface IModalEdit {
  modalOpenEdit: boolean;
  setModalOpenEdit: boolean | any;
  openDeleteModal: () => void;
}

export interface IModalEditAddress {
  modalOpenEditAddress: boolean;
  setModalOpenEditAddress: boolean | any;
}

export interface IModalDelete {
  modalOpenDelete: boolean;
  setModalOpenDelete: boolean | any;
}

export interface IModalEditComment {
  modalOpenEditComment: boolean;
  setModalOpenEditComment: boolean | any;
}