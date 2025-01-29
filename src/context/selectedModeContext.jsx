import React from "react";
import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { GamemodeList } from "../constants/gamemode";

const SelectedModeContext = createContext();

export const useSelectedMode = () => {
  return useContext(SelectedModeContext);
};

export const SelectedModeProvider = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const route = pathname.split("/")[2];
  console.log(route);

  if (!route) {
    navigate("/ranking/overall");
  }

  const [selectedMode, setSelectedMode] = useState(
    GamemodeList.includes(route) ? route : "overall"
  );

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
