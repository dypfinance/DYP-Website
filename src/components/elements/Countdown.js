import React from "react";
import Countdown from "react-countdown";
import { PropTypes } from "prop-types";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
if(completed){ return <></>}
    else {return (
      <div className="d-flex mt-2 w-100 justify-content-between">
           <p className="claim-timer-subtitle">Claim timmer</p>
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
    );}
};

const CountDownTimer = ({date, onComplete}) => {
  return (
    <Countdown
      date={date}
      renderer={renderer}
      onComplete={onComplete}
    />
  );
};

CountDownTimer.propTypes = {
    date: PropTypes.string,
  };

export default CountDownTimer;
