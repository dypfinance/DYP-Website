import Button from "../../assets/General/Button";
import DarkModeToggleButton from "../../assets/General/DarkModeToggleButton/DarkModeToggleButton";
import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import PropType from "prop-types";
import SvgLogo from "./Svg/SvgLogo";
import SvgTeam from "./Svg/SvgTeam";
import SvgPartners from "./Svg/SvgPartners";
import SvgRoadmap from "./Svg/SvgRoadmap";
import SvgSecurity from "./Svg/SvgSecurity";
import SvgTokenomics from "./Svg/SvgTokenomics";
import { SvgMediakit } from "./Svg/SvgMediakit";
import { SvgBusinessContact } from "./Svg/SvgBusinessContact";
import ChevronArrowSvg from "../../assets/General/ChevronArrowSvg/ChevronArrowSvg";
import OutsideClickHandler from "react-outside-click-handler";

const Header = ({ onToggleDarkMode }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropDown, setDropDownOpen] = useState(null);
  const [url, setUrl] = useState(window.location.pathname);
  const history = useHistory();

  const aboutItems = [
    {
      icon: <SvgTeam />,
      text: "Our team",
      to: "/about",
    },
    {
      icon: <SvgPartners />,
      text: "Our partners",
      to: "#our-partners",
    },
    {
      icon: <SvgRoadmap />,
      text: "Roadmap",
      to: "/roadmap",
    },
    {
      icon: <SvgSecurity />,
      text: "Security",
      to: "/audit",
    },
    {
      icon: <SvgTokenomics />,
      text: "Tokenomics",
      to: "/tokenomics",
    },
    {
      icon: <SvgMediakit />,
      text: "Media kit",
      to: "/presskit",
    },
    {
      icon: <SvgBusinessContact />,
      text: "Contact Us",
      to: "/contact",
    },
  ];

  const redirectToOurPartners = () => {
    history.push("/#our-partners");
  };

  const handleDropDown = (key) => {
    if (openDropDown == key) {
      setDropDownOpen(false);
    } else {
      setDropDownOpen(key);
    }
  };
  const DYPTools = () => {
    window.open("https://tools.dyp.finance", "_blank");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setUrl(window.location.pathname);
    }, 500);

    return () => clearInterval(interval);
  }, [url]);

  const activeAboutClass =
    url?.includes("about") ||
    window.location.hash.includes("our-partners") ||
    url?.includes("roadmap") ||
    url?.includes("audit") ||
    url?.includes("tokenomics") ||
    url?.includes("presskit") ||
    url?.includes("contact");

  return (
    <div
      className={`${
        openMenu && window.innerWidth < 992 && "open-menu-overlay"
      }`}
    >
      <header className="header-menu header-menu-fixed">
        <div
          className={`hamburger-button ${openMenu && "hamburger-button-open"}`}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div style={{ display: "flex", width: "100%" }}>
              <div className="col-12 col-sm-1">
                <div className="logo">
                  <NavLink to="/">
                    <SvgLogo />
                  </NavLink>
                </div>
              </div>
              <div
                className={`col-12 col-sm-11 menu  ${
                  openMenu && "open-menu"
                }  `}
              >
                <div className="row d-flex justify-content-lg-end">
                  <div className="col-12  col-lg-9 main-menu order-2 order-lg-1">
                    <div className="drop-down main-menu-item">
                      {/* you can use 'right' class here to show the submenu on the right side of the screen */}
                      <div
                        className={`drop-down-content right ${
                          openDropDown == "earn"
                            ? "drop-down-content-open"
                            : " "
                        }`}
                      >
                        {aboutItems?.map((item, id) => (
                          <NavLink
                            key={id}
                            to={item.to}
                            className="drop-down-content-item"
                          >
                            <div className="icon">{item.icon}</div>
                            <p className="text">{item.text}</p>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                    <NavLink
                      to="/earn"
                      className="main-menu-item"
                      onClick={() => {
                        setOpenMenu(false);
                        setDropDownOpen(false);
                      }}
                    >
                      <p className="item">Earn</p>
                    </NavLink>
                    <NavLink
                      to="/caws"
                      className="main-menu-item"
                      onClick={() => {
                        setOpenMenu(false);
                        setDropDownOpen(false);
                      }}
                    >
                      <p>CAWS NFT</p>
                    </NavLink>
                    <NavLink
                      to="/buyDYP"
                      className="main-menu-item"
                      onClick={() => {
                        setOpenMenu(false);
                        setDropDownOpen(false);
                      }}
                    >
                      <p>Buy DYP</p>
                    </NavLink>
                    <NavLink
                      to="/vote"
                      className="main-menu-item"
                      onClick={() => {
                        setOpenMenu(false);
                        setDropDownOpen(false);
                      }}
                    >
                      <p>Governance</p>
                    </NavLink>
                    <NavLink
                      to="/bridge"
                      className="main-menu-item"
                      onClick={() => {
                        setOpenMenu(false);
                        setDropDownOpen(false);
                      }}
                    >
                      <p>Bridge</p>
                    </NavLink>
                    <NavLink
                      to="/launchpad"
                      className="main-menu-item"
                      onClick={() => {
                        setOpenMenu(false);
                        setDropDownOpen(false);
                      }}
                    >
                      <p>LaunchPad</p>
                    </NavLink>
                    {/* <NavLink to="/referralv2" className="main-menu-item" >
                                        <p>Referral Program</p>
                                    </NavLink> */}
                    <div className="drop-down main-menu-item">
                      <OutsideClickHandler
                        onOutsideClick={() => {
                          setDropDownOpen(false);
                        }}
                      >
                        <div
                          className="drop-down-select"
                          onClick={() => handleDropDown("about")}
                        >
                          <p
                            className={`${
                              activeAboutClass ? "activeAbout" : ""
                            }`}
                            style={{ paddingLeft: 15 }}
                          >
                            About
                          </p>
                          <span
                            className={`arrow ${
                              openDropDown == "about" && "openArrow"
                            }`}
                          >
                            <ChevronArrowSvg
                              color={
                                activeAboutClass
                                  ? "var(--accent-red-e5)"
                                  : "var(--black-theme)"
                              }
                            />
                          </span>
                        </div>
                        <div
                          className={`drop-down-content ${
                            openDropDown == "about"
                              ? "drop-down-content-open"
                              : " "
                          }`}
                        >
                          {aboutItems?.map((item, id) => {
                            return item.text === "Our partners" ? (
                              <div
                                onClick={() => {
                                  redirectToOurPartners();
                                  setOpenMenu(false);
                                  setDropDownOpen(false);
                                }}
                                key={id}
                                className={"justify-content-between d-flex"}
                              >
                                <a
                                  href={item.to}
                                  className="drop-down-content-item"
                                  onClick={() => {
                                    setDropDownOpen(false);
                                  }}
                                >
                                  <div className="icon">{item.icon}</div>
                                  <p
                                    className={
                                      window.location.hash.includes(
                                        "our-partners"
                                      )
                                        ? "activeAbout text"
                                        : "text"
                                    }
                                  >
                                    {item.text}
                                  </p>
                                </a>
                              </div>
                            ) : (
                              <NavLink
                                key={id}
                                to={item.to}
                                className="drop-down-content-item"
                                onClick={() => {
                                  setDropDownOpen(false);
                                  setOpenMenu(false);
                                }}
                              >
                                <div className="icon">{item.icon}</div>
                                <p className="text">{item.text}</p>
                              </NavLink>
                            );
                          })}
                        </div>
                      </OutsideClickHandler>
                    </div>
                  </div>
                  <div
                    className="col-12  col-lg-3 order-1 order-lg-2 align-items-center  pl-lg-0"
                    style={{
                      justifyContent:
                        window.innerWidth > 992
                          ? "space-evenly"
                          : "space-between",
                      flexDirection:
                        window.innerWidth > 992 ? "row" : "row-reverse",
                      paddingLeft: window.innerWidth > 992 ? "" : 24,
                      paddingRight: window.innerWidth > 992 ? "" : 24,
                      display:
                        openMenu === true && window.innerWidth < 992
                          ? "flex"
                          : window.innerWidth > 992
                          ? "flex"
                          : "none",
                    }}
                  >
                    {/* <div className=""> */}
                    <Button
                      rounded={true}
                      text="DYP Tools"
                      onClick={DYPTools}
                    ></Button>
                    <DarkModeToggleButton onToggleDarkMode={onToggleDarkMode} />
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
Header.propTypes = {
  onToggleDarkMode: PropType.func,
};

export default Header;
