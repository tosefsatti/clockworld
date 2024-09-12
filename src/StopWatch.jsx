import React, { useState, useEffect, useRef } from "react";

const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const intervalidRef = useRef(null);
  const starttimeRef = useRef(0);

  useEffect(() => {
    if(isRunning){
    intervalidRef.current = setInterval(() => {
        setElapsedTime(Date.now() - starttimeRef.current)
        
      }, 10);
    }

    return () => {
      clearInterval(intervalidRef.current);
    }
    
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    starttimeRef.current = Date.now() - elapsedTime;

  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setIsRunning(false);
    setElapsedTime(0);
  }

  function formatTime() {

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / (1000) % 60);
    let milliSeconds = Math.floor((elapsedTime % 1000) / 10);

    return `${format(hours)} : ${format(minutes)} : ${format(seconds)} : ${format(milliSeconds)}`;
  }

 function format(number){
  if (number < 10){
    return "0" + `${number}`;
  } else{
    return number;
  }
       
  }

  return (
    <div className="stop-watch">
      <div className="display-time">{formatTime()}</div>
      <div className="control buttons">
        <button onClick={start} className="start-btn">Start</button>
        <button onClick={stop} className="stop-btn">Stop</button>
        <button onClick={reset} className="reset-btn">Reset</button>
      </div>
    </div>
  );
};

export default StopWatch;
