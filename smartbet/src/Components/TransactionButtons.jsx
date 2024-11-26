import React from "react";
import "./styles/TransactionButtons.css";

const TransactionButtons = ({ onDeposit, onWithdraw }) => {
  return (
    <div className="transaction-buttons-container">
      <button className="transaction-button deposit" onClick={onDeposit}>
        Deposit
      </button>
      <button className="transaction-button withdraw" onClick={onWithdraw}>
        Withdraw
      </button>
    </div>
  );
};

export default TransactionButtons;
