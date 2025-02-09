import React from "react";
import PlayerContainer from "./PlayerContainer";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

const Top10LB = () => {
  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.subContainer, styles.leftSubContainer)}>
        <div {...stylex.props(styles.title)}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
            {...stylex.props(styles.flag)}
          />
          TOP 10 BEST PLAYERS FROM PAKISTAN
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
            <PlayerContainer player={player} index={i} key={i} />
          ))}
        </div>
      </div>
      <div {...stylex.props(styles.subContainer, styles.rightSubContainer)}>
        <div {...stylex.props(styles.title)}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
            {...stylex.props(styles.flag)}
          />
          TOP 10 BEST PLAYERS FROM INDIA
        </div>
        <div {...stylex.props(styles.playerContainer)}>
          {[
            "360Mall",
            "9fts",
            "mistyibra",
            "CattoL0VeR",
            "Critspammer449",
            "ShubDaRizzler_",
            "RunThe1s_",
            "TimeIess_",
            "OhioKidooo",
            "Sahibiguess",
          ].map((player, i) => (
            <PlayerContainer player={player} index={i} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = stylex.create({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    color: colors.textColor,
    marginBottom: "32px",
    marginHorizontal: "48px",
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
    userSelect: "none",
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

export default Top10LB;
