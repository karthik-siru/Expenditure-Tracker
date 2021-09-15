import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, SetisEditing] = useState(false);

  const SaveExpenseDataHandler = (enteredData) => {
    props.onAddExpense(enteredData);
    SetisEditing(false);
  };

  const StopEditingHandler = () => {
    SetisEditing(false);
  };
  const StartEditingHandler = () => {
    SetisEditing(true);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={StartEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={StopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
