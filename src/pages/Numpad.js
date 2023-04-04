import React, { useState } from "react";
import Keypad from "./Keypad";

const Numpad = ({ correctPassword }) => {
  const [digit1, setDigit1] = useState("");
  const [digit2, setDigit2] = useState("");
  const [digit3, setDigit3] = useState("");
  const [digit4, setDigit4] = useState("");

  const handleDigitPress = (digit) => {
    // If Clear button is clicked
    if (digit === "C") {
      setDigit1("");
      setDigit2("");
      setDigit3("");
      setDigit4("");
    }
    // If Enter button is clicked
    else if (digit === "E") {
      const inputPassword = digit1 + digit2 + digit3 + digit4;
      if (inputPassword === correctPassword) {
        handleNavigation("./Finish");
      } else {
        setDigit1("");
        setDigit2("");
        setDigit3("");
        setDigit4("");
      }
    } else {
      // If a digit button is clicked
      if (digit1 === "") {
        setDigit1(digit);
      } else if (digit2 === "") {
        setDigit2(digit);
      } else if (digit3 === "") {
        setDigit3(digit);
      } else if (digit4 === "") {
        setDigit4(digit);
      }
    }
  };

  const handleNavigation = (path) => {
    // handle navigation logic here
  };

  return (
    <div>
      <input type="password" value={`${digit1}${digit2}${digit3}${digit4}`} disabled />
      <Keypad onDigitPress={handleDigitPress} />
    </div>
  );
};

export default Numpad;
