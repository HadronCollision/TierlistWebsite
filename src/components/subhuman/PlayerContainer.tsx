import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

const PlayerContainer = ({ ign, country, reason }) => {
  return (
    <div {...stylex.props(styles.container, styles[country])}>
      <div {...stylex.props(styles.subContainer01)}>
        <div {...stylex.props(styles.ign)}>{ign}</div>
        <div {...stylex.props(styles.reason)}>{reason}</div>
      </div>
      <div {...stylex.props(styles.subContainer02)}>
        <img src={`https://render.crafty.gg/2d/head/${ign}`} width="65px" />
      </div>
    </div>
  );
};

const styles = stylex.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.primary,
    border: `1px solid ${colors.tertiary}`,
    borderLeft: "4px solid green",
    borderRadius: "8px",
    height: "80px",
    width: "70%",
    margin: "8px auto",
    padding: "24px",
    transition: "0.1s",
    ":hover": {
      opacity: 0.9,
    },
  },
  subContainer01: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "8px",
  },
  subContainer02: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "4px",
    overflow: "hidden",
  },
  ign: {
    fontSize: "24px",
    fontFamily: "Poppins",
  },
  reason: {
    fontSize: "16px",
    color: colors.loader,
  },
  pk: {
    borderLeft: `4px solid ${colors.green}`,
  },
  in: {
    borderLeft: `4px solid ${colors.orange}`,
  },
  oc: {
    borderLeft: `4px solid ${colors.tertiary}`,
  },
});

export default PlayerContainer;
