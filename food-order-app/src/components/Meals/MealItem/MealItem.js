import classes from './MealItem.module.css'
import { MealItemForm } from './MeaItemForm';
import React from 'react'

export const MealItem = (props) => {

    const price = `$${props.price.toFixed(2)}`;

    return (
        <li className={classes.meal}>
            <div>
                <h3 className={classes.name}>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id}/>
            </div>
        </li>
    )
}