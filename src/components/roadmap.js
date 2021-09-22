import React from 'react'

export default class Roadmap extends React.Component {
    render() {
        return (
            <div className="p5roadmapbg App-container">
    <div className="p5roadmap">
       <div className="p5roadmap-ripple">
          <div className="p5roadmap-ripple-left">
             <div className="p5road-ripple">
                <div className="box" style={{width: '100px', height: '100px'}}>
                <span style={{'--i': 1}}></span>
                                      <span style={{'--i': 2}}></span>
                                      <span style={{'--i': 3}}></span>
                                      <span style={{'--i': 4}}></span>
                </div>
             </div>
             <div className="p5road-ripple p5road-ripple-two">
                <div className="box" style={{width: '100px', height: '100px'}}>
                <span style={{'--i': 1}}></span>
                                      <span style={{'--i': 2}}></span>
                                      <span style={{'--i': 3}}></span>
                                      <span style={{'--i': 4}}></span>
                </div>
             </div>
          </div>
       </div>
       <div className="p5roadmap-heading">
          <div className="container">
             <div className="p5roadmap-text text-center">
                <h3>Roadmap Overview of 2020 & 2021</h3>
             </div>
          </div>
       </div>

       <div className="p5roadmap-line">
          <div className="container">
             <div className="row">
                <div className="col-lg-10 offset-lg-1">
                   <div className="p5roadmap-line-wrapper">
                      <div className="p5roadmap-line-one">
                         <div className="row">
                            <div className="col-lg-6">
                               <div className="p5roadmap-line-left p5roadmap-line-left-one p5roadmap-line-left-onex">
                                  <h4>Q3/2020</h4>
                                  <ul>
                                     <li><span className='done'>Creation of DeFi Yield Protocol platform</span></li>
                                     <li><span className='done'>DYP Documentation Release</span></li>
                                     <li><span className='done'>Building DYP ERC-20 Token Smart Contract</span></li>
                                     <li><span className='done'>DYP Community Marketing</span> </li>
                                  </ul>
                               </div>
                            </div>
                            <div className="col-lg-6"></div>
                         </div>
                      </div>
                      <div className="p5roadmap-line-one">
                         <div className="row">                           
                            <div className="col-lg-6"></div>
                            <div className="col-lg-6">
                               <div className="p5roadmap-line-left p5roadmap-line-left-two" style={{marginTop: '-25px'}}>
                                  <h4>Q4/2020</h4>
                                  <ul>
                                     <li><span className='done'>Token Crowdsale scheduled toward the end of October</span></li>
                                     <li><span className='done'>Uniswap Listing</span></li>
                                     <li><span className='done'>Liquidity Lock</span></li>
                                     <li><span className='done'>Listing DYP in other exchanges</span> </li>
                                     <li><span className='done'>Building Smart Contract for Liquidity Mining pools</span></li>
                                     <li><span className='done'>Building Smart Contract for miners</span></li>
                                     <li><span className='done'>Smart Contract Security Audit</span></li>
                                     <li><span className='done'>Add Liquidity Participating Pools</span></li>
                                     <li><span className='done'>Ethereum mining pool Whitelist Launch</span></li>
                                     <li><span className='done'>Launch DYP Governance</span></li>
                                     <li><span className='done'>Launch DYP Referral</span></li>
                                  </ul>
                               </div>
                            </div>
                         </div>
                      </div>
                      <div className="p5roadmap-line-one">
                         <div className="row">
                            <div className="col-lg-6">
                               <div className="p5roadmap-line-left p5roadmap-line-left-one p5roadmap-line-left-three" style={{marginTop: '-15px'}}>
                                  <h4>Q1/2021</h4>
                                  <ul>
                                    <li><span className='done'>Lauch DYP Stake</span></li>
                                    <li><span className='done'>Launch Smart Contract for Liquidity Mining pools on Binance Smart Chain</span></li>
                                    <li><span className='done'>Launch DYP Earn Vault</span></li>
                                    <li><span className='done'>Building DYP Tools</span></li>
                                    <li><span className='done'>Bridge for swapping DYP between BSC and ETH networks</span></li>
                                    <li><span className='done'>Partnerships</span></li>
                                    <li><span className='done'>DYP Apps Development</span></li>
                                  </ul>
                               </div>
                            </div>
                            <div className="col-lg-6"></div>
                         </div>
                      </div>
                      <div className="p5roadmap-line-one">
                         <div className="row">                           
                            <div className="col-lg-6"></div>
                            <div className="col-lg-6">
                               <div className="p5roadmap-line-left" style={{marginTop: '25px'}}>
                                  <h4>Q2/2021 - Q4/2021</h4>
                                  <ul>
                                     <li><span className='done'>Release New UI Design for Main Website and all our dApps</span></li>
                                     <li><span className='done'>Launch DYP NFT dApp v1.0</span></li>
                                     <li><span className='done'>Launch yield farming on Avalanche Network</span></li>
                                     <li><span className='done'>Bridge for swapping DYP between AVAX and ETH networks</span></li>
                                     <li><span className='done'>Integrating Chainlink Price Feeds</span></li>
                                     <li><span className='pending'>Building DYP Launchpad with DYP Tools safety features integrated on Ethereum Network</span></li>
                                     <li><span className='pending'>Launch DYP Tools on Avalanche Network</span></li>
                                     <li><span className='pending'>Launch DYP Launchpad with DYP Tools safety features integrated on Avalanche Network</span></li>
                                     <li><span className='pending'>Launch DYP NFT Marketplace on Avalanche Network</span></li>
                                     <li><span className='pending'>Launch DYP Tools on Binance Smart Chain</span></li>
                                     <li><span className='pending'>Launch DYP Launchpad with DYP Tools safety features integrated on Binance Smart Chain</span></li>
                                     <li><span className='pending'>Launch DYP NFT Marketplace on Binance Smart Chain</span></li>
                                     <li><span className='pending'>Launch Ethereum mining pool & yield farming for miners</span></li>
                                     <li><span className='pending'>Launch DYP Lending</span></li>
                                     <li><span className='pending'>Migration from Uniswap</span> </li>
                                     <li><span className='pending'>Launch DEX with yield farming, staking, lending, cross chain, and other products integrated</span></li>
                                     <li><span className='pending'>Built-in insurance for all DYP liquidity providers</span></li>
                                     <li><span className='pending'>Further extension and project growth in different areas</span></li>                                
                                  </ul>
                               </div>
                            </div>
                         </div>
                      </div>
                      <div className="p5roadmap-line-one p5roadmap-line-four">
                         <div className="p5roadmap-line-ripple">
                            <div className="box" style={{width: '100px', height: '100px'}}>
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
          <div className="p5roadmap-line-one">
             <div className="p5roadmap-line-ripple">
                <div className="box" style={{width: '100px', height: '100px'}}>
                <span style={{'--i': 1}}></span>
                                      <span style={{'--i': 2}}></span>
                                      <span style={{'--i': 3}}></span>
                                      <span style={{'--i': 4}}></span>
                </div>
             </div>
          </div>
          <div className="p5roadmap-line-one p5roadmap-line-two">
             <div className="p5roadmap-line-ripple">
                <div className="box" style={{width: '100px', height: '100px'}}>
                <span style={{'--i': 1}}></span>
                                      <span style={{'--i': 2}}></span>
                                      <span style={{'--i': 3}}></span>
                                      <span style={{'--i': 4}}></span>
                </div>
             </div>
          </div>
          <div className="p5roadmap-line-one p5roadmap-line-three">
             <div className="p5roadmap-line-ripple">
                <div className="box" style={{width: '100px', height: '100px'}}>
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
        )
    }
}