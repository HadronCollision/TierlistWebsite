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
import { colors } from "../../tokens.stylex";

const loadIcon = (src) =>
  new Promise((resolve, reject) => {
    const icon = new Image();
    icon.src = src;
    icon.onload = () => resolve(src);
    icon.onerror = () => reject;
  });

const Header = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const roboto = new FontFaceObserver("Roboto");
    const russoOne = new FontFaceObserver("Russo One");
    const poppins = new FontFaceObserver("Poppins");
    const varelaRound = new FontFaceObserver("Varela Round");

    const icons = [
      "https://mctiers.com/tier_icons/sword.svg",
      "https://mctiers.com/tier_icons/neth_pot.svg",
      "https://mctiers.com/tier_icons/vanilla.svg",
      "https://mctiers.com/tier_icons/pot.svg",
      "https://mctiers.com/tier_icons/axe.svg",
      "https://mctiers.com/tier_icons/uhc.svg",
      "https://mctiers.com/tier_icons/smp.svg",
    ];

    Promise.all([
      roboto.load(),
      russoOne.load(),
      poppins.load(),
      varelaRound.load(),
      ...icons.map(loadIcon),
    ])
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
            <NavLink {...stylex.props(styles.text)} to="/">
              - Pakistan & India Tier List -
            </NavLink>
          </div>
          <div {...stylex.props(styles.right)}>
            <img
              {...stylex.props(styles.dcIcon)}
              src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg"
              onClick={() => window.open("https://discord.gg/tZ4vxsnass")}
            />
          </div>
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
    backgroundImage:
      "linear-gradient(to top,#0e0d0c 0%, #0e0d0c 85%, #322b27 100%)",
    backgroundSize: "100vh 100vw",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "20px",
    paddingVertical: "16px",
    // marginBottom: "16px",
  },
  text: {
    fontFamily: "Russo One",
    fontSize: "38px",
    color: colors.textColor,
    cursor: "pointer",
    userSelect: "none",
    textWrap: "nowrap",
    textDecoration: "none",
  },
  dcIcon: {
    height: "32px",
    width: "32px",
    marginHorizontal: "8px",
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
