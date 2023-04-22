import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Auth/ProtectApp/index.component';

const cx = classNames.bind(styles);

function Header() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, dispatch] = useContext(AuthContext);
    return (
        <header className={cx('header')}>
            <div className={cx('header-logo')}>
                <NavLink to={'/'} className={cx('header-home')}>
                    Admin System
                </NavLink>
            </div>
            <div className={cx('header-info')}>
                <div className={cx('header-avatar')}>
                    <img src={state.user?.avatarUrl} alt="" className={cx('header-img')} />
                </div>
            </div>
        </header>
    );
}

export default Header;
