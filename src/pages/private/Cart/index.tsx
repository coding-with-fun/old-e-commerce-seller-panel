import { useAppSelector } from '../../../hooks/redux';

const Cart = () => {
    const cartData = useAppSelector((state) => state.cart.cartData);

    console.log(cartData);

    return <div>Cart</div>;
};

export default Cart;
