import React from 'react';
import scss from './DropDown.module.scss';

const DropDown = () => {
  return (
    <div className={`${scss.flex} ${scss.flex_col} ${scss.DropDownMenu}`}>
      <ul className={`${scss.flex} ${scss.flex_col} ${scss.gap_4}`}>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>GitHub</li>
      </ul>
    </div>
    
  );
};

export default DropDown;