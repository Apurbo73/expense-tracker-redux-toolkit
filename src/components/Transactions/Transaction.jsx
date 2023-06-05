import React from "react";

const Transaction = () => {
  return (
    <div>
      <li className="transaction income">
        <p>Earned this month</p>
        <div className="right">
          <p>৳ 100</p>
          <button className="link">edit </button>
          <button className="link">delete </button>
        </div>
      </li>
    </div>
  );
};

export default Transaction;
