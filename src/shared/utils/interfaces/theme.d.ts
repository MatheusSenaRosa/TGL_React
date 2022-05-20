export interface ITheme {
  title: string;
  colors: {
    negative: string;
    primary: string;
    error: string;

    background: {
      body: string;
      highlight: string;
      numericButton: string;
      form: string;
    };

    border: {
      form: string;
      primary: string;
    };

    text: {
      primary: string;
      secondary: string;
      brand: string;
      placeholder: string;
      forgotPassword: string;
      highlight: string;
    };
  };
}
