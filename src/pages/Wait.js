import React, {useState} from 'react'
import Button from '../components/Button';

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
      <Button onClick={handleClick}>
        <h1>Alt+F4</h1>
        <h3>시작하기</h3>
        </Button>
    </div>
  )
}

export default Wait
