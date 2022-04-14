import Button from "../../../assets/General/Button";
import ChevronArrowSvg from "../../../assets/General/ChevronArrowSvg/ChevronArrowSvg";
import ClickToVideoCard from "../../../assets/General/ClickToVideoCard/ClickToVideoCard";
import TitleWithParagraph from "../../../assets/General/TitleWithParagraph";
import React from "react";

const LearnMore = () => {
  return (
    <div className="container learn-more-section-container">
      <div className="ball-decoration"></div>
      <div className="ball-decoration"></div>
      <div className="big-circle-decoration"></div>
      <div className="row">
        <div className="col-md-5">
          <TitleWithParagraph>
            <h1>
              Are you ready to <br />
              <mark>learn even more?</mark>
            </h1>
            <p>
              Check out our YouTube channel for helpful tips and tutorials that
              will get you to become an expert in no time.
            </p>
          </TitleWithParagraph>
          <Button
            text="Check us out"
            action={() => console.log("check us out")}
          />
        </div>
        <div
          className="col-md-7 d-flex 
                justify-content-start 
                justify-content-md-center
                align-items-center 
                align-items-md-end"
        >
          <a
            href="https://www.youtube.com/watch?v=Bmhn9B8nWrE"
            target={"_blank"}
          >
            <ClickToVideoCard
              action={() => console.log("video")}
              img="learn-more-img-1.png"
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
            href="https://www.youtube.com/watch?v=7CZ_ianX2bk"
            target={"_blank"}
          >
            <ClickToVideoCard
              action={() => console.log("video")}
              img="learn-more-img-2.png"
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
            href="https://www.youtube.com/watch?v=xc2S9Jei7DA"
            target={"_blank"}
          >
            <ClickToVideoCard
              action={() => console.log("video")}
              img="learn-more-img-3.png"
            />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
