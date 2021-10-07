import React, { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [valid, setValid] = useState(false);

  useMemo(() => 
    const reg = new RegExp("^\\d+$")
    setValid(reg.test(text))
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
          <i className={valid ? "fas fa-check" : "fas fa-times"} />
        </span>
      </div>
    </div>
  );
}

export default App;
