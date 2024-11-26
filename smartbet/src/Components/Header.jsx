import React from "react";
import "./styles/Header.css"; // Import CSS for styling

const Header = ({ balance, onRefresh }) => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="app-logo">SmartBet</h1> {/* App logo */}
      </div>
      <div className="header-middle">
        <button className="header-button">Recharge</button>
        <button className="header-button">Read Rule</button>
      </div>
      <div className="header-right">
        <div className="balance">
          <span>Available Balance:</span>
          <strong> ₹ {balance.toFixed(2)}</strong>
        </div>
        <button className="refresh-button" onClick={onRefresh}>
          🔄 Refresh
        </button>
      </div>
    </header>
  );
};

export default Header;
