import React, { useState } from "react";
import SideNav from "./SideNav/SideNav";
import OverView from "./Overview/Overview";
import Details from "./Details/Details";
import Landing from "./Landing/Landing";

const ReferralV2 = () => {
  const [connected, setConnected] = useState(false);
  const handleWalletConnect = () => {
    setConnected(true);
  };
  return (
    <>
      <div
        className="referal-wrapper"
        style={{
          background:
            connected === true
              ? "#eff0f6"
              : "linear-gradient(121.83deg, #5285fc 14.64%, #8005ff 85.55%)",
        }}
      >
        {connected === true ? (
          <>
            <SideNav />
            <OverView />
            <Details />
          </>
        ) : (
          <Landing onWalletConnect={handleWalletConnect} />
        )}
      </div>
    </>
  );
};

export default ReferralV2;
