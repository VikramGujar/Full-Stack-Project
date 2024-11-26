import React from "react";
import "./styles/NumberPad.css"; // Add styles for better visuals

const NumberPad = ({ onNumberSelect }) => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // Array of numbers to display

  const handleNumberClick = (number) => {
    onNumberSelect(number); // Trigger the callback with the selected number
  };

  return (
    <div className="number-pad">
      {numbers.map((number) => (
        <button
          key={number}
          className="number-button"
          onClick={() => handleNumberClick(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default NumberPad;
