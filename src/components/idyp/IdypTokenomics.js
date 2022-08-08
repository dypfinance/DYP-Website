import React from "react";
import Graph from "./graph.svg";
import rightArrow from "../../assets/svg/white-arrow.svg";

const IdypTokenomics = () => {
  return (
    <div className="p4token-bg App-container" style={{ paddingTop: 135 }}>
      <div className="p4token">
        <div className="container">
          <h1
            className="col-lg-10 offset-lg-1 pl-0"
            style={{ fontWeight: "bold" }}
          >
            Tokenomics
          </h1>
          <div className="row">
            <div className="col-lg-12 offset-lg-1">
              <div
                className="p4dyp-wrapper d-grid d-md-flex"
                style={{
                  background: "none",
                  boxShadow: "none",
                  padding: 0,
                }}
              >
                <div className="col-lg-8 ml-0 p-0 d-grid py-5">
                  <div className="d-md-flex col-lg-12 p-0" style={{ gap: 20 }}>
                    <div className="p4token-content-one p4dyp-wrapper col-lg-7 d-block align-items-center align-self-center m-0">
                      <p className="pb-2">iDYP Contract Address: </p>
                      <p className="p4token-content-strong">
                        <span>0xbd100d061e120b2c67a24453cf6368e63f1be056</span>
                      </p>
                    </div>
                    <div className="supplyCirculated m-0 col-lg-5 py-3 d-grid mt-3 mt-md-0">
                      <p style={{ fontSize: 14 }}>Max Total Supply </p>
                      <h3 className="p4token-content-strong">
                        <span>300,000,000 iDYP</span>
                      </h3>
                    </div>
                  </div>
                  <div className="supplyCirculated">
                300,000,000 iDYP have been minted at genesis and will become
                accessible over the course of 10 years.&nbsp;
                <span>The 10-year allocation is as follows:</span>
              </div>
                </div>
                <div className="col-lg-4 d-flex justify-content-center align-self-center">
                  <img src={Graph} alt="graph" id='idypgraph' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p4dyp">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 offset-lg-1 justify-content-start">

              <div className="p4dyp-content-one-left justify-content-start m-auto w-100">
                <h4>Community</h4>
              </div>
              <div
                className="d-grid d-md-flex justify-content-start m-auto"
                style={{ gap: 40 }}
              >
                <div className="p4dyp-wrapper">
                  <div className="p4dyp-content-one-left">
                    <p>Airdrop to eligible users</p>
                    <h3>
                      5,000,000 <span>iDYP</span>
                    </h3>
                  </div>
                </div>
                <div className="p4dyp-wrapper">
                  <div className="p4dyp-content-one-left">
                    <p>Distributed for pool rewards</p>
                    <h3>20,640,000 iDYP</h3>
                  </div>
                </div>
                <div className="p4dyp-wrapper">
                  <div className="p4dyp-content-one-left">
                    <p>Distributed for liquidity on DEX</p>
                    <h3>5,550,000 iDYP</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-11 offset-lg-1 justify-content-start">
              <div className="d-grid d-md-flex m-auto" style={{ gap: 40 }}>
                <div className="p4dyp-wrapper">
                  <div className="p4dyp-content-one-left">
                    <p>Allocation for eligible users</p>
                    <h3>1,000,000 iDYP</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-10 offset-lg-1 justify-content-start">
              <div className="p4dyp-content-one-left justify-content-start m-auto w-100">
                <h4>Team</h4>
              </div>
              <div
                className="d-grid d-md-flex justify-content-start m-auto"
                style={{ gap: 40 }}
              >
                <div
                  className="p4dyp-wrapper d-grid d-md-flex align-content-center"
                  style={{ gap: 20 }}
                >
                  <div className="p4dyp-content-one-left">
                    <p>Vested for 120 months, released monthly</p>
                    <h3 className="pr-4">30,000,000 iDYP</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-10 offset-lg-1 justify-content-start">
              <div className="p4dyp-content-one-left justify-content-start m-auto w-100">
                <h4 style={{ width: "auto" }}>
                  Reserves, Marketing, Ecosystem
                </h4>
              </div>
              <div
                className="d-grid d-md-flex justify-content-start m-auto"
                style={{ gap: 40, flexWrap: "wrap" }}
              >
                <div className="p4dyp-wrapper">
                  <div className="p4dyp-content-one-left">
                    <p style={{ color: "#000" }}>Company Reserve</p>

                    <p>Vested for 60 months, released monthly</p>
                    <h3>155,967,000 iDYP</h3>
                  </div>
                </div>

                <div className="p4dyp-wrapper">
                  <div className="p4dyp-content-one-left">
                    <p>Marketing</p>
                    <h3>15,000,000 iDYP</h3>
                  </div>
                </div>
                <div className="p4dyp-wrapper">
                  <div className="p4dyp-content-one-left">
                    <p style={{ color: "#000" }}>Ecosystem</p>
                    <p>Vested for 60 months, released monthly</p>
                    <h3>66,843,000 iDYP</h3>
                  </div>
                </div>
                <div className="p4dyp-wrapper">
                  <div className="p4dyp-content-one-left">
                    <p>Allocation for eligible users</p>
                    <h3>1,000,000</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-10 offset-lg-1 justify-content-start ml-0 pl-0">
                <div className="p4dyp-content-one-left justify-content-start m-auto w-100">
                  <h4>Burned</h4>
                </div>
                <div
                  className="p4dyp-wrapper d-grid d-md-flex align-content-center"
                  style={{ gap: 20, width: 'fit-content' }}
                >
                  <div className="p4dyp-content-one-left">
                    <p style={{ wordWrap: "break-word" }}>
                      Burned and removed from the total supply
                    </p>
                    <h3>1,325,392 iDYP</h3>
                  </div>
                  {/* <div className="p4dyp-content-red-button">
                    <a
                      href=""
                      target="_blank"
                      without
                      rel="noreferrer"
                    >
                      View transaction &nbsp;{" "}
                      <img src={rightArrow} alt="arrow" />
                    </a>
                  </div> */}
                </div>
                <div className="supplyCirculated m-0 col-lg-5 py-3 d-grid mt-3" style={{width: 'fit-content'}}>
                        <span>No additional tokens can be minted</span>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdypTokenomics;
