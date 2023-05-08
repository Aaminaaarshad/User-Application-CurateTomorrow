import { useState,useEffect } from "react";
import "./counter.css";

const Counter = () => {    
   const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`09/26/${year}`) - +new Date();

  
    let timeLeft = {};
  
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  } 
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

Object.keys(timeLeft).forEach((interval) => {
  if (!timeLeft[interval]) {
    return;
  }

  timerComponents.push(
    <span>
      {timeLeft[interval]} {interval}{" "}
    </span>
  );
});

const dayString = timeLeft.days > 1 ? 'Days' : 'Day';

   return (
    !timerComponents.length ?
             <p>Event in progress or finished</p> 
             :
             <div className="counter-parent">
             <div className="counter-eventDate">
                <div className="counter-days">
                <p style={{color:"var(--t-red)"}}>{ `${timeLeft.days} :`}</p>
                <p>{` ${dayString}`}</p>
                </div>
                <div className="counter-hours">
                <p style={{color:"var(--t-yell)"}}>{ `${timeLeft.hours} :`}</p>
                <p>Hours</p>
                </div>
                <div className="counter-minutes">
                <p style={{color:"var(--t-blue)"}}>{ `${timeLeft.minutes} :`}</p>
                <p>Minutes</p>
                </div>
                <div>
                <p style={{color:"#554bb9"}}>{ `${timeLeft.seconds} `}</p>
                <p>Seconds</p>
                </div>
            <img className="count-img-l" src={require("../../assets/shape/count-shape-1.png")} alt="s"/>
             <img className="count-img-r" src={require("../../assets/shape/count-shape-2.png")} alt="s"/>
             </div>
             </div>
    );
}


export default Counter