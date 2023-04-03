import React, { useState, useEffect } from 'react'
import { Link, useNavigate, } from 'react-router-dom';
import '../App.css'
import Button from '../components/Button'

function Finish() {

  const [inputText, setInputText] = useState("");

  const handleClick = () => {
    // logic for processing user input
  }

  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/")
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <div className="TextBox_ending">
      <h1>CBSH Kiosk</h1>
      <h1>전자/공학</h1>
      <h1>물품 체크기를</h1>
      <h1>이용해주셔서 감사합니다.</h1>
    </div>
    <div className='Buttons'>
      <Link to="/">
        <Button>
          <h3>다시 시작하기</h3>
        </Button>
      </Link>
    </div>
  </>
)
}

export default Finish
