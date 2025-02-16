import ReactDOM from "react-dom";
import { useToastStore } from "../../store/toastStore";
import ToastItem from "./ToastItem";

const ToastList = () => {
  const { toastList } = useToastStore();

  if (typeof document === "undefined" || toastList.length === 0) return null; // 클라이언트에서만 실행되도록
  const element = document.getElementById("root");
  if (!element) return null;

  return ReactDOM.createPortal(
    <div>
      {toastList.map((toast) => (
        <div>
          <ToastItem key={toast.id} toast={toast} />
        </div>
      ))}
    </div>,
    element
  );
};

export default ToastList;
