import React, { useEffect } from "react";
import { useTierModal } from "../../hooks/useTierModal";
import { BeatLoader } from "react-spinners";
import { domAnimation, LazyMotion } from "motion/react";
import { fetchPlayerData } from "../../api/players";
import { useQuery } from "@tanstack/react-query";
import TierDisplayBoxContainer from "./TierDisplayBoxContainer";
import * as m from "motion/react-m";
import { colors } from "../../tokens.stylex";

function TierModal() {
  //prettier-ignore
  const { ign, country, imageLoading, setImageLoading, closeModal } = useTierModal();
  const skin = imageLoading ? { display: "none" } : styles.skinImage;

  const { data: player } = useQuery({
    queryFn: () => fetchPlayerData(ign),
    queryKey: ["player", ign?.toLowerCase()],
    staleTime: 60_000,
    gcTime: 60_000,
  });

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
        style={styles.modalOverlay}
        onClick={() => {
          closeModal();
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
      >
        <m.div
          style={styles.modalBody}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0.5, y: "5px" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0.5, y: "-5px" }}
          transition={{ duration: 0.1 }}
        >
          <p style={styles.ignText}>{ign}</p>
          <p style={styles.countryText}>Country: {country}</p>
          <img
            src={`https://render.crafty.gg/3d/full/${ign}`}
            style={skin}
            onLoad={() => setImageLoading(false)}
          />

          {imageLoading && <Loader />}

          <TierDisplayBoxContainer rank={player?.rank} />
        </m.div>
      </m.div>
    </LazyMotion>
  );
}

const Loader = () => (
  <div style={styles.loaderWrapper}>
    <BeatLoader
      color={colors.loader}
      style={{ backgroundColor: colors.primary }}
    />
  </div>
);

const styles = {
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
    border: "4px solid #333",
  },
  skinImage: {
    backgroundColor: colors.primary,
    width: "158px",
    height: "256px",
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
};

export default TierModal;
