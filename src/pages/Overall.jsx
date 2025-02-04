import React, { useState } from "react";
import Buttons from "../components/overall/Buttons";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../tokens.stylex";
import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import { useModal } from "../context/modalContext";

function Overall() {
  const [selectedButton, setSelectedButton] = useState("overall");
  const { setModalState } = useModal();

  return (
    <div>
      <Buttons
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      {selectedButton === "overall" && (
        <div {...stylex.props(styles.container)}>
          <div {...stylex.props(styles.subContainer)}>
            <div {...stylex.props(styles.title)}>TOP 10 PAKISTAN</div>
            <div {...stylex.props(styles.playerContainer)}>
              {[
                "FakeDrugLord123",
                "YTMe_",
                "ItzFearMe",
                "xUltimate_",
                "Raxizz",
                "Ayan_X_Mn",
                "FllNISH",
                "xeob",
                "StackeRrz",
                "DrPuuuu",
              ].map((player, i) => (
                <LazyMotion features={domAnimation} key={i}>
                  <m.span
                    {...stylex.props(styles.playerCell)}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      setModalState({
                        show: true,
                        player: { ign: player, country: "pk" },
                      })
                    }
                  >
                    <span {...stylex.props(styles.index)}>{i + 1}</span>
                    <img
                      src={`https://render.crafty.gg/3d/head/${player}`}
                      {...stylex.props(styles.skin)}
                    />
                    {player}
                  </m.span>
                </LazyMotion>
              ))}
            </div>
          </div>
          <div {...stylex.props(styles.subContainer)}>
            <div {...stylex.props(styles.title)}>TOP 10 INDIA</div>
            <div {...stylex.props(styles.playerContainer)}>
              {[
                "PookieMall",
                "Ywti",
                "mistyibra",
                "Swerin",
                "xThunder___",
                "ShubDaRizzler_",
                "RunThe1s_",
                "HYPERizOP",
                "OhioKidooo",
                "Sahibiguess",
              ].map((player, i) => (
                <LazyMotion features={domAnimation} key={i}>
                  <m.span
                    {...stylex.props(styles.playerCell)}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      setModalState({
                        show: true,
                        player: { ign: player, country: "in" },
                      })
                    }
                  >
                    <span {...stylex.props(styles.index)}>{i + 1}</span>
                    <img
                      src={`https://render.crafty.gg/3d/head/${player}`}
                      {...stylex.props(styles.skin)}
                    />
                    {player}
                  </m.span>
                </LazyMotion>
              ))}
            </div>
          </div>
        </div>
      )}
      {selectedButton === "top 10" && <div></div>}
    </div>
  );
}

const styles = stylex.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: colors.textColor,
    marginBottom: "32px",
  },
  subContainer: {
    backgroundColor: colors.primary,
    padding: "12px",
    borderRadius: "12px",
    minWidth: "400px",
    marginHorizontal: "1vw",
  },
  title: {
    fontFamily: "Black Ops One",
    fontSize: "24px",
    textAlign: "center",
  },
  playerContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  playerCell: {
    width: "100%",
    height: "40px",
    display: "flex",
    alignItems: "center",
    backgroundColor: colors.secondary,
    margin: "4px 0px",
    borderRadius: "4px",
    fontSize: "20px",
    cursor: "pointer",
  },
  index: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "32px",
    borderRadius: "4px",
    backgroundColor: colors.tertiary,
  },
  skin: {
    height: "48px",
    widht: "48px",
  },
  skinWrapper: {
    height: "48px",
    widht: "48px",
  },
});

export default Overall;
