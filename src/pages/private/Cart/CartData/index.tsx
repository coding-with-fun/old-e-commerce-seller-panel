import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ICart } from '../../../../redux/slice/cart.slice';
import CartItem from './CartItem';
import { useMemo } from 'react';
import CheckoutSection from './CheckoutSection';

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
                width: '100%',
            }}
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
                    display: 'flex',
                    gap: '2rem',
                    width: '100%',
                }}
            >
                <Paper
                    elevation={0}
                    sx={{
                        flex: 1,
                        height: 'fit-content',
                        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
                        paddingTop: '1.5rem',
                    }}
                    className="cart-data"
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: 'calc(100vh - 17.2rem)',
                            overflowY: 'scroll',
                        }}
                        className="cart-items hide-scrollbar"
                    >
                        {Object.keys(cartData).map((product, index) => {
                            return (
                                <CartItem
                                    product={cartData[product]}
                                    key={index}
                                />
                            );
                        })}
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            paddingLeft: '12rem',
                            paddingTop: '1rem',
                            marginTop: '1rem',
                            borderTop: '1px solid rgba(0, 0, 0, 0.12)',
                        }}
                    >
                        <Typography variant="h6">
                            {totalCartPrice.quantity} Item(s)
                        </Typography>
                        <Typography variant="h6">
                            Item total: ₹{totalCartPrice.price}
                        </Typography>
                    </Box>
                </Paper>

                <Paper
                    elevation={0}
                    sx={{
                        height: 'fit-content',
                    }}
                >
                    <CheckoutSection />
                </Paper>
            </Box>
        </Box>
    );
};

export default CartData;

interface IProps {
    cartData: ICart;
}
