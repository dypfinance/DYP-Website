import React from 'react'
import getFormattedNumber from '../functions/get-formatted-number'

export default class Stake extends React.Component {

    constructor(props) {
          super(props)
          this.state = {
            tvlTotal: '',
            tvl30: '',
            tvl60: '',
            tvl90: '',
            tvl120: ''
          }
    }

    componentDidMount() {
      this.getTotalTvl()
    }

    getTotalTvl = async () => {
      let tvlTotal1 = 0
      let tvl301 = 0
      let tvl601 = 0
      let tvl901 = 0
      let tvl1201 = 0

      let callCombinerTvl = await window.getCombinedTvlUsd()

      if (window.the_graph_result.lp_data) {
        tvlTotal1 = window.tvl_farming
        tvl301 = window._tvl30
        tvl601 = window._tvl60
        tvl901 = window._tvl90
        tvl1201 = window._tvl120
      }

      let tvlTotal = tvlTotal1
      this.setState({tvlTotal})

      let tvl30 = tvl301
      this.setState({tvl30})

      let tvl60 = tvl601
      this.setState({tvl60})

      let tvl90 = tvl901
      this.setState({tvl90})

      let tvl120 = tvl1201
      this.setState({tvl120})

      return {tvlTotal, tvl30, tvl60, tvl90, tvl120}
    }

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
                       <p className='h3'><b>DYP Staking</b></p>
                       <p>Deposit your DYP tokens to earn DYP rewards.</p>
                       <p>To start earning DYP rewards, you must deposit your DYP tokens into the corresponding list of pools. The pool will have four different staking options, with rewards starting from 20% APR up to 35% APR, depending on the lock time from a minimum of thirty days up to 120 days.</p>
                       <p>The staking pools have the REINVEST function integrated, it means you are able to automatically add your daily rewards to the staking pool. Also, the DYP Referral is integrated. Should you refer DYP to your friends, 5% of your friends rewards will be automatically sent to you whenever your friends stake DYP. You do not need to stake, it’s automatically sent to you, free of gas fee.</p>
                       <div className="earn-hero-btns-bridge m-0">
                          <a target='_blank' href="https://www.youtube.com/watch?v=Bmhn9B8nWrE">Video Tutorial</a>
                       </div>
                      </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>

     <div className="participar-area App-container">
        <div className="container">
           <div className="participare-wrapper">
              <div className="row">
                 <div className="col-lg-8  offset-lg-2">
                    <div className="participar-content">
                       <div className="partipar-header">
                          <div className="left">
                             <h5>Pools
                             </h5>
                          </div>
                          <div className="right">
                             <h5>Total Value Locked ${getFormattedNumber(this.state.tvlTotal,2)}</h5>
                          </div>
                       </div>
                    </div>

                    <div className="participar-item">
                       <div className="participar-item-header">
                          <div className="left">
                             <div className="img">
                                <img src="img/tokens/DYP.png" alt="Image not found " />
                             </div>
                             <h3>DYP</h3>
                          </div>
                          <div className="right">
                             <a href="https://app.dyp.finance/constant-staking-30" target='_blank'>Deposit</a>
                          </div>
                       </div>
                       <div className="participar-item-content">
                          <div className="left">
                             <p>Total Value Locked</p>
                             <p>Minimum Lock time</p>
                             <p>APR</p>
                          </div>
                          <div className="right">
                             <p>${getFormattedNumber(this.state.tvl30,2)}</p>
                             <p>30 Days</p>
                             <p>20%</p>
                          </div>
                       </div>
                    </div>


                    <div className="participar-item">
                       <div className="participar-item-header">
                          <div className="left">
                             <div className="img">
                                <img src="img/tokens/DYP.png" alt="Image not found " />
                             </div>
                             <h3>DYP</h3>
                          </div>
                          <div className="right">
                             <a href="https://app.dyp.finance/constant-staking-60" target='_blank'>Deposit</a>
                          </div>
                       </div>
                       <div className="participar-item-content">
                          <div className="left">
                             <p>Total Value Locked</p>
                             <p>Minimum Lock time</p>
                             <p>APR</p>
                          </div>
                          <div className="right">
                             <p>${getFormattedNumber(this.state.tvl60,2)}</p>
                             <p>60 Days</p>
                             <p>25%</p>
                          </div>
                       </div>
                    </div>
                    <div className="participar-item">
                       <div className="participar-item-header">
                          <div className="left">
                             <div className="img">
                                <img src="img/tokens/DYP.png" alt="Image not found " />
                             </div>
                             <h3>DYP</h3>
                          </div>
                          <div className="right">
                             <a href="https://app.dyp.finance/constant-staking-90" target='_blank'>Deposit</a>
                          </div>
                       </div>
                       <div className="participar-item-content">
                          <div className="left">
                             <p>Total Value Locked</p>
                             <p>Minimum Lock time</p>
                             <p>APR</p>
                          </div>
                          <div className="right">
                             <p>${getFormattedNumber(this.state.tvl90,2)}</p>
                             <p>90 Days</p>
                             <p>30%</p>
                          </div>
                       </div>
                    </div>
                    <div className="participar-item">
                       <div className="participar-item-header">
                          <div className="left">
                             <div className="img">
                                <img src="img/tokens/DYP.png" alt="Image not found " />
                             </div>
                             <h3>DYP</h3>
                          </div>
                          <div className="right">
                             <a href="https://app.dyp.finance/constant-staking-120" target='_blank'>Deposit</a>
                          </div>
                       </div>
                       <div className="participar-item-content">
                          <div className="left">
                             <p>Total Value Locked</p>
                             <p>Minimum Lock time</p>
                             <p>APR</p>
                          </div>
                          <div className="right">
                             <p>${getFormattedNumber(this.state.tvl120,2)}</p>
                             <p>120 Days</p>
                             <p>35%</p>
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