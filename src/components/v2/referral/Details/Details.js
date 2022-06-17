import React from "react";
import UserName from "../assets/username.svg";
import ChevronArrowSvg from "../../../../assets/General/ChevronArrowSvg/ChevronArrowSvg";
import ThreeLines from "../assets/3lines.svg";
import Box from "../assets/box.svg";
import User from "../assets/users-white.svg";

const Details = () => {
  return (
    <div className="details-wrapper">
      <div className="details-left">
        <div>
          <h1 className="details-title">Your earnings</h1>
          <span className="details-subtitle">Your earnings history</span>
        </div>
        <div
          className="row justify-content-between m-0"
          style={{ gap: 10, padding: "32px 0" }}
        >
          <div className="left-card">
            <div>
              <div
                className="d-flex justify-content-between"
                style={{ gap: 20, padding: 15, alignItems: "center" }}
              >
                <div
                  className="d-flex m-0 justify-content-between"
                  style={{ gap: 10 }}
                >
                  <img src={UserName} alt="" />
                  <div>
                    <h5 className="m-0 user-title">Fatjon S</h5>
                    <span className="m-0 user-email">FatjonS@gmail.com</span>
                  </div>
                </div>
                <ChevronArrowSvg
                  size="20"
                  color="#1E2029"
                  transform="rotate(90deg)"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="total-balance-wrapper">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 15,
              alignItems: "center",
              gap: 10,
            }}
          >
            <span>Total balance</span>
            <h1>$81,910.00</h1>
          </div>
        </div>
        <div className="earning-wrapper">
          <h5>Earnings breakdown</h5>
          <div className="list-wrapper">
            <div className="list-node">
              <img src={ThreeLines} alt="" />
              <div>
                <span className="node-subtitle">Tier 1 earnings</span>
                <h5 className="node-title">$520.00</h5>
              </div>
            </div>
            <div className="list-node">
              <img src={ThreeLines} alt="" />
              <div>
                <span className="node-subtitle">Tier 2 earnings</span>
                <h5 className="node-title">$980.00</h5>
              </div>
            </div>
            <div className="list-node">
              <img src={Box} alt="" />
              <div>
                <span className="node-subtitle">Special campaigns</span>
                <h5 className="node-title">$250.00</h5>
              </div>
            </div>
            <div className="list-node">
              <img src={User} alt="" />
              <div>
                <span className="node-subtitle">Referral earnings</span>
                <h5 className="node-title">$500.00</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="details-right">
        <div>
          <h1 className="details-title">Your details</h1>
          <span className="details-subtitle">
            View your URL link and details
          </span>
        </div>
        <div style={{ padding: "15px 0" }}>
          <div className="left-card">
            <div className="left-border-purple" />
            <div style={{ padding: "15px" }}>
              <h2>My personal link</h2>
            </div>
            <div
              className="row justify-content-between m-0"
              style={{ padding: "15px" }}
            >
              <div className="link-wrapper">
                <h6>https://example.com/DYP</h6>
              </div>
              <button className="details-btn">Copy link</button>
            </div>
          </div>
        </div>
        <div style={{ padding: "15px 0" }} className="referral">
          <div className="referral-wrapper">
            <div
              style={{
                padding: "15px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h2>Refferal banner</h2>
              <button className="white-details-btn">View details</button>
            </div>
            <div
              className="row justify-content-between m-0"
              style={{ padding: "15px" }}
            >
              <h6>
                Customize the way to send referrals by choosing one of our
                banners.
              </h6>
            </div>
          </div>
        </div>
        <div style={{ padding: "15px 0" }} className="referral">
          <div className="campaign-wrapper">
            <div
              style={{
                padding: "15px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h2>Special campaign</h2>
            </div>
            <div
              className="row justify-content-between m-0"
              style={{ padding: "15px" }}
            >
              <h6>Earn up to $1000 for referring our new product.</h6>
            </div>
          </div>
        </div>
        <h5 style={{ padding: "15px 0" }}>Latest activity</h5>
        <div style={{ height: 180, overflow: "auto" }}>
          <div className="activity-wrapper">
            <div className="activity-inner-wrapper">
              <div className="item-wrapper">
                <img src={UserName} alt="" />
                <div className="activity-item">
                  <h6 className="m-0">
                    john_smith invested $10,000 in Farming (30 Day Lock Period)
                  </h6>
                </div>
              </div>
              <div
                className="d-flex justify-content-between"
                style={{ gap: 20 }}
              >
                <img src={UserName} alt="" style={{ visibility: "hidden" }} />

                <div className="d-flex justify-content-between w-100 align-items-center">
                  <span className="locktime-period">(30 Day Lock Period)</span>
                  <span className="price">+$550</span>
                </div>
              </div>
            </div>
          </div>
          <div className="activity-wrapper">
            <div className="activity-inner-wrapper">
              <div className="item-wrapper">
                <img src={UserName} alt="" />
                <div className="activity-item">
                  <h6 className="m-0">
                    john_smith invested $10,000 in Farming (30 Day Lock Period)
                  </h6>
                </div>
              </div>
              <div
                className="d-flex justify-content-between"
                style={{ gap: 20 }}
              >
                <img src={UserName} alt="" style={{ visibility: "hidden" }} />

                <div className="d-flex justify-content-between w-100 align-items-center">
                  <span className="locktime-period">(30 Day Lock Period)</span>
                  <span className="price">+$550</span>
                </div>
              </div>
            </div>
          </div>
          <div className="activity-wrapper">
            <div className="activity-inner-wrapper">
              <div className="item-wrapper">
                <img src={UserName} alt="" />
                <div className="activity-item">
                  <h6 className="m-0">
                    john_smith invested $10,000 in Farming (30 Day Lock Period)
                  </h6>
                </div>
              </div>
              <div
                className="d-flex justify-content-between"
                style={{ gap: 20 }}
              >
                <img src={UserName} alt="" style={{ visibility: "hidden" }} />

                <div className="d-flex justify-content-between w-100 align-items-center">
                  <span className="locktime-period">(30 Day Lock Period)</span>
                  <span className="price">+$550</span>
                </div>
              </div>
            </div>
          </div>
          <div className="activity-wrapper">
            <div className="activity-inner-wrapper">
              <div className="item-wrapper">
                <img src={UserName} alt="" />
                <div className="activity-item">
                  <h6 className="m-0">
                    john_smith invested $10,000 in Farming (30 Day Lock Period)
                  </h6>
                </div>
              </div>
              <div
                className="d-flex justify-content-between"
                style={{ gap: 20 }}
              >
                <img src={UserName} alt="" style={{ visibility: "hidden" }} />

                <div className="d-flex justify-content-between w-100 align-items-center">
                  <span className="locktime-period">(30 Day Lock Period)</span>
                  <span className="price">+$550</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
