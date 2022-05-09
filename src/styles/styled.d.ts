import { light } from "@styles";
import "styled-components";

const type = typeof light;

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      primary: string;
      negative: string;
      error: string;

      form: {
        background: string;
        inputBorder: string;
        border: string;
        placeholder: string;
        forgotPassword: string;
        buttonTextHover: string;
      };

      logo: {
        primary: string;
        secondary: string;
      };

      footer: {
        border: string;
      };

      text: {
        primary: string;
      };
    };
  }
}
