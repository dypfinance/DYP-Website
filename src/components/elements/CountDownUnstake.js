import React from "react";
import Countdown from "react-countdown";
import { PropTypes } from "prop-types";

const renderer = ({ days, hours, minutes, seconds, onComplete }) => {

    return (
      <div className="d-flex mt-2 justify-content-between flex-direction-column">
           <p className="claim-timer-subtitle m-0">Unstake timmer</p>
        <div className="countdown-indicators">
          <span>{days < 10 ? "0" + days : days}</span>
          <span>:</span>
          <span>{hours < 10 ? "0" + hours : hours}</span>
          <span>:</span>
          <span>{minutes < 10 ? "0" + minutes : minutes}</span>
          <span>:</span>
          <span>{seconds < 10 ? "0" + seconds : seconds}</span>
        </div>
      </div>
    );
  
};

const CountDownTimerUnstake = ({date, onComplete}) => {
  return (
    <Countdown
      date={date}
      renderer={renderer}
      onComplete={onComplete}
    />
  );
};

CountDownTimerUnstake.propTypes = {
    date: PropTypes.any,
    onComplete: PropTypes.func
  };

export default CountDownTimerUnstake;