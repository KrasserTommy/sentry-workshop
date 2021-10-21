import React from "react";
import * as Sentry from "@sentry/react";

export class CustomErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo);
      Sentry.captureException(error);
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Da ist doch etwas falsch gelaufen</h1>
          <button onClick={() => window.location.reload()}>
            Nochmal versuchen
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
