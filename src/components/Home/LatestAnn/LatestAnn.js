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
      image: "ann-image-9.jpeg",
      title: "We are excited to announce our partnership with ANKR!",
      text: "We are excited to announce our partnership with @ANKR\n" +
          " 👉🏽 one of the world leaders in Web3 infrastructure. \n" +
          "\n" +
          "Using #DYP Tools, powered by ANKR's advanced API service, #DYPians will have access to instant & accurate multi-chain data. \n" +
          "\n" +
          "#DYP 🔀 making crypto accessible to everyone.",
      date: "Sep 2, 2022",
      href: "https://twitter.com/dypfinance/status/1565674483863752710",
    },
    {
      image: "ann-image-8.jpeg",
      title: "#DYP is available now on SWFT AllChain Bridge!",
      text: "New Listing!\n" +
          "\n" +
          "$DYP from @dypfinance\n" +
          " is available now on SWFT AllChain Bridge!\n" +
          "\n" +
          "Start to:\n" +
          "🔸Swap $DYP directly with 300+ #crypto\n" +
          "🔸Buy #NFTs & #GameFi assets\n" +
          "🔸Share $DYP using SWFT red packet and more!!\n",
      date: "Aug 31, 2021",
      href: "https://twitter.com/SwftCoin/status/1564993999496429568",
    },
    {
      image: "ann-image-7.jpeg",
      title: "#DYP will attend #SmartCon 2022 by #Chainlink",
      text: "Our Marketing & Communications Manager will be speaking at #SmartCon 2022 by #Chainlink in #NYC!\n" +
          " \n" +
          "SmartCon attendees will get an exclusive look into the emerging research, trends, and projects set to kickstart a new wave of adoption. \n" +
          " \n" +
          "More info: https://smartcon.chain.link\n",
      date: "Aug 20, 2022",
      href: "https://twitter.com/dypfinance/status/1561019891196518403",
    }
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
