import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router";
import { useModal } from "../../context/modalContext";
import TierModal from "../modal/TierModal";
import SearchBar from "./SearchBar";
import { AnimatePresence } from "motion/react";
import FontFaceObserver from "fontfaceobserver-es";
import SplashScreen from "./SplashScreen";
import * as stylex from "@stylexjs/stylex";
import GamemodeHeader from "../tiers/GamemodeHeader";

const Header = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const roboto = new FontFaceObserver("Roboto");
    const blackOpsOne = new FontFaceObserver("Black Ops One");
    const varelaRound = new FontFaceObserver("Varela Round");

    Promise.all([roboto.load(), blackOpsOne.load(), varelaRound.load()])
      .then(() => {
        setShowSplashScreen(false);
      })
      .catch(() => {
        setShowSplashScreen(false);
      });
  }, []);

  return (
    <>
      {showSplashScreen && <SplashScreen />}
      <div
        {...stylex.props(
          showSplashScreen ? { display: "none" } : styles.default
        )}
      >
        <header {...stylex.props(styles.header)}>
          <SearchBar style={styles.left} />
          <div {...stylex.props(styles.center)}>
            <p {...stylex.props(styles.text)}>- Pakistan & India Tier List -</p>
          </div>
          <NavLink
            {...stylex.props(styles.right)}
            to="https://discord.gg/dd8hDGZP"
          >
            <img
              {...stylex.props(styles.dcIcon)}
              src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg"
            />
          </NavLink>
        </header>
        <GamemodeHeader />
        <Outlet />
        <Modal />
      </div>
    </>
  );
};

const Modal = () => {
  const { modalState } = useModal();
  return <AnimatePresence>{modalState.show && <TierModal />}</AnimatePresence>;
};

const styles = stylex.create({
  default: {
    fontFamily: "Roboto",
    width: "100%",
    minWidth: "1100px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 20px",
  },
  text: {
    fontFamily: "Russo One",
    fontSize: "38px",
    color: "#fff",
    cursor: "pointer",
    userSelect: "none",
    textWrap: "nowrap",
    margin: 0,
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
});

export default Header;
