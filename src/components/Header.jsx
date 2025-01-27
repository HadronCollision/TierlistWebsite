import React from "react";
import { Text } from "react-font";
import { Outlet } from "react-router";

function Header() {
  return (
    <div>
      <div style={styles.header}>
        <Text family="Space Mono" style={styles.text}>
          - Pakistan & India Tier List -
        </Text>
      </div>
      <Outlet />
    </div>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "center",
    margin: "10px 0",
  },
  text: {
    fontSize: "32px",
    color: "#fff",
    cursor: "pointer",
    userSelect: "none",
  },
};

export default Header;
