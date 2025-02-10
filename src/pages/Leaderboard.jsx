import React, { useEffect, useState } from "react";
import Buttons from "../components/leaderboard/Buttons";
import { Outlet, useLocation, useNavigate } from "react-router";

const Leaderboard = () => {
  const [selectedButton, setSelectedButton] = useState("overall");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const lb = pathname.split("/")[2];

  useEffect(() => {
    setSelectedButton(lb);
  }, [pathname]);

  return (
    <div>
      <Buttons
        buttons={[
          { label: "OVERALL", id: "overall" },
          { label: "PAK LB", id: "pak_lb" },
          { label: "IND LB", id: "ind_lb" },
        ]}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
        onClick={(lb) => navigate(lb)}
        layoutId="lb"
      />

      <Outlet />
    </div>
  );
};

export default Leaderboard;
