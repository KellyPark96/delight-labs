import { create } from "zustand";

export type ToastType = "success" | "warning" | "error";
export type ToastItemType = {
  id: string;
  type: ToastType;
  message: string;
};

interface ToastState {
  toastList: ToastItemType[]; // Toast 알림 List
  addToastList: (elem: ToastItemType) => void; // Toast 알림을 추가하는 함수
  subtractToastList: (id: string) => void; // Toast 알림을 제거하는 함수
}

export const useToastStore = create<ToastState>((set) => ({
  toastList: [],
  addToastList: (toast: ToastItemType) =>
    set((state) => ({ toastList: [...state.toastList, toast] })),
  subtractToastList: (id: string) =>
    set((state) => ({
      toastList: state.toastList.filter((toast) => toast.id !== id),
    })),
}));
