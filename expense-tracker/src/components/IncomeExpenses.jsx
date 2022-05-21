import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  let income = 0;
  let expenses = 0;
  transactions.forEach((transaction) => {
    transaction.amount > 0 
    ? income += transaction.amount 
    : expenses += transaction.amount 
  });

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(expenses)}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
