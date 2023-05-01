import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import '../App.css';

function Wait() {

  const [inputText, setInputText] = useState("");
    return (
      <>
        <div className="TextBox_white">
          <h1>CBSH Kiosk</h1>
          <h1>전자/공학</h1>
          <h1>물품 체크기</h1>
        </div>
        <div className="Buttons">
          <Link to="./Main">
            <Button>
              <h1>Alt+F4</h1>
              <h3>시작하기</h3>
            </Button>
          </Link>
        </div>
      </>
    )
  };

export default Wait
