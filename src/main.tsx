import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './App.tsx';
import { socket, SocketContext } from './context/socket';
import './index.css';
import store from './redux/store';

// External CSS
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme({
    typography: {
        fontFamily: "'Poppins', sans-serif",
    },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <SocketContext.Provider value={socket}>
                <Provider store={store}>
                    <CssBaseline />

                    <App />

                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </Provider>
            </SocketContext.Provider>
        </ThemeProvider>
    </React.StrictMode>
);
