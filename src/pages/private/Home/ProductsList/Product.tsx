import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import _ from 'lodash';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IProduct } from '../../../../data/ProductsData';
import { useAppSelector } from '../../../../hooks/redux';
import { addToCart, removeFromCart } from '../../../../redux/slice/cart.slice';
import './Product.css';

const Product = (props: IProps) => {
    const { product } = props;
    const cartData = useAppSelector((state) => state.cart.cartData);
    const dispatch = useDispatch();

    const [isImageLoading, setIsImageLoading] = useState(true);

    return (
        <Paper
            elevation={0}
            variant="outlined"
            sx={{
                padding: '1rem',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                cursor: 'pointer',
                minHeight: '266px',
                minWidth: '337px',
            }}
        >
            <Box
                sx={{
                    height: '10rem',
                    width: '100%',
                    display: isImageLoading ? 'none' : 'block',
                }}
            >
                <img
                    src={product.url}
                    alt={product.name}
                    style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'contain',
                    }}
                    onLoad={() => {
                        setIsImageLoading(false);
                    }}
                />
            </Box>

            <Skeleton
                variant="rounded"
                width={303}
                height={160}
                sx={{
                    display: isImageLoading ? 'block' : 'none',
                }}
            />

            <Typography>{product.name}</Typography>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                        }}
                    >
                        <Rating
                            name="product-rating"
                            value={product.ratings}
                            precision={0.5}
                            readOnly
                        />

                        <Typography
                            sx={{
                                fontSize: '0.8rem',
                            }}
                        >
                            {product.totalRatings}
                        </Typography>
                    </Box>

                    <Typography>₹{product.price}</Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                    }}
                >
                    <IconButton
                        aria-label="removeFromCart"
                        className={
                            _.get(cartData[product._id], 'quantity', 0) === 0
                                ? 'disabled-cart-manipulation-button'
                                : 'cart-manipulation-button'
                        }
                        disabled={
                            _.get(cartData[product._id], 'quantity', 0) === 0
                        }
                        onClick={() => {
                            dispatch(
                                removeFromCart({
                                    _id: product._id,
                                })
                            );
                        }}
                    >
                        <RemoveIcon />
                    </IconButton>

                    <Typography
                        sx={{
                            cursor: 'text',
                            userSelect: 'none',
                        }}
                    >
                        {_.get(cartData[product._id], 'quantity', 0)}
                    </Typography>

                    <IconButton
                        aria-label="addToCart"
                        className={
                            _.get(cartData[product._id], 'quantity', 0) ===
                            product.quantity
                                ? 'disabled-cart-manipulation-button'
                                : 'cart-manipulation-button'
                        }
                        disabled={
                            _.get(cartData[product._id], 'quantity', 0) ===
                            product.quantity
                        }
                        onClick={() => {
                            dispatch(
                                addToCart({
                                    ...product,
                                })
                            );
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                </Box>
            </Box>
        </Paper>
    );
};

export default Product;

interface IProps {
    product: IProduct;
}
