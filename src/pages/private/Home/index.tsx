import { Fragment, useRef } from 'react';
import ScrollToTop from './ProductsList/ScrollToTop';
import ProductsList from './ProductsList';

const Home = () => {
    const divRef = useRef(null);

    return (
        <Fragment>
            <ScrollToTop divRef={divRef} />
            <ProductsList divRef={divRef} />
        </Fragment>
    );
};

export default Home;
