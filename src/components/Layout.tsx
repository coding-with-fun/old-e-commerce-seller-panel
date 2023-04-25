import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sockets from '../socket';
import Navbar from './Navbar';

const Layout = (): JSX.Element => {
    return (
        <Box
            sx={{
                display: 'flex',
                minHeight: '100vh',
            }}
        >
            <Sockets />

            <Navbar />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    pt: 11,
                    width: '100vw',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        minHeight: 'calc(100vh - 7rem)',
                        height: '100%',
                    }}
                >
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
};

export default Layout;
