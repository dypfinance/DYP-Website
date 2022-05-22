import React from "react";
import PropTypes from "prop-types";

const CountDownTimer = ({ hours, minutes, seconds, onComplete }) => {
  const [time, setTime] = React.useState({ hours, minutes, seconds });
  // console.log('hours',hours)
  // console.log('mins',minutes)

  // console.log('sec',seconds)

  const tick = () => {
    if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
      reset();
      onComplete();
    } else if (time.hours === 0 && time.seconds === 0) {
      setTime({ hours: time.hours, minutes: time.minutes - 1, seconds: 59 });
    } else if (time.seconds === 0) {
      setTime({ hours: time.hours, minutes: time.minutes - 1, seconds: 59 });
    } else if (time.minutes === 0 && time.hours != 0) {
      setTime({ hours: time.hours - 1, minutes: 59, seconds: 59 });
    } else {
      setTime({
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds - 1,
      });
    }
  };

  const reset = () =>
    setTime({
      hours: time.hours,
      minutes: time.minutes,
      seconds: time.seconds,
    });

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div>
      <p style={{color: '#E30613', gap: 5, display: 'flex', justifyContent: 'left'}}>Timer
        <span> 
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99567 1.66666C5.3915 1.66666 1.6665 5.39582 1.6665 9.99999C1.6665 14.6042 5.3915 18.3333 9.99567 18.3333C14.5998 18.3333 18.3332 14.6042 18.3332 9.99999C18.3332 5.39582 14.5998 1.66666 9.99567 1.66666ZM9.99984 16.6667C6.3165 16.6667 3.33317 13.6833 3.33317 9.99999C3.33317 6.31666 6.3165 3.33332 9.99984 3.33332C13.6832 3.33332 16.6665 6.31666 16.6665 9.99999C16.6665 13.6833 13.6832 16.6667 9.99984 16.6667Z"
              fill="#E30613"
            />
            <path
              d="M10.4165 5.83334H9.1665V10.8333L13.5373 13.4583L14.1665 12.4333L10.4165 10.2083V5.83334Z"
              fill="#E30613"
            />
          </svg>
        </span>
        {`${time?.hours?.toString().padStart(2, "0")}:${time?.minutes
          ?.toString()
          .padStart(2, "0")}:${time.seconds?.toString().padStart(2, "0")}`}
      </p>
    </div>
  );
};

CountDownTimer.propTypes = {
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  onComplete: PropTypes.func,
};

export default CountDownTimer;
