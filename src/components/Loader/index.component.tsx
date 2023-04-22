import classNames from 'classnames/bind';
import styles from './Loader.module.scss';
import { LoaderSvg } from '../Icons/index.component';

const cx = classNames.bind(styles);

function Loader() {
    return (
        <div className={cx('loader')}>
            <div className={cx('content')}>
                <LoaderSvg />
            </div>
        </div>
    );
}

export default Loader;
