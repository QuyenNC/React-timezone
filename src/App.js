import React, { useState } from 'react';
import ClassNamed from 'classnames';
import momentTZ from 'moment-timezone';

import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

import 'antd/dist/antd.css';
import { message } from 'antd';

import Default from './components/Default';
import Clock from './components/Clock';
import './App.css';

import Header from './components/Header';


function App() {
  const [timeZoneLists, setTimeZoneLists] = useState([]);
  const [darkMode,setDarkMode] = useState('off');
  const timeZonesList = momentTZ.tz.names();
  const onChangeSelect = (e) =>{
    if(timeZoneLists.indexOf(e.target.value) === -1){
      setTimeZoneLists([...timeZoneLists, e.target.value]);
    }else{
      return message.error('TimeZone had already');
    }
  };
  const onChangeDark = (e) =>{
    if(e.currentTarget.value === 'on'){
      setDarkMode('off')
    }else{
      setDarkMode('on')
    }
   
  }
  const onDelete = (item) =>{
    return () => {
      let timeZoneArr = timeZoneLists;
      const index = timeZoneArr.indexOf(item);
      timeZoneArr.splice(index , 1);
      setTimeZoneLists([...timeZoneArr]);
      return message.success('The time zone has been successfully deletedy');
    }
  }
  return (
    <div className={ClassNamed('App',{
      darkMode : darkMode === 'off'
    })}>
      <div className="Wrap" >
        <div className="Main">
          <Header timZonesList = {timeZonesList} onChange = {onChangeSelect} onDark={onChangeDark} darkMode={darkMode} />
          <div className="Body">
            <PerfectScrollbar className="flex">  
              { timeZoneLists.length ? "" : <Default />}
              {timeZoneLists.map((item , index) => (
                  <Clock key={index} timeZone={item} size={200} timeFormat="24hour" hourFormat="standard" onDelete={onDelete(item)} darkMode={darkMode} />
                ))}
              </PerfectScrollbar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
