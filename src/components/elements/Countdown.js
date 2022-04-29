import React from 'react'
import PropTypes from "prop-types";


const CountDownTimer = ({ hours, minutes, seconds, onComplete }) => {
    
    const [time, setTime] = React.useState({hours, minutes, seconds});
    // console.log('hours',hours)
    // console.log('mins',minutes)

    // console.log('sec',seconds)

    const tick = () => {
   
        if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) 
           { reset(); onComplete()}
           
        else if (time.hours === 0 && time.seconds === 0) {
            setTime({hours: time.hours, minutes: time.minutes - 1, seconds: 59});
        } else if (time.seconds === 0) {
            setTime({hours: time.hours, minutes: time.minutes - 1, seconds: 59});}
            else if (time.minutes === 0 && time.hours != 0) {
                setTime({hours: time.hours-1, minutes: 59, seconds: 59});
        } else {
            setTime({hours: time.hours, minutes: time.minutes, seconds: time.seconds - 1});
        }
    };


    const reset = () => setTime({hours: time.hours, minutes: time.minutes, seconds: time.seconds});

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div>
            <p>{`${time?.hours?.toString().padStart(2, '0')}:${time?.minutes?.toString()
            .padStart(2, '0')}:${time.seconds?.toString().padStart(2, '0')}`}</p> 
        </div>
    );
}

CountDownTimer.propTypes = {
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  onComplete: PropTypes.func,
  
};

export default CountDownTimer;