import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useMemo } from 'react';
import { ICart } from '../../../../redux/slice/cart.slice';
import CartItem from './CartItem';

const CartData = (props: IProps) => {
    const { cartData } = props;

    const totalCartPrice = useMemo(() => {
        return Object.values(cartData).reduce(
            (prev, current) => {
                return {
                    price: prev.price + current.price,
                    quantity: prev.quantity + current.quantity,
                };
            },
            {
                price: 0,
                quantity: 0,
            }
        );
    }, [cartData]);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
            }}
            className="cart"
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    paddingBottom: '1.5rem',
                }}
            >
                <ShoppingBagOutlinedIcon
                    sx={{
                        fontSize: '3rem',
                    }}
                />
                <Typography variant="h5">My cart</Typography>
            </Box>

            <Box
                sx={{
                    maxWidth: '730px',
                    height: 'fit-content',
                    borderTop: '1px solid rgba(0, 0, 0, 0.12)',
                    paddingTop: '1.5rem',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: 'calc(100vh - 17.5rem)',
                        overflowY: 'scroll',
                    }}
                    className="cart-items hide-scrollbar"
                >
                    {Object.keys(cartData).map((product, index) => {
                        return (
                            <CartItem product={cartData[product]} key={index} />
                        );
                    })}
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingLeft: '12rem',
                        paddingTop: '1rem',
                        marginTop: '1rem',
                        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
                    }}
                >
                    <Typography variant="h6">
                        {totalCartPrice.quantity} Item(s)
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                        }}
                    >
                        <Typography variant="h6">
                            Item total: ₹{totalCartPrice.price}
                        </Typography>

                        <Button variant="outlined">Checkout</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CartData;

interface IProps {
    cartData: ICart;
}