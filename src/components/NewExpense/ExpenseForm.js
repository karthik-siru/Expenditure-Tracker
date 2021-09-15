import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, SetenteredTitle] = useState("");
  const [enteredAmount, SetenteredAmount] = useState("");
  const [enteredDate, SetenteredDate] = useState("");

  const TitleChangeHandler = (event) => {
    SetenteredTitle(event.target.value);
  };
  const AmountChangeHandler = (event) => {
    SetenteredAmount(event.target.value);
  };
  const DateChangeHandler = (event) => {
    SetenteredDate(event.target.value);
  };

  const SubmitFormHandler = (event) => {
    event.preventDefault();
    const ExpenseData = {
      title: enteredTitle,
      price: enteredAmount,
      date: enteredDate,
    };

    props.onSaveExpenseData(ExpenseData);
    SetenteredTitle("");
    SetenteredAmount("");
    SetenteredDate("");
  };

  return (
    <form onSubmit={SubmitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={TitleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-2-5"
            max="2022-12-31"
            value={enteredDate}
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
