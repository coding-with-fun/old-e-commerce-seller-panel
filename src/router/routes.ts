const routes = {
    public: {
        signin: '/signin',
        signup: '/signup',
        forgotPassword: '/forgot-password',
        resetPassword: '/reset-password',
    },
    private: {
        home: '/',
        cart: '/cart',
    },
    common: {
        verifyEmail: '/verify-email',
    },
};

export default routes;
