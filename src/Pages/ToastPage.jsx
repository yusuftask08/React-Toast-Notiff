import Toast from "../Components/Toast";
import { useState } from "react";

const ToastPage = () => {
    const [toastArray, setToastArray] = useState([]);

    const handleCreateToastArray = (type, title) => {
        setToastArray((prev) => [
            {
                id: new Date().getUTCMilliseconds(),
                type,
                title,
            },
            ...prev,
        ]);
    };

    return (
        <div className="toasts-container">
            <Toast toastArray={toastArray} setToastArray={setToastArray} />
            <div className="createToastButtons">
                <button
                    onClick={() => {
                        handleCreateToastArray("success", "Success Title");
                    }}
                >
                    success
                </button>
              
            </div>
        </div>
    );
}

export default ToastPage;
