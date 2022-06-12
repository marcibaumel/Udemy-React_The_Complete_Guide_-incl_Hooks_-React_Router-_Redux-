import classes from './MealItem.module.css'
import { MealItemForm } from './MeaItemForm';
import {useContext} from 'react';
import CartContext from '../../../store/cart-context';
import React from 'react'

export const MealItem = (props) => {
    const cartCtx = useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id:props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3 className={classes.name}>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart = {addToCartHandler}/>
            </div>
        </li>
    )
}
