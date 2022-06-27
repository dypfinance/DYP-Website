import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Done from "../assets/images/done.svg";
import DownArrow from "../assets/images/downArrow.svg";
import RedCircle from '../assets/images/redCircle.svg'

export default class Roadmap extends React.Component {
  render() {
    return (
        <div className="h-100 w-100" style={{ backgroundColor: 'var(--bg-one)', paddingBottom: 50}}>
          <h1 className="roadMapTitle pl-5 container">
            <span style={{ color: "var(--black" }}>Our</span> journey<br/>to success
          </h1>
          <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date=""
                contentStyle={{
                  backgroundColor: "var(--fbg)",
                  color: "var(--black)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  var(--fbg)",
                  borderRadius: "7%",
                }}
                iconStyle={{
                  background: "#E30613",
                  boxShadow: "0px 4px 30px 10px rgba(227, 6, 19, 0.3)",
                }}
            >
              <h3
                  className="vertical-timeline-element-title p-2"
                  style={{ color: "var(--date)", fontWeight: 600 }}
              >
                2020{" "}
                <span
                    className="vertical-timeline-element-subtitle"
                    style={{ fontWeight: 400 }}
                >
                Q3
              </span>
              </h3>
              <ul>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">
                  Creation of DeFi Yield Protocol
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">
                  DeFi Yield Protocol Documentation Release
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">
                  Building DYP ERC-20 Token Smart Contract
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">
                  DeFi Yield Protocol Community Marketing
                </span>{" "}
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  backgroundColor: "var(--fbg)",
                  color: "var(--black)",
                }}
                contentArrowStyle={{ borderRight: "7px solid  var(--fbg)" }}
                date=""
                iconStyle={{
                  background: "#E30613",
                  boxShadow: "0px 4px 30px 10px rgba(227, 6, 19, 0.3)",
                }}
            >
              <h3
                  className="vertical-timeline-element-title p-2"
                  style={{ color: "var(--date)", fontWeight: 600 }}
              >
                2020{" "}
                <span
                    className="vertical-timeline-element-subtitle"
                    style={{ fontWeight: 400 }}
                >
                Q4
              </span>
              </h3>

