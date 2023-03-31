import React, {useState} from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom';

function Main() {

  const [inputText, setInputText] = useState("");

  const movePage = useNavigate();

  function gohome(){
    movePage('/');
  }

  return (
    <div>
      <h1>Kiosk Main Page</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </div>
  )
}

export default Main
