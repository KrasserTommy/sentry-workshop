import { ErrorBoundary } from "react-error-boundary";
import React from "react";

const InputWithError = ({ username }) => {
  if (username === "Fehler") {
    throw new Error("💥 CABOOM 💥");
  }
  return `Hi ${username}`;
};

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Es ist ein Fehler aufgetreten</p>
      <p style={{ color: "red" }}>{error.message}</p>
      <button onClick={resetErrorBoundary}>Nochmal versuchen</button>
    </div>
  );
};

const App = () => {
  const [username, setUsername] = React.useState("");

  return (
    <div>
      <label>
        {`Benutzername (darf nicht "Fehler" sein): `}
        <input
          placeholder="Benutzername eingeben"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <div>
        {/* <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            setUsername("");
          }}
          resetKeys={[username]}
        > */}
        <InputWithError username={username} />
        {/* </ErrorBoundary> */}
      </div>
    </div>
  );
};
export default App;
