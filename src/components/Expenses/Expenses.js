import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filterSelectedHandler = (year) => {
    setSelectedYear(year);
    console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onChangeSelected={filterSelectedHandler}
      />
      <ExpenseItem
        date={props.expenses[0].date}
        amount={props.expenses[0].amount}
        title={props.expenses[0].title}
      />
      <ExpenseItem
        date={props.expenses[1].date}
        amount={props.expenses[1].amount}
        title={props.expenses[1].title}
      />
      <ExpenseItem
        date={props.expenses[2].date}
        amount={props.expenses[2].amount}
        title={props.expenses[2].title}
      />
      <ExpenseItem
        date={props.expenses[3].date}
        amount={props.expenses[3].amount}
        title={props.expenses[3].title}
      />
    </Card>
  );
};

export default Expenses;
