export interface IModal {
    modalOpen: boolean
    setModalOpen: boolean | any;
}

export interface IModalMenuProfile {
    modalOpenMenuProfile: boolean;
    setModalOpenMenuProfile: boolean | any;
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