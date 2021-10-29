import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CustomErrorBoundary } from "./CustomErrorBoundary";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

// Sentry.init({
//   dsn: process.env.REACT_APP_SENTRY_DSN,
//   integrations: [new Integrations.BrowserTracing()],
//   release: "0.1.0",
// });

ReactDOM.render(
  <React.StrictMode>
    <CustomErrorBoundary>
      <App />
    </CustomErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);