import React from "react";
import TierRow from "./TierRow";

const TierColumn = ({ players }) => {
  const styles = {};

  return (
    <div style={styles}>
      {players.map((player) => (
        <TierRow player={player} key={player.ign} />
      ))}
    </div>
  );
};

export default TierColumn;
