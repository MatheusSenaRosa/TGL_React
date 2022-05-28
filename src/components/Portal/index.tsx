import { ReactNode } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
  id: string;
};

export const Portal = ({ children, id }: Props) =>
  createPortal(children, document.getElementById(id)!);
