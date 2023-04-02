import React, {useState} from 'react'
import '../App.css'

function Finish() {

  const [inputText, setInputText] = useState("");

  const handleClick = () => {
    // logic for processing user input
  }

  return (
    <>
    <div className="TextBox_white">
      <h1>CBSH Kiosk</h1>
      <h1>전자/공학</h1>
      <h1>물품 체크기를</h1>
      <h1>이용해주셔서 감사합니다.</h1>
    </div>
  </>
)
}

export default Finish
