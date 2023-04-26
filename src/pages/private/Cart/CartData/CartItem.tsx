import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { IProduct } from '../../../../data/ProductsData';
import { useDispatch } from 'react-redux';
import { updateCart } from '../../../../redux/slice/cart.slice';

const CartItem = (props: IProps) => {
    const { product } = props;

    const dispatch = useDispatch();

    const [isImageLoading, setIsImageLoading] = useState(true);
    const [showUpdateButton, setShowUpdateButton] = useState(false);
    const [selectedQuantity, setSelectedQuantity] = useState(product.quantity);

    console.log(product);

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
        dispatch(
            updateCart({
                _id: product._id,
                quantity: selectedQuantity,
            })
        );
        setShowUpdateButton(false);
    };

    return (
        <Box
            sx={{
                padding: '1rem',
                display: 'flex',
                height: '150px',
                minWidth: '100%',
                gap: '1rem',
            }}
            className="cart-item"
        >
            <Box
                sx={{
                    width: '10rem',
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
                height={116}
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

                <Box
                    sx={{
                        display: 'flex',
                        gap: '1rem',
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
                        onKeyDown={(event) => {
                            if (event.ctrlKey) {
                                //13 is the key code for Enter
                                event.preventDefault();
                                //Here you can even write the logic to select the value from the drop down or something.
                            }
                        }}
                        value={selectedQuantity}
                        onClick={() => {
                            setShowUpdateButton(true);
                        }}
                        onChange={(e) => {
                            handleChangeSelectedQuantity(e);
                        }}
                    />

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
            </Box>

            <Box
                sx={{
                    minHeight: '100%',
                }}
            >
                <Typography>{product.price}</Typography>
            </Box>
        </Box>
    );
};

export default CartItem;

interface IProps {
    product: IProduct;
}
