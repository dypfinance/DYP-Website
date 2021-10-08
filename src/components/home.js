import React from 'react'
import Carousel from './carousel'
import { NavLink } from 'react-router-dom'
import getFormattedNumber from '../functions/get-formatted-number'

import CarouselNews from './carouselNews'
import CarouselApy from "./carouselApy";

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            srow: false
        }
        this.loadMoreArticles = this.loadMoreArticles.bind(this);
  }
    componentDidMount() {
        window.initParticles()
    }

    loadMoreArticles() {
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        })); 

       if(this.state.count == 0) {
        this.setState((prevState, props) => ({
            srow: true
        })); 
       } else if(this.state.count == 1) {
           this.props.history.push('/latestupdates')
       } else {
           // do nothing   
           console.log(this.state.count)
       }
   }


    render() {
        return (
            <>
  <div className="hero App-container">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-5 order-2 order-lg-1">
                  <div className="hero-left">
                      <CarouselNews timeout={this.props.timeout} startPosition={this.props.startPosition} />
                  </div>
              </div>
              <div className="col-lg-7 order-1 order-lg-2">
                  <div className="hero-right">
                      <div className="wave-one">
                      
                          <p id="fusone">{getFormattedNumber(this.props.json_totalPaid.ethTotal.wethPaiOutTotals,0)} ETH, {getFormattedNumber(this.props.json_totalPaid.bnbTotal.wbnbPaidOutTotals,0)} BNB, and <br />
                              {getFormattedNumber(this.props.json_totalPaid.avaxTotal.avaxPaidOutTotals,0)} AVAX worth ${getFormattedNumber(this.props.json_totalPaid.totalPaidInUsd,0)}<br />
                              paid to the Liquidity providers!
                          </p>
                          <p id="fusone1"><a href="https://data.chain.link/" style={{color: 'var(--box-text)'}} target="_blank">Provided By Chainlink<img src="img/chainlink.png"
                             style={{
                                 marginLeft: '3px',
                                 width: '11px',
                                 paddingBottom: '2px'
                             }} alt="images not found" /></a>
                          </p>
                            
                              <div className="ripple ripple-one">
                                  <div className="box">
                                      <span style={{'--i': 1}}></span>
                                      <span style={{'--i': 2}}></span>
                                      <span style={{'--i': 3}}></span>
                                      <span style={{'--i': 4}}></span>
                                  </div>
                              </div>
                      </div>
                      <div className="wave-two">
                          <CarouselApy timeout={this.props.timeout} startPosition={this.props.startPosition} high_apy={this.props.high_apy.highestAPY.highestAPY_TOTAL} />
                              <div className="ripple ripple-two">
                                  <div className="box">
                                  <span style={{'--i': 1}}></span>
                                      <span style={{'--i': 2}}></span>
                                      <span style={{'--i': 3}}></span>
                                      <span style={{'--i': 4}}></span>
                                  </div>
                              </div>
                      </div>
                      <div className="wave-one wave-three">
                          <p id="fusone">TVL ${this.props.tvl_all} <br /> Total users {this.props.totalHolders}
                          </p>
                              <div className="ripple ripple-three">
                                  <div className="box">
                                      <span style={{'--i': 1}}></span>
                                      <span style={{'--i': 2}}></span>
                                      <span style={{'--i': 3}}></span>
                                      <span style={{'--i': 4}}></span>
                                  </div>
                              </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="parical d-none d-md-block">
          <div id="particles-js">

          </div>

      </div>
  </div>
  <div className='App-container'>
    <Carousel />
  </div>
  <div className="farming-area App-container">
      <div className="container">
          <div className="farming-wrapper">
              <div className="row">
                  <div className="col-lg-10  col-12 offset-lg-1 ">
                    <div className='section-1'>
                      <div className="farming-header">
                          <h1>What is DeFi Yield Protocol?</h1>
                      </div>
                      <div className='row'>
                        <div className='col-lg col-md'>
                          <h2 style={{marginBottom: '24px', fontSize: '16px' }}>DeFi Yield Protocol: Building a Decentralized Ecosystem</h2>
                          {/*<p>The DeFi Yield Protocol (DYP) is a unique platform that offers solutions for yield*/}
                          {/*    farming, staking, and enabling users to leverage the advanced trading tools of the DYP.*/}
                          {/*    <br/> What makes the DYP a unique yield farming aggregator? The DYP made history in the*/}
                          {/*    DeFi space by becoming the first and only protocol to reward users in Ethereum.<br />*/}
                          {/*    The core feature of the DYP is the decentralized tool dashboard (DYP Tools). It provides*/}
                          {/*    advanced features, such as Decentralized Score, Unique Community Trust Vote System, DYP*/}
                          {/*    Locker, Yield Farm Data, and LaunchPad, allowing investors to make informed decisions*/}
                          {/*    that maximize yields and reduce risks.</p>*/}
                          <p>The DeFi Yield Protocol (DYP) is a unique platform that offers solutions for yield
                              farming, staking, NFTs, and enabling users to leverage the advanced trading tools of the
                              DYP.<br/> What makes the DYP a unique yield farming aggregator? <br /> The DYP made history in
                              the DeFi space by becoming the first and only protocol to reward users in Ethereum.
                              <br /> The core feature of the DYP is the decentralized tool dashboard. It provides
                              advanced features, such as Decentralized Score, Unique Community Trust Vote System,
                              DYP Locker, Yield Farm Data, and LaunchPad, allowing investors to make informed decisions
                              that maximize yields and reduce risks.</p>
                        </div>
                        <div className='col-lg col-md'>
                          <img className='logo' src='img/ecosystem-new.png' alt="Image not found" style={{width: '100%', marginTop: '50px', borderRadius: '20px', justifyContent:'center', marginLeft: 'auto', marginRight: 'auto'}} />
                          <img className='blogo' src='img/ecosystem-new-1.png' alt="Image not found" style={{width: '100%', marginTop: '50px', borderRadius: '20px', justifyContent:'center', marginLeft: 'auto', marginRight: 'auto'}} />
                        </div>
                      </div>
                      {/*<div className="farming-content">
                          <div className="row">
                              <div className="col-lg-4">
                              <NavLink to='/vault'>
                                  <div className="fariming-item">
                                      <div className="icon">
                                          <img src="img/i1.svg" alt="Image not found" />
                                          <div className="line"></div>
                                      </div>
                                      <h4>lets start <br/>
                                          earning ETH</h4>
                                  </div>
                              </NavLink>
                              </div>
                              <div className="col-lg-4">
                                <NavLink to='/feature'>
                                  <div className="fariming-item">
                                      <div className="icon">
                                          <img src="img/i1.svg" alt="Image not found" />
                                      </div>
                                      <div className="line"></div>
                                      <h4>DYP Anti <br/>
                                          Manipulation</h4>
                                  </div>
                                </NavLink>
                              </div>
                              <div className="col-lg-4">
                                  <NavLink to='/pool'>
                                  <div className="fariming-item">
                                      <div className="icon">
                                          <img src="img/i1.svg" alt="Image not found" />
                                      </div>
                                      <div className="line"></div>
                                      <h4>Ethereum Mining <br/>
                                          Pool</h4>
                                  </div>
                                  </NavLink>
                              </div>
                          </div>
                      </div> */}
                    </div>
                  </div>
              </div>
          </div>
      </div>
  </div>

   <div className="farming-area-white App-container">
    <div className="container">
        <div className="farming-wrapper">
            <div className="row">
                <div className="col">
                    <div className="section-1">
                        <div className="farming-header">
                            <h1>DeFi Yield Protocol a Growing Ecosystem</h1>
                        </div>
                        <div className="farming-content">
                            <div id="about" style={{flexDirection: 'column'}} className="protocolData__StyledSectionFlex-kzs2sa-0 protocolData__Numbers-kzs2sa-1 cGgqrN">
                                <div className="row" style={{display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', margin: '0px'}}>
                                    <div className="col-lg-1 col-sm-4 col-6" style={{display: 'grid', justifyContent: 'center', justifyItems: 'center'}}>
                                      <i className="fas fa-money-bill-wave" style={{fontSize: '48px'}}></i>
                                      <span style={{fontSize: '48px'}}>$229M<span style={{opacity: '0.1', fontSize: '48px'}}>+</span></span>
                                        <p style={{fontSize: '14px', marginTop: '-15px'}}>All Time Volume</p>
                                    </div>
                                    <div className="col-lg-1 col-sm-4 col-6" style={{display: 'grid', justifyItems: 'center'}}><i className="fas fa-hand-holding-usd" style={{fontSize: '48px'}}></i><span style={{fontSize: '48px'}}>$32M<span style={{opacity: '0.1', fontSize: '48px'}}>+</span></span>
                                        <p style={{fontSize: '14px', marginTop: '-15px'}}>All Time Paid</p>
                                    </div>
                                    <div className="col-lg-1 col-sm-4 col-6" style={{display: 'grid', justifyItems: 'center'}}><i className="fas fa-users" style={{fontSize: '48px'}}></i><span style={{fontSize: '48px'}}>1.5K<span style={{opacity: '0.1', fontSize: '48px'}}>+</span></span>
                                        <p style={{fontSize: '14px', marginTop: '-15px', width: '105px', maxWidth: '100%'}}>Liquidity Providers</p>
                                    </div>
                                    <div className="col-lg-1 col-sm-4 col-6" style={{display: 'grid', justifyItems: 'center'}}><i className="fas fa-coins" style={{fontSize: '48px'}}></i><span style={{fontSize: '48px'}}>59</span>
                                        <p style={{fontSize: '14px', marginTop: '-15px', width: '70px', maxWidth: '100%'}}>Active Pools</p>
                                    </div>
                                    <div className="col-lg-1 col-sm-4 col-6" style={{display: 'grid', justifyItems: 'center'}}><i className="fas fa-laptop-code" style={{fontSize: '48px'}}></i><span style={{fontSize: '48px'}}>13</span>
                                        <p style={{fontSize: '14px', marginTop: '-15px', width: '76px', maxWidth: '100%'}}>DYP Products</p>
                                    </div>
                                    <div className="col-lg-1 col-sm-4 col-6" style={{display: 'grid', justifyItems: 'center'}}><i className="fas fa-chart-pie" style={{fontSize: '48px'}}></i><span style={{fontSize: '48px'}}>70%</span>
                                        <p style={{fontSize: '14px', marginTop: '-15px'}}>DYP Locked</p>
                                    </div>
                                    <div className="col-lg-1 col-sm-4 col-6" style={{display: 'grid', justifyItems: 'center'}}><i className="fas fa-fire" style={{fontSize: '48px'}}></i><span style={{fontSize: '48px'}}>5M<span style={{opacity: '0.1', fontSize: '48px'}}>+</span></span>
                                        <p style={{fontSize: '14px', marginTop: '-15px'}}>DYP Burned</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  <div className="farming-area App-container">
      <div className="container">
          <div className="farming-wrapper">
              <div className="row">
                  {/*<div className="col-lg-10  col-12 offset-lg-1 ">*/}
                  <div className="col">
                    <div className='section-1'>
                      <div className="farming-header">
                          <h1>Announcements</h1>
                      </div>
                      <div className="farming-content">
                          <div className="row">


                              <div className="col-12 col-md-6 col-lg-4 d-flex">
                                  <div className='card-latest border shadow'>

                                      <a target='_blank' href="https://twitter.com/KyberNetwork/status/1445210348944912388">
                                          <img className="card-img-top" src="https://miro.medium.com/max/1400/1*iM7ctAGi7pD0k_MmMuUWjg.png" alt="" />
                                      </a>
                                      <div className="card-body py-3">
                                          <a target='_blank' href="https://twitter.com/KyberNetwork/status/1445210348944912388">
                                              <h5 style={{color: 'var(--black)'}}>It's raining $DYP + $KNC!</h5>
                                          </a>
                                          <div>
                                              <p className="mb-0">DeFi Yield Protocol has chosen the highly capital-efficient KyberDMM DEX to boost DYP token liquidity on Avalanche, with $300,000 in $DYP and $KNC liquidity mining rewards....</p>
                                          </div>
                                      </div>
                                      <div className="card-footer">
                                          <div className="d-flex align-items-center">
                                              <img src="img/logo.svg" alt="" className="logo avatar mr-2" />
                                              <img src="img/blogo.svg" alt="" className="blogo avatar mr-2" />
                                              <span>DeFi Yield Protocol</span><span className="timedate">Oct 5, 2021</span>
                                          </div>
                                      </div>

                                  </div>
                              </div>

                              <div className="col-12 col-md-6 col-lg-4 d-flex">
                                  <div className='card-latest border shadow'>
                                      <a target='_blank' href="https://twitter.com/dypfinance/status/1440337326077472771?s=20">
                                          <img className="card-img-top" src="https://miro.medium.com/max/1400/1*nYEM2TrjWAzBTxc-sNATUg.png" alt="" />
                                      </a>
                                      <div className="card-body py-3">

                                          <a target='_blank' href="https://twitter.com/dypfinance/status/1440337326077472771?s=20">
                                              <h5 style={{color: 'var(--black)'}}>DeFi Yield Protocol $DYP is coming to @0xPolygon!</h5>
                                          </a>
                                          <div>
                                              <p className="mb-0">This integration enables DeFi users to benefit from DeFi Yield Protocol’s unique products while taking advantage of Polygon’s full-stack scaling solution, and application performance.....</p>
                                          </div>
                                      </div>
                                      <div className="card-footer">
                                          <div className="d-flex align-items-center">
                                              <img src="img/logo.svg" alt="" className="logo avatar mr-2" />
                                              <img src="img/blogo.svg" alt="" className="blogo avatar mr-2" />
                                              <span>DeFi Yield Protocol</span><span className="timedate">Sep 21, 2021</span>
                                          </div>
                                      </div>

                                  </div>
                              </div>

                              <div className="col-12 col-md-6 col-lg-4 d-flex">
                                  <div className='card-latest border shadow'>

                                      <a target='_blank' href="https://twitter.com/defipulse/status/1436388557896159235?s=20">
                                          <img className="card-img-top" src="img/defipulse.png" alt="" />
                                      </a>
                                      <div className="card-body py-3">
                                          <a target='_blank' href="https://twitter.com/defipulse/status/1436388557896159235?s=20">
                                              <h5 style={{color: 'var(--black)'}}>DeFi Yield Protocol (DYP) is on DeFi Pulse!</h5>
                                          </a>
                                          <div>
                                              <p className="mb-0">@dypfinance


                                                  is now listed in our #DeFi rankings at #120 with $198k Total Value Locked https://defipulse.com/defi-yield-protocol

                                                  DeFi Yield Protocol (DYP) is a platform that offers solutions for yield farming, staking, NFTs, and trading tools...</p>
                                          </div>
                                      </div>
                                      <div className="card-footer">
                                          <div className="d-flex align-items-center">
                                              <img src="img/logo.svg" alt="" className="logo avatar mr-2" />
                                              <img src="img/blogo.svg" alt="" className="blogo avatar mr-2" />
                                              <span>DeFi Yield Protocol</span><span className="timedate">Sep 10, 2021</span>
                                          </div>
                                      </div>

                                  </div>
                              </div>

                              <div className={`col-12 col-md-6 col-lg-4 d-none ${this.state.srow ? ' d-flex' : ''}`}>
                                  <div className='card-latest border shadow'>
                                      <a target='_blank' href="https://twitter.com/dypfinance/status/1433086017045680128">
                                          <img className="card-img-top" src="https://miro.medium.com/max/1400/1*XgOsgpsvvrahEiDZSE65Yw.jpeg" alt="" />
                                      </a>
                                      <div className="card-body py-3">
                                          <a target='_blank' href="https://twitter.com/dypfinance/status/1433086017045680128">
                                              <p className='h5' style={{color: 'var(--black)'}}>#DYPTools is Live on #Avalanche!</p>
                                          </a>
                                          <div>
                                              <p className="mb-0">We are happy to announce the launch of the DYP Tools decentralized application on Avalanche. DYP Tools provides advanced features, such as Decentralized Score, Unique Community Trust Vote System, DYP Locker, Yield Farm Data, and LaunchPad. This integration allows investors to make informed decisions that maximize yields and reduce risks, while taking advantage of Avalanche’s low fees, high throughput, and sub-second finality....</p>
                                          </div>
                                      </div>
                                      <div className="card-footer">
                                          <div className="d-flex align-items-center">
                                              <img src="img/logo.svg" alt="" className="logo avatar mr-2" />
                                              <img src="img/blogo.svg" alt="" className="blogo avatar mr-2" />
                                              <span>DeFi Yield Protocol</span><span className="timedate">Sep 1, 2021</span>
                                          </div>
                                      </div>

                                  </div>
                              </div>

                              <div className={`col-12 col-md-6 col-lg-4 d-none ${this.state.srow ? ' d-flex' : ''}`}>
                                  <div className='card-latest border shadow'>
                                      <a target='_blank' href="https://twitter.com/dypfinance/status/1425400583012425730?s=20">
                                          <img className="card-img-top" src="https://miro.medium.com/max/1400/1*gimouGn5M4Mp6t8opTsNLw.jpeg" alt="" />
                                      </a>
                                      <div className="card-body py-3">
                                          <a target='_blank' href="https://twitter.com/dypfinance/status/1425400583012425730?s=20">
                                              <p className='h5' style={{color: 'var(--black)'}}>DeFi Yield Protocol will be integrated with Coin98 Wallet</p>
                                          </a>
                                          <div>
                                              <p className="mb-0">We’re excited to announce that DeFi Yield Protocol will be integrated with Coin98 Wallet, a non-custodial wallet used to store, manage, trade, swap multi-chain, multi-source digital assets.

                                                  Coin98 Wallet is now one of the supported wallets on DeFi Yield Protocol, enabling users to add liquidity to DeFi Yield Protocol’s farming pools as well as easily trade with the high speed, low fee advantages of the Avalanche, Binance Smart Chain or Ethereum Network. The Stake, Buyback and Vault products on DeFi Yield Protocol are also available for all Coin98 Wallet users to access.... </p>
                                          </div>
                                      </div>
                                      <div className="card-footer">
                                          <div className="d-flex align-items-center">
                                              <img src="img/logo.svg" alt="" className="logo avatar mr-2" />
                                              <img src="img/blogo.svg" alt="" className="blogo avatar mr-2" />
                                              <span>DeFi Yield Protocol</span><span className="timedate">August 11, 2021</span>
                                          </div>
                                      </div>

                                  </div>
                              </div>

                              <div className={`col-12 col-md-6 col-lg-4 d-none ${this.state.srow ? ' d-flex' : ''}`}>
                                    <div className='card-latest border shadow'>

                                      <a target='_blank' href="https://twitter.com/dypfinance/status/1422907203338518533?s=20">
                                          <img className="card-img-top" src="https://pbs.twimg.com/media/E78uR22WQAE-VVh?format=jpg&name=large" alt="" />
                                      </a>
                                      <div className="card-body py-3">
                                          <a target='_blank' href="https://twitter.com/dypfinance/status/1422907203338518533?s=20">
                                              <h5 style={{color: 'var(--black)'}}>The Buyback Program with #DYP Staking integrated is LIVE!</h5>
                                          </a>
                                          <div>
                                              <p className="mb-0">The Buyback is one of the latest products from DeFi Yield Protocol. It is a smart contract with staking integrated that offers 100% APR for the users. It is available for the users from Ethereum, Binance Smart Chain, and Avalanche network. To start earning 100% APR on your assets, all you need to do is deposit one of the supported assets into the Buyback contract. All assets will then be automatically converted into DYP and deposited into a staking contract. The rewards are distributed automatically and can be claimed every day.... </p>
                                          </div>
                                      </div>
                                      <div className="card-footer">
                                          <div className="d-flex align-items-center">
                                              <img src="img/logo.svg" alt="" className="logo avatar mr-2" />
                                              <img src="img/blogo.svg" alt="" className="blogo avatar mr-2" />
                                              <span>DeFi Yield Protocol</span><span className="timedate">August 4, 2021</span>
                                          </div>
                                      </div>

                                    </div>
                              </div>

                          </div>
                          <div className="loadmorebtn" onClick={()=>this.loadMoreArticles()}>More</div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <div className="farming-area-white App-container">
      <div className="container">
          <div className="farming-wrapper">
              <div className="row">
                  <div className="col-lg-10  col-12 offset-lg-1 ">
                    <div className='section-1'>
                      <div className="section-1-paragraph">
                          <p className='h1 row-flex-center'>Community</p>
                          <p>Want to get involved or learn more? DeFi Yield Protocol is an open-source ecosystem that provides unique features for yield farming and staking. Through DYP Tools we aim to protect the DeFi community and  process all the data in a fully decentralized manner.</p>
                      </div>
                      {/*
                      <div className='row'>
                        <div className='col-lg col-md'>
                          <h2 style={{marginBottom: '24px', fontSize: '16px' }}>Earn Ethereum with DeFi Yield Protocol</h2>
                          <p>The DeFi Yield Protocol (DYP) is a unique platform that allows virtually any user to provide liquidity, receive rewards in ETH for the first time since DeFi started, and use an anti-manipulation feature to convert the rewards into ETH without overly affecting the price. The core feature of DeFi Yield Protocol is the decentralized tools dashboard (DYP Tools).</p>
                        </div>
                        <div className='col-lg col-md'>
                          <img src='img/dyp29.jpg' alt="Image not found" style={{width: '90%', borderRadius: '20px', display:'flex', justifyContent:'center', marginLeft: 'auto', marginRight: 'auto'}} />
                        </div>
                      </div> 
                      */}
                      {/*<div className="farming-content">
                          <div className="row">
                              <div className="col-lg-4">
                              <NavLink to='/vault'>
                                  <div className="fariming-item">
                                      <div className="icon">
                                          <img src="img/i1.svg" alt="Image not found" />
                                          <div className="line"></div>
                                      </div>
                                      <h4>lets start <br/>
                                          earning ETH</h4>
                                  </div>
                              </NavLink>
                              </div>
                              <div className="col-lg-4">
                                <NavLink to='/feature'>
                                  <div className="fariming-item">
                                      <div className="icon">
                                          <img src="img/i1.svg" alt="Image not found" />
                                      </div>
                                      <div className="line"></div>
                                      <h4>DYP Anti <br/>
                                          Manipulation</h4>
                                  </div>
                                </NavLink>
                              </div>
                              <div className="col-lg-4">
                                  <NavLink to='/pool'>
                                  <div className="fariming-item">
                                      <div className="icon">
                                          <img src="img/i1.svg" alt="Image not found" />
                                      </div>
                                      <div className="line"></div>
                                      <h4>Ethereum Mining <br/>
                                          Pool</h4>
                                  </div>
                                  </NavLink>
                              </div>
                          </div>
                      </div> */}
                    </div>

                    <div className="row mt-5">
                      <div className="col-lg-3  col-sm-6 col-6">
                          <div className="leader-ship-item">
                              <div>
                                  <i className="fab fa-twitter" style={{ fontSize: '25px', color: 'var(--connect)'}}></i>
                                  <div>Twitter</div>
                              </div><span className="line"></span><a target='_blank' href="https://twitter.com/dypfinance"><p className='m-0'>Read the latest</p></a>
                          </div>
                      </div>
                      <div className="col-lg-3  col-sm-6 col-6">
                          <div className="leader-ship-item">
                              <div>
                                  <i className="fab fa-telegram-plane" style={{ fontSize: '25px', color: 'var(--connect)'}}></i>
                                  <div>Telegram</div>
                              </div><span className="line"></span><a target='_blank' href="https://t.me/dypfinance"><p className='m-0'>Join discussion</p></a>
                          </div>
                      </div>
                      <div className="col-lg-3  col-sm-6 col-6">
                          <div className="leader-ship-item">
                              <div>
                                  <i className="fab fa-discord" style={{ fontSize: '25px', color: 'var(--connect)'}}></i>
                                  <div>Discord</div>
                              </div><span className="line"></span><a target='_blank' href="https://t.co/N5rPQ12obJ?amp=1"><p className='m-0'>Get involved</p></a>
                          </div>
                      </div>
                      <div className="col-lg-3  col-sm-6 col-6">
                          <div className="leader-ship-item">
                              <div>
                                  <i className="fab fa-github" style={{ fontSize: '25px', color: 'var(--connect)'}}></i>
                                  <div>Github</div>
                              </div><span className="line"></span><a target='_blank' href="https://github.com/dypfinance"><p className='m-0'>Explore with us</p></a>
                          </div>
                      </div>
                  </div>

                  </div>
              </div>
          </div>
      </div>
  </div>

                <div className="farming-area App-container">
                    <div className="farming-header">
                        <h1>DeFi Yield Protocol in the media</h1>
                    </div>
                    <div className="d-flex pb-5 mx-auto" style={{overflow: 'hidden', maxWidth: '4800px'}}>
                        <div className="partners-wrapper">
                            <div className="slide d-flex" style={{width: '4800px'}}>
                                <div className="partners-group py-3">
                                    <a href="https://cointelegraph.com/news/yield-farming-platform-announces-it-s-expanding-to-avalanche" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: '17px',
                                            left: '19px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/cointelegraph.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Cointelegraph
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://finance.yahoo.com/news/dyp-protocol-launches-avalanche-introduces-190500859.html" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '6px',
                                            bottom: '21px'}}
                                    >
                                        <img src="img/news/yahoo.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Yahoo Finance
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://www.marketwatch.com/press-release/dyp-protocol-launches-on-avalanche-and-introduces-new-nft-competition-2021-07-19?tesla=y" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: '120px',
                                            left: '38px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/marketwatch.jpg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                MarketWatch
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://news.bitcoin.com/defi-yield-protocol-dyp-continues-to-expand-its-ecosystem/" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: '3px',
                                            left: '49px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/bitcoincom.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Bitcoin.com
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://finance.yahoo.com/news/defi-yield-protocol-dyp-follows-173700447.html" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '9px',
                                            bottom: '17px'}}
                                    >
                                        <img src="img/news/yahoo.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Yahoo Finance
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://btcmanager.com/dyp-protocol-staking-dapp-binance-smart-chain-bsc-lp-passive-income-eth-dyp-bnb/" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: '119px',
                                            left: '13px',
                                            bottom: 'auto'}}
                                    >
                                        <img src='img/news/btcmanager.png' />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                BtcManager
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://www.newsbtc.com/press-releases/defi-yield-protocol-takes-yield-farming-to-the-next-level/" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: '6px',
                                            left: '22px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/newsbtc.jpg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                NewsBtc
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://news.yahoo.com/news/dyp-introduces-services-binance-smart-140000357.html" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '20px',
                                            bottom: '18px'}}
                                    >
                                        <img src="img/news/yahoo.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Yahoo Finance
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://www.cryptocompare.com/coins/guides/defi-yield-protocol-could-be-a-massive-boost-for-yield-farmers-and-the-defi-space/" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '113px',
                                            left: '25px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/cryptocompare.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                CryptoCompare
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://coindoo.com/defi-yield-protocol-dyp-eliminates-the-risks-of-whale-interference/" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '51px',
                                            left: '44px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/coindoo.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Coindoo
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://news.bitcoin.com/defi-yield-protocol-is-a-massive-boost-for-yield-farmers-and-the-defi-space/" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '51px',
                                            bottom: '12px'}}
                                    >
                                        <img src="img/news/bitcoincom.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                BitcoinCom
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://techbullion.com/defi-yield-protocol-the-first-manipulation-free-defi-platform-in-bsc-and-eth/" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '124px',
                                            left: '29px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/techbullion.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                TechBullion
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://www.newsbtc.com/news/company/dyp-finance-a-unique-yield-farming-platform/" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: '21px',
                                            left: '6px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/newsbtc.jpg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                NewsBtc
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://www.bitcoininsider.org/article/110411/defi-yield-protocol-first-manipulation-free-defi-platform-bsc-and-eth" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '16px',
                                            bottom: '20px'}}
                                    >
                                        <img src="img/news/bitcoininsider.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                BitcoinInsider
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://www.cryptocompare.com/coins/guides/dypfinance-a-unique-yield-farming-platform/" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '125px',
                                            left: '34px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/cryptocompare.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                CryptoCompare
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://u.today/defi-yield-protocol-dyp-launches-staking-pools-on-binance-smart-chain?amp" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: '48px',
                                            left: '28px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/utoday.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                u.Today
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://hackernoon.com/a-stable-smart-contract-platform-for-enabling-eth-mining-and-eliminating-whale-manipulation-wjr3z08" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '17px',
                                            bottom: '16px'}}
                                    >
                                        <img src="img/news/hackernoon.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Hackernoon
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://blockonomi.com/dyp-staking-app-binance-smart-chain/" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '80px',
                                            left: '44px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/blokonomi.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Blockonomi
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://news.bitcoin.com/defi-yield-protocol-dyp-witnesses-massive-growth-following-binance-smart-chain-integration/" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: '15px',
                                            left: '23px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/bitcoincom.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                BitcoinCom
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://coindoo.com/dyp-sees-explosive-growth-after-binance-smart-chain-bsc-integration/" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '22px',
                                            bottom: '3px'}}
                                    >
                                        <img src="img/news/coindoo.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Coindoo
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://cryptopotato.com/defi-yield-protocol-dyp-all-in-one-platform-yielding-benefits/" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: '116px',
                                            left: '49px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/cryptopototo.jpg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Cryptopototo
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://techbullion.com/dyp-launches-staking-dapp-on-binance-smart-chain-bsc/" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '7px',
                                            left: '17px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/techbullion.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Techbullion
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://finance.yahoo.com/news/4-unique-defi-projects-know-130000391.html" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '5px',
                                            bottom: '4px'}}
                                    >
                                        <img src="img/news/yahoo.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Yahoo Finance
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://coincodex.com/article/11092/earn-compound-yields-on-binance-smart-chain-using-defi-yield-protocol-dyp/" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '131px',
                                            left: '38px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/coincodex.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                CoinCodex
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://coinmarketcap.com/headlines/news/dyp-finance-a-unique-yield-farming-platform/" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: '48px',
                                            left: '39px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/coinmarketcap.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Coinmarketcap
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://www.newsbtc.com/news/company/leading-yield-farming-ecosystem-dyp-now-on-binance-smart-chain/" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '31px',
                                            bottom: '9px'}}
                                    >
                                        <img src="img/news/newsbtc.jpg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                NewsBtc
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://techbullion.com/dyp-finance-stake-defi-tokens-and-get-paid-in-eth" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '103px',
                                            left: '28px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/techbullion.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                TechBullion
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://cryptopress.news/defi-yield-protocol-dyp-staking-and-governance-is-now-live/" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: '17px',
                                            left: '19px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/cryptopress.jpg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                CryptoPress
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://www.cryptofolds.com/defi-yield-protocol-dyp-staking-and-governance-is-now-live" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '6px',
                                            bottom: '21px'}}
                                    >
                                        <img src="img/news/cryptofolds.jpg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                CryptoFolds
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://medium.com/the-capital/defi-yield-protocol-dyp-staking-and-governance-is-now-live-e18c0f14a442" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: '120px',
                                            left: '38px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/medium.jpg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Medium
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://u.today/defi-yield-protocol-launches-staking-and-governance-dapp" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: '3px',
                                            left: '49px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/utoday.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                U.today
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://finance.yahoo.com/news/defi-yield-protocol-dyp-staking-163000220.html" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '9px',
                                            bottom: '17px'}}
                                    >
                                        <img src="img/news/yahoo.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Yahoo Finance
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://news.bitcoin.com/dyp-launches-staking-and-governance-dapp/" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '84px',
                                            left: '15px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/bitcoincom.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                BitcoinCom
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://bitcoinist.com/defi-yield-protocol-debuts-new-staking-and-governance-dapp/" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '23px',
                                            left: '18px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/bitcoinist.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Bitcoinist
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://apnews.com/press-release/accesswire/business-prices-deflation-economy-54076ee83d21025c63d8347c8accc1e2" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '37px',
                                            bottom: '39px'}}
                                    >
                                        <img src="img/news/apnews.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                ApNews
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://coinmarketcap.com/headlines/news/defi-yield-protocol-launches-staking-and-governance-dapp-dyp-holders-earn-ethereum/" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: '97px',
                                            left: '24px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/coinmarketcap.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Coinmarketcap
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://hackernoon.com/defi-projects-that-offer-top-staking-rewards-in-2021-7fs34qs" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: '45px',
                                            left: '51px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/hackernoon.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                HackerNoon
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://coindoo.com/dyp-maximizing-the-benefits-of-yield-farming-protocols/" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '46px',
                                            bottom: '61px'}}
                                    >
                                        <img src="img/news/coindoo.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Coindoo
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://www.newsbtc.com/news/company/defi-yield-protocol-launches-staking-and-governance-dapp-dyp-holders-earn-ethereum/" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: '130px',
                                            left: '22px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/newsbtc.jpg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                NewsBtc
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://btcmanager.com/defi-yield-protocol-dyp/" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '18px',
                                            left: '35px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/btcmanager.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                BtcManager
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://coingape.com/how-to-use-dyp-to-earn-big-defi-rois/" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '25px',
                                            bottom: '50px'}}
                                    >
                                        <img src="img/news/coingape.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                CoinGape
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://www.bitcoininsider.org/article/100387/defi-yield-protocol-dyp-provides-new-level-transparency-market" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: '133px',
                                            left: '25px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/bitcoininsider.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                BitcoinInsider
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://www.cryptocompare.com/coins/guides/defi-yield-protocol-liquidity-providers-earn-25-000-in-eth-per-day-staking-dyp/" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '34px',
                                            left: '31px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/cryptocompare.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                CryptoCompare
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://coincodex.com/article/10261/defi-yield-protocol-anti-manipulation-farm-yielding-platform/" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '34px',
                                            bottom: '8px'}}
                                    >
                                        <img src="img/news/coincodex.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                CoinCodex
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://cryptopotato.com/tackling-volatility-issues-for-liquidity-providers-with-defi-yield-protocol-dyp/" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '82px',
                                            left: '31px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/cryptopototo.jpg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                CryptoPototo
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://hackernoon.com/5-defi-projects-you-should-know-about-in-2021-irq347a" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '15px',
                                            left: '28px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/hackernoon.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                HackerNoon
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://finance.yahoo.com/news/investors-defi-yield-protocol-earned-151500497.html" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '47px',
                                            bottom: '0px'}}
                                    >
                                        <img src="img/news/yahoo.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Yahoo Finance
                                            </div>
                                        </div>
                                    </a>

                                </div>

                            </div>
                            <div className="slide d-flex" style={{width: '4800px'}}>
                                <div className="partners-group py-3">
                                    <a href="https://cointelegraph.com/news/yield-farming-platform-announces-it-s-expanding-to-avalanche" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: '17px',
                                            left: '19px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/cointelegraph.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Cointelegraph
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://finance.yahoo.com/news/dyp-protocol-launches-avalanche-introduces-190500859.html" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '6px',
                                            bottom: '21px'}}
                                    >
                                        <img src="img/news/yahoo.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Yahoo Finance
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://www.marketwatch.com/press-release/dyp-protocol-launches-on-avalanche-and-introduces-new-nft-competition-2021-07-19?tesla=y" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: '120px',
                                            left: '38px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/marketwatch.jpg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                MarketWatch
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://news.bitcoin.com/defi-yield-protocol-dyp-continues-to-expand-its-ecosystem/" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: '3px',
                                            left: '49px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/bitcoincom.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Bitcoin.com
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://finance.yahoo.com/news/defi-yield-protocol-dyp-follows-173700447.html" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '9px',
                                            bottom: '17px'}}
                                    >
                                        <img src="img/news/yahoo.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Yahoo Finance
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://btcmanager.com/dyp-protocol-staking-dapp-binance-smart-chain-bsc-lp-passive-income-eth-dyp-bnb/" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: '119px',
                                            left: '13px',
                                            bottom: 'auto'}}
                                    >
                                        <img src='img/news/btcmanager.png' />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                BtcManager
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://www.newsbtc.com/press-releases/defi-yield-protocol-takes-yield-farming-to-the-next-level/" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: '6px',
                                            left: '22px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/newsbtc.jpg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                NewsBtc
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://news.yahoo.com/news/dyp-introduces-services-binance-smart-140000357.html" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '20px',
                                            bottom: '18px'}}
                                    >
                                        <img src="img/news/yahoo.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Yahoo Finance
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://www.cryptocompare.com/coins/guides/defi-yield-protocol-could-be-a-massive-boost-for-yield-farmers-and-the-defi-space/" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '113px',
                                            left: '25px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/cryptocompare.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                CryptoCompare
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://coindoo.com/defi-yield-protocol-dyp-eliminates-the-risks-of-whale-interference/" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '51px',
                                            left: '44px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/coindoo.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Coindoo
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://news.bitcoin.com/defi-yield-protocol-is-a-massive-boost-for-yield-farmers-and-the-defi-space/" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '51px',
                                            bottom: '12px'}}
                                    >
                                        <img src="img/news/bitcoincom.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                BitcoinCom
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://techbullion.com/defi-yield-protocol-the-first-manipulation-free-defi-platform-in-bsc-and-eth/" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '124px',
                                            left: '29px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/techbullion.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                TechBullion
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://www.newsbtc.com/news/company/dyp-finance-a-unique-yield-farming-platform/" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: '21px',
                                            left: '6px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/newsbtc.jpg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                NewsBtc
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://www.bitcoininsider.org/article/110411/defi-yield-protocol-first-manipulation-free-defi-platform-bsc-and-eth" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '16px',
                                            bottom: '20px'}}
                                    >
                                        <img src="img/news/bitcoininsider.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                BitcoinInsider
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://www.cryptocompare.com/coins/guides/dypfinance-a-unique-yield-farming-platform/" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '125px',
                                            left: '34px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/cryptocompare.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                CryptoCompare
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://u.today/defi-yield-protocol-dyp-launches-staking-pools-on-binance-smart-chain?amp" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: '48px',
                                            left: '28px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/utoday.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                u.Today
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://hackernoon.com/a-stable-smart-contract-platform-for-enabling-eth-mining-and-eliminating-whale-manipulation-wjr3z08" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '17px',
                                            bottom: '16px'}}
                                    >
                                        <img src="img/news/hackernoon.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Hackernoon
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://blockonomi.com/dyp-staking-app-binance-smart-chain/" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '80px',
                                            left: '44px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/blokonomi.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Blockonomi
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://news.bitcoin.com/defi-yield-protocol-dyp-witnesses-massive-growth-following-binance-smart-chain-integration/" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: '15px',
                                            left: '23px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/bitcoincom.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                BitcoinCom
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://coindoo.com/dyp-sees-explosive-growth-after-binance-smart-chain-bsc-integration/" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '22px',
                                            bottom: '3px'}}
                                    >
                                        <img src="img/news/coindoo.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Coindoo
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://cryptopotato.com/defi-yield-protocol-dyp-all-in-one-platform-yielding-benefits/" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: '116px',
                                            left: '49px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/cryptopototo.jpg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Cryptopototo
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://techbullion.com/dyp-launches-staking-dapp-on-binance-smart-chain-bsc/" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '7px',
                                            left: '17px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/techbullion.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Techbullion
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://finance.yahoo.com/news/4-unique-defi-projects-know-130000391.html" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '5px',
                                            bottom: '4px'}}
                                    >
                                        <img src="img/news/yahoo.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Yahoo Finance
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://coincodex.com/article/11092/earn-compound-yields-on-binance-smart-chain-using-defi-yield-protocol-dyp/" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '131px',
                                            left: '38px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/coincodex.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                CoinCodex
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://coinmarketcap.com/headlines/news/dyp-finance-a-unique-yield-farming-platform/" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: '48px',
                                            left: '39px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/coinmarketcap.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Coinmarketcap
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://www.newsbtc.com/news/company/leading-yield-farming-ecosystem-dyp-now-on-binance-smart-chain/" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '31px',
                                            bottom: '9px'}}
                                    >
                                        <img src="img/news/newsbtc.jpg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                NewsBtc
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://techbullion.com/dyp-finance-stake-defi-tokens-and-get-paid-in-eth" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '103px',
                                            left: '28px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/techbullion.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                TechBullion
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://cryptopress.news/defi-yield-protocol-dyp-staking-and-governance-is-now-live/" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: '17px',
                                            left: '19px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/cryptopress.jpg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                CryptoPress
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://www.cryptofolds.com/defi-yield-protocol-dyp-staking-and-governance-is-now-live" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '6px',
                                            bottom: '21px'}}
                                    >
                                        <img src="img/news/cryptofolds.jpg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                CryptoFolds
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://medium.com/the-capital/defi-yield-protocol-dyp-staking-and-governance-is-now-live-e18c0f14a442" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: '120px',
                                            left: '38px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/medium.jpg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Medium
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://u.today/defi-yield-protocol-launches-staking-and-governance-dapp" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: '3px',
                                            left: '49px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/utoday.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                U.today
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://finance.yahoo.com/news/defi-yield-protocol-dyp-staking-163000220.html" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '9px',
                                            bottom: '17px'}}
                                    >
                                        <img src="img/news/yahoo.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Yahoo Finance
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://news.bitcoin.com/dyp-launches-staking-and-governance-dapp/" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '84px',
                                            left: '15px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/bitcoincom.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                BitcoinCom
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://bitcoinist.com/defi-yield-protocol-debuts-new-staking-and-governance-dapp/" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '23px',
                                            left: '18px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/bitcoinist.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Bitcoinist
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://apnews.com/press-release/accesswire/business-prices-deflation-economy-54076ee83d21025c63d8347c8accc1e2" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '37px',
                                            bottom: '39px'}}
                                    >
                                        <img src="img/news/apnews.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                ApNews
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://coinmarketcap.com/headlines/news/defi-yield-protocol-launches-staking-and-governance-dapp-dyp-holders-earn-ethereum/" target="_blank" rel="noreferrer nofollow" className="partner big d-flex align-items-center justify-content-center" style=
                                        {{top: '97px',
                                            left: '24px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/coinmarketcap.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Coinmarketcap
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://hackernoon.com/defi-projects-that-offer-top-staking-rewards-in-2021-7fs34qs" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: '45px',
                                            left: '51px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/hackernoon.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                HackerNoon
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://coindoo.com/dyp-maximizing-the-benefits-of-yield-farming-protocols/" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '46px',
                                            bottom: '61px'}}
                                    >
                                        <img src="img/news/coindoo.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Coindoo
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://www.newsbtc.com/news/company/defi-yield-protocol-launches-staking-and-governance-dapp-dyp-holders-earn-ethereum/" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: '130px',
                                            left: '22px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/newsbtc.jpg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                NewsBtc
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://btcmanager.com/defi-yield-protocol-dyp/" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '18px',
                                            left: '35px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/btcmanager.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                BtcManager
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://coingape.com/how-to-use-dyp-to-earn-big-defi-rois/" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '25px',
                                            bottom: '50px'}}
                                    >
                                        <img src="img/news/coingape.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                CoinGape
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://www.bitcoininsider.org/article/100387/defi-yield-protocol-dyp-provides-new-level-transparency-market" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: '133px',
                                            left: '25px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/bitcoininsider.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                BitcoinInsider
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://www.cryptocompare.com/coins/guides/defi-yield-protocol-liquidity-providers-earn-25-000-in-eth-per-day-staking-dyp/" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '34px',
                                            left: '31px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/cryptocompare.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                CryptoCompare
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://coincodex.com/article/10261/defi-yield-protocol-anti-manipulation-farm-yielding-platform/" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '34px',
                                            bottom: '8px'}}
                                    >
                                        <img src="img/news/coincodex.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                CoinCodex
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://cryptopotato.com/tackling-volatility-issues-for-liquidity-providers-with-defi-yield-protocol-dyp/" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '82px',
                                            left: '31px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/cryptopototo.jpg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                CryptoPototo
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="partners-group py-3">
                                    <a href="https://hackernoon.com/5-defi-projects-you-should-know-about-in-2021-irq347a" target="_blank" rel="noreferrer nofollow" className="partner medium d-flex align-items-center justify-content-center" style=
                                        {{top: '15px',
                                            left: '28px',
                                            bottom: 'auto'}}
                                    >
                                        <img src="img/news/hackernoon.jpeg" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                HackerNoon
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://finance.yahoo.com/news/investors-defi-yield-protocol-earned-151500497.html" target="_blank" rel="noreferrer nofollow" className="partner small d-flex align-items-center justify-content-center" style=
                                        {{top: 'auto',
                                            left: '47px',
                                            bottom: '0px'}}
                                    >
                                        <img src="img/news/yahoo.png" />

                                        <div className="partner-tooltip">
                                            <div className='px-2 py-1'>
                                                Yahoo Finance
                                            </div>
                                        </div>
                                    </a>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
              </>
        )
    }
}