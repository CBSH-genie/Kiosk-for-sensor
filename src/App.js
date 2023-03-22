import React, { useState } from "react";
import ReactDOM from "react-dom";

function Kiosk() {
  const [inputText, setInputText] = useState("");

  const handleClick = () => {
    // logic for processing user input
  }

  return (
    <div>
      <h1>Kiosk Page</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

ReactDOM.render(<Kiosk />, document.getElementById("root"));


export default Kiosk;
