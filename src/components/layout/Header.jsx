import React from "react";
import { Text } from "react-font";
import { NavLink, Outlet } from "react-router";
import { useModal } from "../../context/modalContext";
import TierModal from "../modal/TierModal";
import SearchBar from "./SearchBar";
import { AnimatePresence } from "motion/react";

const Header = () => {
  console.log("Header render");

  return (
    <div style={{ width: "100vw", minWidth: "1200px" }}>
      <header style={styles.header}>
        <SearchBar style={styles.left} />
        <div style={styles.center}>
          <Text family="Space Mono" style={styles.text}>
            - Pakistan & India Tier List -
          </Text>
        </div>
        <NavLink style={styles.right} to="https://discord.gg/dd8hDGZP">
          <img
            style={styles.dcIcon}
            src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg"
          />
        </NavLink>
      </header>
      <Outlet />
      <Modal />
    </div>
  );
};

const Modal = () => {
  const { modalState } = useModal();
  return <AnimatePresence>{modalState.show && <TierModal />}</AnimatePresence>;
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 20px",
  },
  text: {
    fontSize: "32px",
    color: "#fff",
    cursor: "pointer",
    userSelect: "none",
  },
  dcIcon: {
    height: "32px",
    width: "32px",
    cursor: "pointer",
  },
  left: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
  },
  center: {
    flex: 2,
    display: "flex",
    justifyContent: "center",
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
};

export default Header;
