import React, { useState } from "react";
import Header from "./Header";
import GameTimer from "./GameTimer";
import ColorSelection from "./ColorSelection";
import NumberPad from "./NumberPad";
import GameRecord from "./GameRecord";
import TransactionButtons from "./TransactionButtons";

const App = () => {
  // State for managing user balance
  const [balance, setBalance] = useState(10.00);

  // State for timer resets
  const [timerKey, setTimerKey] = useState(0);

  // State for user records
  const [records, setRecords] = useState([]);

  // Handle refreshing the balance
  const handleRefresh = () => {
    console.log("Balance refreshed!");
    // Add your API call or balance update logic here
  };

  // Handle timer end
  const handleTimerEnd = () => {
    alert("Time's up!");
    setTimerKey((prevKey) => prevKey + 1); // Reset the timer
  };

  // Handle deposit
  const handleDeposit = () => {
    const depositAmount = prompt("Enter deposit amount:");
    if (depositAmount && !isNaN(depositAmount)) {
      setBalance((prevBalance) => prevBalance + parseFloat(depositAmount));
      alert(`Successfully deposited ₹${depositAmount}`);
    } else {
      alert("Invalid deposit amount.");
    }
  };

  // Handle withdraw
  const handleWithdraw = () => {
    const withdrawAmount = prompt("Enter withdraw amount:");
    if (withdrawAmount && !isNaN(withdrawAmount)) {
      if (withdrawAmount > balance) {
        alert("Insufficient balance!");
      } else {
        setBalance((prevBalance) => prevBalance - parseFloat(withdrawAmount));
        alert(`Successfully withdrawn ₹${withdrawAmount}`);
      }
    } else {
      alert("Invalid withdraw amount.");
    }
  };

  // Handle color selection
  const handleColorSelection = (color) => {
    console.log(`Selected color: ${color}`);
    // Logic to handle color selection in the game
  };

  // Handle number selection
  const handleNumberSelection = (number) => {
    console.log(`Selected number: ${number}`);
    // Logic to handle number selection in the game
  };

  // Add new game record
  const addGameRecord = (period, price, number, result) => {
    setRecords((prevRecords) => [
      ...prevRecords,
      { period, price, number, result },
    ]);
  };

  return (
    <div>
      {/* Header Component */}
      <Header balance={balance} onRefresh={handleRefresh} />

      {/* Game Timer Component */}
      <GameTimer
        initialTime={120}
        onTimerEnd={handleTimerEnd}
        key={timerKey}
      />

      {/* Color Selection Component */}
      <ColorSelection onSelectColor={handleColorSelection} />

      {/* Number Pad Component */}
      <NumberPad onNumberSelect={handleNumberSelection} />

      {/* Transaction Buttons */}
      <TransactionButtons onDeposit={handleDeposit} onWithdraw={handleWithdraw} />

      {/* Game Record Component */}
      <GameRecord records={records} />
    </div>
  );
};

export default App;
