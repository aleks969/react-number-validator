import React, { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const isNum = useMemo(() => {
    const icon = document.querySelector(".fas");
    if (icon === null) return;
    if (isNaN(input) || input === " " || input === "") {
      icon.classList.remove("fa-check");
      icon.classList.add("fa-times");
      return false;
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-check");
      return true;
    }
  }, [input]);
  return (
    <div className="App">
      <div className="control has-icons-right">
        <input
          className="input is-large"
          type="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter number..."
        />
        <span className="icon is-small is-right">
          <i className="fas fa-times" />
        </span>
      </div>
    </div>
  );
}

export default App;
