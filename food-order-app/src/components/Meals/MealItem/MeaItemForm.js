import React, { useRef } from 'react'
import classes from './MealItemForm.module.css'
import { Input } from '../../UI/Input'

export const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const submitHandler = event => {
    event.preventDefault();

  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input label="Amount" input={{
        ref: { amountInputRef },
        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
      }} />
      <button>+ Add</button>
    </form>
  )
}
