import {createSlice} from "@reduxjs/toolkit";
import {uiActions} from "./ui-slice";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
});

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending',
                message: 'Sending cart data!'
            })
        );

        const sendRequest = async () => {
            const response = await fetch('https://react-http-1bf8b-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(cart)
                });
            if (!response.ok) {
                throw new Error('Sending cart data error');
                //return
            }
        }

        try {
            await sendRequest();

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sending cart data successfully!'
            }))
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }))
        }


    }
}

export const cartAction = cartSlice.actions;
export default cartSlice;