import { useState } from "react";
import Header from "../components/ui/custom/Header";

export default function Form() {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("Hello");

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`Sent "${message}" to ${to}`);
    }, 5000);
  }

  return (
    <>
      <Header
        description="Rendering a simple form app, which displays the a message using an alert 
      priorly selected by the user. This app shows that when useState() is called, React gives 
      a 'snapshot' of the state for that render. Event handlers created in the past have the state 
      values from the render in which they were created."
      />
      <form onSubmit={handleSubmit}>
        <label>
          To:{" "}
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="Alice">Alice</option>
            <option value="Bob">Bob</option>
          </select>
        </label>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
