import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.length > 0 ? transactions.map((transaction, index) => (
          <Transaction transaction={transaction} />
        )) : (
            <>
            <span className="empty-list">You have no transactions</span>
            </>
        )}
      </ul>
    </>
  );
}

export default TransactionList;
