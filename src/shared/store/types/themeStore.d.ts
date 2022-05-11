import { light, dark } from "@styles";

export interface IThemeStore {
  currentTheme: typeof light | typeof dark;
  switchTheme: () => void;
}
