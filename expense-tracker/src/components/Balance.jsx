import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);

  let total = 0;
  transactions.forEach((transaction) => {
    total += transaction.amount;
  });

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
}

export default Balance;
