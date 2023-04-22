import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { useEffect, useState } from 'react';
import IVideo from '../../../interfaces/IVideo';
import { getAllVideo } from '../../../services/video.service';
import IResponse from '../../../interfaces/IResponse';
import DeleteActionVideo from '../../../components/Actions/DeleteActionVideo/index.component';
import Loader from '../../../components/Loader/index.component';

const cx = classNames.bind(styles);

function VideoPage() {
    const [videos, setVideos] = useState<Array<IVideo>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [errorConnection, setErrorConnection] = useState<boolean>(false);
    useEffect(() => {
        setLoading(true);
        getAllVideo()
            .then((response: IResponse) => {
                if (response.success) {
                    setVideos(response.data);
                    setLoading(false);
                    return;
                }

                return Promise.reject(response);
            })
            .catch((error) => {
                console.log(error);
                setErrorConnection(true);
            });
    }, []);

    return (
        <div>
            <h1>Manage videos</h1>
            {!!videos.length && (
                <table className={cx('table', 'mt-5')}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Owner</th>
                            <th scope="col">Thumbnail</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {videos.map((video: IVideo, index: number) => (
                            <tr key={video._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{video.title}</td>
                                <td>{video.resourceOwner.username}</td>
                                <td>
                                    <div className={cx('wrapper-thumbnail')}>
                                        <img src={video.thumbnail} alt="" className={cx('thumbnail-video')} />
                                    </div>
                                </td>
                                <td>
                                    <DeleteActionVideo idDeleted={video._id} titleVideo={video.title} />
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

export default VideoPage;
