import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "Car Insurance 1", price: "400", date: new Date(2021, 3, 11) },
    { title: "Car Insurance 2", price: "500", date: new Date(2021, 3, 12) },
    { title: "Car Insurance 3", price: "600", date: new Date(2021, 3, 13) },
    { title: "Car Insurance 4", price: "700", date: new Date(2021, 3, 15) },
  ];

  return (
    <Card>
      <NewExpense />
      <Expenses items={expenses} />
    </Card>
  );
};

export default App;
