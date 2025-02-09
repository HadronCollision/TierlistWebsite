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
            { ign: "FakeDrugLord123", rank: "HT3" },
            { ign: "YTMe_", rank: "LT3" },
            { ign: "asimyuh_FAN", rank: "LT3" },
            { ign: "xUltimate_", rank: "LT3" },
            { ign: "Raxizz", rank: "LT3" },
            { ign: "Sqxshyy", rank: "LT3" },
            { ign: "FllNISH", rank: "LT3" },
            { ign: "xeob", rank: "LT3" },
            { ign: "StackeRrz", rank: "LT3" },
            { ign: "DrPuuuu", rank: "LT3" },
          ]}
        />
      )}
      {selectedButton === "ind lb" && (
        <GamemodeLeaderboard
          country="ind"
          players={[
            { ign: "360Mall", rank: "HT3" },
            { ign: "9fts", rank: "LT3" },
            { ign: "mistyibra", rank: "LT3" },
            { ign: "CattoL0VeR", rank: "LT3" },
            { ign: "Critspammer449", rank: "LT3" },
            { ign: "Critspammer449", rank: "LT3" },
            { ign: "ShubDaRizzler_", rank: "LT3" },
            { ign: "RunThe1s_", rank: "LT3" },
            { ign: "TimeIess_", rank: "LT3" },
            { ign: "OhioKidooo", rank: "LT3" },
            { ign: "Sahibiguess", rank: "LT3" },
          ]}
        />
      )}
    </div>
  );
}

export default leaderboard;
