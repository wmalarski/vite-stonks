import { ReactElement, ReactNode } from "react";
import { themeClass } from "./theme.css";

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: Props): ReactElement => {
  return <div className={themeClass}>{children}</div>;
};
