import React, { useState, useEffect } from "react";
import "./styles/GameTimer.css"; 

const GameTimer = ({ initialTime, onTimerEnd }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimerEnd(); 
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId); 
  }, [timeLeft, onTimerEnd]);

  
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="game-timer">
      <span className="timer-text">Count Down</span>
      <span className="timer-value">{formatTime(timeLeft)}</span>
    </div>
  );
};

export default GameTimer;
