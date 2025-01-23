import React, { useEffect, useState } from "react";
import { Color } from "../../constants/Color";
import { useModal } from "../../context/modalContext";
import TierDisplayBox from "./TierDisplayBox";

function TierModal() {
  const { modalState, setModalState } = useModal();
  const { ign, rank, country } = modalState.player;
  const [imageLoading, setImageLoading] = useState(true);

  const closeModal = () => setModalState({ ...modalState, show: false });

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  }, []);

  return (
    <div style={styles.modalOverlay} onClick={closeModal}>
      <div style={styles.modalBody} onClick={(e) => e.stopPropagation()}>
        <p style={styles.ignText}>{ign}</p>
        <p style={styles.countryText}>
          Country: {country === "pk" ? "Pakistan" : "India"}
        </p>

        <img
          src={`https://render.crafty.gg/3d/full/${ign}`}
          alt="Player Skin"
          style={imageLoading ? { display: "none" } : styles.skinImage}
          onLoad={() => setImageLoading(false)}
        />
        {imageLoading && (
          <div style={styles.loaderWrapper}>
            <div className="loader"></div>
          </div>
        )}
        {/* prettier-ignore */}
        <div style={styles.tierContainer}>
          <TierDisplayBox type="tier-sword" tier="HT4"/>
          <TierDisplayBox type="tier-nethpot" tier="HT3"/>
          <TierDisplayBox type="tier-crystal" tier="LT4"/>
          <TierDisplayBox type="tier-diapot" tier="HT5"/>
          <TierDisplayBox type="tier-axe" orientation="left" tier="LT5"/>
          <TierDisplayBox type="tier-uhc" orientation="left" tier="HT4"/>
          <TierDisplayBox type="tier-smp" orientation="left" tier="HT4"/>
        </div>
      </div>
    </div>
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
    border: `4px solid #333`,
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
