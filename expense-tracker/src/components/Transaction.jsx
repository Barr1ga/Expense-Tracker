import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <div className="transaction-row">
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
      </li>
      <button
        className="delete"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </div>
  );
}

export default Transaction;
