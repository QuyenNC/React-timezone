import React from 'react';

import './style/Header.css';
import Logo from './image/logo.png';

function Header(props) {
  const { timZonesList, onChange, onDark, darkMode } = props;
  return (
    <div className="Header">
      <div className="logo">
        <img src={Logo} alt="Logo TimeZone" />
      </div>
      <div className="select-time">
        <select onChange={onChange}>
          {timZonesList.map((item , index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="mode">
        <div className="toggle">
          <input type="checkbox" id="toggle" value={darkMode} onChange={onDark} defaultChecked  />
          <label htmlFor="toggle"></label>
        </div>
      </div>
    </div>
  );
}

export default Header;
