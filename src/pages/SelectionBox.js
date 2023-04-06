import React from 'react';
import '../App.css'

function SelectionBox({ selections, onSelect, selected }) {
  return (
    <div className='selection-box'>
      {selections.map(selection => (
        <div
          key={selection}
          className={`selection-item${selected === selection ? ' selected' : ''}`}
          onClick={() => onSelect(selection)}
        >
          {selection}
        </div>
      ))}
    </div>
  );
}

export default SelectionBox;
