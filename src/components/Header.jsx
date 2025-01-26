import React from "react";
import { Outlet } from "react-router";

function Header() {
  return (
    <div>
      Header
      <Outlet />
    </div>
  );
}

export default Header;
