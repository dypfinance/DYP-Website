import React from "react";
import Carousel from "./carousel";
import { NavLink } from "react-router-dom";
import getFormattedNumber from "../functions/get-formatted-number";

//Import Elements
import Dots from "./elements/dots";

import CarouselNews from "./carouselNews";
import CarouselApy from "./carouselApy";

import Vaults from '../components/Home/Vaults';
import CalculateFarming from "../components/Home/CalcualteFarming";
import DeFiYieldProtocolInfo from "../components/Home/DeFiYieldProtocolInfo";
import MainHero from "../components/Home/MainHero";
import SupportedAssetsAndRates from "../components/Home/SupportedAssetsAndRates";
import LearnMore from '../components/Home/LearnMore';
import OurPartners from '../components/Home/OurPartners';
import LatestAnn from '../components/Home/LatestAnn';
import Community from "../components/Home/Community";
import styled, { keyframes } from "styled-components";
import { zoomInUp, tada, fadeIn } from "react-animations";
import CloseX from '../assets/images/x_close.png'
import Catpopup from "../assets/images/cat_popup.png";
import Speech from '../assets/images/speech_text.png'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      srow: false,
      showPopup: true,
    };
    this.loadMoreArticles = this.loadMoreArticles.bind(this);
  }
  componentDidMount() {
    // window.initParticles();
  }

  loadMoreArticles() {
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }));

    if (this.state.count == 0) {
      this.setState((prevState, props) => ({
        srow: true,
      }));
    } else if (this.state.count == 1) {
      this.props.history.push("/latestupdates");
    } else {
      // do nothing
      console.log(this.state.count);
    }
  }

  render() {
    const statisticsArray = [
        {
          statisticInfo: "68",
          statisticName: "Active Pools",
        },
        {
          statisticInfo: "10",
          statisticName: "DYP Products",
        },
        {
          statisticInfo: "70%",
          statisticName: "DYP Locked",
        },
        {
          statisticInfo: "5M+",
          statisticName: "DYP Burned",
        },
      ];
    
      const volume = "$775M+";
      const paid = "$43M+";
      const providers = "2.5K+";
    

      const auditedByArray = [
        {
          img: "audited-by-item-1",
          name: "Peck Shield",
        },
        {
          img: "audited-by-item-2",
          name: "Blockchain Consilium",
        },
        {
          img: "audited-by-item-3",
          name: "Certik  Foundation",
        },
      ];
    
      const assetsArray = [
        {
          field: "Yield",
          assets: [
            {
              icon: "eth-icon.svg",
              text: "ETH Yield",
              percentage: "302.27%",
              assetSubArray: [
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
              ],
            },
            {
              icon: "bsc-icon.svg",
              text: "BSC Yield",
              percentage: "90.77%",
              assetSubArray: [
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
              ],
            },
    
            {
              icon: "avax-icon.svg",
              text: "Avax Yield",
              percentage: "124.64%",
              assetSubArray: [
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
              ],
            },
          ],
        },
        {
          field: "Buyback",
          assets: [
            {
              icon: "eth-icon.svg",
              text: "ETH Buyback",
              percentage: "82%",
              assetSubArray: [
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
              ],
            },
            {
              icon: "bsc-icon.svg",
              text: "BSC Buyback",
              percentage: "81%",
              assetSubArray: [
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
              ],
            },
            {
              icon: "avax-icon.svg",
              text: "Avax Buyback",
              percentage: "81%",
              assetSubArray: [
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
              ],
            },
          ],
        },
        {
          field: "Stake",
          assets: [
            {
              icon: "eth-icon.svg",
              text: "ETH Stake",
              percentage: "13.61%",
              assetSubArray: [
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
              ],
            },
            {
              icon: "bsc-icon.svg",
              text: "BSC Stake",
              percentage: "13.09%",
              assetSubArray: [
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
              ],
            },
            {
              icon: "avax-icon.svg",
              text: "Avax Stake",
              percentage: "12.64%",
              assetSubArray: [
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
                {
                  icons: [
                    "eth-icon2.png",
                    "wbtc-icon.png",
                    "usdc-icon.png",
                    "usdt-icon.png",
                    "dai-icon.png",
                  ],
                  percentage: "302.27%",
                  total_value_locked: "$99,740.31",
                  lock_time: "No lock",
                },
              ],
            },
          ],
        },
      ];
    
      const vaultsArray = [
        {
          field: "Markets",
          assets: [
            {
              icon: "eth-icon2.png",
              text: "ETH",
              min_lock_time: "3 Days",
              percentage: "3% - 13%",
              link: 'https://vault.dyp.finance/vault-weth'
            },
            {
              icon: "wbtc-icon.png",
              text: "WBTC",
              min_lock_time: "3 Days",
              percentage: "3% - 13%",
              link: 'https://vault.dyp.finance/vault-wbtc'
            },
          ],
        },
        {
          field: "Stable coin",
          assets: [
            {
              icon: "usdt-icon.png",
              text: "USDT",
              min_lock_time: "3 Days",
              percentage: "9% - 23%",
              link: 'https://vault.dyp.finance/vault-usdt'
            },
            {
              icon: "usdc-icon.png",
              text: "USDC",
              min_lock_time: "3 Days",
              percentage: "8% - 22%",
              link: 'https://vault.dyp.finance/vault-usdc'
            },
            {
              icon: "dai-icon.png",
              text: "DAI",
              min_lock_time: "3 Days",
              percentage: "8% - 21%",
              link: 'https://vault.dyp.finance/vault-dai'
            },
          ],
        },
      ];

    const ethTotal = getFormattedNumber(this.props.json_totalPaid.ethTotal.wethPaiOutTotals,0)
    const bnbTotal = getFormattedNumber(this.props.json_totalPaid.bnbTotal.wbnbPaidOutTotals,0)
    const avaxTotal = getFormattedNumber(this.props.json_totalPaid.avaxTotal.avaxPaidOutTotals,0)
    const liq = getFormattedNumber(this.props.json_totalPaid.totalPaidInUsd,0)
    const tvl_all = getFormattedNumber(this.props.tvl_all,2)
    const holders = this.props.totalHolders


    const RollInAnimation = keyframes`${zoomInUp}`;
    const fadeInAnimation = keyframes`${fadeIn}`;

    const devicewidth = window.innerWidth;

    const BAnimation = keyframes`${tada}`;

    const RollInDiv = styled.div`
      animation: 1s ${RollInAnimation};
      position: fixed;
      z-index: 4;
      bottom: 20px;
    `;

    const Bounce = styled.div`
      animation: infinite 4s ${BAnimation};
    `;

    const FadeIn = styled.div`
    animation:  1s ${fadeInAnimation};
   
    position: fixed;
  `;


      return (
        <div className="home">
          {this.state.showPopup &&
            <RollInDiv style={{right: devicewidth < 500 ? 100 : 20}}>
            <Bounce>
               <img src={CloseX} width={50} style={{position: 'relative', bottom: devicewidth < 500 ? 25 : 215, left:devicewidth < 500 ? 165 : 250, cursor: 'pointer'}} onClick={()=>{this.setState({showPopup: false})}}/>
              <NavLink to="/mint">
                <FadeIn style={{right: devicewidth < 500 ? '25px': 7, bottom: devicewidth < 500 ? 130 : 140 }}>
                  <img src={Speech} style={{ width: devicewidth < 700 ? 100 : 200}}/>
                </FadeIn>
                <img
                  src={Catpopup} 
                  style={{ width:  devicewidth < 500 ? 200 : 250 }}
                />
              </NavLink>
            </Bounce>
          </RollInDiv>
          }
         

          <MainHero
            eth={ethTotal}
            bnb={bnbTotal}
            avax={avaxTotal}
            liquidity={liq}
            tvl={tvl_all}
            users={holders}
            audited={auditedByArray}
          />
          <DeFiYieldProtocolInfo
            statistics={statisticsArray}
            volume={volume}
            paid={paid}
            providers={providers}
          />
          <CalculateFarming />
          <SupportedAssetsAndRates assets={assetsArray} />
          <Vaults vaults={vaultsArray} />
          <LearnMore />
          <OurPartners />
          <LatestAnn />
          <Community />
        </div>
      );
  }
}
