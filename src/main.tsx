import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const prepare = async () => {
  console.log(import.meta.env);
  if (import.meta.env.DEV) {
    const { worker } = await import("./tests/browser");
    worker.start();
  }
};

prepare()
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById("root")
    );
    return void 0;
  })
  .catch((error) => {
    console.error(error);
  });
