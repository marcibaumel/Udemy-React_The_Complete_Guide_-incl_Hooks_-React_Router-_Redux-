import React, { useState } from 'react'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'
import { ExpensesChart } from './ExpensesChart'

const Expenses = (props) => {

    const [dateFilter, setDateFilter] = useState('2020');

    const onDateFilterSave = (selectedYear) => {
        setDateFilter(selectedYear);
    }

    const filteredExpenses = props.items.filter((expenses) => {
        return expenses.date.getFullYear().toString() === dateFilter;
    })
   
    return (
        <>
            <Card className='expenses'>
                <ExpensesFilter selected={dateFilter} onChangeFilter={onDateFilterSave} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpenseList items={filteredExpenses}/>
            </Card>
        </>
    )
}

export default Expenses;