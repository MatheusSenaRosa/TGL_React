import create from "zustand";
import { light, dark } from "@themes";
import { IThemeStore } from "./interfaces";

const initialValue = JSON.parse(localStorage.getItem("theme")!) ?? light;

export const useThemeStore = create<IThemeStore>((set) => ({
  currentTheme: initialValue,
  switchTheme: () =>
    set((state) => {
      const newTheme = state.currentTheme.title === "light" ? dark : light;
      localStorage.setItem("theme", JSON.stringify(newTheme));

      return {
        currentTheme: newTheme,
      };
    }),
}));
