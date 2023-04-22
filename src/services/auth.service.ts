import { IPropsForm } from '../components/Form/index.component';
import httpRequest from '../utils/configHttpRequest.util';

export const loginService = async (payload: IPropsForm) => {
    const permissions = await httpRequest.post('/auth/login', payload, {
        withCredentials: true,
    });
    return permissions.data;
};
