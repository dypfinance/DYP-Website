import React from 'react'

export default class Feature extends React.Component {
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
                       <p className='h3'><b>DYP Anti-Manipulation Feature</b></p>
                       <p>Why is DeFi Yield Protocol Unique? DeFi Yield Protocol: Your New On-The-Go DeFi</p>
                       <p>DeFi Yield Protocol (DYP) will provide a solution to the risk Yield Farming brought in. How? – The DYP is developing a platform that allows anyone to provide liquidity and to be rewarded for the first time with Ethereum. At the same time, the platform maintains both token price stability as well as secure and simplified DeFi for end users by integrating a DYP anti-manipulation feature.</p>
                       <p>How will this work?</p>
                       <p>DeFi Yield protocol (DYP) is changing the way you earn through liquidity on Ethereum smart contract. The argument against DeFi is that whales have the power to control the network. The Sushi dump is the most remarkable example, there was a flash crash in the tokens when anonymous founder Chef Nomi swapped his Sushi tokens for Ethereum. DeFi Yield protocol (DYP) prevents the whale advantage in DeFi. DYP anti-manipulation feature ensures that all pool (DYP/ETH, DYP/USDC, DYP/USDT, and DYP/WBTC POOL) rewards are automatically converted from DYP to ETH at 00:00 UTC, and the system automatically distributes the rewards to the liquidity providers. This feature is excellent because the network’s liquidity will be fair to all participants; no whale will be able to manipulate the price of DYP to their advantage.</p>
                       <p>Let’s dig a bit more about this.</p>
                       <p>Every day at 00:00 UTC, the smart contract will automatically try to convert the DYP rewards to ETH. If the DYP price is affected by more than -2.5%, then the maximum DYP amount that does not affect the price will be swapped to ETH, with the remaining amount distributed in the next day’s rewards. After seven days, if there are still undistributed DYP rewards, the DeFi Yield protocol (DYP) governance will vote on whether the remaining DYP will be distributed to the token holders or burned (all burned tokens are removed from circulation).</p>
                       <p>Smart contracts are the engine room of any DeFi project. The advantage of smart contracts is that the community writes the rules; they can work without human interaction. Unlike the centralized world in which a set of rules are interpreted by a few experts who make decisions. Cool feature, Right. Not really. There is a significant disadvantage of smart contract risk, which happens when there is a bug in a smart contract. YAM finance is the greatest example of a smart contract risk. The team discovered a bug that prevented a vote from being executed. Yam tokens were dumped by users causing the tokens to plunge overnight. DYP prevents smart contract risk by ensuring that all their smart contracts are <a rel='noopener noreferrer' target='_blank' href='https://github.com/dypfinance/staking-governance-security-audits'>audited</a>, and the codes are secured from participants who try to take advantage of the system.</p>
                       <div className="earn-hero-btns">
                          {/* <a href="https://dypfinance.medium.com/defi-yield-protocol-bridge-tutorial-9dad5226537f">DYP Bridge Tutorial</a> */}
                          {/* <a href="#">Read More about DYP</a> */}
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