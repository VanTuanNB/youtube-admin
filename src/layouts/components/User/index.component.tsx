import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './User.module.scss';
import IUser from '../../../interfaces/IUser';
import { getAllUser } from '../../../services/user.service';
import IResponse from '../../../interfaces/IResponse';
import DeleteActionUser from '../../../components/Actions/DeleteActionUser/index.component';
import Loader from '../../../components/Loader/index.component';

const cx = classNames.bind(styles);

function UserPage() {
    const [users, setUsers] = useState<Array<IUser>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [errorConnection, setErrorConnection] = useState<boolean>(false);
    useEffect(() => {
        setLoading(true);
        getAllUser()
            .then((response: IResponse) => {
                if (response.success) {
                    setUsers(response.data);
                    setLoading(false);
                    return;
                }
                return Promise.reject(response.data);
            })
            .catch((error) => {
                console.log(error);
                setErrorConnection(true);
            });
    }, []);

    return (
        <div>
            <h1>Manage users</h1>
            {!!users.length && (
                <table className={cx('table', 'mt-5')}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Username</th>
                            <th scope="col">Nickname</th>
                            <th scope="col">Gmail</th>
                            <th scope="col">Avatar</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user: IUser, index: number) => (
                            <tr key={user._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.username}</td>
                                <td>{user.nickname}</td>
                                <td>{user.gmail}</td>
                                <td>
                                    <div>
                                        <img src={user.avatarUrl} alt="" />
                                    </div>
                                </td>
                                <td>
                                    <DeleteActionUser idDeleted={user._id} username={user.username} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {errorConnection && <h3>No internet connection please try again later</h3>}
            {loading && <Loader />}
        </div>
    );
}

export default UserPage;
