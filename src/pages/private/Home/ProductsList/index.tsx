import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Products from '../../../../data/ProductsData';

const ProductsList = () => {
    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: 'calc(100vw - 48px)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1rem',
            }}
        >
            {Products.map((product) => {
                return (
                    <Paper
                        key={product.id}
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
                    </Paper>
                );
            })}
        </Box>
    );
};

export default ProductsList;
