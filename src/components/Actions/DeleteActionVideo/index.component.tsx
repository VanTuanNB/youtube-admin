import { memo, useCallback, useState } from 'react';
import classNames from 'classnames';

import ToastAction from '../../ToastAction/index.component';

import IResponse from '../../../interfaces/IResponse';
import { deleteVideo } from '../../../services/video.service';

const cx = classNames;

interface IProps {
    idDeleted: string;
    titleVideo: string;
}

function DeleteActionVideo({ idDeleted, titleVideo }: IProps) {
    const [show, setShow] = useState<boolean>(false);
    const handleShow = () => {
        setShow(true);
    };
    const handleAgree = useCallback(() => {
        deleteVideo(idDeleted)
            .then((response: IResponse) => {
                if (response.success) {
                    setShow(false);
                    alert(`Deleted video has title: ${titleVideo} successfully`);
                    return;
                }
                return Promise.reject(response);
            })
            .catch((error) => {
                console.log(error);
                alert('An error occurred during deletion, please try again later');
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClose = useCallback(() => {
        setShow(false);
    }, []);
    return (
        <div>
            <button onClick={handleShow} style={{ fontSize: '1.6rem' }} className={cx('btn', 'btn-danger')}>
                Deleted
            </button>
            {show && (
                <ToastAction
                    onClose={handleClose}
                    onAgree={handleAgree}
                    message={`Do you want to delete video has title: ${titleVideo}?`}
                />
            )}
        </div>
    );
}

export default memo(DeleteActionVideo);
