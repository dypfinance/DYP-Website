import React from "react";
import Countdown from "react-countdown";
import Paw from "../assets/images/paw.svg";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span>
      <h5 id="countdownBold" className="mb-0">
           Mint Now!
          </h5>
    </span>;
  } else {
    return (
      <div className="countdownWrapper">
        <div className="text-center">
          <h5 id="countdownLight" className="mb-0">
            COUNTDOWN
          </h5>
          <h5 id="countdownBold" className="mb-0">
            UNTIL RELEASE
          </h5>
        </div>
        <div className="d-flex mt-2 countdownTextWrapper">
          <span className="countdownText">{days < 10 ? "0" + days : days}</span>
          <span className="colonText">:</span>
          <span className="countdownText">
            {hours < 10 ? "0" + hours : hours}
          </span>
          <span className="colonText">:</span>
          <span className="countdownText">
            {minutes < 10 ? "0" + minutes : minutes}
          </span>
          <span className="colonText">:</span>
          <span className="countdownText">
            {seconds < 10 ? "0" + seconds : seconds}
          </span>
        </div>
        <div>
          <span className="bottomWrapper mt-3">
            <div>
            <img src={Paw}/>
            </div>
            
          </span>
        </div>
      </div>
    );
  }
};

const CountDownTimer = () => {
  return (
    <Countdown
      date={"Wed, 13 Apr 2022 18:20:00 GMT-0000"}
      renderer={renderer}
    />
  );
};

export default CountDownTimer;
