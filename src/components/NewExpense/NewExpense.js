import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formIsVisible, setFormIsVisible] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    props.onAddExpense(expenseData);
    toggleExpenseForm();
  };

  const toggleExpenseForm = () => {
    setFormIsVisible((prevState) => {
      return !prevState;
    });
  };

  if (!formIsVisible) {
    return (
      <div className="new-expense">
        <button onClick={toggleExpenseForm}>Add new Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <button onClickCapture={toggleExpenseForm}>Add New Expense</button>
      <ExpenseForm
        onCancelled={toggleExpenseForm}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    </div>
  );
};

export default NewExpense;
