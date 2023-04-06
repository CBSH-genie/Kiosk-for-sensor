function SelectionBox({ selections, onSelect }) {
  return (
    <div>
      {selections.map((selection, index) => (
        <button key={index} onClick={() => onSelect(selection)}>
          {selection}
        </button>
      ))}
    </div>
  );
}

export default SelectionBox;
