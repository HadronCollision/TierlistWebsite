import React from "react";
import { Text } from "react-font";
import { NavLink, Outlet } from "react-router";
import { useSearch } from "../context/searchContext";
import { useModal } from "../context/modalContext";
import TierModal from "./modal/TierModal";

function Header() {
  const { search, setSearch } = useSearch();
  const { modalState, setModalState } = useModal();

  const onSubmit = (e) => {
    e.preventDefault();
    setModalState({ show: true, player: { ign: search, country: "pk" } });
  };

  return (
    <div style={{ width: "100vw", minWidth: "1200px" }}>
      <header style={styles.header}>
        <form style={styles.left} onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
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
      {modalState.show && <TierModal />}
    </div>
  );
}

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
