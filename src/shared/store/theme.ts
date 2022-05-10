import create from "zustand";
import { light, dark } from "@themes";
import { IThemeStore } from "./types";

export const useThemeStore = create<IThemeStore>((set) => ({
  currentTheme: JSON.parse(localStorage.getItem("theme")!) ?? light,
  switchTheme: () =>
    set((state) => {
      const newTheme = state.currentTheme.title === "light" ? dark : light;
      localStorage.setItem("theme", JSON.stringify(newTheme));

      return {
        currentTheme: newTheme,
      };
    }),
}));
