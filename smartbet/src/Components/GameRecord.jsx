import React from "react";
import "./styles/GameRecord.css"; // Add styles for better visuals

const GameRecord = ({ records }) => {
  return (
    <div className="game-record-container">
      <h3>Game Record</h3>
      <table className="game-record-table">
        <thead>
          <tr>
            <th>Period</th>
            <th>Price</th>
            <th>Number</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {records.length > 0 ? (
            records.map((record, index) => (
              <tr key={index}>
                <td>{record.period}</td>
                <td>₹{record.price.toFixed(2)}</td>
                <td>{record.number}</td>
                <td className={`result ${record.result.toLowerCase()}`}>
                  {record.result}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No records available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GameRecord;
