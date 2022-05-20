import Button from "../../../assets/General/Button";
import ChevronArrowSvg from "../../../assets/General/ChevronArrowSvg/ChevronArrowSvg";
import ClickToVideoCard from "../../../assets/General/ClickToVideoCard/ClickToVideoCard";
import TitleWithParagraph from "../../../assets/General/TitleWithParagraph";
import React from "react";
import { useHistory } from "react-router-dom";

const LearnMore = () => {
  let navigation = useHistory();
  return (
    <div className="container learn-more-section-container">
      <div className="ball-decoration"></div>
      <div className="ball-decoration"></div>
      <div className="big-circle-decoration"></div>
      <div className="row">
        <div className="col-md-5">
          <TitleWithParagraph>
            <h1>
            Educational <br />
              <mark>Tools</mark>
            </h1>
            <p>
              Hit the ground running with our quick start guide! Get tips, watch
              how-to videos and learn how to become an expert in no time.
            </p>
          </TitleWithParagraph>
          <a href='https://www.youtube.com/c/DeFiYieldProtocol' target={'_blank'}>
          <Button
            text="Check us out"
            action={() => {}}
          /></a>
        </div>
        <div
          className="col-md-7 d-flex 
                justify-content-start 
                justify-content-md-center
                align-items-center 
                align-items-md-end"
        >
          <a
            href="https://www.youtube.com/playlist?list=PL8K0d30DJYVPAbzuedp9ii6OszPT1STy8"
            target={"_blank"}
          >
            <ClickToVideoCard
              action={() => console.log("video")}
              img="learn-more-img-1.jpg"
            />
          </a>
        </div>
      </div>
      <div className="row videos-second-row">
        <div
          className="col-md-8 d-flex 
                justify-content-start
                justify-content-md-center 
                align-items-center 
                align-items-md-start 
                "
        >
          <a
            href="https://www.youtube.com/watch?v=0WSYN2qHTNQ"
            target={"_blank"}
          >
            <ClickToVideoCard
              action={() => console.log("video")}
              img="learn-more-img-3.jpg"
            />
          </a>
        </div>
        <div
          className="col-md-4 d-flex
                 justify-content-start
                 justify-content-md-end
                 align-items-center
                 align-items-md-end
                 "
        >
          <a
            href="https://www.youtube.com/playlist?list=PL8K0d30DJYVPKtu_gWiu7vm73k_TnZOs4"
            target={"_blank"}
          >
            <ClickToVideoCard
              action={() => console.log("video")}
              img="learn-more-img-2.jpg"
            />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
