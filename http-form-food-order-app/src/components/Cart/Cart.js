import React, {useContext, useState} from 'react'
import CartContext from '../../store/cart-context';
import {Checkout} from "./Checkout";
import CartItem from './CartItem';
import classes from './Cart.module.css'
import {Modal} from '../UI/Modal';

export const Cart = (props) => {

    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1})
    }

    const orderHandler = () => {
        setIsCheckout(true);
    };

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch(process.env.REACT_APP_FIREBASE_URL_ORDER, {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderItems: cartCtx.items
            })
        });
        setIsSubmitting(false)
        setDidSubmit(true);
        cartCtx.clearCart();
    }

    const cartItems = (
        <ul className={classes['cart-items']}>{cartCtx.items.map(item =>
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}/>)}</ul>);

    const modalActions = (
        <div className={classes.actions}>
            <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
            {hasItems && <button onClick={orderHandler} className={classes.button}>Order</button>}
        </div>);

    const cartModalContent = (<React.Fragment>
            {cartItems}
            <div className={classes.total}>
                <span>Total AMount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
            {!isCheckout && modalActions}
        </React.Fragment>
    );

    const isSubmittingContent = <p>Sending order data...</p>

    const didSubmitModelContent = (
        <React.Fragment>
            <p>Successfully sent the order!</p>
            <div className={classes.actions}>
                <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
            </div>
        </React.Fragment>
    );

    return (
        <Modal onClose={props.onClose}>
            {(!isSubmitting && !didSubmit) && cartModalContent}
            {isSubmitting && isSubmittingContent}
            {(!isSubmitting && didSubmit) && didSubmitModelContent}
        </Modal>
    )
}