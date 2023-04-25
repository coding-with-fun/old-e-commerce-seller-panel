import { Fragment } from 'react';
import ProductsList from './ProductsList';
import ScrollToTop from './ProductsList/ScrollToTop';

const Home = () => {
    return (
        <Fragment>
            <ScrollToTop />
            <ProductsList />
        </Fragment>
    );
};

export default Home;
