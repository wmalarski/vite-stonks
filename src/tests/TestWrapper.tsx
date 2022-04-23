import { AuthApiContext } from "@/services/AuthApi";
import { InvoiceApiContext, InvoiceApiService } from "@/services/InvoiceApi";
import { SheetApiContext, SheetApiService } from "@/services/SheetApi";
import i18next from "@/utils/i18next";
import { ReactElement, ReactNode, useState } from "react";
import { I18nextProvider } from "react-i18next";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
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
  const [client] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={client}>
      <AuthApiContext.Provider
        value={{
          api,
          isInitialized: true,
          user,
        }}
      >
        <SheetApiContext.Provider
          value={{ isInitialized: true, api: sheetApi ?? mockSheetApi() }}
        >
          <InvoiceApiContext.Provider
            value={{ isInitialized: true, api: invoiceApi ?? mockInvoiceApi() }}
          >
            <BrowserRouter>
              <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
            </BrowserRouter>
          </InvoiceApiContext.Provider>
        </SheetApiContext.Provider>
      </AuthApiContext.Provider>
    </QueryClientProvider>
  );
};
