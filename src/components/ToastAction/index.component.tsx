import classNames from 'classnames/bind';
import styles from './ToastAction.module.scss';
import { memo } from 'react';
const cx = classNames.bind(styles);

interface IProps {
    message: string;
    onClose?: () => void;
    onAgree?: () => void;
}

function ToastAction({ message, onClose, onAgree }: IProps) {
    return (
        <div className={cx('wrapper-toast')}>
            <div
                style={{ fontSize: '1.6rem' }}
                className={cx('toast', 'show', 'custom-toast')}
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
            >
                <div className={cx('toast-body')}>
                    {message}
                    <div className={cx('mt-2', 'pt-2', '  border-top')}>
                        <button
                            type="button"
                            onClick={onAgree}
                            className={cx('btn', 'btn-primary', 'btn-sm', 'btn-agree')}
                        >
                            Agree
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className={cx('btn ', 'btn-secondary ', 'btn-sm', 'btn-close')}
                            data-bs-dismiss="toast"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(ToastAction);
