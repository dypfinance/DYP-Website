import React from "react";
import PropTypes from "prop-types";
import DeFiYieldStatisticItem from "../DeFiYieldStatisticItem";
import TitleWithParagraph from "../../../assets/General/TitleWithParagraph";
import DefiBanner from "./DefiBanner";
import Test from '../../../assets/Home/test-hero.png'
const DeFiYieldProtocolInfo = ({ statistics, volume, paid, providers }) => {

  const devicewidth = window.innerWidth;

  return (
    <div className="defi-yield-protocol">
      <div className="big-circle-decoration" style={{zIndex: '-1'}}></div>
      <div className="big-circle-decoration"></div>
      <div className="container">
        <div className="row">
          {/* to be checked if text on blue cards is static */}
          <div className="col-md-6 order-2 order-md-1 banner">
            {/* <DefiBanner volume={volume} paid={paid} providers={providers} />
             */}
             <img src={Test} style={{width: devicewidth < 800 ? 325 : 705, height: devicewidth < 800 ? 335 : 750}}/>
          </div>
          <div className="col-md-6 order-1 order-md-2">
            <TitleWithParagraph>
              <h1>
                Why use{" "}<mark>DeFi </mark> <br />
                Yield Protocol
              </h1>
              <p>
                Through our strong foundations, we aim to offer a powerful
                decentralized ecosystem capable of providing the most current
                and lucrative investment options. In addition to a variety of
                products and services currently offered like{" "}
                <mark>yield farming and staking, </mark> we are constantly
                building and expanding our scope to include more advanced{" "}
                <mark>
                  DeFi and educational tools, NFTs and even Metaverse gaming
                </mark>{" "}
                , making us accessible for both beginner and advanced users.
              </p>
              <br />
              <p>
                These products are created with unique smart contracts utilizing
                DYP’s revolutionary proprietary anti-manipulation functionality and
                pays users in native tokens such as{" "}
                <mark>ETH, BNB, and AVAX.</mark> So far, the platform has paid
                over{" "}
                <mark>
                  9,210 ETH, 10,152 BNB, and 26,197 AVAX worth $34,206,364 in
                  rewards to users.
                </mark>{" "}
                <br /><br />
                Become a part of our community now, and take your holdings and
                investments to an entirely new level.
              </p>
            </TitleWithParagraph>

            <div className="statistics-section">
              {statistics.length > 0 &&
                statistics.map((item, id) => (
                  <DeFiYieldStatisticItem
                    key={id}
                    statisticInfo={item.statisticInfo}
                    statisticName={item.statisticName}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DeFiYieldProtocolInfo.propTypes = {
  statistics: PropTypes.array,
  volume: PropTypes.string,
  paid: PropTypes.string,
  providers: PropTypes.string,
};

export default DeFiYieldProtocolInfo;
