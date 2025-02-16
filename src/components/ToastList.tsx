import ReactDOM from "react-dom";
import { useToastStore } from "../store/toast";
import ToastItem from "./ToastItem";

function ToastList() {
  const { toastList } = useToastStore();

  if (typeof document === "undefined" || toastList.length === 0) return null; // 클라이언트에서만 실행되도록
  const element = document.getElementById("root");
  if (!element) return null;

  console.log(toastList);

  return ReactDOM.createPortal(
    <div>
      {toastList.map((toast) => (
        <div className="toasttest">
          <ToastItem key={toast.id} toast={toast} />
        </div>
      ))}
    </div>,
    element
  );
}

export default ToastList;
