import React from "react";
import PurpleGraph from "../assets/purple-graph.svg";
import BlueGraph from "../assets/blue-circle.svg";
import History from "../assets/history-graph.svg";
const OverView = () => {
  return (
    <div className="overview-wrapper">
      <div>
        <h1 className="overview-title">Overview</h1>
        <span className="overview-subtitle">Good morning, Welcome</span>
      </div>
      <div
        className="row justify-content-between m-0"
        style={{ gap: 10, padding: "25px 0" }}
      >
        <div className="left-card">
          <div className="left-border-purple" />
          <div style={{ padding: "0 15px 15px" }}>
            <div className="d-flex justify-content-between" style={{ gap: 20 }}>
              <div>
                <span>Total referrals</span>
                <h3>
                  126 <span id="people">people</span>
                </h3>
              </div>
              <img src={PurpleGraph} alt="" />
            </div>
            <div className="row justify-content-between m-0">
              <span className="d-flex align-items-center" style={{ gap: 10 }}>
                <div className="purple-ball" /> Invested
              </span>
              <span className="d-flex align-items-center" style={{ gap: 10 }}>
                <div className="transparent-ball" /> Clicked the link
              </span>
            </div>
          </div>
        </div>
        <div className="left-card">
          <div className="left-border-blue" />
          <div style={{ padding: "0 15px 15px" }}>
            <div className="d-flex justify-content-between" style={{ gap: 20 }}>
              <div>
                <span>Products</span>
                <h3>DYP</h3>
              </div>
              <img src={BlueGraph} alt="" />
            </div>
            <div className="row justify-content-between m-0">
              <span
                className="d-flex align-items-center"
                style={{ gap: 10, width: "50%" }}
              >
                <div className="farm-ball" /> Farm
              </span>
              <span
                className="d-flex align-items-center"
                style={{ gap: 10, width: "50%" }}
              >
                <div className="vault-ball" /> Vault
              </span>
              <span
                className="d-flex align-items-center"
                style={{ gap: 10, width: "50%" }}
              >
                <div className="stake-ball" /> Stake
              </span>
              <span
                className="d-flex align-items-center"
                style={{ gap: 10, width: "50%" }}
              >
                <div className="buyback-ball" /> Buyback
              </span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: "10px 0", display: 'flex', flexDirection: 'column' }}>
        <h4>Referral history</h4>
        <img src={History} alt="" id="graph" />
      </div>
      <div className="row justify-content-between m-0 pb-4">
        <div className="left-card">
          <div className="left-border-purple" />
          <div
            style={{
              padding: "0 15px 0px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div className="d-flex justify-content-between" style={{ gap: 20 }}>
              <div>
                <span>Tier 1</span>
                <h3>Rewards</h3>
              </div>
              <button className="details-btn">View details</button>
            </div>
            <div className="row justify-content-between m-0">
              <div>
                <span className="d-flex align-items-center" style={{ gap: 10 }}>
                  Total users
                </span>
                <h3>22</h3>
              </div>
              <div>
                <span className="d-flex align-items-center" style={{ gap: 10 }}>
                  Total users
                </span>
                <h3>8%</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="left-card">
          <div className="left-border-blue" />
          <div
            style={{
              padding: "0 15px 0px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div className="d-flex justify-content-between" style={{ gap: 20 }}>
              <div>
                <span>Special Campaigns</span>
                <h3>Earned</h3>
              </div>
            </div>
            <div className="row justify-content-between m-0">
              <div>
                <span className="d-flex align-items-center" style={{ gap: 10 }}>
                  Qualified campaigns
                </span>
                <h3>22</h3>
              </div>
              <div>
                <span className="d-flex align-items-center" style={{ gap: 10 }}>
                  Rewards
                </span>
                <h3>$1,000</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="purple-card-bottom mb-4">
        <div style={{ padding: "15px 0 0",display: "flex",
              flexDirection: "column",
              gap: 20, }}>
          <div className="left-border-white" />
          <div
            className="d-flex justify-content-between"
            style={{ gap: 20, padding: "0 15px", alignItems: 'center' }}
          >
            <div>
              <span>Tier 2</span>
              <h4>Rewards</h4>
            </div>
            <button className="white-details-btn">View details</button>
          </div>
          <div
            className="row justify-content-between m-0"
            style={{ padding: "0 15px 10px" }}
          >
            <div>
              <span>Premium users</span>
              <h3>12/22</h3>
            </div>
            <div>
              <span>5 gold users</span>
              <h3>$500.00</h3>
            </div>
            <div>
              <span>3 silver users</span>
              <h3>$240.00</h3>
            </div>
            <div>
              <span>4 bronze users</span>
              <h3>$120.00</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
