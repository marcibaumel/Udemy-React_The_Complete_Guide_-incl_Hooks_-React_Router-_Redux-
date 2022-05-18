import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpenseFilter'

const Expenses = (props) => {

    const [dateFilter, setDateFilter] = useState('2020');

    const onDateFilterSave = (selectedYear) => {
        setDateFilter(selectedYear);
    }

    let expensesContent = <p>No expenses founded</p>

    if(props.items.filter(expense => expense.date.getFullYear().toString() === dateFilter).length > 0){
        expensesContent =  props.items.filter(expense => expense.date.getFullYear().toString() === dateFilter).map(expense =>
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)
    }
    return (
        <>
            <Card className='expenses'>

                <ExpensesFilter selected={dateFilter} onChangeFilter={onDateFilterSave} />
                {expensesContent}
            </Card>
        </>
    )
}

export default Expenses;