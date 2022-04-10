import { Router } from "@/navigation/Router";
import { SheetApiContext, SheetApiService } from "@/services/SheetApi";
import {
  SpreadSheetApiContext,
  SpreadSheetApiService,
} from "@/services/SpreadSheetApi";
import i18next from "@/utils/i18next";
import { ReactElement, ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { mockSheetApi, mockSpreadSheetApi } from "./mocks";

export type TestWrapperProps = {
  children?: ReactNode;
  sheetApi?: SheetApiService;
  spreadSheetApi?: SpreadSheetApiService;
};

export type PropsWithTestWrapper<T = unknown> = T & {
  wrapperProps?: Omit<TestWrapperProps, "children">;
};

export const TestWrapper = ({
  children,
  sheetApi,
  spreadSheetApi,
}: TestWrapperProps): ReactElement => {
  return (
    <SheetApiContext.Provider
      value={{ isInitialized: true, api: sheetApi ?? mockSheetApi() }}
    >
      <SpreadSheetApiContext.Provider
        value={{
          isInitialized: true,
          api: spreadSheetApi ?? mockSpreadSheetApi(),
        }}
      >
        <Router>
          <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
        </Router>
      </SpreadSheetApiContext.Provider>
    </SheetApiContext.Provider>
  );
};
