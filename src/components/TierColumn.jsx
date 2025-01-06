import React from "react";
import TierRow from "./TierRow";

const TierColumn = ({ players }) => {
  return (
    <div>
      {players.map((player) => (
        <TierRow player={player} key={player.ign} />
      ))}
    </div>
  );
};

export default TierColumn;
