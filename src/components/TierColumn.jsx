import React from "react";
import TierRow from "./TierRow";
import { BeatLoader } from "react-spinners";

const TierColumn = ({ players, loading }) => {
  return (
    <>
      {!loading && (
        <div>
          {players?.map((player) => (
            <TierRow player={player} key={player.ign} />
          ))}
          <div style={styles.placeholder}></div>
        </div>
      )}
      <BeatLoader
        color="#aaa"
        style={{ marginTop: "50px" }}
        loading={loading}
      />
    </>
  );
};

const styles = {
  loader: {
    width: "15vw",
    minWidth: "240px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: "75px",
  },
  placeholder: {
    width: "15vw",
    minWidth: "240px",
  },
};

export default TierColumn;
