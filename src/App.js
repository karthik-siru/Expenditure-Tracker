import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car Insurance 1", price: "400", date: new Date(2021, 3, 11) },
    { title: "Car Insurance 2", price: "500", date: new Date(2021, 3, 12) },
    { title: "Car Insurance 3", price: "600", date: new Date(2021, 3, 13) },
    { title: "Car Insurance 4", price: "700", date: new Date(2021, 3, 15) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        price={expenses[3].price}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
