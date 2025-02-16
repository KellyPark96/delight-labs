import { ToastType, useToastStore } from "../store/toast";

export default function useToast() {
  const { addToastList } = useToastStore();

  const toast = (type: ToastType, message: string) => {
    const id = String(Math.random()); // 각각의 고유한 id를 사용
    addToastList({ id, type, message }); // toastList에 추가
  };

  return { toast };
}
