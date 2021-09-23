import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";

const getExpensesLocalStorage = () => {
  let len = localStorage.length;
  let expenses = [];
  for (let i = len; i > 0; i--) {
    let expense = JSON.parse(localStorage["e" + i]);
    expense.date = new Date(expense.date);
    expense.price = Number(expense.price);
    expenses.push(expense);
  }
  return expenses;
};

const INITIAL_EXPENSES = getExpensesLocalStorage();

const App = () => {
  const [expenses, AppendExpense] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    AppendExpense((prevState) => {
      expense.date = new Date(expense.date);
      expense.id = "e" + (prevState.length + 1);
      localStorage.setItem(expense.id, JSON.stringify(expense));
      return [expense, ...prevState];
    });
  };

  return (
    <Card>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </Card>
  );
};

export default App;
