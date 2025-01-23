import React from "react";
import "./App.css";
import TierHeader from "./components/TierHeader";
import GamemodeHeader from "./components/GamemodeHeader";
import TierColumnContainer from "./components/TierColumnContainer";

const App = () => {
  return (
    <>
      <GamemodeHeader />
      <TierHeader />
      <TierColumnContainer />
    </>
  );
};

// const styles = {};

export default App;
