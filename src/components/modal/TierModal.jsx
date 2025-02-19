import React, { useEffect } from "react";
import { useTierModal } from "../../hooks/useTierModal";
import { BeatLoader } from "react-spinners";
import { domAnimation, LazyMotion } from "motion/react";
import TierDisplayBoxContainer from "./TierDisplayBoxContainer";
import * as m from "motion/react-m";
import { colors } from "../../tokens.stylex";
import * as stylex from "@stylexjs/stylex";
import { useFetchPlayerData } from "../../hooks/useFetchPlayerData";

function TierModal() {
  //prettier-ignore
  const { ign, country, imageLoading, setImageLoading, closeModal } = useTierModal();
  const { data, isFetching: tiersLoading } = useFetchPlayerData(ign);
  const isLoading = imageLoading || tiersLoading;
  const skin = isLoading ? styles.skinHidden : styles.skinImage;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        {...stylex.props(styles.modalOverlay)}
        onClick={() => closeModal()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
      >
        <m.div
          {...stylex.props(styles.modalBody)}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0.5, y: "5px" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0.5, y: "-5px" }}
          transition={{ duration: 0.1 }}
        >
          <p {...stylex.props(styles.ignText)}>{ign}</p>
          <p {...stylex.props(styles.countryText)}>Country: {country}</p>
          <img
            src={`https://render.crafty.gg/3d/full/${ign}`}
            {...stylex.props(skin)}
            onLoad={() => setImageLoading(false)}
          />

          {isLoading && <Loader />}

          <TierDisplayBoxContainer rank={data?.rank} isLoading={isLoading} />
        </m.div>
      </m.div>
    </LazyMotion>
  );
}

const Loader = () => (
  <div {...stylex.props(styles.loaderWrapper)}>
    <BeatLoader color={colors.loader} {...stylex.props(styles.loader)} />
  </div>
);

const styles = stylex.create({
  modalOverlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    height: "100vh",
    width: "100vw",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalBody: {
    height: "500px",
    width: "500px",
    borderRadius: "250px",
    backgroundColor: colors.primary,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: `inset 0px 0px 50px ${colors.secondary}`,
    border: `4px solid ${colors.secondary}`,
  },
  skinImage: {
    backgroundColor: colors.primary,
    width: "158px",
    height: "256px",
  },
  skinHidden: {
    display: "none",
  },
  ignText: {
    backgroundColor: colors.primary,
    fontSize: "24px",
    fontWeight: "bold",
    margin: 0,
  },
  countryText: {
    backgroundColor: colors.primary,
    color: "#7a7a7a",
    margin: 0,
  },
  loader: {
    backgroundColor: colors.primary,
  },
  loaderWrapper: {
    height: "256px",
    width: "158px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  tierBox: {
    position: "absolute",
  },
});

export default TierModal;
