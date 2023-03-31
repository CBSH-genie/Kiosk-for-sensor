import React, {useState} from 'react'

function Wait() {

  const [inputText, setInputText] = useState("");

  const handleClick = () => {
    // logic for processing user input
  }

  return (
    <div>
      <h1>CBSH Kiosk</h1>
      <h1>전자/공학</h1>
      <h1>물품 체크기</h1>
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Wait
