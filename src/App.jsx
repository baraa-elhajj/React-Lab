import { useState } from "react";
import "./App.css";
import Test from "./apps/test";

const apps = {
  // TODO: list the apps here..
  Test: <Test />,
};

export default function App() {
  const [selectedApp, setSelectedApp] = useState("App");

  return (
    <div className="container">
      <aside className="sidebar">
        <h3>React Lab</h3>
        <ul className="appList">
          {Object.keys(apps).map((appName) => (
            <li key={appName}>
              <button
                className="button"
                onClick={() => setSelectedApp(appName)}
              >
                {appName}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <main className={"main"}>{apps[selectedApp]}</main>
    </div>
  );
}
