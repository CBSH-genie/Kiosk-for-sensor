const Keypad = ({ onDigitPress }) => {
  const digits = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["C", 0, "E"]
  ];
  return (
    <div className="keypad">
      {digits.map((row, rowIndex) => (
        <div key={rowIndex} className="keypad__row">
          {row.map((digit, digitIndex) => (
            <button
              key={digitIndex}
              className="keypad__button"
              onClick={() => onDigitPress(digit)}
            >
              {digit}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keypad;
