import classNames from 'classnames/bind';

import styles from './Login.module.scss';
import Form, { IPropsForm } from '../../../../components/Form/index.component';
import { useCallback, useContext, useState } from 'react';
import { loginService } from '../../../../services/auth.service';
import Loader from '../../../../components/Loader/index.component';
import { AuthContext } from '../ProtectApp/index.component';
import IResponse from '../../../../interfaces/IResponse';
import Toast from '../../../../components/Toast/index.component';
import { setSessionStorage } from '../../../../utils/sessionStorage.util';

const cx = classNames.bind(styles);

function LoginPage() {
    const [loading, setLoading] = useState<boolean>(false);
    const [toast, setToast] = useState<boolean>(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, dispatch] = useContext(AuthContext);
    const handleSubmit = useCallback((result: any) => {
        if (result) {
            setLoading(true);
            loginService(result as IPropsForm)
                .then((response: IResponse) => {
                    dispatch({ type: 'USER_LOGIN', payload: response.data });
                    setSessionStorage('login', response.data);
                    setLoading(false);
                    window.location.href = 'http://localhost:3001';
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                    setToast(true);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleCloseToast = useCallback(() => {
        setToast(false);
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('contents')}>
                <h2 className={cx('title')}>Login admin system</h2>
                <Form onSubmit={handleSubmit} />
                {loading && <Loader />}
            </div>
            {toast && <Toast onClick={handleCloseToast} message={'You are not authorized to access some pages!'} />}
        </div>
    );
}

export default LoginPage;
