import i18next from "@/utils/i18next";
import { ReactElement, ReactNode } from "react";
import { I18nextProvider } from "react-i18next";

export type TestWrapperProps = {
  children?: ReactNode;
};

export type PropsWithTestWrapper<T = unknown> = T & {
  wrapperProps?: Omit<TestWrapperProps, "children">;
};

export const TestWrapper = ({ children }: TestWrapperProps): ReactElement => {
  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
};
