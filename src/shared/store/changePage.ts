import create from "zustand";

import { IChangePageStore } from "./interfaces";

export const useChangePageStore = create<IChangePageStore>((set) => ({
  isChanging: false,
  setIsChanging: (value: boolean) => set(() => ({ isChanging: value })),
}));
