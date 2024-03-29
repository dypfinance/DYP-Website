import React from 'react'
import getFormattedNumber from '../functions/get-formatted-number'

export default class Farm extends React.Component {

    constructor(props) {
          super(props)
          this.state = {
            tvlTotalEth: '',
            tvlTotalBsc: '',
            tvlEth: '',
            tvlWbtc: '',
            tvlUsdc: '',
            tvlUsdt: '',
            tvlWbnb: '',
            tvlBusd: '',
            tvlBeth: ''
          }
    }

    componentDidMount() {
      this.getTotalTvl()
    }

    getTotalTvl = async () => {
      const { LP_IDs, LP_IDs_BSC } = window

      let tvlTotalEth1 = 0
      let tvlTotalBsc1 = 0
      let tvlEth1 = 0
      let tvlWbtc1 = 0
      let tvlUsdc1 = 0
      let tvlUsdt1 = 0
      let tvlWbnb1 = 0
      let tvlBusd1 = 0
      let tvlBeth1 = 0

      let callCombinerTvl = await window.getCombinedTvlUsd()

      tvlTotalEth1 = window.COMBINED_TVL
      tvlTotalBsc1 = window.getTvlBsc

      let tvlTotalEth = tvlTotalEth1
      let tvlTotalBsc = tvlTotalBsc1
      this.setState({tvlTotalEth})
      this.setState({tvlTotalBsc})

      if (window.the_graph_result.lp_data) {
    
        tvlEth1 = window.the_graph_result.lp_data[LP_IDs.eth[0]].tvl_usd + 
                  window.the_graph_result.lp_data[LP_IDs.eth[1]].tvl_usd +
                  window.the_graph_result.lp_data[LP_IDs.eth[2]].tvl_usd +
                  window.the_graph_result.lp_data[LP_IDs.eth[3]].tvl_usd

        tvlWbtc1 = window.the_graph_result.lp_data[LP_IDs.wbtc[0]].tvl_usd + 
                  window.the_graph_result.lp_data[LP_IDs.wbtc[1]].tvl_usd +
                  window.the_graph_result.lp_data[LP_IDs.wbtc[2]].tvl_usd +
                  window.the_graph_result.lp_data[LP_IDs.wbtc[3]].tvl_usd

        tvlUsdc1 = window.the_graph_result.lp_data[LP_IDs.usdc[0]].tvl_usd + 
                  window.the_graph_result.lp_data[LP_IDs.usdc[1]].tvl_usd +
                  window.the_graph_result.lp_data[LP_IDs.usdc[2]].tvl_usd +
                  window.the_graph_result.lp_data[LP_IDs.usdc[3]].tvl_usd

        tvlUsdt1 = window.the_graph_result.lp_data[LP_IDs.usdt[0]].tvl_usd + 
                  window.the_graph_result.lp_data[LP_IDs.usdt[1]].tvl_usd +
                  window.the_graph_result.lp_data[LP_IDs.usdt[2]].tvl_usd +
                  window.the_graph_result.lp_data[LP_IDs.usdt[3]].tvl_usd
      }
      
      let tvlEth = tvlEth1
      this.setState({tvlEth})

      let tvlWbtc = tvlWbtc1
      this.setState({tvlWbtc})

      let tvlUsdc = tvlUsdc1
      this.setState({tvlUsdc})

      let tvlUsdt = tvlUsdt1
      this.setState({tvlUsdt})

      if (window.the_graph_result_BSC.lp_data) {

        tvlBeth1 = window.the_graph_result_BSC.lp_data[LP_IDs_BSC.eth[0]].tvl_usd + 
                  window.the_graph_result_BSC.lp_data[LP_IDs_BSC.eth[1]].tvl_usd +
                  window.the_graph_result_BSC.lp_data[LP_IDs_BSC.eth[2]].tvl_usd +
                  window.the_graph_result_BSC.lp_data[LP_IDs_BSC.eth[3]].tvl_usd

        tvlWbnb1 = window.the_graph_result_BSC.lp_data[LP_IDs_BSC.wbtc[0]].tvl_usd + 
                  window.the_graph_result_BSC.lp_data[LP_IDs_BSC.wbtc[1]].tvl_usd +
                  window.the_graph_result_BSC.lp_data[LP_IDs_BSC.wbtc[2]].tvl_usd +
                  window.the_graph_result_BSC.lp_data[LP_IDs_BSC.wbtc[3]].tvl_usd

        tvlBusd1 = window.the_graph_result_BSC.lp_data[LP_IDs_BSC.usdc[0]].tvl_usd + 
                  window.the_graph_result_BSC.lp_data[LP_IDs_BSC.usdc[1]].tvl_usd +
                  window.the_graph_result_BSC.lp_data[LP_IDs_BSC.usdc[2]].tvl_usd +
                  window.the_graph_result_BSC.lp_data[LP_IDs_BSC.usdc[3]].tvl_usd
      }

      let tvlWbnb = tvlWbnb1
      this.setState({tvlWbnb})

      let tvlBusd = tvlBusd1
      this.setState({tvlBusd})

      let tvlBeth = tvlBeth1
      this.setState({tvlBeth})

      return {tvlTotalEth, tvlTotalBsc, tvlEth, tvlWbtc, tvlUsdc, tvlUsdt, tvlWbnb, tvlBusd, tvlBeth}
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
                        <p className='h3'><b>Ethereum Farms</b></p>
                        <p>Deposit your liquidity provider tokens to receive Ethereum rewards.</p>
                        <p>NOTE: The farming dApp works ONLY with the <a target='_blank' href='https://app.uniswap.org/#/swap?use=V2&inputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17'>Uniswap V2</a> (old) LP tokens!</p>
                        <p>In order to lower the risk of DYP price volatility, all pool rewards are automatically converted from DYP to ETH by the smart contract, and ETH is distributed as a reward to the liquidity providers.Maintaining token price stability — every 24 hours, the smart contract will automatically try to convert the DYP rewards to ETH. If the DYP price is affected by more than <img src='img/arrow.svg' alt="images not found" />2.5%, then the maximum DYP amount that does not affect the price will be swapped to ETH, with the remaining amount distributed in the next day’s rewards. After seven days, if we still have undistributed DYP rewards, the DeFi Yield protocol governance will vote on whether the remaining DYP will be distributed to the token holders or burned (all burned tokens are removed from circulation).</p>
                        <div style={{display: "flex"}}>  
                          <div className="earn-hero-btns-bridge m-0">
                            <a target='_blank' href="https://dypfinance.medium.com/dyp-staking-pools-tutorial-82bd49e65527">DYP Ethereum Farms Pools Tutorial</a>
                          </div>
                          <div className="earn-hero-btns-white m-0 pl-3">
                            <a target='_blank' href="https://medium.com/@dypfinance/introducing-the-defi-yield-protocol-12ea2146d328">Read More about DYP</a>
                          </div>
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
                             <h5>Total Value Locked ${getFormattedNumber(this.state.tvlTotalEth,2)}</h5>
                          </div>
                       </div>
                    </div>

                    <div className="participar-item">
                       <div className="participar-item-header">
                          <div className="left">
                             <div className="img">
                                <img src="img/tokens/DYP.png" alt="Image not found " />
                                <img src="img/tokens/ETH.png" alt="Image not found " />
                             </div>
                             <h3>DYP-ETH</h3>
                          </div>
                          <div className="right">
                             <a href="https://app.dyp.finance/staking-eth" target='_blank'>Deposit</a>
                          </div>
                       </div>
                       <div className="participar-item-content">
                          <div className="left">
                             <p>Total Value Locked</p>
                             <p>Pool Rate</p>
                          </div>
                          <div className="right">
                             <p>${getFormattedNumber(this.state.tvlEth,2)}</p>
                             <p>250.000 DYP / Month</p>
                          </div>
                       </div>
                    </div>


                    <div className="participar-item">
                       <div className="participar-item-header">
                          <div className="left">
                             <div className="img">
                                <img src="img/tokens/DYP.png" alt="Image not found " />
                                <img src="img/tokens/WBTC.png" alt="Image not found " />
                             </div>
                             <h3>DYP-WBTC</h3>
                          </div>
                          <div className="right">
                             <a href="https://app.dyp.finance/staking-wbtc" target='_blank'>Deposit</a>
                          </div>
                       </div>
                       <div className="participar-item-content">
                          <div className="left">
                             <p>Total Value Locked</p>
                             <p>Pool Rate</p>
                          </div>
                          <div className="right">
                             <p>${getFormattedNumber(this.state.tvlWbtc,2)}</p>
                             <p>250.000 DYP / Month</p>
                          </div>
                       </div>
                    </div>
                    <div className="participar-item">
                       <div className="participar-item-header">
                          <div className="left">
                             <div className="img">
                                <img src="img/tokens/DYP.png" alt="Image not found " />
                                <img src="img/tokens/USDC.png" alt="Image not found " />
                             </div>
                             <h3>DYP-USDC</h3>
                          </div>
                          <div className="right">
                             <a href="https://app.dyp.finance/staking-usdc" target='_blank'>Deposit</a>
                          </div>
                       </div>
                       <div className="participar-item-content">
                          <div className="left">
                             <p>Total Value Locked</p>
                             <p>Pool Rate</p>
                          </div>
                          <div className="right">
                             <p>${getFormattedNumber(this.state.tvlUsdc,2)}</p>
                             <p>250.000 DYP / Month</p>
                          </div>
                       </div>
                    </div>
                    <div className="participar-item">
                       <div className="participar-item-header">
                          <div className="left">
                             <div className="img">
                                <img src="img/tokens/DYP.png" alt="Image not found " />
                                <img src="img/tokens/USDT.png" alt="Image not found " />
                             </div>
                             <h3>DYP-USDT</h3>
                          </div>
                          <div className="right">
                             <a href="https://app.dyp.finance/staking-usdt" target='_blank'>Deposit</a>
                          </div>
                       </div>
                       <div className="participar-item-content">
                          <div className="left">
                             <p>Total Value Locked</p>
                             <p>Pool Rate</p>
                          </div>
                          <div className="right">
                             <p>${getFormattedNumber(this.state.tvlUsdt,2)}</p>
                             <p>250.000 DYP / Month</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>

     <div className="earn-hero-area App-container">
        <div className="container">
           <div className="earn-hero-wrapper">
              <div className="row">
                 <div className="col-lg-8  offset-lg-2">
                    <div className="earn-hero-content p4token-wrapper">
                      <div className='text-left'>
                        <p className='h3'><b>Binance Smart Chain Farms</b></p>
                        <p>Deposit your liquidity provider tokens to receive ETH/BNB/DYP as rewards.</p>
                        <p>NOTE: The farming dApp works ONLY with the <a target='_blank' href='https://v1exchange.pancakeswap.finance/#/swap?inputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17'>PancakeSwap V1</a> (old) LP tokens!</p>
                        <p className='m-0'>When you add your liquidity to PancakeSwap be sure that you add it on the old version</p>
                        <p> 
                          <a target='_blank' href='https://pancakeswap-v1.dyp.finance/#/pool'>pancakeswap-v1.dyp.finance/#/pool</a>
                        </p>
                        <p>In order to lower the risk of DYP price volatility, all pool rewards are automatically converted from DYP to BNB by the smart contract, and ETH/BNB/DYP is distributed as a reward to the liquidity providers. The users can choose between three different type of rewards: ETH, BNB, or DYP.Maintaining token price stability — every 24 hours, the smart contract will automatically try to convert the DYP rewards to BNB. If the DYP price is affected by more than <img src='img/arrow.svg' alt="images not found" />2.5%, then the maximum DYP amount that does not affect the price will be swapped to BNB, with the remaining amount distributed in the next day’s rewards. After seven days, if we still have undistributed DYP rewards, the DeFi Yield protocol governance will vote on whether the remaining DYP will be distributed to the token holders or burned (all burned tokens are removed from circulation).</p>
                        <div style={{display: "flex"}}>  
                          <div className="earn-hero-btns-bridge m-0">
                            <a target='_blank' href="https://dypfinance.medium.com/defi-yield-protocol-community-update-staking-pools-tutorial-on-binance-smart-chain-dfa342a5634b">DYP Binance Smart Chain Farms Tutorial</a>
                          </div>
                          <div className="earn-hero-btns-white m-0 pl-3">
                            <a target='_blank' href="https://dypfinance.medium.com/defi-yield-protocol-bridge-tutorial-9dad5226537f">DYP Bridge Tutorial</a>
                          </div>
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
                             <h5>Total Value Locked ${getFormattedNumber(this.state.tvlTotalBsc,2)}</h5>
                          </div>
                       </div>
                    </div>

                    <div className="participar-item">
                       <div className="participar-item-header">
                          <div className="left">
                             <div className="img">
                                <img src="img/tokens/DYP.png" alt="Image not found " />
                                <img src="img/tokens/WBNB.png" alt="Image not found " />
                             </div>
                             <h3>DYP-WBNB</h3>
                          </div>
                          <div className="right">
                             <a href="https://app-bsc.dyp.finance/staking-bnb" target='_blank'>Deposit</a>
                          </div>
                       </div>
                       <div className="participar-item-content">
                          <div className="left">
                             <p>Total Value Locked</p>
                             <p>Pool Rate</p>
                          </div>
                          <div className="right">
                             <p>${getFormattedNumber(this.state.tvlWbnb,2)}</p>
                             <p>250.000 DYP / Month</p>
                          </div>
                       </div>
                    </div>


                    <div className="participar-item">
                       <div className="participar-item-header">
                          <div className="left">
                             <div className="img">
                                <img src="img/tokens/DYP.png" alt="Image not found " />
                                <img src="img/tokens/ETH.png" alt="Image not found " />
                             </div>
                             <h3>DYP-ETH</h3>
                          </div>
                          <div className="right">
                             <a href="https://app-bsc.dyp.finance/staking-eth" target='_blank'>Deposit</a>
                          </div>
                       </div>
                       <div className="participar-item-content">
                          <div className="left">
                             <p>Total Value Locked</p>
                             <p>Pool Rate</p>
                          </div>
                          <div className="right">
                             <p>${getFormattedNumber(this.state.tvlBeth,2)}</p>
                             <p>250.000 DYP / Month</p>
                          </div>
                       </div>
                    </div>
                    <div className="participar-item">
                       <div className="participar-item-header">
                          <div className="left">
                             <div className="img">
                                <img src="img/tokens/DYP.png" alt="Image not found " />
                                <img src="img/tokens/BUSD.png" alt="Image not found " />
                             </div>
                             <h3>DYP-BUSD</h3>
                          </div>
                          <div className="right">
                             <a href="https://app-bsc.dyp.finance/staking-busd" target='_blank'>Deposit</a>
                          </div>
                       </div>
                       <div className="participar-item-content">
                          <div className="left">
                             <p>Total Value Locked</p>
                             <p>Pool Rate</p>
                          </div>
                          <div className="right">
                             <p>${getFormattedNumber(this.state.tvlBusd,2)}</p>
                             <p>250.000 DYP / Month</p>
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