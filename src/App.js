import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [];

const App = () => {
  const [expenses, AppendExpense] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    AppendExpense((prevState) => {
      expense.date = new Date(expense.date);
      expense.id = "e" + prevState.length + 1;
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
