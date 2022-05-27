import AnnCard from "../../../assets/General/AnnCard";
import Button from "../../../assets/General/Button";
import ChevronArrowSvg from "../../../assets/General/ChevronArrowSvg/ChevronArrowSvg";
import TitleWithParagraph from "../../../assets/General/TitleWithParagraph";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const LatestAnn = () => {
  const annsArray = [
    {
      image: "ann-image-4.jpeg",
      title: "Check out our new website!",
      text: "🔥 That special moment is finally here!\n" +
          "\n" +
          "🧐 Check out our new website. An upgraded UI version with new cool features 👉 an easier and more interactive way to stay connected to our platform!\n" +
          "\n" +
          "This is DeFi Yield Protocol! ⤵️",
      date: "May 27, 2022",
      href: "https://twitter.com/dypfinance/status/1530181037766189059",
    },
    {
      image: "ann-image-5.jpeg",
      title: "New smart contract for DYP staking!",
      text: "The game has changed! ⤵️\n" +
          "\n" +
          "💰 Stake your #DYP and earn 25% APR in #ETH, #AVAX or #BNB. \n" +
          "\n" +
          "This new smart contract is available on all blockchains: ETH, BSC & C-CHAIN 👉🏽 no impermanent loss. \n" +
          "\n" +
          "It all starts today! ⚡️",
      date: "May 10, 2021",
      href: "https://twitter.com/dypfinance/status/1524075021379022848",
    },
    {
      image: "ann-image-6.jpeg",
      title: "CAWS staking pool is open for business!",
      text: "🥳 The time has come! \n" +
          "\n" +
          "#CAWS staking pool is open for business! 🙀 Stake your #NFT and get 50% APR in #ETH rewards.\n" +
          "Don’t have an NFT? Mint one and start earning money. \n" +
          "\n" +
          "😎 Now is the right time for you!",
      date: "May 7, 2022",
      href: "https://twitter.com/dypfinance/status/1522968871812141057",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  const resize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resize, false);

    return () => {
      window.removeEventListener("resize", resize, false);
    };
  }, []);




  return (

    <div className="container latest-ann-container">
      <div className="ball-decoration"></div>
      <div className="ball-decoration"></div>
      <div className="big-circle-decoration"></div>
      <div className="row">
        <div className=" col-md-6 ">
          <TitleWithParagraph>
            <h1>
              <mark>Latest</mark> <br />
              Announcements
            </h1>
            <p>Stay tuned for the latest news and developments.</p>
          </TitleWithParagraph>
          <NavLink to="/latestupdates">
            <Button
              text="More news"
              action={() => console.log("more news out")}
              icon={<ChevronArrowSvg />}
            />
          </NavLink>
        </div>
        {isMobile ? (
          <div
            id="carouselHero"
            className="carousel slide"
            data-ride="carousel"
          >
            {/* <ol className="carousel-indicators">
              <li
                data-target="#carouselHero"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#carouselHero" data-slide-to="1"></li>
              <li data-target="#carouselHero" data-slide-to="2"></li>
            </ol> */}
            <div className="carousel-inner">
                <Carousel infiniteLoop showArrows={false} showStatus={false} showIndicators={true}>
              {annsArray.length > 0 &&
                annsArray.map((item, id) => (
                  <div
                    key={id}
                    // className={`carousel-item ${id == 0 ? "active" : ""}`}
                  >
                    <div className="col d-flex justify-content-center">
                      <AnnCard
                        image={item.image}
                        title={item.title}
                        text={item.text}
                        date={item.date}
                        action={item.href}
                      />
                    </div>
                  </div>
                ))}</Carousel>
            </div>
          </div>
        ) : (
          <>
            <div className=" col-md-6  d-flex justify-content-end negative ">
              <AnnCard
                image={annsArray[1].image}
                title={annsArray[1].title}
                text={annsArray[1].text}
                date={annsArray[1].date}
                action={annsArray[1].href}
              />
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-md-7 d-flex justify-content-end negative">
                  <AnnCard
                    image={annsArray[0].image}
                    title={annsArray[0].title}
                    text={annsArray[0].text}
                    date={annsArray[0].date}
                    action={annsArray[0].href}
                  />
                </div>
                <div className="col-md-5 margin-top">
                  <AnnCard
                    image={annsArray[2].image}
                    title={annsArray[2].title}
                    text={annsArray[2].text}
                    date={annsArray[2].date}
                    action={annsArray[2].href}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LatestAnn;
