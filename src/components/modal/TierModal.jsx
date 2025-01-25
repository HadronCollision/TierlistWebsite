import React, { useEffect, useState } from "react";
import { Color } from "../../constants/color";
import TierDisplayBox from "./TierDisplayBox";
import { useTierModal } from "../../hooks/useTierModal";
import { BeatLoader } from "react-spinners";
import { AnimatePresence, motion } from "motion/react";

function TierModal() {
  //prettier-ignore
  const { ign, rank, country, imageLoading, setImageLoading, closeModal } = useTierModal();
  const [isVisible, setIsVisible] = useState(true);

  const countryTwo = country === "pk" ? "Pakistan" : "India";
  const skinTwo = imageLoading ? { display: "none" } : styles.skinImage;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsVisible(false);
        setTimeout(() => closeModal(), 250);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div
          style={styles.modalOverlay}
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => closeModal(), 250);
          }}
        >
          <motion.div
            style={styles.modalBody}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: "10px" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-10px" }}
            transition={{ duration: 0.15 }}
          >
            <p style={styles.ignText}>{ign}</p>
            <p style={styles.countryText}>Country: {countryTwo}</p>

            <img
              src={`https://render.crafty.gg/3d/full/${ign}`}
              alt="Player Skin"
              style={skinTwo}
              onLoad={() => setImageLoading(false)}
            />

            {imageLoading && (
              <div style={styles.loaderWrapper}>
                <BeatLoader
                  color="#aaa"
                  style={{ backgroundColor: Color.highTier }}
                />
              </div>
            )}

            <div style={styles.tierContainer}>
              <TierDisplayBox type="tier-sword" tier="HT4" />
              <TierDisplayBox type="tier-nethpot" tier="HT3" />
              <TierDisplayBox type="tier-crystal" tier="LT4" />
              <TierDisplayBox type="tier-diapot" tier="HT5" />
              <TierDisplayBox type="tier-axe" orientation="left" tier="LT5" />
              <TierDisplayBox type="tier-uhc" orientation="left" tier="HT4" />
              <TierDisplayBox type="tier-smp" orientation="left" tier="HT4" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

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
    backgroundColor: Color.highTier,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: `inset 0px 0px 50px ${Color.lowTier}`,
    border: "4px solid #333",
  },
  skinImage: {
    backgroundColor: Color.highTier,
    width: "158px",
    height: "256px",
  },
  ignText: {
    backgroundColor: Color.highTier,
    fontSize: "24px",
    fontWeight: "bold",
  },
  countryText: {
    backgroundColor: Color.highTier,
    color: "#7a7a7a",
  },
  loaderWrapper: {
    height: "256px",
    width: "158px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.highTier,
  },
  tierContainer: {
    position: "absolute",
    transform: "translate(-60px, -30px)",
  },
  tierBox: {
    position: "absolute",
  },
};

export default TierModal;
