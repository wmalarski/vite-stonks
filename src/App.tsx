import i18next from "@/utils/i18next";
import { useState } from "react";
import { I18nextProvider } from "react-i18next";
import "./App.css";
import logo from "./logo.svg";
import { Login } from "./pages/Login/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <I18nextProvider i18n={i18next}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Login />
          <p>Hello Vite + React!</p>
          <p>
            <button
              type="button"
              onClick={() => setCount((count) => count + 1)}
            >
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {" | "}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>
      </div>
    </I18nextProvider>
  );
}

export default App;
