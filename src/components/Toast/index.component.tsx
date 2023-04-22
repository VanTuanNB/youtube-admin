import { memo } from 'react';
import classNames from 'classnames/bind';

import styles from './Toast.module.scss';

const cx = classNames.bind(styles);

interface IProps {
    message: string;
    onClick: () => void;
}

function Toast({ message, onClick }: IProps) {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('toast', 'show', 'custom')} role="alert" aria-live="assertive" aria-atomic="true">
                    <div className={cx('toast-header')}>
                        <strong className={cx('me-auto')}>Notification Message</strong>
                        <small className={cx('text-body-secondary')}>just now</small>
                        <button
                            type="button"
                            className={cx('btn-close')}
                            data-bs-dismiss="toast"
                            aria-label="Close"
                            onClick={onClick}
                        ></button>
                    </div>
                    <div className={cx('toast-body', 'toast-custom-body')}>{message}</div>
                </div>
            </div>
        </>
    );
}

export default memo(Toast);

// tối về làm phần toast khi login
// handle xong
