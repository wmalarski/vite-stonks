import { AuthApiProvider } from "@/services/AuthApi";
import { CompanyApiProvider } from "@/services/CompanyApi";
import { InvoiceApiProvider } from "@/services/InvoiceApi";
import { ReportApiProvider } from "@/services/ReportApi";
import { SheetApiProvider } from "@/services/SheetApi";
import i18next from "@/utils/i18next";
import { ReactElement, ReactNode, useState } from "react";
import { I18nextProvider } from "react-i18next";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

export type TestWrapperProps = {
  children?: ReactNode;
};

export type PropsWithTestWrapper<T = unknown> = T & {
  wrapperProps?: Omit<TestWrapperProps, "children">;
};

export const TestWrapper = ({ children }: TestWrapperProps): ReactElement => {
  const [client] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={client}>
      <AuthApiProvider>
        <SheetApiProvider>
          <InvoiceApiProvider>
            <ReportApiProvider>
              <CompanyApiProvider>
                <BrowserRouter>
                  <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
                </BrowserRouter>
              </CompanyApiProvider>
            </ReportApiProvider>
          </InvoiceApiProvider>
        </SheetApiProvider>
      </AuthApiProvider>
    </QueryClientProvider>
  );
};
