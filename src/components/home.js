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

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      srow: false,
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
    
      const eth = "9,209";
      const bnb = "10,086";
      const avax = "25,8665";
      const liquidity = "$32,694,501";
      const tvl = "$5,232,275";
      const users = "23,604";
    
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
            },
            {
              icon: "wbtc-icon.png",
              text: "WBTC",
              min_lock_time: "3 Days",
              percentage: "3% - 13%",
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
            },
            {
              icon: "usdc-icon.png",
              text: "USDC",
              min_lock_time: "3 Days",
              percentage: "8% - 22%",
            },
            {
              icon: "dai-icon.png",
              text: "DAI",
              min_lock_time: "3 Days",
              percentage: "8% - 21%",
            },
          ],
        },
      ];
    
      return (
        <div className="home">
          <MainHero
            eth={eth}
            bnb={bnb}
            avax={avax}
            liquidity={liquidity}
            tvl={tvl}
            users={users}
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
