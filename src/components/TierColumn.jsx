import React from "react";
import TierRow from "./TierRow";

const TierColumn = ({ players, onShowModal }) => {
  const styles = {};

  return (
    <div style={styles}>
      {players.map((player) => (
        <TierRow
          ign={player.ign}
          rank={player.rank}
          country={player.country}
          onShowModal={onShowModal}
          key={player.ign}
        />
      ))}
    </div>
  );
};

export default TierColumn;
