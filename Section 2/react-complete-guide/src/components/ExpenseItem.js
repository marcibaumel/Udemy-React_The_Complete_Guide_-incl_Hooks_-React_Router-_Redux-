import React from 'react'
import './ExpenseItem.css'

function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>March 28</div>
            <div className='expense-item__description'>
                <h2>Car Price</h2>
                <div className='expense-item__price'>294.3</div>
            </div>
        </div>
    )
}

export default ExpenseItem;
