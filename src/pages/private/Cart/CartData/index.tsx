import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Fragment, useMemo, useState } from 'react';
import { ICart } from '../../../../redux/slice/cart.slice';
import CartItem from './CartItem';
import CheckOutModal from './CheckOutModal';
import Modal from '../../../../components/HOC/Modal';

const CartData = (props: IProps) => {
    const { cartData } = props;

    const [showCheckoutModal, setShowCheckoutModal] = useState(false);
    const [cleanModalContent, setCleanModalContent] = useState(false);

    const handleOpenCheckoutModal = (): void => {
        setShowCheckoutModal(true);
    };
    const handleCloseCheckoutModal = (): void => {
        setShowCheckoutModal(false);
    };

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
        <Fragment>
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
                        maxWidth: '1080px',
                        height: 'fit-content',
                        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
                        paddingTop: '1.5rem',
                    }}
                    className="cart-list"
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
                            gap: '1rem',
                            alignItems: 'center',
                            paddingLeft: '12rem',
                            paddingTop: '1rem',
                            marginTop: '1rem',
                            borderTop: '1px solid rgba(0, 0, 0, 0.12)',
                        }}
                        className="checkout-details"
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flex: 1,
                            }}
                            className="total-details"
                        >
                            <Typography variant="h6">
                                {totalCartPrice.quantity} Item(s)
                            </Typography>

                            <Typography variant="h6">
                                Item total: ₹{totalCartPrice.price}
                            </Typography>
                        </Box>

                        <Button
                            variant="outlined"
                            onClick={handleOpenCheckoutModal}
                        >
                            Checkout
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Modal
                handleCloseModal={handleCloseCheckoutModal}
                open={showCheckoutModal}
                setCleanModalContent={setCleanModalContent}
            >
                {cleanModalContent ? null : (
                    <CheckOutModal
                        handleCloseCheckoutModal={handleCloseCheckoutModal}
                    />
                )}
            </Modal>
        </Fragment>
    );
};

export default CartData;

interface IProps {
    cartData: ICart;
}
