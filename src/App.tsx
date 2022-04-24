import { Router } from "@/navigation/Router";
import { ThemeProvider } from "@/styles/ThemeProvider";
import i18next from "@/utils/i18next";
import { I18nextProvider } from "react-i18next";
import { QueryClientProvider } from "react-query";
import { AuthApiProvider } from "./services/AuthApi";
import { queryClient } from "./services/client";
import { InvoiceApiProvider } from "./services/InvoiceApi";
import { ReportApiProvider } from "./services/ReportApi";
import { SheetApiProvider } from "./services/SheetApi";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18next}>
        <AuthApiProvider>
          <SheetApiProvider>
            <InvoiceApiProvider>
              <ReportApiProvider>
                <ThemeProvider>
                  <Router />
                </ThemeProvider>
              </ReportApiProvider>
            </InvoiceApiProvider>
          </SheetApiProvider>
        </AuthApiProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
}

export default App;
