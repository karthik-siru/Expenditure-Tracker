import './ExpenseItem.css';

function ExpenseItem () {

    const ExpenseDate = new Date(2021,3,12);
    const ExpenseTitle = "Car Insurance";
    const ExpensePrice = 209.67;

    return <div className="expense-item">
        <div>ExpenseDate</div>
        <div className="expense-item__description">
            <h2>{ExpenseTitle}</h2>
            <div className="expense-item__price">{"$" + ExpensePrice}</div>
        </div>
    </div>;
}

export default ExpenseItem;