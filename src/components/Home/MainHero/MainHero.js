import React from "react";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Button from "../../../assets/General/Button/Button";
import TitleWithParagraph from "../../../assets/General/TitleWithParagraph";
import AuditedByItem from "../../../assets/General/AuditedByItem";
import ChevronArrowSvg from "../../../assets/General/ChevronArrowSvg/ChevronArrowSvg";
import { Carousel } from "react-responsive-carousel";
import { useHistory } from "react-router-dom";

const MainHero = ({ audited, eth, bnb, avax, liquidity, tvl, users }) => {
  let navigate = useHistory();
  const gotoFarm = () => {
    navigate.push("/earn");
  };

  const gotoMint = () => {
    navigate.push("/mint");
  };
  return (
    <div className="main-hero">
      <div className="circle-decoration"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div
              id="carouselHero"
              className="carousel slide"
              data-ride="carousel"
            >
              <Carousel
                autoPlay={true}
                infiniteLoop
                showArrows={false}
                showStatus={false}
                showIndicators={false}
              >
                <div className="p-2">
                  <TitleWithParagraph isMain>
                    <h1>
                      Maximize Yield{" "}
                      <mark>
                        {" "}
                        Farming
                        <br /> Rewards!
                      </mark>{" "}
                    </h1>
                    <p>
                      The protocol employs an anti-manipulation feature that
                      aims to limit the market impact on users’ converting
                      rewards into ETH and other native platform tokens.
                      Anti-manipulation aims to maintain stability, fair access
                      to liquidity, and provide a secure and simplified DeFi
                      platform for users of all sizes.
                    </p>
                  </TitleWithParagraph>
                  <Button
                    text="Start Earning"
                    icon={<ChevronArrowSvg />}
                    action={() => gotoFarm()}
                  />
                </div>
                <div className="p-2">
                  <TitleWithParagraph isMain>
                    <h1>
                      Earn{" "}
                      <mark>
                        {localStorage.getItem("highapy")} % <br />
                        APR{" "}
                      </mark>{" "}
                      <br />
                      on Crypto
                    </h1>
                    <p>
                      Make your idle digital assets work for you with DeFi Yield
                      Protocol. To start earning, all you need is to deposit one
                      of the supported assets and earn up to{" "}
                      {localStorage.getItem("highapy")} % APR, paid out daily.
                    </p>
                  </TitleWithParagraph>
                  <br /> <br />
                  <Button
                    text="Start Earning"
                    icon={<ChevronArrowSvg />}
                    action={() => gotoFarm()}
                  />
                </div>
                <div className="p-2">
                  <TitleWithParagraph isMain>
                    <h1>
                      NFTs with
                      <br />
                      <mark>
                        Ethereum
                        <br />
                        Rewards!
                      </mark>
                    </h1>
                    <p>
                      The Cats and Watches Society NFTs have officially started
                      minting! Owners of CAWS will enjoy multiple benefits
                      including access to the CAWS staking pool with up to 50%
                      fixed APR, 10% of minting fees returned to the community
                      and access to the in-development play-to-earn virtual
                      reality Metaverse.
                    </p>
                  </TitleWithParagraph>
                  <Button
                    text="Mint now"
                    icon={<ChevronArrowSvg />}
                    action={() => gotoMint()}
                  />
                </div>
              </Carousel>
            </div>

            {/* <Button
              text="Enter now"
              icon={<ChevronArrowSvg />}
              action={() => gotoFarm()}
            /> */}
          </div>
          {/* to be checked if text on blue cards is static */}
          <div className="col-md-7 main-hero-graphic-wrapper">
            <img
              className="img-fluid"
              src={require("../../../assets/Home/banner_1.png")}
            />
            <div className="text-wrapper">
              <p>
                {eth} <small>ETH</small>, {bnb} <small>BNB</small>
              </p>
              <p>
                {avax}
                <small> AVAX worth:</small>
              </p>
              <p> $ {liquidity}</p>
              <p>
                <small>paid to Liquidity providers!</small>
              </p>
            </div>
            <div className="text-wrapper-secondary">
              <p>
                <small>TVL </small>$ {tvl}
              </p>
              <p>
                <small>Total users </small>
                {users}
              </p>
            </div>
            {/* <MainHeroBanner
                            eth={eth}
                            bnb={bnb}
                            avax={avax}
                            liquidity={liquidity}
                            tvl={tvl}
                            users={users}
                        /> */}
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <p className="audited-by-title">Audited by</p>
            <div className="audited-by-section">
              {audited.length > 0 &&
                audited.map((item, id) => (
                  <AuditedByItem key={id} imgName={item.img} text={item.name} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MainHero.propTypes = {
  audited: PropTypes.array,
  eth: PropTypes.string,
  bnb: PropTypes.string,
  avax: PropTypes.string,
  liquidity: PropTypes.string,
  tvl: PropTypes.string,
  users: PropTypes.string,
};

export default MainHero;
