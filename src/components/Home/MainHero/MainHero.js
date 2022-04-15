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
  const gotoFarm =() =>{
    navigate.push("/farmv2");
    
  }
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
               <Carousel autoPlay={true} infiniteLoop showArrows={false} showStatus={false} showIndicators={false}>
                 <div>
               <TitleWithParagraph isMain>
                    <h1>
                      Earn{" "}
                      <mark>
                        {localStorage.getItem("highapy")} % <br />
                        APR{" "}
                      </mark>{" "}
                      <br />
                      on Farming
                    </h1>
                    <p>
                      No impermanent loss! Deposit DYP tokens into the Staking
                      contract to start earning. Choose from two staking
                      options, with rewards from 75% APY to 200% APY, depending
                      on the lock time.
                    </p>
                  </TitleWithParagraph>
                  </div>
                <div>
                <TitleWithParagraph isMain>
                    <h1>
                       Maximize Yield{" "}
                      <mark> Farming<br/> Rewards!</mark>{" "}
                    </h1>
                    <p>
                    The Anti-Manipulation employed by our protocol aims to limit the market impact on users who are converting rewards into ETH and other native platform tokens, to curb the influence of large whale users.
                    </p>
                  </TitleWithParagraph>
                </div>
                <div>
                <TitleWithParagraph isMain>
                    <h1>
                    It’s minting time!
                     
                    </h1>
                    <p>
                    Our brand-new NFTs, the Cats And Watches society have officially started minting! With over 190 different traits to choose from, these randomly-generated cats are ready to become yours.
                    </p>
                  </TitleWithParagraph>
                </div>
            </Carousel>

              
            </div>

            <Button
              text="Enter now"
              icon={<ChevronArrowSvg />}
              action={()=>gotoFarm()}
            />
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
