import React from "react";
import "./Nabvar.css";

export default function Navbar({
  volverInicio,
}) {
  return (
    <nav className="navbar">

      <div
        className="nav-item logo"
        onClick={volverInicio}
      >
        Home
      </div>

      <div className="nav-center">

        <div className="nav-item">
          
        </div>

        <div className="nav-item">
          
        </div>

      </div>

    </nav>
  );
}