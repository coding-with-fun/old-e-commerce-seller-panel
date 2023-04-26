import { createSlice } from '@reduxjs/toolkit';
import { type RootState } from '../store';

export interface ICart {
    [_id: string]: {
        quantity: number;
        name: string;
    };
}

export interface IInitialData {
    cartData: ICart;
}

const initialState: IInitialData = {
    cartData: {},
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { _id, quantity, name } = action.payload;

            if (state.cartData[_id]) {
                if (state.cartData[_id].quantity < quantity) {
                    state.cartData[_id].quantity += 1;
                }
            } else {
                state.cartData[_id] = {
                    name,
                    quantity: 1,
                };
            }
        },

        removeFromCart: (state, action) => {
            const { _id } = action.payload;

            if (state.cartData[_id] && state.cartData[_id].quantity > 1) {
                state.cartData[_id].quantity -= 1;
            } else {
                delete state.cartData[_id];
            }
        },
    },
});

export const { addToCart, removeFromCart } = CartSlice.actions;

export const cart = (state: RootState): IInitialData => state.cart;

export default CartSlice.reducer;
