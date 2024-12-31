import React from "react";
import { createContext, useContext, useState } from "react";

const ModalContext = createContext({});

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState({
    show: false,
    player: null,
  });

  const value = {
    modalState,
    setModalState,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
