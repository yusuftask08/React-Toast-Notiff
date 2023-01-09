import ReactDOM from "react-dom";
import ToastItem from "./ToastItem";
import './Toast.scss'
const Toast = (props) => {
  const { toastArray, setToastArray } = props;

  const deleteToast = (id) => {
    setToastArray((prev) => prev.filter((item) => item.id !== id));
  };

  return ReactDOM.createPortal(
    <div className="toasts">
      {toastArray.map((toastItem) => (
        <ToastItem
          key={toastItem.id}
          id={toastItem.id}
          type={toastItem.type}
          title={toastItem.title}
          deleteToast={deleteToast}
          toastArray={toastArray}
        />
      ))}
    </div>,
    document.getElementById("toast")
  );
}

export default Toast;