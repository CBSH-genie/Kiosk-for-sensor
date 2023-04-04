import React, { useState } from "react";

function Keypad({ onDigitPress }) {
  const keypadButtons = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["C", "0", "E"],
  ];

  const handleDigitPress = (digit) => {
    onDigitPress(digit);
  };

  return (
    <div>
      {keypadButtons.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`}>
          {row.map((button, colIndex) => (
            <button
              key={`button-${rowIndex}-${colIndex}`}
              onClick={() => handleDigitPress(button)}
            >
              {button}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

function Numpad({ navigation }) {
  const [digit1, setDigit1] = useState("");
  const [digit2, setDigit2] = useState("");
  const [digit3, setDigit3] = useState("");
  const [digit4, setDigit4] = useState("");

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
    if (digit === "C") {
      setDigit1("");
      setDigit2("");
      setDigit3("");
      setDigit4("");
    } else if (digit === "E") {
      navigation();
    } else {
      if (digit1 === "") {
        setDigit1(digit);
        return;
      }

      if (digit2 === "") {
        setDigit2(digit);
        return;
      }

      if (digit3 === "") {
        setDigit3(digit);
        return;
      }

      if (digit4 === "") {
        setDigit4(digit);
        return;
      }
    }
  };

  const handleNavigation = () => {
    // 이동할 페이지에 대한 로직을 작성합니다.
    // 예시로, '/Finish' 페이지로 이동하는 코드를 작성합니다.
    navigation.navigate("/Finish");
  }


  return (
    <div>
      <input
        type="password"
        value={`${digit1}${digit2}${digit3}${digit4}`}
        readOnly
      />

      <Keypad onDigitPress={handleDigitPress} />

      <button onClick={() => handleDigitPress("C")}>Clear</button>
      <button onClick={() => handleDigitPress("E")}>Enter</button>
    </div>
  );
}

export default Numpad;
