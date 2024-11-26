import React from "react";
import "./styles/ColorSelection.css"; // Add your styles for better visuals

const ColorSelection = ({ onSelectColor }) => {
  const handleColorClick = (color) => {
    onSelectColor(color); // Trigger the callback with the selected color
  };

  return (
    <div className="color-selection">
      <button
        className="color-button green"
        onClick={() => handleColorClick("Green")}
      >
        Join Green
      </button>
      <button
        className="color-button violet"
        onClick={() => handleColorClick("Violet")}
      >
        Join Violet
      </button>
      <button
        className="color-button red"
        onClick={() => handleColorClick("Red")}
      >
        Join Red
      </button>
    </div>
  );
};

export default ColorSelection;
