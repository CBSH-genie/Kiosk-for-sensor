import React, { useState } from 'react';
import '../App.css'

import SelectionBox from './SelectionBox';
import MenuBox from './MenuBox';

const mainSelections = ['전자', '공학'];
const subSelections = {
  전자: ['한식', '일식', '중식', '양식', '패스트푸드'],
  공학: ['커피', '차', '주스', '기타'],
};

function Main() {
  const [mainSelection, setMainSelection] = useState('');
  const [subSelection, setSubSelection] = useState('');
  const [selectedMain, setSelectedMain] = useState('');
  const [selectedSub, setSelectedSub] = useState('');

  // 상위 선택 시
  const handleMainSelection = (selection) => {
    setMainSelection(selection);
    setSubSelection('');
    setSelectedMain(selection);
  };

  // 하위 선택 시
  const handleSubSelection = (selection) => {
    setSubSelection(selection);
    setSelectedSub(selection);
  };

  return (
    <div className='main-containers'>
      <div className='selection-boxes'>
        <SelectionBox selections={mainSelections} onSelect={handleMainSelection} selected={selectedMain} />
      </div>
      <div className='selection-boxes'>
        {mainSelection && (
          <SelectionBox
            selections={subSelections[mainSelection]}
            onSelect={handleSubSelection}
            selected={selectedSub}
          />
        )}
      </div>
      {subSelection && (
        <MenuBox menus={Array(10).fill(`${mainSelection} ${subSelection} ${Math.floor(Math.random() * 100)}`)} />
      )}
    </div>
  );
}

export default Main;
