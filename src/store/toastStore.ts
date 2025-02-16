import { create } from "zustand";
import { dataResponseType } from "../types/dataType";

export type ToastType = "success";
export type ToastItemType = {
  id: string;
  type: ToastType;
  message: dataResponseType;
};

interface ToastState {
  toastList: ToastItemType[];
  addToastList: (elem: ToastItemType) => void;
  subtractToastList: (id: string) => void;
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
