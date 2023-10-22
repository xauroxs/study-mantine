import React from "react";
import ReactDOM from "react-dom/client";

import { MantineProvider } from "@mantine/core";

import App from "./app/app.component";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
