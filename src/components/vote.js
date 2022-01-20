import React from 'react'

export default class Vote extends React.Component {
    render() {
        return (
            <>
                  <div className="earn-hero-area App-container">
        <div className="container">
           <div className="earn-hero-wrapper">
              <div className="row">
                 <div className="col-lg-8  offset-lg-2">
                    <div className="earn-hero-content p4token-wrapper">
                      <div className='text-left'>
                        <p className='h3'><b>DYP Governance</b></p>
                        {/* <h5>Visit <a style={{textTransform: 'lowercase'}} href='https://mining.dyp.finance'>https://mining.dyp.finance</a> to join the Ethereum Mining Pool Whitelist</h5> */}
                        <p>DYP tokens represent voting shares in DeFi Yield Protocol governance. The introduction of DYP tokens enables shared community ownership of a vibrant, diverse, and dedicated governance system which will actively guide the protocol toward the future.</p>
                        <p>Through governance, DYP holders can vote to add more pools, burn tokens, or allocate DYP toward grants, strategic partnerships, governance initiatives, and other programs.</p>
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
                  <div className='col-lg-8 offset-lg-2 mt-5'>
                      <div className="farming-content">
                          <div className="row">
                              <div className="col-lg-4 col-md-4 col-6">
                                  <a href="https://gov.dyp.finance/" target='_blank'>
                                      <div className="fariming-item">
                                          <div className="icon">
                                              <img src="img/i1.svg" alt="Image not found" />
                                              {/*<div className="line"></div>*/}
                                          </div>
                                          {/*<p>Blockchain Consilium</p>*/}
                                      </div>
                                  </a>
                              </div>
                              <div className="col-lg-4 col-md-4 col-6">
                                  <a href='https://gov-bsc.dyp.finance/' target='_blank'>
                                      <div className="fariming-item">
                                          <div className="icon">
                                              <img src="img/farms/bnb-yield.svg" alt="Image not found" />
                                          </div>
                                          {/*<div className="line"></div>*/}
                                          {/*<p>Certik Foundation</p>*/}
                                      </div>
                                  </a>
                              </div>
                              <div className="col-lg-4 col-md-4 col-6">
                                  <a href="https://gov-avax.dyp.finance/" target='_blank'>
                                      <div className="fariming-item">
                                          <div className="icon">
                                              <img src="img/farms/avax-yield.png" alt="Image not found" />
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
        )
    }
}