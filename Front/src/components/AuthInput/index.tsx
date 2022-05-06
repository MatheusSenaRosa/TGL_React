import { forwardRef, InputHTMLAttributes } from "react";

import * as S from "./styles";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

export const AuthInput = forwardRef(({ invalid, ...rest }: Props, ref: any) => (
  <S.InputElement {...rest} ref={ref} invalid={invalid} required />
));
