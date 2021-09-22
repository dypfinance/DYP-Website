import React from 'react'
import getFormattedNumber from '../functions/get-formatted-number'

export default class Tokenomics extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        circSupply: ''
      }
    }

    componentDidMount() {
      this.getCirculatingSupply()
    }
    getCirculatingSupply = async () => {
      let circ = 0
      circ = await window.getCirculatingSupply()

      let circSupply = circ
      this.setState({circSupply})
      return circSupply
    }


    render() {
        return (
            <div className="p4token-bg App-container">
    <div className="p4token">
       <div className="container">
          <div className="row">
             <div className="col-lg-10 offset-lg-1">
                <div className="p4token-wrapper">
                   {/*<div className="p4token-heading">
                      <p className='h3'><b>Tokenomics</b></p>
                   </div>*/}
                   <div className="p4token-content">
                      <div className="p4token-content-one">
                         <p>DYP Contract Address: </p>
                         <p className="p4token-content-strong"><span>0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17</span></p>
                      </div>
                      <div className="p4token-content-one">
                         <p>Initial Circulating Supply: </p>
                         <p className="p4token-content-strong"><span>{getFormattedNumber(this.state.circSupply,2)} DYP</span></p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>

    <div className="p4dyp">
       <div className="container">
          <div className="row">
             <div className="col-lg-10 offset-lg-1">
                <div className="p4dyp-wrapper">
                   <div className="p4dyp-heading">
                      <h5>DYP Allocation</h5>
                      <p>30,000,000 DYP have been minted at genesis and will become accessible over the course of 2 years.  <br />
                      The 2-year allocation is as follows:</p>
                   </div>
                   <div className="p4dyp-content">
                      <div className="p4dyp-content-one">
                         <div className="p4dyp-content-one-left">
                            <p>Community</p>
                         </div>
                         <div className="p4dyp-content-one-left">
                            <h4>12,000,000 DYP</h4>
                            <p>Distributed for pool rewards over the next 12 months</p>
                         </div>
                         <div className="p4dyp-content-one-left">
                            <h4>4,500,000 DYP</h4>
                            <p>Distributed to Binance Smart Chain</p>
                         </div>
                          <div className="p4dyp-content-one-left">
                              <h4>2,090,000 DYP</h4>
                              <p>Distributed to Avalanche Network</p>
                          </div>
                          <div className="p4dyp-content-one-left">
                              <h4>1,214,111 DYP</h4>
                              <p>Distributed for providing liquidity to Centralized Exchanges and Marketing Purposes</p>
                          </div>
                         <div className="p4dyp-content-one-left">
                            <h4>2,584,689 DYP</h4>
                            <p>Reserved for other pools or chains - Locked on smart contract</p>
                         </div>
                         <div className="p4dyp-content-one-left" style={{borderBottom: 0}}>
                            <h4>200,000 DYP</h4>
                            <p>Locked for one year to Uniswap liquidity on token launch</p>
                         </div>
                      </div>
                   </div>
                   <div className="p4dyp-content">
                      <div className="p4dyp-content-one">
                         <div className="p4dyp-content-one-left">
                            <p>Team</p>
                         </div>
                         <div className="p4dyp-content-one-left" style={{borderBottom: 0}}>
                            <h4>2,411,200 DYP</h4>
                            <p>Vested for 24 months, released monthly</p>
                         </div>
                      </div>
                   </div>
                   <div className="p4dyp-content">
                      <div className="p4dyp-content-one">
                         <div className="p4dyp-content-one-left">
                            <p>Investors</p>
                         </div>
                         <div className="p4dyp-content-one-left">
                            <h4>651,531 DYP</h4>
                            <p>Public Sale</p>
                         </div>
                         <div className="p4dyp-content-one-left" style={{borderBottom: 0}}>
                            <h4>4,348,469 DYP</h4>
                            <p style={{wordWrap: 'break-word'}}>BURNED & REMOVED from the total supply TH: <br />
                              <a href="https://etherscan.io/tx/0x69d1faef4d41752c200dfe68b103c2823f94f225c502b455321bae0d94ebf8a5" target="_blank">
                                0x69d1faef4d41752c200dfe68b103c2823f94f225c502b455321bae0d94ebf8a5
                              </a>
                            </p>
                         </div>
                      </div>
                   </div>
                   <div className="p4dyp-can">
                      <p id="noadd"><strong>No Additional Tokens Can Be Minted!</strong></p>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>

    <div className="p4token-sap">
       <div className="container">
          <div className="row">
             <div className="col-lg-10 offset-lg-1">
                <div className="p4token-sap-wrapper">
                   <div className="p4token-sap-cotnent">
                      <ul>
                         <li><span></span>Community</li>
                         <li><span></span>Team</li>
                         <li><span></span>Investors</li>
                      </ul>
                   </div>
                   <div className="p4token-sap-img">
                      <img id="whitelink" src="/img/tsap.svg" alt="images not found" />
                      <img id="darklink" src="/img/dstp.svg" alt="images not found" />
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>

 </div>
        )
    }
}