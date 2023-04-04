import React, { useState } from 'react';

function Keypad({ onDigitPress }) {
  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];

  const handleDigitPress = (digit) => {
    onDigitPress(digit);
  };

  return (
    <div>
      {digits.map((d, idx) => (
        <button key={idx} onClick={() => handleDigitPress(d)}>
          {d}
        </button>
      ))}
    </div>
  );
}

function Numpad() {
  const [digit1, setDigit1] = useState('');
  const [digit2, setDigit2] = useState('');
  const [digit3, setDigit3] = useState('');
  const [digit4, setDigit4] = useState('');

  const handleDigitChange = (i, value) => {
    switch (i) {
      case 0:
        setDigit1(value);
        break;
      case 1:
        setDigit2(value);
        break;
      case 2:
        setDigit3(value);
        break;
      case 3:
        setDigit4(value);
        break;
      default:
        break;
    }
  };

  const handleDigitPress = (digit) => {
    if (digit === '') {
      return;
    }

    if (digit1 === '') {
      setDigit1(digit);
      return;
    }

    if (digit2 === '') {
      setDigit2(digit);
      return;
    }

    if (digit3 === '') {
      setDigit3(digit);
      return;
    }

    if (digit4 === '') {
      setDigit4(digit);
      return;
    }
  };

  return (
    <div>
      <input type="password" value={`${digit1}${digit2}${digit3}${digit4}`} readOnly />

      <Keypad onDigitPress={handleDigitPress} />
    </div>
  );
}

export default Numpad;
