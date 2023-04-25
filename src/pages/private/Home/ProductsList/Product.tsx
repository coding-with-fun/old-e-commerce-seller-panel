import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import { IProduct } from '../../../../data/ProductsData';
import { useAppSelector } from '../../../../hooks/redux';
import { addToCart, removeFromCart } from '../../../../redux/slice/cart.slice';

const Product = (props: IProps) => {
    const { product } = props;
    const cartData = useAppSelector((state) => state.cart.cartData);
    const dispatch = useDispatch();

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
            }}
        >
            <Box
                sx={{
                    height: '10rem',
                    width: '100%',
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
                />
            </Box>

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
                        onClick={() => {
                            dispatch(
                                removeFromCart({
                                    _id: product._id,
                                })
                            );
                        }}
                        sx={{
                            cursor:
                                _.get(cartData[product._id], 'quantity', 0) ===
                                0
                                    ? 'not-allowed'
                                    : 'cursor',
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
                        onClick={() => {
                            dispatch(
                                addToCart({
                                    _id: product._id,
                                    quantity: product.quantity,
                                    name: product.name,
                                })
                            );
                        }}
                        sx={{
                            cursor:
                                _.get(cartData[product._id], 'quantity', 0) ===
                                product.quantity
                                    ? 'not-allowed'
                                    : 'cursor',
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