              <ul>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">Token Crowdsale</span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">Uniswap Listing</span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">Liquidity Lock</span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }}
                    className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">
                  Building Smart Contract for Uniswap LP
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }}
                    className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">Smart Contract Security Audit</span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }}
                    className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">Launch Yield Farming Pools on Ethereum</span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }}
                    className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">Development of New Smart Contracts</span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }}
                    className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">Launch Governance</span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }}
                    className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">Launch Referral</span>
                </li>
                {/*<li style={{ gap: 10, display: "flex", alignItems: "center" }}*/}
                {/*    className="px-2 py-1">*/}
                {/*  <img src={Done} alt="done" />*/}
                {/*  <span className="done">Launch Referral</span>*/}
                {/*</li>*/}
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentArrowStyle={{ borderRight: "7px solid  var(--fbg)" }}
                className="vertical-timeline-element--work"
                contentStyle={{
                  backgroundColor: "var(--fbg)",
                  color: "var(--black)",
                }}
                date=""
                iconStyle={{
                  background: "#E30613",
                  boxShadow: "0px 4px 30px 10px rgba(227, 6, 19, 0.3)",
                }}
            >
              <h3
                  className="vertical-timeline-element-title p-2"
                  style={{ color: "var(--date)", fontWeight: 600 }}
              >
                2021{" "}
                <span
                    className="vertical-timeline-element-subtitle"
                    style={{ fontWeight: 400 }}
                >
                Q1
              </span>
              </h3>

              <ul>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">Launch Stake V1 on Ethereum</span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">
                  Launch Yield Farming on Binance Smart Chain
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">
                  Launch DYP Vault V1 on Ethereum
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">Building DYP Tools V1</span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">Building Bridge for Binance Smart Chain</span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">
                  Partnerships and Integrations
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">DeFi Yield Protocol Dapps Development</span>
                </li>
                {/*<li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">*/}
                {/*  <img src={Done} alt="done" />*/}
                {/*  <span className="done">*/}
                {/*  DeFi Yield Protocol Dapps Development*/}
                {/*</span>*/}
                {/*</li>*/}
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  backgroundColor: "var(--fbg)",
                  color: "var(--black)",
                }}
                date=""
                contentArrowStyle={{ borderRight: "7px solid  var(--fbg)" }}
                iconStyle={{
                  background: "#E30613",
                  boxShadow: "0px 4px 30px 10px rgba(227, 6, 19, 0.3)",
                }}
            >
              <h3
                  className="vertical-timeline-element-title p-2"
                  style={{ color: "var(--date)", fontWeight: 600 }}
              >
                2021{" "}
                <span
                    className="vertical-timeline-element-subtitle"
                    style={{ fontWeight: 400 }}
                >
                Q2
              </span>
              </h3>

              <ul>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">
                  Release New UI Design for Main Website and Dapps
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">
                  Launch NFT Dapp V1 on Ethereum
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">
                  Launch Yield Farming on Avalanche Chain
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">
                  Bridge for Binance Smart Chain and Avalanche
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">Launch DYP Tools V1 on Ethereum</span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">
                  Launch Buyback Pools
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">Integrating Chainlink Price Feeds</span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">
                  Building DYP Launchpad with DYP Tools Safety Features Integrated
                </span>
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  backgroundColor: "var(--fbg)",
                  color: "var(--black)",
                }}
                contentArrowStyle={{ borderRight: "7px solid  var(--fbg)" }}
                date=""
                iconStyle={{
                  background: "#E30613",
                  boxShadow: "0px 4px 30px 10px rgba(227, 6, 19, 0.3)",
                }}
            >
              <h3
                  className="vertical-timeline-element-title p-2"
                  style={{ color: "var(--date)", fontWeight: 600 }}
              >
                2021{" "}
                <span
                    className="vertical-timeline-element-subtitle"
                    style={{ fontWeight: 400 }}
                >
                Q3
              </span>
              </h3>

              <ul>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">
                  Launch DYP Tools V1 on Avalanche Chain
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">
                  Integration with Pangolin DEX, Coin98 Wallet, and Kyber Network
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">Integration for Wallet Connect</span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">
                  Building New Smart Contract for Farm, Stake, Buyback, and Governance
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">
                  Launch New Smart Contract for Farm, Stake, Buyback, and Governance
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">
                  Launch iDYP Token as part of the New Smart Contracts
                </span>
                </li>
                {/*<li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">*/}
                {/*  <img src={Done} alt="done" />*/}
                {/*  <span className="done">*/}
                {/*  Launch iDYP Token as part of the Improved Strategies for the*/}
                {/*  New Smart Contracts*/}
                {/*</span>*/}
                {/*</li>*/}
                {/*<li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">*/}
                {/*  <img src={Done} alt="done" />*/}
                {/*  <span className="done">*/}
                {/*  Building New Dapps for Farming, Staking, Buyback, Referral,*/}
                {/*  Bridge, and Governance on Binance Smart Chain, Avalanche, and*/}
                {/*  Ethereum*/}
                {/*</span>*/}
                {/*</li>*/}
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  backgroundColor: "var(--fbg)",
                  color: "var(--black)",
                }}
                contentArrowStyle={{ borderRight: "7px solid  var(--fbg)" }}
                date=""
                iconStyle={{
                  background: "#E30613",
                  boxShadow: "0px 4px 30px 10px rgba(227, 6, 19, 0.3)",
                }}
            >
              <h3
                  className="vertical-timeline-element-title p-2"
                  style={{ color: "var(--date)", fontWeight: 600 }}
              >
                2021{" "}
                <span
                    className="vertical-timeline-element-subtitle"
                    style={{ fontWeight: 400 }}
                >
                Q4
              </span>
              </h3>

              <ul>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">
                  Launch DYP LaunchPad with DYP Tools Safety Features integrated
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">
                  Building New UI Design for Dapps
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">
                  Building New UI Design for Main Website
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">
                  Building New Smart Contract for DYP Vault
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="done">
                  Integration with Crypto.com RSS News Feed
                </span>
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{
                  backgroundColor: "var(--fbg)",
                  color: "var(--black)",
                }}
                contentArrowStyle={{ borderRight: "7px solid  var(--fbg)" }}
                date=""
                iconStyle={{
                  background: "#E30613",
                  boxShadow: "0px 4px 30px 10px rgba(227, 6, 19, 0.3)",
                }}
            >
              <h3
                  className="vertical-timeline-element-title p-2"
                  style={{ color: "var(--date)", fontWeight: 600 }}
              >
                2022{" "}
                <span
                    className="vertical-timeline-element-subtitle"
                    style={{ fontWeight: 400 }}
                >
                Q1
              </span>
              </h3>

              <ul>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="pending">
                  Launch Cats and Watches Society NFT
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="pending">
                  Launch New Smart Contract for DYP Vault
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="pending">
                  Building CAWS Adventures 2D Game
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="pending">
                  Building CAWS Staking Smart Contract
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="pending">
                  Building New Smart Contract for DYP Staking
                </span>
                </li>
                {/*<li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">*/}
                {/*  <img src={Done} alt="done" />*/}
                {/*  <span className="pending">*/}
                {/*  Launch DYP Tools on Binance Smart Chain*/}
                {/*</span>*/}
                {/*</li>*/}
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{
                  backgroundColor: "var(--fbg)",
                  color: "var(--black)",
                }}
                contentArrowStyle={{ borderRight: "7px solid  var(--fbg)" }}
                date=""
                iconStyle={{
                  background: "#E30613",
                  boxShadow: "0px 4px 30px 10px rgba(227, 6, 19, 0.3)",
                }}
            >
              <h3
                  className="vertical-timeline-element-title p-2"
                  style={{ color: "var(--date)", fontWeight: 600 }}
              >
                2022{" "}
                <span
                    className="vertical-timeline-element-subtitle"
                    style={{ fontWeight: 400 }}
                >
                Q2
              </span>
              </h3>

              <ul>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="pending">
                  Launch New Smart Contract for DYP Staking
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="pending">
                  Launch Cats and Watches Society Staking Pool
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="pending">
                  Launch New UI Design for Main Website
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="pending">
                  Launch New UI Design for Dapps
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="pending">
                  Launch CAWS Adventures 2D Game
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={Done} alt="done" />
                  <span className="pending">
                  Play to Earn NFT Concept becomes active for CAWS Holders
                </span>
                </li>
                {/*<li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">*/}
                {/*  <img src={DownArrow} alt="DownArrow" />*/}
                {/*  <span className="pending">Launch DYP Borrow & Lending</span>*/}
                {/*</li>*/}
                {/*<li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">*/}
                {/*  <img src={DownArrow} alt="DownArrow" />*/}
                {/*  <span className="pending">*/}
                {/*  Launch DYP App for iOS and Android*/}
                {/*</span>*/}
                {/*</li>*/}
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'linear-gradient(180deg, #e30613 6.7%, #fa4a33 70.14%)', color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid  var(--connect)" }}
                date=""
                iconStyle={{
                  background: "#fff",
                  border: '6px solid #E30613',
                  boxShadow: "0px 4px 30px 10px rgba(227, 6, 19, 0.3)",
                }}
            >
              <img src={RedCircle} alt='' id='redCircle' />

              <h3
                  className="vertical-timeline-element-title p-2"
                  style={{ color: "#fff", fontWeight: 600 }}
              >
                2022{" "}
                <span
                    className="vertical-timeline-element-subtitle"
                    style={{ fontWeight: 400 }}
                >
                Q3/Q4
              </span>
              </h3>
              <ul>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={DownArrow} alt="DownArrow" />
                  <span className="pending">
                    Metaverse Research and Launch of Different Products
                  </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={DownArrow} alt="DownArrow" />
                  <span className="pending">
                  Metaverse Begins for the CAWS (Cats and Watches Society)
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={DownArrow} alt="DownArrow" />
                  <span className="pending">
                  Rebranding Process
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={DownArrow} alt="DownArrow" />
                  <span className="pending">
                  Building Extra Features for DYP Tools
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={DownArrow} alt="DownArrow" />
                  <span className="pending">
                  Incorporation of a Legal Entity for upcoming Regulation For Decentralized Finance
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={DownArrow} alt="DownArrow" />
                  <span className="pending">
                  Expanding our Products to other Chains
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={DownArrow} alt="DownArrow" />
                  <span className="pending">
                  Launch App for iOS and Android
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={DownArrow} alt="DownArrow" />
                  <span className="pending">
                  Launch Multi-Chain DEX
                </span>
                </li>
                <li style={{ gap: 10, display: "flex", alignItems: "center" }} className="px-2 py-1">
                  <img src={DownArrow} alt="DownArrow" />
                  <span className="pending">
                  Further Extension and Project Growth in Different Areas
                </span>
                </li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
    );
  }
}
