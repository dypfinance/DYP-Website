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
      image: "ann-image-8.jpeg",
      title: "Metaverse, the next step for DYP!",
      text: "We know you’re wondering what’s next for #DYP! 😎\n" +
          "\n" +
          "🔥 Find out what we are cooking from our latest Medium article! ",
      date: "Jun 14, 2021",
      href: "https://dypfinance.medium.com/metaverse-the-next-step-for-dyp-4c6586a1e3f0",
    },
    {
      image: "ann-image-7.jpeg",
      title: "Game season it’s officially open! 👉🏽 #CAWS Adventures is here!",
      text: "🙀 Are you ready for a #GameFi Experience? Great!\n" +
          "\n" +
          "Game season it’s officially open! 👉🏽 #CAWS Adventures is here. \n" +
          "\n" +
          "Connect your wallet and start the adventure!\n" +
          "\n" +
          "😼 Don’t forget: you need to hold a CAWS #NFT in order to play. \n" +
          "\n" +
          "Game on DYPians! ⤵️",
      date: "May 31, 2022",
      href: "https://twitter.com/dypfinance/status/1531613663450251264",
    },
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
