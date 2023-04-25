const endpoints = {
    auth: {
        signin: '/admin/auth/signin',
        verifySignInOtp: '/admin/auth/verify-signin-otp',
        forgotPassword: '/admin/auth/forgot-password',
        resetPassword: '/reset-password',
    },
    common: {
        verifyEmail: '/verify-email',
    },
};

export default endpoints;
