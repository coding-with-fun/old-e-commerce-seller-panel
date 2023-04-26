import { ICart } from '../../../../redux/slice/cart.slice';

const CartData = (props: IProps) => {
    const { cartData } = props;

    console.log(cartData);

    return <div>CartData</div>;
};

export default CartData;

interface IProps {
    cartData: ICart;
}
