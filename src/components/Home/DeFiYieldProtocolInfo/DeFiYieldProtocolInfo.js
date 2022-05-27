import React from "react";
import PropTypes from "prop-types";
import DeFiYieldStatisticItem from "../DeFiYieldStatisticItem";
import TitleWithParagraph from "../../../assets/General/TitleWithParagraph";
import DefiBanner from "./DefiBanner";
import Test from '../../../assets/Home/why-defi.png'
const DeFiYieldProtocolInfo = ({ statistics, volume, paid, providers }) => {

  const devicewidth = window.innerWidth;

  return (
    <div className="defi-yield-protocol">
      <div className="big-circle-decoration" style={{zIndex: '-1', top: 5}}></div>
      <div className="big-circle-decoration"></div>
      <div className="container">
        <div className="row">
          {/* to be checked if text on blue cards is static */}
          <div className="col-md-6 order-2 order-md-1 banner">
            {/* <DefiBanner volume={volume} paid={paid} providers={providers} />
             */}
             <img src={Test} style={{width: devicewidth < 800 ? 325 : 705, height: devicewidth < 800 ? 335 : 750}}/>
          </div>
          <div className="col-md-6 order-1 order-md-2" style={{marginTop: '3rem'}}>
            <TitleWithParagraph>
              <h1>
                Why use{" "}<mark>DeFi </mark> <br />
                <mark>Yield Protocol</mark>
              </h1>
              <p>
                Through our strong foundation, we aim to bring you a powerful
                decentralized ecosystem that faces the future. In addition to
                a variety of products and services currently offered like yield
                farming and staking, we are constantly building and expanding
                our scope to include more advanced DeFi and educational tools,
                NFTs and even Metaverse gaming, making us accessible for both
                beginner and advanced users.
              </p>
              <br />
              <p>
                These products are created with unique smart contracts utilizing
                DYP’s revolutionary and proprietary anti-manipulation functionality,
                paying users in native tokens such as ETH, BNB, and AVAX.
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
