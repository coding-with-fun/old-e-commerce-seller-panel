import Box from '@mui/material/Box';
import Products, { IProduct } from '../../../../data/ProductsData';
import Product from './Product';

const ProductsList = () => {
    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: 'calc(100vw - 48px)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1rem',
            }}
        >
            {Products.map((product: IProduct) => {
                return <Product key={product._id} product={product} />;
            })}
        </Box>
    );
};

export default ProductsList;
