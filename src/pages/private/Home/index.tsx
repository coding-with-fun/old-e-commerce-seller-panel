import { useState, Fragment, useRef } from 'react';
import ScrollToTop from './ProductsList/ScrollToTop';
import ProductsList from './ProductsList';

const Home = () => {
    const divRef = useRef(null);

    const [showButton, setShowButton] = useState(false);

    return (
        <Fragment>
            <ScrollToTop divRef={divRef} showButton={showButton} />
            <ProductsList divRef={divRef} setShowButton={setShowButton} />
        </Fragment>
    );
};

export default Home;
