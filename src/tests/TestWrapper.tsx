import { AuthApiContext, AuthApiService } from "@/services/AuthApi";
import { CompanyApiContext, CompanyApiService } from "@/services/CompanyApi";
import { InvoiceApiContext, InvoiceApiService } from "@/services/InvoiceApi";
import { ReportApiContext, ReportApiService } from "@/services/ReportApi";
import { SheetApiContext, SheetApiService } from "@/services/SheetApi";
import i18next from "@/utils/i18next";
import { User } from "@supabase/supabase-js";
import { ReactElement, ReactNode, useState } from "react";
import { I18nextProvider } from "react-i18next";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import {
  mockAuthApi,
  mockCompanyApi,
  mockInvoiceApi,
  mockReportApi,
  mockSheetApi,
} from "./mocks";

export type TestWrapperProps = {
  authApi?: AuthApiService;
  children?: ReactNode;
  companyApi?: CompanyApiService;
  invoiceApi?: InvoiceApiService;
  reportApi?: ReportApiService;
  sheetApi?: SheetApiService;
  user?: User | null;
};

export type PropsWithTestWrapper<T = unknown> = T & {
  wrapperProps?: Omit<TestWrapperProps, "children">;
};

export const TestWrapper = ({
  authApi,
  children,
  companyApi,
  invoiceApi,
  reportApi,
  sheetApi,
  user,
}: TestWrapperProps): ReactElement => {
  const [client] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={client}>
      <AuthApiContext.Provider
        value={{
          api: authApi ?? mockAuthApi(),
          isInitialized: true,
          user: user ?? null,
        }}
      >
        <SheetApiContext.Provider
          value={{
            isInitialized: true,
            api: sheetApi ?? mockSheetApi(),
          }}
        >
          <InvoiceApiContext.Provider
            value={{
              isInitialized: true,
              api: invoiceApi ?? mockInvoiceApi(),
            }}
          >
            <ReportApiContext.Provider
              value={{
                isInitialized: true,
                api: reportApi ?? mockReportApi(),
              }}
            >
              <CompanyApiContext.Provider
                value={{
                  isInitialized: true,
                  api: companyApi ?? mockCompanyApi(),
                }}
              >
                <BrowserRouter>
                  <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
                </BrowserRouter>
              </CompanyApiContext.Provider>
            </ReportApiContext.Provider>
          </InvoiceApiContext.Provider>
        </SheetApiContext.Provider>
      </AuthApiContext.Provider>
    </QueryClientProvider>
  );
};
