import React, { useState } from "react";
import Buttons from "../components/leaderboard/Buttons";
import Top10LB from "../components/leaderboard/Top10LB";
import GamemodeLeaderboard from "../components/leaderboard/GamemodeLeaderboard";

function leaderboard() {
  const [selectedButton, setSelectedButton] = useState("top 10");

  return (
    <div>
      <Buttons
        buttons={["top 10", "pak lb", "ind lb"]}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
        layoutId="lb"
      />
      {selectedButton === "top 10" && <Top10LB />}
      {selectedButton === "pak lb" && (
        <GamemodeLeaderboard
          country="pak"
          players={[
            "FakeDrugLord123",
            "YTMe_",
            "asimyuh_FAN",
            "xUltimate_",
            "Raxizz",
            "Sqxshyy",
            "FllNISH",
            "xeob",
            "StackeRrz",
            "DrPuuuu",
          ]}
        />
      )}
      {selectedButton === "ind lb" && (
        <GamemodeLeaderboard
          country="ind"
          players={[
            "360Mall",
            "9fts",
            "mistyibra",
            "CattoL0VeR",
            "Critspammer449",
            "ShubDaRizzler_",
            "RunThe1s_",
            "TimeIess_",
            "OhioKidooo",
            "Sahibiguess",
          ]}
        />
      )}
    </div>
  );
}

export default leaderboard;
