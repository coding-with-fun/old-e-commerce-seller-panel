import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useContext, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { SocketContext } from './context/socket';
import router from './router';

const App = (): JSX.Element => {
    const socket = useContext(SocketContext);

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            },
        },
    });

    useEffect(() => {
        socket.on('connect', () => {
            console.log(socket.id);
        });
        socket.on('disconnect', () => {
            console.log('User disconnected...');
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
        };
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
};

export default App;
