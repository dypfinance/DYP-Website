import React from "react";
import Search from "../assets/search.svg";
import Close from "../assets/close.svg";
import Filter from "../assets/filter.svg";

const MyReferrals = () => {
  return (
    <div className="referral_wrapper">
      <div className="row m-0 justify-content-between">
        <div className="w-100">
          <h1 className="ref_title">My referrals</h1>
          <p className="ref_content">
            Here you can find a more detailed list of all your referrals, what
            they’re investing in and what your rewards are.
          </p>
          <div className="row m-0 justify-content-between">
            <div className="search_wrapper">
              <div className="row m-0 justify-content-between">
                <div className="d-flex">
                  <input
                    type="text"
                    className="search_input"
                    placeholder="Search"
                  />
                  <div className="search_icon_wrapper">
                    <img
                      src={Search}
                      alt=""
                      style={{ width: 20, height: 20, cursor: "pointer" }}
                    />
                  </div>
                  <div className="x_icon_wrapper">
                    <img
                      src={Close}
                      alt=""
                      style={{
                        width: 15,
                        height: 25,
                        cursor: "pointer",
                        background: "#FCFCFC",
                      }}
                    />
                  </div>
                </div>
                <button className="filter_btn">
                  <img src={Filter} alt="" />
                  Filter
                </button>
              </div>
              <p className="bottom_info row m-0">
                Active filters:
                <span className="filter_sorted">
                  Sort by: old to new
                  <img
                    src={Close}
                    alt=""
                    style={{
                      width: 15,
                      height: 25,
                      cursor: "pointer",
                      paddingLeft: '5px'
                    }}
                  />
                </span>
              </p>
            </div>
            <div className="ref_banner">
              <div>
                <h6 className="banner_title">Refferal banner</h6>
                <div
                  className="row m-0 justify-content-between"
                  style={{ gap: 20 }}
                >
                  <p className="banner_content">
                    Customize the way to send referrals by choosing one of our
                    banners.
                  </p>
                  <button className="banner_btn">Levels and rewards</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReferrals;
