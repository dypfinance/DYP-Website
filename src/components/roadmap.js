import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Done from '../assets/images/done.svg'
import DownArrow from '../assets/images/downArrow.svg'





export default class Roadmap extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="roadMapTitle">
          
          <span style={{color: 'var(--black'}}>Our</span> journey to success
        </h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=""
            iconStyle={{
              background: "#E30613",
              boxShadow: "0px 4px 30px 10px rgba(227, 6, 19, 0.3)",
            }}
          >
            <h3 className="vertical-timeline-element-title">2020 Q3</h3>
            <ul>
              <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">
                  Creation of DeFi Yield Protocol Farm
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">
                  DeFi Yield Protocol documentation release
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">
                  Building DYP ERC-20 Token Smart Contract
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">
                  DeFi Yield Protocol Community Marketing
                </span>{" "}
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=""
            iconStyle={{
              background: "#E30613",
              boxShadow: "0px 4px 30px 10px rgba(227, 6, 19, 0.3)",
            }}
          >
            <h3 className="vertical-timeline-element-title">2020 Q4</h3>

            <ul>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">Token Crowdsale</span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">Uniswap Listing</span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">Liquidity Lock</span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">Listing DYP in Other Exchanges</span>{" "}
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">
                  Building Smart Contract for Uniswap Liquidity Pools
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">Smart Contract Security Audit</span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">Launch Yield Farming on Ethereum</span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">Add Liquidity Participating Pools</span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">Development of New Smart Contracts</span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">Launch Governance</span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">Launch Referral</span>
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=""
            iconStyle={{
              background: "#E30613",
              boxShadow: "0px 4px 30px 10px rgba(227, 6, 19, 0.3)",
            }}
          >
            <h3 className="vertical-timeline-element-title">2021 Q1</h3>

            <ul>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">Launch Stake on Ethereum</span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">
                  Launch Smart Contract for Liquidity Pools on Binance Smart
                  Chain
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">
                  Launch Yield Farming on Binance Smart Chain
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">Launch Earn Vault on Ethereum</span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">Building DYP Tools</span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">
                  Building Bridge for Binance Smart Chain
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">Partnerships and Integrations</span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">
                  DeFi Yield Protocol Dapps Development
                </span>
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=""
            iconStyle={{
              background: "#E30613",
              boxShadow: "0px 4px 30px 10px rgba(227, 6, 19, 0.3)",
            }}
          >
            <h3 className="vertical-timeline-element-title">2021 Q2</h3>
            <ul>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">
                  Release New UI Design for Main Website and dApps
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">
                  Launch NFTs dApp V1 on Ethereum Network
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">
                  Launch Yield Farming on Avalanche Network
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">
                  Bridge for Binance Smart Chain and Avalanche
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">Launch DYP Tools on Ethereum</span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">
                  Launch Buyback on Ethereum, Binance Smart Chain, and Avalanche
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">Integrating Chainlink Price Feeds</span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">
                  Building DYP Launchpad with DYP Tools Safety Features
                  integrated for Ethereum Network, Binance Smart Chain, and
                  Avalanche
                </span>
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=""
            iconStyle={{
              background: "#E30613",
              boxShadow: "0px 4px 30px 10px rgba(227, 6, 19, 0.3)",
            }}
          >
            <h3 className="vertical-timeline-element-title">2021 Q3</h3>
            <ul>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">
                  Launch DYP Tools on Avalanche Network
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">
                  Integration with Pangolin DEX, Coin98 Wallet, and Kyber
                  Network
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">Integration for Wallet Connect</span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">
                  Building New Smart Contracts with Improved Strategies for
                  Farm, Stake, Buyback, and Governance
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">
                  Building New Dapps for Farm, Stake, Buyback, Referral, Bridge,
                  and Governance
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">
                  Launch New Smart Contracts with Improved Strategies for
                  Farming, Staking, Buyback, and Governance on Binance Smart
                  Chain, Avalanche, and Ethereum
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">
                  Launch iDYP Token as part of the Improved Strategies for the
                  New Smart Contracts
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">
                  Building New Dapps for Farming, Staking, Buyback, Referral,
                  Bridge, and Governance on Binance Smart Chain, Avalanche, and
                  Ethereum
                </span>
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=""
            iconStyle={{
              background: "#E30613",
              boxShadow: "0px 4px 30px 10px rgba(227, 6, 19, 0.3)",
            }}
          >
            <h3 className="vertical-timeline-element-title">2021 Q4</h3>
            <ul>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">
                  Launch DYP Launchpad with DYP Tools Safety Features integrated
                  on Ethereum, Binance Smart Chain, and Avalanche
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">Listing DYP in Other Exchanges</span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="done">
                  Building DYP Tools on Binance Smart Chain
                </span>
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date=""
            iconStyle={{
              background: "#E30613",
              boxShadow: "0px 4px 30px 10px rgba(227, 6, 19, 0.3)",
            }}
          >
            <h3 className="vertical-timeline-element-title">2022 Q1</h3>

            <ul>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="pending">
                  Launch Cats and Watches Society NFTs collection
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="pending">
                  The Cats and Watches Society staking pool is introduced
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="pending">
                  Metaverse begins for the CAWS (Cats and Watches Society)
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="pending">
                  Play to Earn NFT concept becomes active for CAWS holders
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="pending">
                  Release New Dapps for Farming, Staking, Buyback, Referral,
                  Bridge, and Governance on Binance Smart Chain, Avalanche, and
                  Ethereum
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={Done} alt='done'/>
                <span className="pending">
                  Launch DYP Tools on Binance Smart Chain
                </span>
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            
            className="vertical-timeline-element--education"
            date=""
            iconStyle={{
              background: "#E30613",
              boxShadow: "0px 4px 30px 10px rgba(227, 6, 19, 0.3)",
            }}
          >
            <h3 className="vertical-timeline-element-title">2022 Q2</h3>

            <ul>
           <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={DownArrow} alt='DownArrow'/>
                <span className="pending">
                  Launch DYP Tools Multi-Chain for KyberDMM Protocol
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={DownArrow} alt='DownArrow'/>
                <span className="pending">
                  Launch DYP Launchpad with DYP Tools Safety Features integrated
                  on Polygon
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={DownArrow} alt='DownArrow'/>
                <span className="pending">
                  Release New UI Design and New Logo for Main Website
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={DownArrow} alt='DownArrow'/>
                <span className="pending">
                  Incorporation of a Legal Entity for upcoming Regulation For
                  Decentralized Finance
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={DownArrow} alt='DownArrow'/>
                <span className="pending">
                  Expanding our Products to other Chains
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={DownArrow} alt='DownArrow'/>
                <span className="pending">
                  Integration with different Staking/Farming/Lending Protocols
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={DownArrow} alt='DownArrow'/>
                <span className="pending">Launch DYP Borrow & Lending</span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={DownArrow} alt='DownArrow'/>
                <span className="pending">
                  Launch DYP App for iOS and Android
                </span>
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            
            date=""
            iconStyle={{
              background: "#E30613",
              boxShadow: "0px 4px 30px 10px rgba(227, 6, 19, 0.3)",
            }}
          >
            <h3 className="vertical-timeline-element-title">
            2022 Q3/Q4
            </h3>

            <ul>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={DownArrow} alt='DownArrow'/>
                <span className="pending">Migration from Uniswap</span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={DownArrow} alt='DownArrow'/>
                <span className="pending">
                  Launch Multi-Chain DEX with Farming, Staking, Lending &
                  Borrow, and other Products integrated
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={DownArrow} alt='DownArrow'/>
                <span className="pending">
                  Built-in Insurance for all DYP Liquidity Providers
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={DownArrow} alt='DownArrow'/>
                <span className="pending">
                  Metaverse Research and Launch of Different Products
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={DownArrow} alt='DownArrow'/>
                <span className="pending">
                  DeFi Research for Retail Banking Integration
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={DownArrow} alt='DownArrow'/>
                <span className="pending">
                  DeFi Research and Integration for spending Interests via Debit
                  Cards
                </span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={DownArrow} alt='DownArrow'/>
                <span className="pending">Listing DYP in Other Exchanges</span>
              </li>
             <li style={{gap: 10, display: 'flex', alignItems: 'center'}}><img src={DownArrow} alt='DownArrow'/>
                <span className="pending">
                  Further Extension and Project Growth in Different Areas
                </span>
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </React.Fragment>
    );
  }
}
