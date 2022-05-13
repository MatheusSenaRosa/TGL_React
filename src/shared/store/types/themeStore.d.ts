import { ITheme } from "@interfaces";

export interface IThemeStore {
  currentTheme: ITheme;
  switchTheme: () => void;
}
