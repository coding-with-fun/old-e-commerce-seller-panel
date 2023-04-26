import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ICart } from '../../../../redux/slice/cart.slice';
import CartItem from './CartItem';
import { useMemo } from 'react';

const CartData = (props: IProps) => {
    const { cartData } = props;

    const totalCartQuantity = useMemo(() => {
        return Object.values(cartData).reduce(
            (prev, current) => prev + current.price * current.quantity,
            0
        );
    }, [cartData]);

    return (
        <Box
            sx={{
                width: '100%',
            }}
        >
            <Typography>Your cart</Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
                className="cart-items"
            >
                {Object.keys(cartData).map((product, index) => {
                    return <CartItem product={cartData[product]} key={index} />;
                })}
            </Box>

            <Typography>{totalCartQuantity}</Typography>
        </Box>
    );
};

export default CartData;

interface IProps {
    cartData: ICart;
}
