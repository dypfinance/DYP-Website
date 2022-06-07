import React, { useState } from "react";
import SvgLogo from "../../../Header/Svg/SvgLogo";
import Bell from "../assets/bell.svg";
import CommentActive from "../assets/comment-active.svg";
import CommentPassive from "../assets/comment-passive.svg";
import GaugeActive from "../assets/gauge-active.svg";
import GaugePassive from "../assets/gauge-passive.svg";
import UsersActive from "../assets/users-active.svg";
import UsersPassive from "../assets/users-passive.svg";
import UserName from "../assets/username.svg";
import { useHistory } from "react-router-dom";

const SideNav = () => {
  const [active, setActive] = useState(true);
  const [activeUser, setActiveUser] = useState(false);
  const [activeComment, setActiveComment] = useState(false);
  const history = useHistory();
  return (
    <div className="nav-wrapper">
      <div className="link-wrapper">
        <div className="icons-wrapper">
          <div
            className="logo d-flex justify-content-center"
            onClick={() => {
              history.push("/");
            }}
            style={{ cursor: "pointer" }}
          >
            <SvgLogo />
          </div>
          <div
            className={
              active ? "active-icon" : "d-flex w-100 justify-content-center"
            }
          >
            <img
              src={active ? GaugeActive : GaugePassive}
              alt=""
              onClick={() => {
                setActive(true);
                setActiveUser(false);
                setActiveComment(false);
              }}
            />
          </div>
          <div
            className={
              activeUser === true
                ? "active-icon"
                : "d-flex w-100 justify-content-center"
            }
          >
            <img
              src={activeUser === true ? UsersActive : UsersPassive}
              alt=""
              onClick={() => {
                setActive(false);
                setActiveUser(true);
                setActiveComment(false);
              }}
            />
          </div>
          <div
            className={
              activeComment === true
                ? "active-icon"
                : "d-flex w-100 justify-content-center"
            }
          >
            <img
              src={activeComment === true ? CommentActive : CommentPassive}
              alt=""
              onClick={() => {
                setActive(false);
                setActiveUser(false);
                setActiveComment(true);
              }}
            />
          </div>
        </div>
        <div className="icons-wrapper">
          <img src={Bell} alt="" />
          <img src={UserName} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
