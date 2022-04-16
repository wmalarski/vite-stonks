import { Router } from "@/navigation/Router";
import { InvoiceApiContext, InvoiceApiService } from "@/services/InvoiceApi";
import { SheetApiContext, SheetApiService } from "@/services/SheetApi";
import i18next from "@/utils/i18next";
import { ReactElement, ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { mockInvoiceApi, mockSheetApi } from "./mocks";

export type TestWrapperProps = {
  children?: ReactNode;
  invoiceApi?: InvoiceApiService;
  sheetApi?: SheetApiService;
};

export type PropsWithTestWrapper<T = unknown> = T & {
  wrapperProps?: Omit<TestWrapperProps, "children">;
};

export const TestWrapper = ({
  children,
  invoiceApi,
  sheetApi,
}: TestWrapperProps): ReactElement => {
  return (
    <SheetApiContext.Provider
      value={{ isInitialized: true, api: sheetApi ?? mockSheetApi() }}
    >
      <InvoiceApiContext.Provider
        value={{ isInitialized: true, api: invoiceApi ?? mockInvoiceApi() }}
      >
        <Router>
          <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
        </Router>
      </InvoiceApiContext.Provider>
    </SheetApiContext.Provider>
  );
};
