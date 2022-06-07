import React from "react";
import UserName from "../assets/username.svg";
import ChevronArrowSvg from "../../../../assets/General/ChevronArrowSvg/ChevronArrowSvg";

const Details = () => {
  return (
    <div className="details-wrapper">
      <div className="details-left">
        <div>
          <h1 className="details-title">Your earnings</h1>
          <span className="details-subtitle">Your earnings history</span>
        </div>
        <div className="row justify-content-between m-0" style={{ gap: 10, padding: '25px 0' }}>
          <div className="left-card">
            <div>
              <div
                className="d-flex justify-content-between"
                style={{ gap: 20, padding: 15, alignItems: 'center' }}
              >
                <div className="d-flex m-0 justify-content-between" style={{gap: 10}}>
                 <img src={UserName} alt="" />
                <div>
                  <h5 className="m-0 user-title">Fatjon S</h5>
                  <span className="m-0 user-email">
                  FatjonS@gmail.com
                  </span>
                </div></div>
               <ChevronArrowSvg size="20" color="#1E2029" transform="rotate(90deg)"/>
              </div>
            </div>
          </div>
        </div>
        <div className="total-balance-wrapper">
          <div style={{display: 'flex', flexDirection: 'column', padding: 15, alignItems: 'center'}}>
            <span>Total balance</span>
            <h1>$81,910.00</h1>
          </div>
        </div>
      </div>
      <div className="details-right">
        <div>
          <h1 className="details-title">Your details</h1>
          <span className="details-subtitle">View your URL link and details</span>
        </div>
        <div className="row justify-content-between m-0" style={{ gap: 10, padding: '25px 0' }}>
          <div className="left-card">
            <div>
              <div
                className="d-flex justify-content-between"
                style={{ gap: 20 }}
              >
                <div>
                  <span>Total referrals</span>
                  <h3>
                    126 <span id="people">people</span>
                  </h3>
                </div>
                {/* <img src={PurpleGraph} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
