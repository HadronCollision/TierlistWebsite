import { useState } from "react";
import { useModal } from "../context/modalContext";

export const useTierModal = () => {
  const { modalState, setModalState } = useModal();
  const { ign, country, rank } = modalState.player;
  const [imageLoading, setImageLoading] = useState(true);
  let countryTwo;
  if (country === "pk") countryTwo = "Pakistan";
  if (country === "in") countryTwo = "India";
  if (country === "oth") countryTwo = "Other Country";
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
