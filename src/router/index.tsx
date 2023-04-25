import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import lazyLoad from '../libs/lazyLoad';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import CommonLayout from '../components/CommonLayout';
import routes from './routes';

// Lazy loaded pages
// Public pages
const SignIn = React.lazy(async () => await import('../pages/public/SignIn'));
const ForgotPassword = React.lazy(
    async () => await import('../pages/public/ForgotPassword')
);
const ResetPassword = React.lazy(
    async () => await import('../pages/public/ResetPassword')
);

// Private pages
const Home = React.lazy(async () => await import('../pages/private/Home'));

// Common pages
const VerifyEmail = React.lazy(
    async () => await import('../pages/common/VerifyEmail')
);

const router = createBrowserRouter([
    // Common routes
    {
        element: <CommonLayout />,
        children: [
            {
                path: routes.common.verifyEmail,
                element: (
                    <ProtectedRoute>{lazyLoad(VerifyEmail)}</ProtectedRoute>
                ),
            },
        ],
    },
    {
        element: <Layout />,
        children: [
            // Public routes
            {
                path: routes.public.signin,
                element: <PublicRoute>{lazyLoad(SignIn)}</PublicRoute>,
            },
            {
                path: routes.public.forgotPassword,
                element: <PublicRoute>{lazyLoad(ForgotPassword)}</PublicRoute>,
            },
            {
                path: routes.public.resetPassword,
                element: <PublicRoute>{lazyLoad(ResetPassword)}</PublicRoute>,
            },

            // Private routes
            {
                path: routes.private.home,
                element: <ProtectedRoute>{lazyLoad(Home)}</ProtectedRoute>,
            },

            // Wildcard
            {
                path: '*',
                element: <Navigate to={routes.private.home} replace={true} />,
            },
        ],
    },
]);

export default router;
