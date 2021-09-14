import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const Clicked = () => {
    setTitle("Updated!");
    console.log("title");
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{"$" + props.price}</div>
      </div>
      <button onClick={Clicked}>Click Me</button>
    </div>
  );
};

export default ExpenseItem;
