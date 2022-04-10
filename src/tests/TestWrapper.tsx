import { Router } from "@/navigation/Router";
import { SheetApiContext } from "@/services/SheetApi";
import { SpreadSheetApiContext } from "@/services/SpreadSheetApi";
import i18next from "@/utils/i18next";
import { ReactElement, ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { mockSheetApi } from "./mocks";

export type TestWrapperProps = {
  children?: ReactNode;
};

export type PropsWithTestWrapper<T = unknown> = T & {
  wrapperProps?: Omit<TestWrapperProps, "children">;
};

export const TestWrapper = ({ children }: TestWrapperProps): ReactElement => {
  return (
    <SheetApiContext.Provider
      value={{ isInitialized: true, api: mockSheetApi() }}
    >
      <SpreadSheetApiContext.Provider>
        <Router>
          <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
        </Router>
      </SpreadSheetApiContext.Provider>
    </SheetApiContext.Provider>
  );
};
