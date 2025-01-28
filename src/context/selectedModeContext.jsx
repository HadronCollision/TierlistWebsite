import React from "react";
import { createContext, useContext, useState } from "react";

const SelectedModeContext = createContext();

export const useSelectedMode = () => {
  return useContext(SelectedModeContext);
};

export const SelectedModeProvider = ({ children }) => {
  const [selectedMode, setSelectedMode] = useState();

  const value = {
    selectedMode,
    setSelectedMode,
  };

  return (
    <SelectedModeContext.Provider value={value}>
      {children}
    </SelectedModeContext.Provider>
  );
};
