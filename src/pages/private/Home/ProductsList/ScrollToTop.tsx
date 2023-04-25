import RocketIcon from '@mui/icons-material/Rocket';
import Box from '@mui/material/Box';

const ScrollToTop = (props: IProps) => {
    const { divRef } = props;

    const scrollToTop = () => {
        divRef.current.scroll({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: '1rem',
                right: '1rem',
                cursor: 'pointer',
                padding: '1rem',
                borderRadius: '50%',
                backgroundColor: '#ff1f0c',
                color: '#ffffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onClick={() => scrollToTop()}
        >
            <RocketIcon />
        </Box>
    );
};

export default ScrollToTop;

interface IProps {
    divRef: React.MutableRefObject<any>;
}
