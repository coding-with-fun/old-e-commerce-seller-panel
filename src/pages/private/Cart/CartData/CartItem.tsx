import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Products, { IProduct } from '../../../../data/ProductsData';
import toast from '../../../../libs/toast';
import { updateCart } from '../../../../redux/slice/cart.slice';

const CartItem = (props: IProps) => {
    const { product } = props;

    const dispatch = useDispatch();

    const [isImageLoading, setIsImageLoading] = useState(true);
    const [showUpdateButton, setShowUpdateButton] = useState(false);
    const [selectedQuantity, setSelectedQuantity] = useState(product.quantity);

    const handleChangeSelectedQuantity = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const regex = new RegExp(/^[0-9\b]+$/);

        if (
            (e.target.value === '' || regex.test(e.target.value)) &&
            e.target.value.length < 4
        ) {
            setSelectedQuantity(+e.target.value);
        }
    };

    const handleUpdateQuantity = () => {
        const dataIndex = Products.findIndex((el) => el._id === product._id);
        const dataProduct = Products[dataIndex];

        if (selectedQuantity > dataProduct.quantity) {
            toast(
                `This seller has only ${dataProduct.quantity} of ${product.name} available.`,
                'warn'
            );
            dispatch(
                updateCart({
                    _id: product._id,
                    quantity: dataProduct.quantity,
                })
            );
            setSelectedQuantity(dataProduct.quantity);
        } else {
            dispatch(
                updateCart({
                    _id: product._id,
                    quantity: selectedQuantity,
                })
            );
        }
        setShowUpdateButton(false);
    };

    const deleteProduct = () => {
        dispatch(
            updateCart({
                _id: product._id,
                quantity: 0,
            })
        );
    };

    useEffect(() => {
        setSelectedQuantity(product.quantity);
    }, [product]);

    return (
        <Box
            sx={{
                padding: '1rem',
                display: 'flex',
                minHeight: '13rem',
                minWidth: '100%',
                gap: '1rem',
            }}
            className="cart-item"
        >
            <Box
                sx={{
                    width: '11rem',
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
                width={160}
                height={190}
                sx={{
                    display: isImageLoading ? 'block' : 'none',
                }}
            />

            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <Typography>{product.name}</Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    gap: '3rem',
                    justifyContent: 'center',
                }}
            >
                <Box>
                    <Typography>Each</Typography>
                    <Typography>₹{product.price}</Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                        gap: '2rem',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '0.5rem',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            Quantity
                        </Typography>

                        <Box
                            sx={{
                                display: 'flex',
                                gap: '0.5rem',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <InputBase
                                sx={{
                                    border: '1px solid rgba(0, 0, 0, 0.12)',
                                    width: '5rem',
                                    padding: '0.15rem 0.8rem',
                                    borderRadius: '4px',
                                    userSelect: 'none',
                                }}
                                value={selectedQuantity}
                                onMouseDown={(event) => {
                                    if (event.detail > 1) {
                                        event.preventDefault();
                                    }
                                }}
                                onKeyDown={(event) => {
                                    if (event.ctrlKey) {
                                        event.preventDefault();
                                    }
                                }}
                                onClick={() => {
                                    setShowUpdateButton(true);
                                }}
                                onChange={(e) => {
                                    handleChangeSelectedQuantity(e);
                                }}
                            />

                            <DeleteOutlinedIcon
                                color="error"
                                sx={{
                                    cursor: 'pointer',
                                }}
                                onClick={deleteProduct}
                            />
                        </Box>

                        {showUpdateButton ? (
                            <Button
                                variant="outlined"
                                size="small"
                                color="warning"
                                onClick={handleUpdateQuantity}
                            >
                                Update
                            </Button>
                        ) : null}
                    </Box>

                    <Box
                        sx={{
                            textAlign: 'right',
                        }}
                    >
                        <Typography>
                            Total: ₹{product.price * product.quantity}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CartItem;

interface IProps {
    product: IProduct;
}
