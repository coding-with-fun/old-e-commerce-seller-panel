import { Fragment } from 'react';
import ProductsList from './ProductsList';
import ScrollToTop from '../../../components/ScrollToTop';

const Home = () => {
    return (
        <Fragment>
            <ScrollToTop />
            <ProductsList />
        </Fragment>
    );
};

export default Home;
