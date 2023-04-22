import httpRequest from '../utils/configHttpRequest.util';
import { getSessionStorage } from '../utils/sessionStorage.util';

export const getAllUser = async () => {
    const infoAdmin = getSessionStorage();
    const users = await httpRequest.get('/management/user', {
        withCredentials: true,
        headers: { Authorization: 'Bearer ' + infoAdmin?.accessToken },
    });
    return users.data;
};

export const deleteUser = async (id: string) => {
    const infoAdmin = getSessionStorage();
    const deleted = await httpRequest.delete(`/destroy/deleted/${id}`, {
        withCredentials: true,
        headers: { Authorization: 'Bearer ' + infoAdmin?.accessToken },
    });
    return deleted.data;
};
