import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function HomePage() {
    return (
        <main className={cx('main')}>
            <div className={cx('video-wrapper')}>
                <video
                    src="https://cdn.dribbble.com/userupload/3258593/file/original-1f4090828d08c1d5425b1aaa69839f8d.mp4"
                    autoPlay
                    muted
                    loop
                    className={cx('video-ref')}
                ></video>
                <h2 className={cx('title')}>Dashboard admin</h2>
            </div>
        </main>
    );
}

export default HomePage;
