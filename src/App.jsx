import { ErrorBoundary } from "react-error-boundary";
import React from "react";

const InputWithError = ({ username }) => {
  if (username === "Fehler") {
    throw new Error("💥 CABOOM 💥");
  }
  return `Hi ${username}`;
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
        <InputWithError username={username} />
      </div>
    </div>
  );
};

export default App;
