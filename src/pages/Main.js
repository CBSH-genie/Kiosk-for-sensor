import React, { useState } from 'react';
import '../App.css'

import SelectionBox from './SelectionBox'
import MenuBox from './MenuBox';

const mainSelections = ['음식', '음료'];
const subSelections = {
    음식: ['한식', '일식', '중식', '양식', '패스트푸드'],
    음료: ['커피', '차', '주스', '기타'],
  };

function Main() {
  const [mainSelection, setMainSelection] = useState('');
  const [subSelection, setSubSelection] = useState('');

  // 상위 선택 시
  const handleMainSelection = (selection) => {
    setMainSelection(selection);
    setSubSelection('');
  };

  // 하위 선택 시
  const handleSubSelection = (selection) => {
    setSubSelection(selection);
  };

  return (
    <div className='main-containers'>
      <h1>Kiosk</h1>
      <div className='selection-boxes'>
        <SelectionBox selections={mainSelections} onSelect={handleMainSelection} />
        {mainSelection && (
          <SelectionBox selections={subSelections[mainSelection]} onSelect={handleSubSelection} />
        )}
      </div>
      {subSelection && <MenuBox menus={Array(10).fill(`${mainSelection} ${subSelection} ${Math.floor(Math.random() * 100)}`)} />}
    </div>
  );
}

export default Main;
