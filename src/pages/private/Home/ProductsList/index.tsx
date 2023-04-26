import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Products, { IProduct } from '../../../../data/ProductsData';
import Product from './Product';
import ProductsSkeleton from './ProductsSkeleton';

const ProductsList = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        setProducts(Products);

        return () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };
    }, []);

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
            {products.length > 0 ? (
                products.map((product: IProduct) => {
                    return <Product key={product._id} product={product} />;
                })
            ) : (
                <ProductsSkeleton />
            )}
        </Box>
    );
};

export default ProductsList;
