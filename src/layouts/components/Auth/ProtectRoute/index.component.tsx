import { ReactElement, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../ProtectApp/index.component';

function ProtectRouter({ children }: { children: ReactElement }) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, dispatch] = useContext(AuthContext);
    const isLogin = state.user;

    return <>{isLogin ? children : <Navigate to={'/login'} />} </>;
}

export default ProtectRouter;
