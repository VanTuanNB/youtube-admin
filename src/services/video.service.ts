import httpRequest from '../utils/configHttpRequest.util';
import { getSessionStorage } from '../utils/sessionStorage.util';

export const getAllVideo = async () => {
    const infoAdmin = getSessionStorage();
    const videos = await httpRequest.get('/management/video', {
        withCredentials: true,
        headers: { Authorization: 'Bearer ' + infoAdmin?.accessToken },
    });
    return videos.data;
};

export const deleteVideo = async (id: string) => {
    const infoAdmin = getSessionStorage();
    const deleted = await httpRequest.delete(`/destroy/video/${id}`, {
        withCredentials: true,
        headers: { Authorization: 'Bearer ' + infoAdmin?.accessToken },
    });
    return deleted.data;
};
