export interface ITheme {
  title: string;

  colors: {
    background: string;
    negative: string;
    primary: string;
    error: string;

    form: {
      background: string;
      border: string;
      inputBorder: string;
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
