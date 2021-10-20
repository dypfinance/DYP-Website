import React from "react";
import $coinAlert from "../functions/$coinAlert";

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
    title: "PancakeSwap V1",
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
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/ENLl8_o_E1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to buy DeFi Yield Protocol (DYP) on Pancakeswap V1 using MetaMask</h5></div>
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
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/Fm5FwwzzC0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to buy DeFi Yield Protocol (DYP) on Pancakeswap V1 using Trust Wallet</h5></div>
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
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/dRfo9XQlXfw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to buy DeFi Yield Protocol (DYP) on Binance Smart Chain using the Coin98 Wallet</h5></div>
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
    <div class="v-item"><iframe width="300" height="auto" src="https://www.youtube.com/embed/8DkNHJl0P38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5>How to buy DeFi Yield Protocol (DYP) on Pancakeswap V1 using SafePal</h5></div>
    </div>
    </div>
    
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
    <img src="../img/coins/pangolin.png" />
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
    return (
      <>
       <div class="buy-dyp earn-hero-area App-container">
          <div class="container">
            <h2 className='mt-4' style={{color: 'var(--box-text)'}}>How can I get DYP tokens?</h2>
            <div className='col-lg-11 ml-auto mr-auto mt-5 mb-5'>
              <div className="row">
                <div className="col-lg-3 col-sm-6 col-md-3">
                  <div className="buy-item">
                    <a target='_blank' href="https://trade.kucoin.com/DYP-USDT">
                      <img className="blogo" src="img/coins/kucoin.png"/>
                      <img className="logo" src="img/coins/kucoin.png"/></a>
                    <div className="item-btns">
                      <div className="line"></div>
                      <h5 style={{color: 'var(--box-text)'}}>KuCoin</h5>
                      <a target='_blank' href="https://trade.kucoin.com/DYP-USDT">Buy</a>
                      <a onClick={this.handleShowModal("kucoin")} href="javascript:void(0)">Tutorial</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-3">
                  <div className="buy-item">
                    <a target='_blank' href="https://www.gate.io/trade/DYP_USDT">
                      <img className="blogo" src="img/coins/Gate.png"/>
                      <img className="logo" src="img/coins/Gate.png"/>
                    </a>
                    <div className="item-btns">
                      <div className="line"></div>
                      <h5 style={{color: 'var(--box-text)'}}>Gate.io</h5>
                      <a target='_blank' href="https://www.gate.io/trade/DYP_USDT">Buy</a>
                      <a onClick={this.handleShowModal("gate")} href="javascript:void(0)">Tutorial</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-3">
                  <div className="buy-item">
                  <a target='_blank' href="https://app.uniswap.org/#/swap?use=V2&inputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17">
                    <img class="blogo" src="img/coins/uniswap.png" />
                    <img class="logo" src="img/coins/uniswap.png" /></a>
                    <div className="item-btns">
                    <div class="line"></div>
                      <h5 style={{color: 'var(--box-text)'}}>Uniswap V2</h5>
                      <a target='_blank' href="https://app.uniswap.org/#/swap?use=V2&inputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17">Buy</a>
                      <a onClick={this.handleShowModal("uniswap")} href="javascript:void(0)">Tutorial</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-3">
                  <div className="buy-item">
                  <a target='_blank' href="https://app.pangolin.exchange/#/swap?&outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17">
                    <img class="blogo" src="img/coins/pangolin.png" />
                    <img class="logo" src="img/coins/pangolin.png" /></a>
                    <div className="item-btns">
                    <div class="line"></div>
                    <h5 style={{color: 'var(--box-text)'}}>Pangolin</h5>
                      <a target='_blank' href="https://app.pangolin.exchange/#/swap?&outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17">Buy</a>
                      <a onClick={this.handleShowModal("pangolin")} href="javascript:void(0)">Tutorial</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-3">
                  <div className="buy-item">
                  <a target='_blank' href="https://v1exchange.pancakeswap.finance/#/swap?inputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17">
                    <img class="blogo" src="img/coins/pancake.png" />
                    <img class="logo" src="img/coins/pancake.png" /></a>
                    <div className="item-btns">
                    <div class="line"></div>
                    <h5 style={{color: 'var(--box-text)'}}>PancakeSwap V1</h5>
                      <a target='_blank' href="https://v1exchange.pancakeswap.finance/#/swap?inputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17">Buy</a>
                      <a onClick={this.handleShowModal("pancake")} href="javascript:void(0)">Tutorial</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-3">
                  <div className="buy-item">
                  <a target='_blank' href="https://app.1inch.io/#/1/swap/DYP/ETH">
                    <img class="blogo" src="img/coins/1Inch.png" />
                    <img class="logo" src="img/coins/1Inch.png" /></a>
                    <div className="item-btns">
                    <div class="line"></div>
                    <h5 style={{color: 'var(--box-text)'}}>1inch</h5>
                      <a target='_blank' href="https://app.1inch.io/#/1/swap/DYP/ETH">Buy</a>
                      <a onClick={this.handleShowModal("inch")} href="javascript:void(0)">Tutorial</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-3">
                  <div className="buy-item">
                  <a onClick={this.handleShowModal("coin98")}>
                    <img class="blogo" src="img/coins/coin98.png" />
                    <img class="logo" src="img/coins/coin98.png" /></a>
                    <div className="item-btns">
                    <div class="line"></div>
                    <h5 style={{color: 'var(--box-text)'}}>Coin98</h5>
                      <a onClick={this.handleShowModal("coin98")} href="javascript:void(0)">Tutorial</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-3">
                  <div className="buy-item">
                    <a target='_blank' href="https://dmm.exchange/#/swap?outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17&networkId=43114">
                      <img className="blogo" src="img/coins/kyber-dmm.png"/>
                      <img className="logo" src="img/coins/kyber-dmm.png"/></a>
                    <div className="item-btns">
                      <div className="line"></div>
                      <h5 style={{color: 'var(--box-text)'}}>KyberDMM</h5>
                      <a style={{backgroundColor: '#e30613'}} target='_blank' href="https://dmm.exchange/#/swap?outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17&networkId=43114">Buy</a>
                      {/*<a onClick={this.handleShowModal("mycoint")} href="javascript:void(0)">Tutorial</a>*/}
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
