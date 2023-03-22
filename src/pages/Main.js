import React, {useState} from 'react'

function Main() {

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
  )
}

export default Main
