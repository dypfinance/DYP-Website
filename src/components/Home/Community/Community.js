import SocialCard from "../../../assets/General/SocialCard";
import TitleWithParagraph from "../../../assets/General/TitleWithParagraph";
import React from "react";

const Community = () => {
  const socialsArray = [
    {
      icon: "twitter.svg",
      name: "Twitter",
      text: "Read the latest",
      link: "https://twitter.com/dypfinance",
    },
    {
      icon: "telegram.svg",
      name: "Telegram",
      text: "Join the discussion",
      link: "https://t.me/dypfinance",
    },
    {
      icon: "discord.svg",
      name: "Discord",
      text: "Get involved",
      link: "https://discord.com/invite/dypcaws",
    },
    {
      icon: "github.svg",
      name: "Github",
      text: "Explore with us",
      link: "https://github.com/dypfinance",
    },
  ];
  return (
    <div className="container community-container">
      <div className="ball-decoration"></div>
      <div className="ball-decoration"></div>
      <div className="ball-decoration"></div>
      <div className="big-circle-decoration"></div>
      <div className="row">
        <div className="col-md-6 order-2 order-md-1">
          <div className="social-cards-container">
            {socialsArray.length > 0 &&
              socialsArray.map((item, id) => (
                <>
                  <a href={item.link} target={"_blank"} rel="noreferrer">
                    <SocialCard
                      key={id}
                      action={() => console.log(item.name)}
                      icon={item.icon}
                      name={item.name}
                      text={item.text}
                    />
                  </a>
                </>
              ))}
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center order-1 order-md-2">
          <TitleWithParagraph>
            <h1>
              DYP
              <br />
              <mark>Community </mark>
            </h1>
            <p>
              Become a part of our growing community by joining us on social
              media.
            </p>
          </TitleWithParagraph>
        </div>
      </div>
    </div>
  );
};

export default Community;
