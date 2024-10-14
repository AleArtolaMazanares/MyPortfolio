import React from "react";
import "./style.css";

const Buttons = ({
  background = "",
  border = "none",
  borderRadius = "0px",
}) => {
  return (
    <div className="containerButtonsComponent">
      <button
        style={{
          background: background,
          border: border,
          borderRadius: borderRadius,
        }}
      >
        GitHub
      </button>
    </div>
  );
};

export default Buttons;
