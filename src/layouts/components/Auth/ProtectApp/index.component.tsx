import { ReactNode, createContext, useReducer } from 'react';
import reducer from '../../../../store/reducer';
import { initValue } from '../../../../store/reducer';
import IAction from '../../../../interfaces/IAction';
import IState from '../../../../interfaces/IState';
const initDispatch: React.Dispatch<IAction> = () => {};
const initContext: [IState, React.Dispatch<IAction>] = [initValue, initDispatch];
export const AuthContext = createContext(initContext);

function ProtectAppProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initValue);
    return <AuthContext.Provider value={[state, dispatch]}>{children}</AuthContext.Provider>;
}

export default ProtectAppProvider;
