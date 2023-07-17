import { useDispatch, useSelector } from "react-redux";
import { onClosaDateModal, onOpenDateModal } from "../store";

export const useUiStore = () => {
  const dispatch = useDispatch();
  const { isDateModalOpen } = useSelector((state) => state.ui);

  const openDateModal = () => {
    dispatch(onOpenDateModal());
  };
  const closeDateModal = () => {
    dispatch(onClosaDateModal());
  };

  return {
    //* Propiedades
    isDateModalOpen,
    //* Metodos
    closeDateModal,
    openDateModal,
  };
};
