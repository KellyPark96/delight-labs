import { create } from "zustand";
import { dataResponseType } from "../types/dataType";

interface HistoryState {
  toastList: dataResponseType[];
}

export const useHistoryStore = create<HistoryState>(() => ({
  toastList: [],
}));
