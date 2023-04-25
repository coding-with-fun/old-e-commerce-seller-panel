import { SyntheticEvent, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Products from '../../../../data/ProductsData';
import './index.css';

const ProductsList = (props: IProps) => {
    const { divRef } = props;

    const onScroll = (e: SyntheticEvent) => {
        // const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
        // const scrollTop = divRef.current.scrollTop;
        // console.log(
        //     `onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`
        // );
        const target = e.target as HTMLTextAreaElement;
        console.log('Current scroll position:', target.scrollTop);
    };

    useEffect(() => {
        divRef.current?.addEventListener('scroll', onScroll);
        return () => divRef.current?.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <Box
            ref={divRef}
            sx={{
                width: '100%',
                maxWidth: 'calc(100vw - 48px)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1rem',
                overflowY: 'scroll',
            }}
            className="products-list"
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

interface IProps {
    divRef: React.MutableRefObject<any>;
}
