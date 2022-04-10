import { Router } from "@/navigation/Router";
import { ThemeProvider } from "@/styles/ThemeProvider";
import i18next from "@/utils/i18next";
import { NhostReactProvider } from "@nhost/react";
import { I18nextProvider } from "react-i18next";
import { QueryClientProvider } from "react-query";
import { Home } from "./pages/Home/Home";
import { queryClient } from "./services/client";
import { nhost } from "./services/nhost";
import { SheetApiProvider } from "./services/SheetApi";
import { SpreadSheetApiProvider } from "./services/SpreadSheetApi";

function App() {
  return (
    <NhostReactProvider nhost={nhost}>
      <QueryClientProvider client={queryClient}>
        <SheetApiProvider>
          <SpreadSheetApiProvider>
            <I18nextProvider i18n={i18next}>
              <ThemeProvider>
                <Router>
                  <Home />
                </Router>
              </ThemeProvider>
            </I18nextProvider>
          </SpreadSheetApiProvider>
        </SheetApiProvider>
      </QueryClientProvider>
    </NhostReactProvider>
  );
}

export default App;
