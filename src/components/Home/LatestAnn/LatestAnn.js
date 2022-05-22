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
      image: "ann-image-1.png",
      title: "Cats and Watches Society NFTs Whitelist!",
      text: "🔥Join Cats and Watches Society #NFTs Whitelist 🎉One Brand New Rolex Daytona Ceramic 116500LN worth $40k Giveaway...",
      date: "January 11, 2022",
      href: "https://twitter.com/dypfinance/status/1480623073208549380",
    },
    {
      image: "ann-image-2.png",
      title: "Staking, Farming, and Buyback V2 is LIVE on Ethereum!",
      text: "We are excited to announce that the new pools for staking, buyback, and farming have been launched on Ethereum. All the users are now able to earn up to 200% APR if they are using the staking pools, up to 150% APR if they are using the buyback pools, and up to 2000% APR if they are using the farming pools....",
      date: "December 15, 2021",
      href: "https://twitter.com/dypfinance/status/1471162808041713665?s=20",
    },
    {
      image: "ann-image-3.png",
      title: "V.R. is the next step for #DYP!",
      text: "⚡️ Find out more about the #Metaverse play-to-earn game that we are developing. 📢 https://dypfinance.medium.com/how-defi-yield... ",
      date: "February 22, 2022",
      href: "https://twitter.com/dypfinance/status/1496072467814756353",
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
