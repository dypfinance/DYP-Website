import React, { useEffect, useState } from "react";
import SideNav from "./SideNav/SideNav";
import OverView from "./Overview/Overview";
import Details from "./Details/Details";
import Landing from "./Landing/Landing";
import MyReferrals from "./MyReferrals/MyReferrals";
import Faq from "./Faq/Faq";

const ReferralV2 = () => {
  const [connected, setConnected] = useState(false);
  const handleWalletConnect = () => {
    setConnected(true);
  };

  const tabs = ["Overview", "MyReferrals", "Faq"];
  const [active_tab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (item) => {
    setActiveTab(item);
  };

  return (
    <>
      <div
        className="referal-wrapper"
        style={{
          background:
            connected === true
              ? "#F5F5F5"
              : "linear-gradient(121.83deg, #5285fc 14.64%, #8005ff 85.55%)",
        }}
      >
        {connected === true ? (
          <>
            <SideNav onTabClick={handleTabClick} />
            {active_tab === tabs[0] ? (
              <>
                <OverView />
                <Details />
              </>
            ) : active_tab === tabs[1] ? (
              <MyReferrals />
            ) : (
              <Faq />
            )}
          </>
        ) : (
          <Landing onWalletConnect={handleWalletConnect} />
        )}
      </div>
    </>
  );
};

export default ReferralV2;
