import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/user.slice';
import cartReducer from './slice/cart.slice';

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
