import React from "react";
import LandingHero from "../assets/landing-hero.png";
import Paste from "../assets/paste-icon.svg";
import PropTypes from 'prop-types'

const Landing = ({onWalletConnect}) => {
  const perks = [
    { title: "45 Days Cookie" },
    {
      title:
        "Up to 8% lifetime commission for every user you invite to use our products (Farm, Stake, Buyback, Vault)",
    },
    {
      title:
        "Up to $300 Sign Up Bonus for each user that invests at least $10,000 in a 30 Day Lock Period",
    },
    {
      title:
        "A fixed 5% Lifetime commission for each friend referred by your referrals",
    },
  ];

  const perks2 = [
    {
      title:
        "You can join our Special Campaigns to earn even more from your referrals",
    },
    {
      title:
        "An advanced analytics tool to track your referrals and their performance",
    },
    {
      title:
        "Access to hundreds of pre-made banners that you can share on all your social media to customize referrals",
    },
    {
      title:
        "Access to an embed code that you can use to post our premade the banners to your website",
    },
  ];

  return (
    <div className="landing-wrapper">
      <div className="landing-content">
        <div>
          <div className="row m-0 justify-content-between" style={{ gap: 20 }}>
            <div className=" text-wrapper">
              <h1 className="landing-title">
                Join our
                <br />
                Referral Program
              </h1>
              <p>
                The Defi Yield Protocol Referral Program is our way of thanking
                and rewarding you for being an active member of the community
                and for sharing and promoting our products.
              </p>
              <p>
                If you enjoy doing all of these things and would like to earn a
                steady stream of passive income, you can join our referral
                program and receive the following benefits:
              </p>
            </div>
            <img
              src={LandingHero}
              alt=""
              style={{ maxWidth: 530, height: 280 }}
            />
          </div>
          <div>
            <h6>By becoming part of our program, you can earn:</h6>
            <div
              className="row justify-content-between"
              style={{ gap: 20, textAlign: "center", marginTop: '2rem' }}
            >
              {perks.length > 0 &&
                perks.map((item, id) => (
                  <div key={id} style={{ width: 220 }}>
                    <img src={Paste} alt="" id="paste" />
                    <p className="item-title">{item.title}</p>
                  </div>
                ))}
            </div>
            <div
              className="row m-0 justify-content-between"
              style={{ gap: 20, textAlign: "center" }}
            >
              {perks2.length > 0 &&
                perks2.map((item, id) => (
                  <div key={id} style={{ width: 220 }}>
                    <img src={Paste} alt="" id="paste" />
                    <p className="item-title">{item.title}</p>
                  </div>
                ))}
            </div>
          </div>
        </div> <button onClick={onWalletConnect} className='login-btn'>Connect Wallet</button>
      </div>
     
    </div>
  );
};

Landing.propTypes = {
    onWalletConnect: PropTypes.func
}

export default Landing;
