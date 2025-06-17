import { useState } from "react";
import "./App.css";
import appsMap from "./AppsMap";

export default function App() {
  const [selectedApp, setSelectedApp] = useState("Test");

  return (
    <div className="container">
      <aside className="sidebar">
        <h3>React Lab</h3>
        <ul className="appList">
          {Object.keys(appsMap).map((appName) => (
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

      <main className={"main"}>{appsMap[selectedApp]}</main>
    </div>
  );
}
