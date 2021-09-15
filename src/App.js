import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  { title: "Car Insurance 1", price: "400", date: new Date(2021, 3, 11) },
  { title: "Car Insurance 2", price: "500", date: new Date(2021, 3, 12) },
  { title: "Car Insurance 3", price: "600", date: new Date(2021, 3, 13) },
  { title: "Car Insurance 4", price: "700", date: new Date(2021, 3, 15) },
];

const App = () => {
  const [expenses, AppendExpense] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    AppendExpense((prevState) => {
      expense.date = new Date(expense.date);
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
