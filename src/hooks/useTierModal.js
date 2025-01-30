import { useState } from "react";
import { useModal } from "../context/modalContext";

export const useTierModal = () => {
  const { modalState, setModalState } = useModal();
  const { ign, country, rank } = modalState.player;
  const [imageLoading, setImageLoading] = useState(true);
  const countryTwo = country === "pk" ? "Pakistan" : "India";

  const closeModal = () => setModalState({ ...modalState, show: false });

  return {
    ign,
    country: countryTwo,
    rank,
    imageLoading,
    setImageLoading,
    closeModal,
  };
};
