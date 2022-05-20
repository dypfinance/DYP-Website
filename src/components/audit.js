import React from "react";
import { NavLink } from "react-router-dom";
import LinkButton from "../assets/images/linkbutton.svg";
import blockchainSVG from '../assets/images/blockaign-cons.svg';
import pangolinAudit from '../assets/images/pangolin-audit.svg';
import pancakeAudit from '../assets/images/pancake-audit.svg';

export default class Audit extends React.Component {
  render() {
    const auditItems = [
      {
        subtitle: "Security",
        title: "Token Smart Contract",
        link: "https://github.com/dypfinance/contract-security-audit",
      },

      {
        subtitle: "Security",
        title: "New Contracts for Farm,<br/> Stake, Buyback and Governance",
        link: "https://github.com/dypfinance/Buyback-Farm-Stake-Governance-V2/tree/main/Audit",
      },

      {
        subtitle: "Security",
        title: "Farming, Staking and <br/> Governance on Ethereum Network",
        link: "https://github.com/dypfinance/staking-governance-security-audits",
      },

      {
        subtitle: "Security",
        title: "Farming, Bridge and Governance <br/> on Binance Smart Chain",
        link: "https://github.com/dypfinance/DYP-Bridge-and-Staking-on-Binance-Smart-Chain",
      },

      {
        subtitle: "Security",
        title: "Defi Yield Protocol Earn Vault",
        link: "https://github.com/dypfinance/dyp-earn-vault",
      },

      {
        subtitle: "Security",
        title: "Token Lock Vesting",
        link: "https://github.com/dypfinance/token-lock-vesting-contracts/",
      },

      {
        subtitle: "Security",
        title: "Certik Security Oracle",
        link: "https://www.certik.com/projects/dypfinance",
      },
    ];

    const devicewidth = window.innerWidth;
    return (
      <>
        <div
          className="earn-hero-area App-container"
          style={{ paddingTop: 75 }}
        >
          <div className="container">
            <div className="earn-hero-wrapper">
              <div>
                <div className="row">
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
                    style={{ width: 97, height: 97, bottom: "26%", left: "-8px", display: devicewidth < 500 ? 'none' : '' }}
                  ></div>
                  <div
                    class="big-circle-decoration"
                    style={{
                      width: 528,
                      height: 528,
                      right: "0px",
                      top: "302px",
                    }}
                  ></div>
                  <div
                    class="ball-decoration"
                    style={{
                      width: 97,
                      height: 97,
                      top: "550px",
                      right: "0px",
                      display: devicewidth < 500 ? 'none' : ''
                    }}
                  ></div>

                  <div className="col-lg-6  offset-lg-2 ml-0 mt-5">
                    <div className="earn-hero-content">
                      <div className="text-left">
                        <div style={{ lineHeight: 35 }}>
                          <h3 className="auditHeader">DEFI YIELD PROTOCOL</h3>
                          <h1 className="auditSubheader">SMART CONTRACT AUDIT</h1>
                        </div>
                        <p className="pt-3 pb-0 mb-0">
                          Hi, it is a pleasure to have you with us! Here, at Defi
                          Yield Protocol, we <br /> unquestionably value your
                          security. Thus, to avoid any plausible vulnerability in
                          the development of smart contracts, we have requested
                          services from three reputable security audit companies.
                          We have chosen Blockchain Consilium, Certik, and
                          <br />
                          Peckshield (also, heartiest thank you, in this way!).
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 offset-lg-2 mt-5 ml-0">
                    <div className="farming-content">
                      <div className="row pl-3 pr-2">
                        <div style={{ lineHeight: "35px", visibility: "hidden", display: devicewidth < 500 ? 'none' : '' }}>
                          <h3 className="auditHeader">Defi Yield Protocol </h3>
                          <h1 className="auditSubheader">
                            Smart Contracts Audit
                          </h1>
                        </div>
                        <p className="pt-3 mt-0 text-left">
                          In addition, all our smart contracts are monitored 24/7
                          through a Security Oracle, powered by Certik.
                        </p>
                        <p style={{textAlign: 'left'}}>
                          Feel free to check every security audit that we have
                          uploaded on our{" "}
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/dypfinance/"
                            style={{ color: '#1D91D0' }}
                          >
                            <u>repo</u>
                          </a>
                          !
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-lg-11 offset-lg-1 justify-content-start ml-0 mt-4">
                    <div
                      className="d-grid d-md-flex m-auto"
                      style={{ gap: 30, flexWrap: "wrap" }}
                    >
                      {auditItems.length > 0 &&
                        auditItems.map((item, id) => (
                          <div className="audit-wrapper p-0" key={id}>
                            <div className="audit-content-one-left">
                              <p className="audit-subheader">
                                {item.subtitle}
                                <a href={item.link} target="_blank">
                                  <img src={LinkButton} />
                                </a>
                              </p>
                              <h3
                                className="audit-header"
                                dangerouslySetInnerHTML={{ __html: item.title }}
                              ></h3>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="d-none d-md-flex" style={{ height: 80 }}></div>
                <div className="row pt-5 d-grid d-md-flex gap-3">
                  <div className="col-md-3 col-lg-2 mb-5 mt-5 m-md-0 text-left">
                    <h1 className="auditSubheader">
                      Audited
                      <br />
                      <span className="colored-text">By</span>
                    </h1>
                  </div>
                  <div className="col-md-3">
                    <a href="https://www.blockchainconsilium.com/" target={"_blank"}>
                      <img src={blockchainSVG} width="100%" />
                    </a>
                  </div>
                  <div className="col-md-3 mt-4">
                    <a href="https://www.certik.com/" target={"_blank"}>
                      <img src={pangolinAudit} width="100%" />
                    </a>
                  </div>
                  <div className="col-md-3 mb-5 mb-md-0 mt-md-5">
                    <a href="https://peckshield.com/" target={"_blank"}>
                      <img className="mt-4 mt-md-3" src={pancakeAudit} width="100%" />
                    </a>
                  </div>
                </div>
                <div className="d-none d-md-flex" style={{ height: 80 }}></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
