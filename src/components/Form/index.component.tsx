import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import { FormEvent, memo, useState } from 'react';

const cx = classNames.bind(styles);

type Result = {
    gmail: string;
    password: string;
    sshKey: string;
};

export interface IPropsForm {
    onSubmit: (result: Result) => void;
}

function Form({ onSubmit }: IPropsForm) {
    const [gmail, setGmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [sshKey, setSshKey] = useState<string>('');

    const handleValidate = (e: FormEvent) => {
        e.preventDefault();
        const isSuccess: boolean = !!(gmail.trim() && password.trim() && sshKey.trim());
        return (
            isSuccess &&
            onSubmit({
                gmail: gmail.trim(),
                password: password.trim(),
                sshKey: sshKey.trim(),
            })
        );
    };

    return (
        <form className={cx('login-action')} onSubmit={handleValidate}>
            <div className={cx('form-group')}>
                <label className={cx('label')} htmlFor="gmail">
                    Gmail
                </label>
                <div className={cx('wrapper-input')}>
                    <input
                        type="email"
                        id="gmail"
                        className={cx('form-input')}
                        placeholder="Your address email"
                        onChange={(e) => {
                            setGmail(e.target.value);
                        }}
                    />
                    {!gmail.trim() && <span className={cx('message-error')}>Gmail is required!</span>}
                </div>
            </div>
            <div className={cx('form-group')}>
                <label className={cx('label')} htmlFor="password">
                    Password
                </label>
                <div className={cx('wrapper-input')}>
                    <input
                        type="password"
                        id="password"
                        className={cx('form-input')}
                        placeholder="Your password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    {!password.trim() && <span className={cx('message-error')}>Password is required!</span>}
                </div>
            </div>
            <div className={cx('form-group')}>
                <label className={cx('label')} htmlFor="sshKey">
                    SSH Key
                </label>
                <div className={cx('wrapper-input')}>
                    <textarea
                        id="sshKey"
                        className={cx('form-input')}
                        placeholder="Your SSH Key"
                        onChange={(e) => {
                            setSshKey(e.target.value);
                        }}
                    />
                    {!sshKey.trim() && <span className={cx('message-error')}>SSH Key is required!</span>}
                </div>
            </div>
            <div className={cx('form-action')}>
                <button type="submit" className={cx('btn-submit')}>
                    Continue with your account
                </button>
            </div>
        </form>
    );
}

export default memo(Form);
