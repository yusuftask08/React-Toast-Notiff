import { useEffect, useState, useRef } from "react";
import CloseIcon from "./Icons/CloseIcon";
import SuccessIcon from "./Icons/SuccessIcon";
import ErrorIcon from "./Icons/ErrorIcon";
import InfoIcon from "./Icons/InfoIcon";

import './Toast.scss';

function ToastItem(props) {
    const { id, type, title, deleteToast, } = props;
    const [isMouseHover, setIsMouseHover] = useState(false)
    const [closeAnimation, setCloseAnimation] = useState(false);
    const timer = useRef(null)
    const duration = 3000;

    useEffect(() => {
        clearTimeout(timer.current);

        return () => {
            clearTimeout(timer.current);
        }
    }, [isMouseHover]);

    useEffect(() => {
        timer.current = setTimeout(() => {
            setCloseAnimation(true);
            handleDeleteToastId();
        }, duration);
        return () => {
            clearTimeout(timer.current)
        }
    }, []);

    const handlePauseTimer = () => {
        clearTimeout(timer.current)
        setIsMouseHover(!isMouseHover)
    };

    const handleClose = () => {
        setCloseAnimation(true);
        handlePauseTimer();
        handleDeleteToastId();
    };

    const handleResumeTimer = () => {
        timer.current = setTimeout(() => {
            setCloseAnimation(true);
            handleDeleteToastId();
        }, duration);
    }

    const handleDeleteToastId = () => {
        setTimeout(() => {
            deleteToast(id);
        }, 300);
    }
    const getIcon = (iconType) => {
        const width = 30;
        const height = 30;
        const iconTypes = {
            'error': <ErrorIcon width={width} height={height} />,
            'info': <InfoIcon width={width} height={height} />,
            'success': <SuccessIcon width={width} height={height} />
        }

        return iconTypes[iconType] ?? '✋'
    }

    return (
        <div
            className={`toast-item toast-item--${type} ${closeAnimation ? "close-animation" : ''}`}
            onMouseEnter={handlePauseTimer}
            onMouseLeave={handleResumeTimer}
            ref={timer}
        >
            <div className="toast-item__content">
                <div className="toast-item__icon">
                    {getIcon(type)}
                </div>
                <h5 className="toast-item__title">{title}</h5>
                <div className="toast-item__close" onClick={handleClose}>
                    <CloseIcon width={24} height={24} />
                </div>
            </div>
        </div>
    );
}


export default ToastItem;
