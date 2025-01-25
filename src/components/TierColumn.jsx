import React from "react";
import TierRow from "./TierRow";
import { BeatLoader } from "react-spinners";
import { motion } from "motion/react";

const TierColumn = ({ players }) => {
  return (
    <>
      {players ? (
        <motion.ul initial={{ opacity: 1 }} transition={{ duration: 1 }}>
          {players?.map((player) => (
            <TierRow player={player} key={player.ign} />
          ))}
          <div style={styles.placeholder}></div>
        </motion.ul>
      ) : (
        <BeatLoader color="#aaa" style={{ marginTop: "50px" }} />
      )}
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
