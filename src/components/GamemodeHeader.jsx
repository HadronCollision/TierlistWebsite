import React from "react";

const GamemodeHeader = () => {
  return (
    <div style={styles.container}>
      <div>Sword</div>
      <div>Netherite Pot</div>
      <div>Crystal</div>
      <div>Diamond Pot</div>
      <div>Axe & Shield</div>
      <div>UHC Kit</div>
      <div>SMP Kit</div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
  },
};

export default GamemodeHeader;
