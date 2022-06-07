import React from "react";
import { NavLink } from "react-router-dom";
import SideNav from "./SideNav/SideNav";
import OverView from "./Overview/Overview";
import Details from "./Details/Details";

const ReferralV2 = () => {
  return (
    <>
      <div className="referal-wrapper">
        <SideNav />
        <OverView />
        <Details />
      </div>
    </>
  );
};

export default ReferralV2;
