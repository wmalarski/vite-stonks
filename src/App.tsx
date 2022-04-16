import { Router } from "@/navigation/Router";
import { ThemeProvider } from "@/styles/ThemeProvider";
import i18next from "@/utils/i18next";
import { I18nextProvider } from "react-i18next";
import { QueryClientProvider } from "react-query";
import { Home } from "./pages/Home/Home";
import { AuthApiProvider } from "./services/AuthApi";
import { queryClient } from "./services/client";
import { InvoiceApiProvider } from "./services/InvoiceApi";
import { SheetApiProvider } from "./services/SheetApi";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SheetApiProvider>
        <InvoiceApiProvider>
          <AuthApiProvider>
            <I18nextProvider i18n={i18next}>
              <ThemeProvider>
                <Router>
                  <Home />
                </Router>
              </ThemeProvider>
            </I18nextProvider>
          </AuthApiProvider>
        </InvoiceApiProvider>
      </SheetApiProvider>
    </QueryClientProvider>
  );
}

export default App;
