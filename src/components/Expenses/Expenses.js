import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const items = props.items;

  return (
    <Card className="expenses">
      <ExpenseItem
        title={items[0].title}
        price={items[0].price}
        date={items[0].date}
      />
      <ExpenseItem
        title={items[1].title}
        price={items[1].price}
        date={items[1].date}
      />
      <ExpenseItem
        title={items[3].title}
        price={items[2].price}
        date={items[2].date}
      />
      <ExpenseItem
        title={items[3].title}
        price={items[3].price}
        date={items[3].date}
      />
    </Card>
  );
};

export default Expenses;
