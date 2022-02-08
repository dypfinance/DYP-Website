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
                         <h3>Roadmap Overview of 2020 - 2022</h3>
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
                                              <li><span className='done'>Creation of DeFi Yield Protocol Platform</span></li>
                                              <li><span className='done'>DeFi Yield Protocol Documentation Release</span></li>
                                              <li><span className='done'>Building DYP ERC-20 Token Smart Contract</span></li>
                                              <li><span className='done'>DeFi Yield Protocol Community Marketing</span> </li>
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
                                              <li><span className='done'>Token Crowdsale</span></li>
                                              <li><span className='done'>Uniswap Listing</span></li>
                                              <li><span className='done'>Liquidity Lock</span></li>
                                              <li><span className='done'>Listing DYP in Other Exchanges</span> </li>
                                              <li><span className='done'>Building Smart Contract for Uniswap Liquidity Pools</span></li>
                                              <li><span className='done'>Smart Contract Security Audit</span></li>
                                              <li><span className='done'>Launch Yield Farming on Ethereum</span></li>
                                              <li><span className='done'>Add Liquidity Participating Pools</span></li>
                                              <li><span className='done'>Development of New Smart Contracts</span></li>
                                              <li><span className='done'>Launch Governance</span></li>
                                              <li><span className='done'>Launch Referral</span></li>
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
                                              <li><span className='done'>Launch Stake on Ethereum</span></li>
                                              <li><span className='done'>Launch Smart Contract for Liquidity Pools on Binance Smart Chain</span></li>
                                              <li><span className='done'>Launch Yield Farming on Binance Smart Chain</span></li>
                                              <li><span className='done'>Launch Earn Vault on Ethereum</span></li>
                                              <li><span className='done'>Building DYP Tools</span></li>
                                              <li><span className='done'>Building Bridge for Binance Smart Chain</span></li>
                                              <li><span className='done'>Partnerships and Integrations</span></li>
                                              <li><span className='done'>DeFi Yield Protocol Dapps Development</span></li>
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
                                        <div className="p5roadmap-line-left p5roadmap-line-left-new" style={{marginTop: '-25px'}}>
                                           <h4>Q2/2021 - Q4/2021</h4>
                                           <ul>
                                              <li><span className='done'>Release New UI Design for Main Website and dApps</span></li>
                                              <li><span className='done'>Launch NFTs dApp V1 on Ethereum Network</span></li>
                                              <li><span className='done'>Launch Yield Farming on Avalanche Network</span></li>
                                              <li><span className='done'>Bridge for Binance Smart Chain and Avalanche</span></li>
                                              <li><span className='done'>Launch DYP Tools on Ethereum</span></li>
                                              <li><span className='done'>Launch Buyback on Ethereum, Binance Smart Chain, and Avalanche</span></li>
                                              <li><span className='done'>Integrating Chainlink Price Feeds</span></li>
                                              <li><span className='done'>Building DYP Launchpad with DYP Tools Safety Features integrated for Ethereum Network, Binance Smart Chain, and Avalanche</span></li>
                                              <li><span className='done'>Launch DYP Tools on Avalanche Network</span></li>
                                              <li><span className='done'>Integration with Pangolin DEX, Coin98 Wallet, and Kyber Network</span></li>
                                              <li><span className='done'>Integration for Wallet Connect</span></li>
                                              <li><span className='done'>Building New Smart Contracts with Improved Strategies for Farm, Stake, Buyback, and Governance</span></li>
                                              <li><span className='done'>Building New Dapps for Farm, Stake, Buyback, Referral, Bridge, and Governance</span></li>
                                              <li><span className='done'>Launch New Smart Contracts with Improved Strategies for Farming, Staking, Buyback, and Governance on Binance Smart Chain, Avalanche, and Ethereum</span></li>
                                              <li><span className='done'>Launch iDYP Token as part of the Improved Strategies for the New Smart Contracts</span></li>
                                              <li><span className='done'>Building New Dapps for Farming, Staking, Buyback, Referral, Bridge, and Governance on Binance Smart Chain, Avalanche, and Ethereum</span></li>
                                              <li><span className='done'>Launch DYP Launchpad with DYP Tools Safety Features integrated on Ethereum, Binance Smart Chain, and Avalanche</span></li>
                                              <li><span className='done'>Listing DYP in Other Exchanges</span></li>
                                              <li><span className='done'>Building DYP Tools on Binance Smart Chain</span></li>
                                           </ul>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                               <div className="p5roadmap-line-one">
                                  <div className="row">
                                     <div className="col-lg-6">
                                        <div className="p5roadmap-line-left p5roadmap-line-left-one p5roadmap-line-left-three2" style={{marginTop: '-15px'}}>
                                           <h4>Q1/2022 - Q2/2022</h4>
                                           <ul>
                                              <li><span className='pending'>Launch Cats and Watches Society NFTs collection</span></li>
                                              <li><span className='pending'>The Cats and Watches Society staking pool is introduced</span></li>
                                              <li><span className='pending'>Metaverse begins for the CAWS (Cats and Watches Society)</span></li>
                                              <li><span className='pending'>Play to Earn NFT concept becomes active for CAWS holders</span></li>
                                              <li><span className='pending'>Release New Dapps for Farming, Staking, Buyback, Referral, Bridge, and Governance on Binance Smart Chain, Avalanche, and Ethereum</span></li>
                                              <li><span className='pending'>Launch DYP Tools on Binance Smart Chain</span></li>
                                              <li><span className='pending'>Launch DYP Tools Multi-Chain for KyberDMM Protocol</span></li>
                                              <li><span className='pending'>Launch DYP Launchpad with DYP Tools Safety Features integrated on Polygon</span></li>
                                              <li><span className='pending'>Release New UI Design and New Logo for Main Website</span></li>
                                              <li><span className='pending'>Incorporation of a Legal Entity for upcoming Regulation For Decentralized Finance</span></li>
                                              <li><span className='pending'>Expanding our Products to other Chains</span></li>
                                              <li><span className='pending'>Integration with different Staking/Farming/Lending Protocols</span></li>
                                              <li><span className='pending'>Launch DYP Borrow & Lending</span></li>
                                              <li><span className='pending'>Launch DYP App for iOS and Android</span></li>
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
                                        <div className="p5roadmap-line-left" style={{marginTop: '-25px'}}>
                                           <h4>Q3/2022 - Q4/2022</h4>
                                           <ul>
                                              <li><span className='pending'>Migration from Uniswap</span></li>
                                              <li><span className='pending'>Launch Multi-Chain DEX with Farming, Staking, Lending & Borrow, and other Products integrated</span></li>
                                              <li><span className='pending'>Built-in Insurance for all DYP Liquidity Providers</span></li>
                                              <li><span className='pending'>Metaverse Research and Launch of Different Products</span></li>
                                              <li><span className='pending'>DeFi Research for Retail Banking Integration</span></li>
                                              <li><span className='pending'>DeFi Research and Integration for spending Interests via Debit Cards</span></li>
                                              <li><span className='pending'>Listing DYP in Other Exchanges</span></li>
                                              <li><span className='pending'>Further Extension and Project Growth in Different Areas</span></li>
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