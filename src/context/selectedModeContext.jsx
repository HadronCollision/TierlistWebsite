import React, { useMemo } from "react";
import { createContext, useContext, useState } from "react";
import { useLocation } from "react-router";
import { GamemodeList } from "../constants/gamemode";

const SelectedModeContext = createContext();

export const useSelectedMode = () => {
  return useContext(SelectedModeContext);
};

export const SelectedModeProvider = ({ children }) => {
  const { pathname } = useLocation();
  const route = pathname.split("/")[2];

  const [selectedMode, setSelectedMode] = useState(
    GamemodeList.includes(route) ? route : "leaderboard"
  );

  const value = useMemo(
    () => ({ selectedMode, setSelectedMode }),
    [selectedMode]
  );

  return (
    <SelectedModeContext.Provider value={value}>
      {children}
    </SelectedModeContext.Provider>
  );
};
