import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const SaveExpenseDataHandler = (enteredData) => {
    props.onAddExpense(enteredData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveEXpenseData={SaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
