import ReactDOM from "react-dom";
import { useToastStore } from "../../store/toastStore";
import ToastItem from "./ToastItem";

const ToastList = () => {
  const { toastList } = useToastStore();

  if (typeof document === "undefined" || toastList.length === 0) return null;
  const element = document.getElementById("root");
  if (!element) return null;

  return ReactDOM.createPortal(
    <div>
      {toastList.map((toast, index) => (
        <div key={index}>
          <ToastItem key={toast.id} toast={toast} />
        </div>
      ))}
    </div>,
    element
  );
};

export default ToastList;
