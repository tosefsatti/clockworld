import React, { useEffect, useState } from 'react'

const Digitalclock = () => {

const [time, setTime] = useState(new Date());
useEffect(() => {
  const timeId = setInterval(() =>{
    setTime(new Date());

  },1000)

  return () => {
    clearInterval(timeId);}
},[]);


function formatTime(){
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  const chk = hours >= 12 ? "PM": "AM";
  hours = hours % 12 || 12;

  return `${padZero(hours)}: ${padZero(minutes)}: ${padZero(seconds)} ${chk}`;
}

function padZero(number){
     if(number < 10){
      return "0" + `${number}`
     } else{
      return number;
     }
}

  return (
    <div className='clock-container '>
      <div className='clock'>
        <span>
          {formatTime()}
        </span>
      </div>
      
    </div>
  )
}

export default Digitalclock
