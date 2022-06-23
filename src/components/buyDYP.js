import React from "react";

import $coinAlert from "../functions/$coinAlert";
import downArrow from "../../src/assets/svg/red-arrow.svg";
import rightArrow from "../../src/assets/svg/white-arrow.svg";
import line from "../../src/assets/svg/red-line.svg";
import DypHero from "../assets/images/dypHero.svg";
import CircleButton from "../assets/General/CircleButton";
import ChevronArrowSvg from "../assets/General/ChevronArrowSvg/ChevronArrowSvg";
import Coinbase from '../assets/images/coinbase.png'

const data = {
  uniswap: {
    title: "Uniswap V2",
    content: `<div class="expand-item ex-one expand-item-show">
    <div class="row">
    <div class="wallet">
    <div class="wallet-logo">
    <img src="../img/metamask.png" />
    <h3 class="wname">Metamask</h3>
    </div>
    <div class="wallet-videos">
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/yBzIPecqKY8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to set up MetaMask for DeFi Yield Protocol (DYP)</h5></div>
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/XsmZ9xW_nps" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to buy DeFi Yield Protocol (DYP) on Uniswap V2 using MetaMask</h5></div>
    </div>
    </div>
    <div class="wallet">
    <div class="wallet-logo">
    <img src="../img/trustwallet.png" />
    <h3 class="wname">Trust Wallet</h3>
    </div>
    <div class="wallet-videos">
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/amM9wOGNVpg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to set up Trust Wallet for DeFi Yield Protocol (DYP)</h5></div>
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/AxWb2TxiQHw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to buy DeFi Yield Protocol (DYP) on Uniswap V2 using Trust Wallet</h5></div>
    </div>
    </div>
    <div class="wallet">
    <div class="wallet-logo">
    <img src="../img/coin98.png" />
    <h3 class="wname">Coin98 Wallet</h3>
    </div>
    <div class="wallet-videos">
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/-kE6mM6d9ek" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to set up Coin98 Wallet (Desktop) for DeFi Yield Protocol (DYP)</h5></div>
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/Dkt7JCbKHv4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to buy DeFi Yield Protocol (DYP) on Ethereum Network using the Coin98 Wallet</h5></div>
    </div>
    </div>
    <div class="wallet">
    <div class="wallet-logo">
    <img src="../img/safepal.png" />
    <h3 class="wname">SafePal</h3>
    </div>
    <div class="wallet-videos">
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/lTD8DAsxmtY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to set up SafePal for DeFi Yield Protocol</div>
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/h-oLMDhVvbg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to buy DeFi Yield Protocol (DYP) on Uniswap V2 using SafePal</h5></div>
    </div>
    </div>
    
    </div>
    </div>`,
  },
  pangolin: {
    title: "Pangolin",
    content: `<div class="expand-item ex-one expand-item-show">
    <div class="row">
    <div class="wallet">
    <div class="wallet-logo">
    <img src="../img/metamask.png" />
    <h3 class="wname">Metamask</h3>
    </div>
    <div class="wallet-videos">
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/yBzIPecqKY8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to set up MetaMask for DeFi Yield Protocol (DYP)</h5></div>
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/T6qYvErqD-M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to buy DeFi Yield Protocol (DYP) on the Pangolin exchange using MetaMask</h5></div>
    </div>
    </div>
    <div class="wallet">
    <div class="wallet-logo">
    <img src="../img/coin98.png" />
    <h3 class="wname">Coin98 Wallet</h3>
    </div>
    <div class="wallet-videos">
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/-kE6mM6d9ek" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to set up Coin98 Wallet (Desktop) for DeFi Yield Protocol (DYP)</h5></div>
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/FmrgSuCo_nk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to buy DeFi Yield Protocol (DYP) on the Avalanche Network using the Coin98 Wallet</h5></div>
    </div>
    </div>
  
    </div>
    </div>`,
  },
  pancake: {
    title: "PancakeSwap V2",
    content: `<div class="expand-item ex-one expand-item-show">
    <div class="row">
    <div class="wallet">
    <div class="wallet-logo">
    <img src="../img/metamask.png" />
    <h3 class="wname">Metamask</h3>
    </div>
    <div class="wallet-videos">
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/yBzIPecqKY8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to set up MetaMask for DeFi Yield Protocol (DYP)</h5></div>
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/sLHWYgNEbq8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to buy DeFi Yield Protocol (DYP) on Pancakeswap V2 using MetaMask</h5></div>
    </div>
    </div>
    <div class="wallet">
    <div class="wallet-logo">
    <img src="../img/trustwallet.png" />
    <h3 class="wname">Trust Wallet</h3>
    </div>
    <div class="wallet-videos">
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/amM9wOGNVpg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to set up Trust Wallet for DeFi Yield Protocol (DYP)</h5></div>
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/Z8X3ythoZbg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to buy DeFi Yield Protocol (DYP) on Pancakeswap V2 using Trust Wallet</h5></div>
    </div>
    </div>
<!--    <div class="wallet">-->
<!--    <div class="wallet-logo">-->
<!--    <img src="../img/coin98.png" />-->
<!--    <h3 class="wname">Coin98 Wallet</h3>-->
<!--    </div>-->
<!--    <div class="wallet-videos">-->
<!--    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/-kE6mM6d9ek" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
<!--    <h5>How to set up Coin98 Wallet (Desktop) for DeFi Yield Protocol (DYP)</h5></div>-->
<!--    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/dRfo9XQlXfw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
<!--    <h5>How to buy DeFi Yield Protocol (DYP) on Binance Smart Chain using the Coin98 Wallet</h5></div>-->
<!--    </div>-->
<!--    </div>-->
<!--    <div class="wallet">-->
<!--    <div class="wallet-logo">-->
<!--    <img src="../img/safepal.png" />-->
<!--    <h3 class="wname">SafePal</h3>-->
<!--    </div>-->
<!--    <div class="wallet-videos">-->
<!--    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/lTD8DAsxmtY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
<!--    <h5>How to set up SafePal for DeFi Yield Protocol</h5></div>-->
<!--    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/8DkNHJl0P38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
<!--    <h5>How to buy DeFi Yield Protocol (DYP) on Pancakeswap V1 using SafePal</h5></div>-->
<!--    </div>-->
<!--    </div>-->
    
    </div>
    </div>`,
  },
  inch: {
    title: "1inch",
    content: `<div class="expand-item ex-one expand-item-show">
    <div class="row">
    <div class="wallet">
    <div class="wallet-logo">
    <img src="../img/metamask.png" />
    <h3 class="wname">Metamask</h3>
    </div>
    <div class="wallet-videos">
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/yBzIPecqKY8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to set up MetaMask for DeFi Yield Protocol (DYP)</h5></div>
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/IE5danKYD-c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to buy DeFi Yield Protocol (DYP) on 1Inch using MetaMask</h5></div>
    </div>
    </div>
    <div class="wallet">
    <div class="wallet-logo">
    <img src="../img/trustwallet.png" />
    <h3 class="wname">Trust Wallet</h3>
    </div>
    <div class="wallet-videos">
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/amM9wOGNVpg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to set up Trust Wallet for DeFi Yield Protocol (DYP)</h5></div>
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/UtcP4cWkXwg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to buy DeFi Yield Protocol (DYP) on 1Inch using Trust Wallet</h5></div>
    </div>
    </div>
    <div class="wallet">
    <div class="wallet-logo">
    <img src="../img/safepal.png" />
    <h3 class="wname">SafePal</h3>
    </div>
    <div class="wallet-videos">
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/lTD8DAsxmtY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to set up SafePal for DeFi Yield Protocol</h5></div>
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/nUvFG00QqS0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to buy DeFi Yield Protocol (DYP) on 1Inch using SafePal</h5></div>
    </div>
    </div>
    
    </div>
    </div>`,
  },
  coinbase: {
    title: "Coinbase",
    content: `<div class="expand-item ex-one expand-item-show">
    <div class="row">
    <div class="wallet">
    <div class="wallet-logo">
    <img src=${Coinbase} />
    <h3 class="wname">Coinbase</h3>
    </div>
    <div class="wallet-videos">
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/watch?v=mjUUqNy-zW8 title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to buy DeFi Yield Protocol (DYP) on Coinbase</h5></div>
    </div>
    </div>
    
    </div>
    </div>`,
  },

  kucoin: {
    title: "KuCoin",
    content: `<div class="expand-item ex-one expand-item-show">
    <div class="row">
    <div class="wallet">
    <div class="wallet-logo">
    <img src="../img/kucoin.png" />
    <h3 class="wname">KuCoin</h3>
    </div>
    <div class="wallet-videos">
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/BIuy1A-_-dU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to buy DeFi Yield Protocol (DYP) on KuCoin</h5></div>
    </div>
    </div>
    
    </div>
    </div>`,
  },
  gate: {
    title: "Gate.io",
    content: `<div class="expand-item ex-one expand-item-show">
    <div class="row">
    <div class="wallet">
    <div class="wallet-logo">
    <img src="../img/gate.png" />
    <h3 class="wname">Gate.io</h3>
    </div>
    <div class="wallet-videos">
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/arVFXf5hESE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to buy DeFi Yield Protocol (DYP) on Gate.io</h5></div>
    </div>
    </div>
    
    </div>
    </div>`,
  },
  mycoint: {
    title: "MyContainer",
    content: `<div class="expand-item ex-one expand-item-show">
    <div class="row">
    <div class="wallet">
    <div class="wallet-logo">
    <img src="../img/mycointainer.png" />
    <h3 class="wname">MyCointainer</h3>
    </div>
    <div class="wallet-videos">
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/ht40yiiFD30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to buy DYP on MyCointainer with Debit/Credit Cards</h5></div>
    </div>
    </div>
    
    </div>
    </div>`,
  },
  coin98: {
    title: "Coin98",
    content: `<div class="expand-item ex-one expand-item-show">
    <div class="row">
    <div class="wallet">
    <div class="wallet-logo">
    <img src="../img/coins/uniswap.png" />
    <h3 class="wname">Uniswap V2</h3>
    </div>
    <div class="wallet-videos">
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/SvUaexmtgnU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to buy DeFi Yield Protocol (DYP) on Ethereum using the Coin98 Wallet App</h5></div>
    </div>
    </div>
    <div class="wallet">
    <div class="wallet-logo">
    <img src="../img/coins/pangolin.svg" />
    <h3 class="wname">Pangolin</h3>
    </div>
    <div class="wallet-videos">
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/7jf8HGOrdBM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to buy DeFi Yield Protocol (DYP) on the Avalanche Network using the Coin98 Mobile Wallet App</h5></div>
    </div>
    </div>
    <div class="wallet">
    <div class="wallet-logo">
    <img src="../img/coins/pancake.png" />
    <h3 class="wname">PancakeSwap V1</h3>
    </div>
    <div class="wallet-videos">
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/8xaXadlb_Iw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to buy DeFi Yield Protocol (DYP) on the Binance Smart Chain using the Coin98 Mobile Wallet App</h5></div>
    </div>
    </div>
    
    </div>
    </div>`,
  },
  kyberdmm: {
    title: "KyberDMM",
    content: `<div class="expand-item ex-one expand-item-show">
    <div class="row">
    <div class="wallet">
    <div class="wallet-logo">
    <img src="../img/metamask.png" />
    <h3 class="wname">Metamask</h3>
    </div>
    <div class="wallet-videos">
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/olhIziGMs0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to buy DeFi Yield Protocol (DYP) on KyberDMM using MetaMask</h5></div>
    </div>
    </div>
    
    </div>
    </div>`,
  },
};

