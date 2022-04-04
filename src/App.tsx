import { Router } from "@/navigation/Router";
import i18next from "@/utils/i18next";
import { I18nextProvider } from "react-i18next";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <I18nextProvider i18n={i18next}>
      <Router>
        <Home />
      </Router>
    </I18nextProvider>
  );
}

export default App;
