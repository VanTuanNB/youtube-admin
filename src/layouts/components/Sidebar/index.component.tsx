import { ReactElement } from 'react';

import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { NavLink, useNavigate } from 'react-router-dom';
import { HomeIcon, HomeIconActive, LogoutIcon, UserIcon, VideoIcon } from '../../../components/Icons/index.component';
import { setSessionStorage } from '../../../utils/sessionStorage.util';

const cx = classNames.bind(styles);

function Sidebar(): ReactElement {
    const navigate = useNavigate();
    function handleCheckActive({ isActive }: { isActive: boolean; isPending: boolean }): string {
        return cx('link-route', isActive && 'active');
    }

    const handleLogout = () => {
        setSessionStorage('login', null);
        navigate('/login');
    };

    return (
        <div className={cx('sidebar')}>
            <div className={cx('sidebar-first')}>
                <NavLink to={'/'} className={(nav) => handleCheckActive(nav)}>
                    <HomeIcon width="24px" height="24px" className={cx('link-icon')} />
                    <HomeIconActive width="24px" height="24px" fill="#718ec7" className={cx('link-icon', 'active')} />
                    <span className={cx('link-title')}>Dashboard</span>
                </NavLink>
                <NavLink to={'/video'} className={(nav) => handleCheckActive(nav)}>
                    <UserIcon width="24px" height="24px" className={cx('link-icon')} />
                    <UserIcon width="24px" height="24px" fill="#718ec7" className={cx('link-icon', 'active')} />
                    <span className={cx('link-title')}>Videos</span>
                </NavLink>
                <NavLink to={'/user'} className={(nav) => handleCheckActive(nav)}>
                    <VideoIcon width="24px" height="24px" className={cx('link-icon')} />
                    <VideoIcon width="24px" height="24px" fill="#718ec7" className={cx('link-icon', 'active')} />
                    <span className={cx('link-title')}>Users</span>
                </NavLink>
            </div>
            <div className={cx('sidebar-end')}>
                <button className={cx('link-route')} onClick={handleLogout}>
                    <LogoutIcon width="24px" height="24px" className={cx('link-icon')} />
                    <span className={cx('link-title')}>Logout</span>
                </button>
            </div>
        </div>
    );
}

export default Sidebar;
