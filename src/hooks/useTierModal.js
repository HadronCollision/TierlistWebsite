import { useState } from "react";
import { useModal } from "../context/modalContext";

export const useTierModal = () => {
  const { modalState, setModalState } = useModal();
  const { ign, rank, country } = modalState.player;
  const [imageLoading, setImageLoading] = useState(true);

  const closeModal = () => setModalState({ ...modalState, show: false });

  return { ign, rank, country, imageLoading, setImageLoading, closeModal };
};
