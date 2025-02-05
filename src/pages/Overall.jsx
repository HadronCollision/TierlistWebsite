import React, { useState } from "react";
import Buttons from "../components/overall/Buttons";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../tokens.stylex";
import { useModal } from "../context/modalContext";
import PlayerContainer from "../components/overall/PlayerContainer";

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
          <div {...stylex.props(styles.subContainer, styles.leftSubContainer)}>
            <div {...stylex.props(styles.title)}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
                {...stylex.props(styles.flag)}
              />
              TOP 10 ACTIVE PLAYERS FROM PAKISTAN
            </div>
            <div {...stylex.props(styles.playerContainer)}>
              {[
                "FakeDrugLord123",
                "YTMe_",
                "asimyuh_FAN",
                "xUltimate_",
                "Raxizz",
                "Sqxshyy",
                "FllNISH",
                "xeob",
                "StackeRrz",
                "DrPuuuu",
              ].map((player, i) => (
                <PlayerContainer
                  player={player}
                  index={i}
                  setModalState={setModalState}
                  key={i}
                />
              ))}
            </div>
          </div>
          <div {...stylex.props(styles.subContainer, styles.rightSubContainer)}>
            <div {...stylex.props(styles.title)}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                {...stylex.props(styles.flag)}
              />
              TOP 10 ACTIVE PLAYERS FROM INDIA
            </div>
            <div {...stylex.props(styles.playerContainer)}>
              {[
                "360Mall",
                "Ywti",
                "mistyibra",
                "CattoL0VeR",
                "Critspammer449",
                "ShubDaRizzler_",
                "RunThe1s_",
                "TimeIess_",
                "OhioKidooo",
                "Sahibiguess",
              ].map((player, i) => (
                <PlayerContainer
                  player={player}
                  index={i}
                  setModalState={setModalState}
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      {selectedButton === "top 10" && (
        <div style={{ color: colors.textColor, textAlign: "center" }}>
          INSAAF KA EMAAN KA ROSHAN PAKISTAN KA YAY DEKHO POORA HUA JO KHAWAB
          THA KAPTAAN KA
        </div>
      )}
    </div>
  );
}

const styles = stylex.create({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    color: colors.textColor,
    marginBottom: "32px",
  },
  subContainer: {
    backgroundColor: colors.primary,
    padding: "12px",
    minWidth: "500px",
    width: "100%",
  },
  leftSubContainer: {
    borderRadius: "48px 0 0 48px",
  },
  rightSubContainer: {
    borderRadius: "0 48px 48px 0",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    alignItems: "center",
    fontFamily: "Russo One",
    fontSize: "20px",
    height: "32px",
    marginBottom: "8px",
  },
  playerContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  flag: {
    height: "100%",
    borderRadius: "4px",
  },
});

export default Overall;
