import IAction from '../interfaces/IAction';
import IState from '../interfaces/IState';
import { getSessionStorage } from '../utils/sessionStorage.util';

export const initValue: IState = {
    user: getSessionStorage() ?? null,
};

export default function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                user: action.payload,
            };

        default:
            return state;
    }
}
