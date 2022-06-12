import React from 'react'
import CartContext from './cart-context'

export const CartProvider = (props) => {

    const addItemCartHandler = (item) => {

    }

    const removeItemFromCartHandler = (id) => {

    }

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemCartHandler,
        removeItem: removeItemFromCartHandler 
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
