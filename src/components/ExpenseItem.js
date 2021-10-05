import React from "react";
import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>October 05 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">ksh. 51000</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
