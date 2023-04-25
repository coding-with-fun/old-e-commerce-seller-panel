import env from '../env';

export const getUserToken = (): string | null => {
    return localStorage.getItem(env.app.token_id);
};

export const setUserToken = (token = ''): void => {
    localStorage.setItem(env.app.token_id, token);
};

export const removeUserToken = (): void => {
    localStorage.removeItem(env.app.token_id);
};
