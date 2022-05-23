import React from "react";

export default class Vote extends React.Component {
  render() {
    return (
      <>
        <div
          className="earn-hero-area App-container"
          style={{ paddingTop: 78 }}
        >
          <div className="container">
          <div
                    class="big-circle-decoration"
                    style={{
                      width: 508,
                      height: 508,
                      left: "-205px",
                      top: "222px",
                    }}
                  ></div>
                  <div
                    class="ball-decoration"
                    style={{
                      width: 197,
                      height: 197,
                      top: "350px",
                      left: "-8px",
                    }}
                  ></div>
                  <div
                    class="big-circle-decoration"
                    style={{
                      width: 508,
                      height: 508,
                      right: "0px",
                      top: "82px",
                    }}
                  ></div>
                  <div
                    class="ball-decoration"
                    style={{
                      width: 197,
                      height: 197,
                      bottom: "500px",
                      right: "10px",
                    }}
                  ></div>
            <div className="earn-hero-wrapper">
              <div className="row">
                <div className="col-lg-12  offset-lg-2 ml-0">
                  

                  <div
                    className="earn-hero-content p4token-wrapper"
                    style={{ boxShadow: "none", background: "none" }}
                  >
                    <div
                      className="text-left"
                      style={{ borderBottom: "1px solid #999999" }}
                    >
                      <h1>
                        <b>DYP Governance</b>
                      </h1>
                      {/* <h5>Visit <a style={{textTransform: 'lowercase'}} href='https://mining.dyp.finance'>https://mining.dyp.finance</a> to join the Ethereum Mining Pool Whitelist</h5> */}
                      <div className="GovDesc">
                        <p className="col-12 pl-0">
                          DYP tokens represent voting shares in DeFi Yield
                          Protocol governance. The introduction of DYP tokens
                          enables shared community ownership of a vibrant,
                          diverse, and dedicated governance system which will
                          actively guide the protocol toward the future.
                        </p>
                        <p className="col-12 pl-0">
                          Through governance, DYP holders can vote to add more
                          pools, burn tokens, or allocate DYP toward grants,
                          strategic partnerships, governance initiatives, and
                          other programs.
                        </p>
                      </div>
                      {/*<div style={{display: "flex"}}>*/}
                      {/*  <div className="earn-hero-btns-bridge m-0">*/}
                      {/*    <a target='_blank' href='https://gov.dyp.finance'>ETH Governance</a>*/}
                      {/*  </div>*/}
                      {/*  <div className="earn-hero-btns-white m-0 pl-3">*/}
                      {/*    <a target='_blank' href='https://gov-bsc.dyp.finance'>BSC Governance</a>*/}
                      {/*  </div>*/}
                      {/*</div>*/}
                      <div className="earn-hero-btns">
                        {/* <a href="https://dypfinance.medium.com/defi-yield-protocol-bridge-tutorial-9dad5226537f">DYP Bridge Tutorial</a> */}
                        {/* <a href="#">Read More about DYP</a> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 offset-lg-2 mt-5 ml-0">
                  <div className="farming-content">
                    <div className="row" style={{ justifyContent: "center" }}>
                      <div className="">
                        <a href="https://gov.dyp.finance/" target="_blank">
                          <div
                            className="fariming-item"
                            style={{ boxShadow: "none", background: "none" }}
                          >
                            <div className="icon">
                              <img
                                src="img/ethBanner.svg"
                                alt="Image not found"
                                style={{ width: "auto" }}
                              />
                              {/*<div className="line"></div>*/}
                            </div>
                            {/*<p>Blockchain Consilium</p>*/}
                          </div>
                        </a>
                      </div>
                      <div className="">
                        <a href="https://gov-bsc.dyp.finance/" target="_blank">
                          <div
                            className="fariming-item"
                            style={{ boxShadow: "none", background: "none" }}
                          >
                            <div className="icon">
                              <img
                                src="img/bscBanner.svg"
                                alt="Image not found"
                                style={{ width: "auto" }}
                              />
                            </div>
                            {/*<div className="line"></div>*/}
                            {/*<p>Certik Foundation</p>*/}
                          </div>
                        </a>
                      </div>
                      <div className="">
                        <a href="https://gov-avax.dyp.finance/" target="_blank">
                          <div
                            className="fariming-item"
                            style={{ boxShadow: "none", background: "none" }}
                          >
                            <div className="icon">
                              <img
                                src="img/avaxBanner.svg"
                                alt="Image not found"
                                style={{ width: "auto" }}
                              />
                            </div>
                            {/*<div className="line"></div>*/}
                            {/*<p>Peckshield</p>*/}
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
