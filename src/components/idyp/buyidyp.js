import React from "react";
import getFormattedNumber from "../../functions/get-formatted-number";
import coin from "../../assets/images/dypCoin.svg";
import uniswapCard from "../../assets/images/uni.png";
import pangolinCard from "../../assets/images/pangolin.png";
import pancakeCard from "../../assets/images/pancake.png";
import IdypInfo from './idypInfo.svg'
import { NavLink } from "react-router-dom";

const deviceWidth = window.innerWidth;
export default class BuyiDYP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      circSupply: "",
    };
  }

  componentDidMount() {
    this.getCirculatingSupply();
  }
  getCirculatingSupply = async () => {
    let circ = 0;
    circ = await window.getCirculatingSupplyiDYP();

    let circSupply = circ;
    this.setState({ circSupply });
    return circSupply;
  };

  render() {
    return (
      <>
        <div class="buy-dyp earn-hero-area App-container idyp-bg" style={{paddingTop: 75}}>
          <div class="container-fluid idyp mt-4">
            {/* =============== GET TOKENS ================= */}
            <div className="col-lg-10 offset-lg-1 text-start d-md-flex justify-content-between p-0">
              <div className="col-lg-5 p-0">
                <h2 className="mt-4" style={{ color: "var(--box-text)" }}>
                  INTRODUCTION
                  <br />
                  <span>TO IDYP</span>
                </h2>
                <p>
                  IDYP is an ERC-20 token available on Ethereum, Binance Smart
                  Chain, and Avalanche that is used within the DeFi Yield
                  Protocol ecosystem as part of the smart contracts strategies.
                  IDYP tokens facilitate the rewards for the farm, buyback,
                  vaults, and staking pools. The DeFi Yield Protocol has a
                  multi-token economy, and uses another ERC-20 token called DeFi
                  Yield Protocol (DYP) as a governance token for its ecosystem.
                </p>
                <p>
                  DeFi Yield Protocol is also building its own Metaverse with an
                  exciting play-to-earn (P2E) game still in development. The
                  game will require players to use two tokens, IDYP and DYP. For
                  instance, they will use IDYP to boost the energy levels of
                  their characters. On the other hand, they can use DYP tokens
                  for purchasing in-game items.
                </p>
                <div className="row m-0 align-items-start" style={{gap: 30}}>
                <NavLink to="/idyp-tokenomics">
                <img src={IdypInfo} alt = ''/>
                </NavLink>
                <div className="supplyCirculated mt-0"><p style={{ fontSize: 14 }}>Circulating supply </p>
                  <h3 className="p4token-content-strong text-left" style={{fontSize: '1.17em'}}>
                    <span>
                      {getFormattedNumber(this.state.circSupply, 2)} iDYP
                    </span>
                  </h3></div>
                  
                </div>
              </div>
              <div className="col-lg-6 align-self-center p-0">
                <img
                  src={coin}
                  width={`${deviceWidth < 787 ? "100%" : "70%"}`}
                  alt="coin"
                />
              </div>
            </div>
            <div className="d-none d-md-flex" style={{ height: 100 }}>
              &nbsp;
            </div>
            {/* ============== TOKEN PLATFORMS =============== */}
            <div className="col-md-11 offset-lg-1 text-start d-grid d-md-flex h-100 p-0">
              <div className="platforms col-md-3 p-0">
                <h2>
                  HOW CAN I GET
                  <br />
                  <span> IDYP TOKENS?</span>
                </h2>
                <p style={{fontSize: 16}}>
                  The external market for IDYP emerged when a liquidity pool for
                  IDYP was created on the decentralized exchanges (DEX) Uniswap,
                  Pangolin, and PancakeSwap bringing IDYP out of the DeFi Yield
                  Protocol ecosystem and into the crypto market.
                </p>
              </div>
              <div className="col-md-3 uniswap-card-bg p-0">
                <div className="d-none d-md-flex" style={{ height: 50 }}></div>
                <a
                  href="https://app.uniswap.org/#/swap?use=V2&inputCurrency=0xbd100d061e120b2c67a24453cf6368e63f1be056"
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  <img src={uniswapCard} alt="uniswap-card" width="220px" />
                </a>
              </div>
              <div className="col-md-3 pangolin-card-bg p-0">
                <div className="d-none d-md-flex" style={{ height: 100 }}></div>
                <a
                  href="https://app.pangolin.exchange/#/swap?&outputCurrency=0xbd100d061e120b2c67a24453cf6368e63f1be056"
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  <img src={pangolinCard} alt="pangolin-card" width="220px" />
                </a>
              </div>
              <div className="col-md-3 pancake-card-bg p-0">
                <div className="d-none d-md-flex" style={{ height: 150 }}></div>
                <a
                  href="https://pancakeswap.finance/swap?inputCurrencty=BNB&outputCurrency=0xbd100d061e120b2c67a24453cf6368e63f1be056"
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  <img src={pancakeCard} alt="pancake-card" width="220px" />
                </a>
              </div>
            </div>
            <div className="d-none d-md-flex" style={{ height: 150 }}></div>
            {/* ============== ALLOCATIONS & AIRDROP =============== */}
            <div className="col-md-11 offset-lg-1 text-start d-grid d-md-flex h-100 p-0">
              <div
                className="col-md-6 d-grid d-md-flex p-0"
                style={{ gap: 60 }}
              >
                <div className="platforms col-md-5 p-0">
                  <h1>Allocation</h1>
                  <p style={{fontSize: 16}}>
                  Community Allocation for eligible wallets.
                  </p>
                  <div
                    className="d-none d-md-flex"
                    style={{ height: 50 }}
                  ></div>
                  <div className="icon">
                    <a
                      href="https://app-bsc.dyp.finance/vesting"
                      target="_blank"
                      without
                      rel="noreferrer"
                    >
                      <img src="img/bscBanner.png" alt="binance" width="220px" />
                    </a>
                  </div>
                </div>
                <div className="icon col-md-5 p-0 mt-3 mt-md-0">
                  <div
                    className="d-none d-md-flex"
                    style={{ height: 150 }}
                  ></div>
                  <a
                    href="https://app-avax.dyp.finance/vesting"
                    target="_blank"
                    without
                    rel="noreferrer"
                  >
                    <img src="img/avaxBanner.png" alt="avax" width="220px" />
                  </a>
                </div>
              </div>
              <div
                className="col-md-6 d-flex flex-col-reverse d-md-flex p-0"
                style={{ gap: deviceWidth < 767 ? "1rem" : 60 }}
              >
                <div className="col-md-5 p-0 icon order-md-1">
                  <div
                    className="d-none d-md-flex"
                    style={{ height: 450 }}
                  ></div>
                  <a
                    href="https://app-bsc.dyp.finance/airdrop"
                    target="_blank"
                    without
                    rel="noreferrer"
                  >
                    <img src="img/bscBanner.png" alt="binance" width="220px" />
                  </a>
                </div>
                <div className="platforms col-md-5 p-0 order-1">
                  <div
                    className="d-none d-md-flex"
                    style={{ height: 150 }}
                  ></div>
                  <h1>Airdrop</h1>
                  <p style={{fontSize: 16}}>
                  Community Airdrop for eligible wallets.
                  </p>
                  <div
                    className="d-none d-md-flex"
                    style={{ height: 50 }}
                  ></div>
                  <div className="icon">
                    <a
                      href="https://app-avax.dyp.finance/airdrop"
                      target="_blank"
                      without
                      rel="noreferrer"
                    >
                      <img src="img/avaxBanner.png" alt="avaxx" width="220px" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-none d-md-flex" style={{ height: 100 }}></div>
          </div>
        </div>
      </>
    );
  }
}
