import _ from 'lodash';
import { useAppSelector } from '../../../hooks/redux';
import CartData from './CartData';
import EmptyCart from './EmptyCart';
import './index.css';

const Cart = () => {
    const cartData = useAppSelector((state) => state.cart.cartData);

    const isCartEmpty = _.isEmpty(cartData);

    console.log(cartData);

    return isCartEmpty ? <EmptyCart /> : <CartData cartData={cartData} />;
};

export default Cart;