export default class BuyDYP extends React.Component {
  constructor(props) {
    super(props);
  }

  handleShowModal = (name) => (e) => {
    e && e.preventDefault();
    $coinAlert(data[name]);
  };

  render() {
    const devicewidth = window.innerWidth;
    return (
      <>
        <div class="buy-dyp earn-hero-area App-container p-0">
          <div
            class="container-fluid pl-0 pr-0"
            style={{ paddingTop: 75, paddingBottom: 77 }}
          >
            <div className="bannerImage">
              <div className="bannerContent">
                <div className="innerBanner">
                  <h1 className="bannerTitle">Buy DYP</h1>
                  <p className="bannerSubTitle">How can I get DYP tokens?</p>
                </div>
                <div style={{ display: "flex", alignItems: "flex-end" }}>
                  <img src={DypHero} alt="dyp" id="dypHero" />
                </div>
              </div>
            </div>
            <div className="col-lg-11 ml-auto mr-auto mt-5">
              <div className="row">
                <div
                  className="col-12 d-block d-md-flex gap-3"
                  style={{ gap: 15 }}
                >
                   {/* Coinbase */}
                   <div className="buy-item col-12 col-md-6">
                    <div className="d-flex justify-content-between pb-2">
                      <div className="col-5 d-flex px-0 text-start">
                        <a
                          target="_blank"
                          href="https://www.coinbase.com/"
                        >
                          <img className="blogo" src={Coinbase} />
                          <img className="logo" src={Coinbase} style={{maxWidth: 45}}/>
                        </a>
                        <div className="d-block pl-2">
                          <h5
                            className="p-0 m-0"
                            style={{ color: "var(--box-text)" }}
                          >
                            Coinbase
                          </h5>
                          <div className="d-block">
                            <div className="text-left">1 video</div>
                            <img
                              src={line}
                              className="d-flex w-100 pt-2"
                              width="50"
                            />
                          </div>
                        </div>
                      </div>

                      <a
                        target="_blank"
                        href="https://www.coinbase.com/"
                      >
                        <CircleButton
                          action={() => {}}
                          size="48"
                          activeCard={""}
                          text={""}
                        >
                          {" "}
                          <ChevronArrowSvg />
                        </CircleButton>
                      </a>
                    </div>
                    <div className="separator col-12"></div>
                    <div className="item-btns col-12 d-flex pt-4">
                      <a
                        onClick={this.handleShowModal("coinbase")}
                        href="javascript:void(0)"
                      >
                        Video tutorial &nbsp;
                        <img src={downArrow} />
                      </a>
                    </div>
                  </div>

                  {/* KuCoin */}
                  <div className="buy-item col-12 col-md-6">
                    <div className="d-flex justify-content-between pb-2">
                      <div className="col-5 d-flex px-0 text-start">
                        <a
                          target="_blank"
                          href="https://trade.kucoin.com/DYP-USDT"
                        >
                          <img className="blogo" src="img/coins/kucoin.png" />
                          <img className="logo" src="img/coins/kucoin.png" />
                        </a>
                        <div className="d-block pl-2">
                          <h5
                            className="p-0 m-0"
                            style={{ color: "var(--box-text)" }}
                          >
                            KuCoin
                          </h5>
                          <div className="d-block">
                            <div className="text-left">1 video</div>
                            <img
                              src={line}
                              className="d-flex w-100 pt-2"
                              width="50"
                            />
                          </div>
                        </div>
                      </div>

                      <a
                        target="_blank"
                        href="https://trade.kucoin.com/DYP-USDT"
                      >
                        <CircleButton
                          action={() => {}}
                          size="48"
                          activeCard={""}
                          text={""}
                        >
                          {" "}
                          <ChevronArrowSvg />
                        </CircleButton>
                      </a>
                    </div>
                    <div className="separator col-12"></div>
                    <div className="item-btns col-12 d-flex pt-4">
                      <a
                        onClick={this.handleShowModal("kucoin")}
                        href="javascript:void(0)"
                      >
                        Video tutorial &nbsp;
                        <img src={downArrow} />
                      </a>
                    </div>
                  </div>

                  {/* Gate.io */}
                  <div className="buy-item col-12 col-md-6">
                    <div className="d-flex justify-content-between pb-2">
                      <div className="col-5 d-flex px-0 text-start">
                        <a
                          target="_blank"
                          href="https://www.gate.io/trade/DYP_USDT"
                        >
                          <img className="blogo" src="img/coins/Gate.png" />
                          <img className="logo" src="img/coins/Gate.png" />
                        </a>
                        <div className="d-block pl-2">
                          <h5
                            className="p-0 m-0"
                            style={{ color: "var(--box-text)" }}
                          >
                            Gate.io
                          </h5>
                          <div className="d-block">
                            <div className="text-left">1 video</div>
                            <img
                              src={line}
                              className="d-flex w-100 pt-2"
                              width="50"
                            />
                          </div>
                        </div>
                      </div>

                      <a
                        target="_blank"
                        href="https://www.gate.io/trade/DYP_USDT"
                      >
                        <CircleButton
                          action={() => {}}
                          size="48"
                          activeCard={""}
                          text={""}
                        >
                          {" "}
                          <ChevronArrowSvg />
                        </CircleButton>
                      </a>
                    </div>
                    <div className="separator col-12"></div>
                    <div className="item-btns col-12 d-flex pt-4">
                      <a
                        onClick={this.handleShowModal("gate")}
                        href="javascript:void(0)"
                      >
                        Video tutorial &nbsp;
                        <img src={downArrow} />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-12 d-block d-md-flex gap-3"
                  style={{ gap: 15 }}
                >
                  <div className="buy-item col-12 col-md-6">
                    <div className="d-flex justify-content-between pb-2">
                      <div className="col-5 d-flex px-0 text-start">
                        <a
                          target="_blank"
                          href="https://app.uniswap.org/#/swap?use=V2&inputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17"
                        >
                          <img class="blogo" src="img/coins/uniswap.png" />
                          <img class="logo" src="img/coins/uniswap.png" />
                        </a>
                        <div className="d-block pl-2">
                          <h5
                            className="p-0 m-0"
                            style={{
                              color: "var(--box-text)",
                              fontSize: devicewidth < 500 ? 15 : "inherit",
                            }}
                          >
                            Uniswap V2
                          </h5>
                          <div className="d-block">
                            <div className="text-left">8 video</div>
                            <img
                              src={line}
                              className="d-flex w-100 pt-2"
                              width="50"
                            />
                          </div>
                        </div>
                      </div>
                      <a
                        target="_blank"
                        href="https://app.uniswap.org/#/swap?use=V2&inputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17"
                      >
                        <CircleButton
                          action={() => {}}
                          size="48"
                          activeCard={""}
                          text={""}
                        >
                          {" "}
                          <ChevronArrowSvg />
                        </CircleButton>
                      </a>
                    </div>
                    <div className="separator col-12"></div>
                    <div className="item-btns col-12 d-flex pt-4">
                      <a
                        onClick={this.handleShowModal("uniswap")}
                        href="javascript:void(0)"
                      >
                        Video tutorial &nbsp;
                        <img src={downArrow} />
                      </a>
                    </div>
                  </div>
                  {/* Pangolin */}
                  <div className="buy-item col-12 col-md-6">
                    <div className="d-flex justify-content-between pb-2">
                      <div className="col-5 d-flex px-0 text-start">
                        <a
                          target="_blank"
                          href="https://app.pangolin.exchange/#/swap?&outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17"
                        >
                          <img class="blogo" src="img/coins/pangolin.svg" />
                          <img class="logo" src="img/coins/pangolin.svg" />
                        </a>
                        <div className="d-block pl-2">
                          <h5
                            className="p-0 m-0"
                            style={{ color: "var(--box-text)" }}
                          >
                            Pangolin
                          </h5>
                          <div className="d-block">
                            <div className="text-left">4 video</div>
                            <img
                              src={line}
                              className="d-flex w-100 pt-2"
                              width="50"
                            />
                          </div>
                        </div>
                      </div>
                      <a
                        target="_blank"
                        href="https://app.pangolin.exchange/#/swap?&outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17"
                      >
                        <CircleButton
                          action={() => {}}
                          size="48"
                          activeCard={""}
                          text={""}
                        >
                          {" "}
                          <ChevronArrowSvg />
                        </CircleButton>
                      </a>
                    </div>
                    <div className="separator col-12"></div>
                    <div className="item-btns col-12 d-flex pt-4">
                      <a
                        onClick={this.handleShowModal("pangolin")}
                        href="javascript:void(0)"
                      >
                        Video tutorial &nbsp;
                        <img src={downArrow} />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-12 d-block d-md-flex gap-3"
                  style={{ gap: 15 }}
                >
                  {/* PancakeSwap */}
                  <div className="buy-item col-12 col-md-6">
                    <div className="d-flex justify-content-between pb-2">
                      <div className="col-5 d-flex px-0 text-start">
                        <a
                          target="_blank"
                          href="https://pancakeswap.finance/swap?inputCurrencty=BNB&outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17"
                        >
                          <img class="blogo" src="img/coins/pancake.png" />
                          <img class="logo" src="img/coins/pancake.png" />
                        </a>
                        <div className="d-block pl-2">
                          <h5
                            className="p-0 m-0"
                            style={{
                              color: "var(--box-text)",
                              fontSize: devicewidth < 500 ? 12 : "inherit",
                            }}
                          >
                            PancakeSwap V2
                          </h5>
                          <div className="d-block">
                            <div className="text-left">4 video</div>
                            <img
                              src={line}
                              className="d-flex w-100 pt-2"
                              width="50"
                            />
                          </div>
                        </div>
                      </div>
                      <a
                        target="_blank"
                        href="https://pancakeswap.finance/swap?inputCurrencty=BNB&outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17"
                      >
                        <CircleButton
                          action={() => {}}
                          size="48"
                          activeCard={""}
                          text={""}
                        >
                          {" "}
                          <ChevronArrowSvg />
                        </CircleButton>
                      </a>
                    </div>
                    <div className="separator col-12"></div>
                    <div className="item-btns col-12 d-flex pt-4">
                      <a
                        onClick={this.handleShowModal("pancake")}
                        href="javascript:void(0)"
                      >
                        Video tutorial &nbsp;
                        <img src={downArrow} />
                      </a>
                    </div>
                  </div>
                  {/* 1inch */}
                  <div className="buy-item col-12 col-md-6">
                    <div className="d-flex justify-content-between pb-2">
                      <div className="col-5 d-flex px-0 text-start">
                        <a
                          target="_blank"
                          href="https://app.1inch.io/#/1/swap/DYP/ETH"
                        >
                          <img class="blogo" src="img/coins/1Inch.png" />
                          <img class="logo" src="img/coins/1Inch.png" />
                        </a>
                        <div className="d-block pl-2">
                          <h5
                            className="p-0 m-0"
                            style={{ color: "var(--box-text)" }}
                          >
                            1inch
                          </h5>
                          <div className="d-block">
                            <div className="text-left">6 video</div>
                            <img
                              src={line}
                              className="d-flex w-100 pt-2"
                              width="50"
                            />
                          </div>
                        </div>
                      </div>
                      {/* <div className="go-buy-button justify-content-center d-flex">
                        <a
                          target="_blank"
                          href="https://app.1inch.io/#/1/swap/DYP/ETH"
                        >
                          Go Buy 1inch &nbsp;
                          <img src={rightArrow} />
                        </a>
                      </div> */}

                      <a
                        target="_blank"
                        href="https://app.1inch.io/#/1/swap/DYP/ETH"
                      >
                        <CircleButton
                          action={() => {}}
                          size="48"
                          activeCard={""}
                          text={""}
                        >
                          {" "}
                          <ChevronArrowSvg />
                        </CircleButton>
                      </a>
                    </div>
                    <div className="separator col-12"></div>
                    <div className="item-btns col-12 d-flex pt-4">
                      <a
                        onClick={this.handleShowModal("inch")}
                        href="javascript:void(0)"
                      >
                        Video tutorial &nbsp;
                        <img src={downArrow} />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-12 d-block d-md-flex gap-3"
                  style={{ gap: 15 }}
                >
                  {/* Coin98 */}
                  <div className="buy-item col-12 col-md-6">
                    <div className="d-flex justify-content-between pb-2">
                      <div className="col-5 d-flex px-0 text-start">
                        <a onClick={this.handleShowModal("coin98")}>
                          <img class="blogo" src="img/coins/coin98.png" />
                          <img class="logo" src="img/coins/coin98.png" />
                        </a>
                        <div className="d-block pl-2">
                          <h5
                            className="p-0 m-0"
                            style={{ color: "var(--box-text)" }}
                          >
                            Coin98
                          </h5>
                          <div className="d-block">
                            <div className="text-left">3 video</div>
                            <img
                              src={line}
                              width="50"
                              className="d-flex w-100 pt-2"
                            />
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                    <div className="separator col-12"></div>
                    <div className="item-btns col-12 d-flex pt-4">
                      <a
                        onClick={this.handleShowModal("coin98")}
                        href="javascript:void(0)"
                      >
                        Video tutorial &nbsp;
                        <img src={downArrow} />
                      </a>
                    </div>
                  </div>
                  {/* KyberDMM */}
                  <div className="buy-item col-12 col-md-6">
                    <div className="d-flex justify-content-between pb-2">
                      <div className="col-5 d-flex px-0 text-start">
                        <a
                          target="_blank"
                          href="https://dmm.exchange/#/swap?outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17&networkId=43114"
                        >
                          <img
                            className="blogo"
                            src="img/coins/kyber-dmm.png"
                          />
                          <img className="logo" src="img/coins/kyber-dmm.png" />
                        </a>
                        <div className="d-block pl-2">
                          <h5
                            className="p-0 m-0"
                            style={{ color: "var(--box-text)" }}
                          >
                            KyberDMM
                          </h5>
                          <div className="d-block">
                            <div className="text-left">1 video</div>
                            <img
                              src={line}
                              width="50"
                              className="d-flex w-100 pt-2"
                            />
                          </div>
                        </div>
                      </div>
                      <a
                        target="_blank"
                        href="https://dmm.exchange/#/swap?outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17&networkId=43114"
                      >
                        <CircleButton
                          action={() => {}}
                          size="48"
                          activeCard={""}
                          text={""}
                        >
                          {" "}
                          <ChevronArrowSvg />
                        </CircleButton>
                      </a>
                    </div>
                    <div className="separator col-12"></div>
                    <div className="item-btns col-12 d-flex pt-4">
                      <a
                        onClick={this.handleShowModal("kyberdmm")}
                        href="javascript:void(0)"
                      >
                        Video tutorial &nbsp;
                        <img src={downArrow} />
                      </a>
                    </div>
                  </div>
                </div>
                {/* csildgc;isdkbxj */}

                <div
                  className="col-12 d-block d-md-flex gap-3"
                  style={{ gap: 15 }}
                >
                  {/* Poloniex */}
                  <div className="buy-item col-12 col-md-6">
                    <div className="d-flex justify-content-between pb-2">
                      <div className="col-5 d-flex px-0 text-start">
                        <a
                          target="_blank"
                          href="https://poloniex.com/exchange/USDT_DYP"
                        >
                          <img className="blogo" src="img/coins/poloniex.png" />
                          <img className="logo" src="img/coins/poloniex.png" />
                        </a>
                        <div className="d-block pl-2">
                          <h5
                            className="p-0 m-0 text-left"
                            style={{ color: "var(--box-text)" }}
                          >
                            Poloniex
                          </h5>
                          <div className="d-block">
                            <img
                              src={line}
                              width="50"
                              className="d-flex w-100 pt-2"
                            />
                          </div>
                        </div>
                      </div>

                      <a
                        target="_blank"
                        href="https://poloniex.com/exchange/USDT_DYP"
                      >
                        <CircleButton
                          action={() => {}}
                          size="48"
                          activeCard={""}
                          text={""}
                        >
                          {" "}
                          <ChevronArrowSvg />
                        </CircleButton>
                      </a>
                    </div>
                    <div className="separator col-12"></div>
                    <div className="col-12 d-flex pt-4"></div>
                  </div>

                  <div className="buy-item col-12 col-md-6">
                    <div className="d-flex justify-content-between pb-2">
                      <div className="col-5 d-flex px-0 text-start">
                        <a
                          target="_blank"
                          href="https://www.mycointainer.com/dashboard_2/newtransaction/crypto/dyp/"
                        >
                          <img
                            className="blogo"
                            src="img/coins/mycointainer.png"
                          />
                          <img
                            className="logo"
                            src="img/coins/mycointainer.png"
                          />
                        </a>
                        <div className="d-block pl-2">
                          <h5
                            className="p-0 m-0"
                            style={{ color: "var(--box-text)" }}
                          >
                            MyCointainer
                          </h5>
                          <div className="d-block">
                            <div className="text-left">1 video</div>
                            <img
                              src={line}
                              width="50"
                              className="d-flex w-100 pt-2"
                            />
                          </div>
                        </div>
                      </div>
                      <a
                        target="_blank"
                        href="https://www.mycointainer.com/dashboard_2/newtransaction/crypto/dyp/"
                      >
                        <CircleButton
                          action={() => {}}
                          size="48"
                          activeCard={""}
                          text={""}
                        >
                          {" "}
                          <ChevronArrowSvg />
                        </CircleButton>
                      </a>
                    </div>
                    <div className="separator col-12"></div>
                    <div className="item-btns col-12 d-flex pt-4">
                      <a
                        onClick={this.handleShowModal("mycoint")}
                        href="javascript:void(0)"
                      >
                        Video tutorial &nbsp;
                        <img src={downArrow} />
                      </a>
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
