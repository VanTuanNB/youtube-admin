import IAdmin from '../interfaces/IAdmin';

export const getSessionStorage = (key: string = 'login'): IAdmin | null => {
    return JSON.parse(sessionStorage.getItem(key) as string) ?? null;
};

export const setSessionStorage = (key: string = 'login', payload: IAdmin | null): void => {
    sessionStorage.setItem(key, JSON.stringify(payload));
};
