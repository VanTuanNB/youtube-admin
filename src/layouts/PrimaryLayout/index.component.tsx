import classNames from 'classnames/bind';

import styles from './Primary.module.scss';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/index.component';
import Sidebar from '../components/Sidebar/index.component';

const cx = classNames.bind(styles);

function PrimaryLayout() {
    return (
        <div className={cx('primary-layout')}>
            <Header />
            <div className={cx('contents')}>
                <Sidebar />
                <div className={cx('content')}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default PrimaryLayout;
