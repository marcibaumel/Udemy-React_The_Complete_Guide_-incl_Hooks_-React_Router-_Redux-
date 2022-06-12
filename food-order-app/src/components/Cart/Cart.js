import React from 'react'
import classes from './Cart.module.css'
import { Modal } from '../UI/Modal';

export const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>{[{ id: 'c1', name: 'su', amount: 2, price: 12.88 }].map(item =>
        <li>{item.name}</li>)}</ul>;

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total AMount</span>
                <span>35.6</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}
