import { ToastType, useToastStore } from "../store/toastStore";
import { dataResponseType } from "../types/dataType";

export default function useToast() {
  const { addToastList } = useToastStore();

  const toast = (type: ToastType, message: dataResponseType) => {
    const id = String(Math.random());
    addToastList({ id, type, message });
  };

  return { toast };
}
