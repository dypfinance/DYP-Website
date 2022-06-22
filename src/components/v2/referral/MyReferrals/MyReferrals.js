import React, { useState } from "react";
import Search from "../assets/search.svg";
import Close from "../assets/close.svg";
import Filter from "../assets/filter.svg";
import ChevronArrowSvg from "../../../../assets/General/ChevronArrowSvg/ChevronArrowSvg";

const MyReferrals = () => {
  const handlePaginationClick = (e) => {
    e.currentTarget.style.border = "1px solid #9664FF";
  };

  const handlePaginationClick2 = (e) => {
    e.currentTarget.style.border = "1px solid #D4D6E5";
  };

  const myReferrals = [
    {
      user: "John.Smith",
      t1count: "1/22",
      t1Level: "Level 1",
      t2count: "1/22",
      t2Level: "Level 1 - Gold user",
      total_invested: "$1000.00",
      products: "Farm, Vault",
      total_earnings: "$150.00",
    },
    {
      user: "John.Smith",
      t1count: "1/22",
      t1Level: "Level 1",
      t2count: "1/22",
      t2Level: "Level 1 - Gold user",
      total_invested: "$1000.00",
      products: "Farm, Vault",
      total_earnings: "$150.00",
    },
    {
      user: "John.Smith",
      t1count: "1/22",
      t1Level: "Level 1",
      t2count: "1/22",
      t2Level: "Level 1 - Gold user",
      total_invested: "$1000.00",
      products: "Farm, Vault",
      total_earnings: "$150.00",
    },
    {
      user: "John.Smith",
      t1count: "1/22",
      t1Level: "Level 1",
      t2count: "1/22",
      t2Level: "Level 1 - Gold user",
      total_invested: "$1000.00",
      products: "Farm, Vault",
      total_earnings: "$150.00",
    },
    {
      user: "John.Smith",
      t1count: "1/22",
      t1Level: "Level 1",
      t2count: "1/22",
      t2Level: "Level 1 - Gold user",
      total_invested: "$1000.00",
      products: "Farm, Vault",
      total_earnings: "$150.00",
    },
    {
      user: "John.Smith",
      t1count: "1/22",
      t1Level: "Level 1",
      t2count: "1/22",
      t2Level: "Level 1 - Gold user",
      total_invested: "$1000.00",
      products: "Farm, Vault",
      total_earnings: "$150.00",
    },
    {
      user: "John.Smith",
      t1count: "1/22",
      t1Level: "Level 1",
      t2count: "1/22",
      t2Level: "Level 1 - Gold user",
      total_invested: "$1000.00",
      products: "Farm, Vault",
      total_earnings: "$150.00",
    },
    {
      user: "John.Smith",
      t1count: "1/22",
      t1Level: "Level 1",
      t2count: "1/22",
      t2Level: "Level 1 - Gold user",
      total_invested: "$1000.00",
      products: "Farm, Vault",
      total_earnings: "$150.00",
    },
    {
      user: "John.Smith",
      t1count: "1/22",
      t1Level: "Level 1",
      t2count: "1/22",
      t2Level: "Level 1 - Gold user",
      total_invested: "$1000.00",
      products: "Farm, Vault",
      total_earnings: "$150.00",
    },
  ];

  const friendReferrals = [
    {
      user: "John.Smith",
      investment: "$1000.00",
      lifetime_percentage: "5% Lifetime",
      total_invested: "$1000.00",
      products: "Farm, Vault",
      total_earnings: "$150.00",
    },
    {
      user: "John.Smith",
      investment: "$1000.00",
      lifetime_percentage: "5% Lifetime",
      total_invested: "$1000.00",
      products: "Farm, Vault",
      total_earnings: "$150.00",
    },
    {
      user: "John.Smith",
      investment: "$1000.00",
      lifetime_percentage: "5% Lifetime",
      total_invested: "$1000.00",
      products: "Farm, Vault",
      total_earnings: "$150.00",
    },
    {
      user: "John.Smith",
      investment: "$1000.00",
      lifetime_percentage: "5% Lifetime",
      total_invested: "$1000.00",
      products: "Farm, Vault",
      total_earnings: "$150.00",
    },
    {
      user: "John.Smith",
      investment: "$1000.00",
      lifetime_percentage: "5% Lifetime",
      total_invested: "$1000.00",
      products: "Farm, Vault",
      total_earnings: "$150.00",
    },
    {
      user: "John.Smith",
      investment: "$1000.00",
      lifetime_percentage: "5% Lifetime",
      total_invested: "$1000.00",
      products: "Farm, Vault",
      total_earnings: "$150.00",
    },
    {
      user: "John.Smith",
      investment: "$1000.00",
      lifetime_percentage: "5% Lifetime",
      total_invested: "$1000.00",
      products: "Farm, Vault",
      total_earnings: "$150.00",
    },
    {
      user: "John.Smith",
      investment: "$1000.00",
      lifetime_percentage: "5% Lifetime",
      total_invested: "$1000.00",
      products: "Farm, Vault",
      total_earnings: "$150.00",
    },
    {
      user: "John.Smith",
      investment: "$1000.00",
      lifetime_percentage: "5% Lifetime",
      total_invested: "$1000.00",
      products: "Farm, Vault",
      total_earnings: "$150.00",
    },
  ];

  const [refTable, setRefTable] = useState("myrefs");
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
                      paddingLeft: "5px",
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
          <div className="row justify-content-between m-0 mt-4">
            <div
              className="row justify-content-between m-0"
              style={{ gap: 20 }}
            >
              <h6
                onClick={() => {
                  setRefTable("myrefs");
                }}
                style={{ cursor: "pointer" }}
                className={refTable === 'myrefs' ? 'activeref' : 'passiveref'}
              >
                My referrals
              </h6>
              <h6
                onClick={() => {
                  setRefTable("friendrefs");
                }}
                style={{ cursor: "pointer" }}
                className={refTable === 'friendrefs' ? 'activeref' : 'passiveref'}
              >
                Friends referrals
              </h6>
            </div>
            <div className="d-flex align-items-center" style={{ gap: 10 }}>
              <span
                className="pagination"
                style={{ padding: "9px 13px" }}
                onClick={handlePaginationClick}
                onMouseOutCapture={handlePaginationClick2}
              >
                <ChevronArrowSvg
                  color={"#78797F"}
                  transform={"rotate(180deg)"}
                />
              </span>
              <span
                className="pagination"
                onClick={handlePaginationClick}
                onMouseOutCapture={handlePaginationClick2}
              >
                1
              </span>
              <span
                className="pagination"
                onClick={handlePaginationClick}
                onMouseOutCapture={handlePaginationClick2}
              >
                2
              </span>
              <span
                className="pagination"
                onClick={handlePaginationClick}
                onMouseOutCapture={handlePaginationClick2}
              >
                3
              </span>
              <span
                className="pagination"
                onClick={handlePaginationClick}
                onMouseOutCapture={handlePaginationClick2}
              >
                4
              </span>
              <span
                className="pagination"
                onClick={handlePaginationClick}
                onMouseOutCapture={handlePaginationClick2}
              >
                5
              </span>
              <span
                className="pagination"
                style={{ padding: "9px 13px" }}
                onClick={handlePaginationClick}
                onMouseOutCapture={handlePaginationClick2}
              >
                <ChevronArrowSvg color={"#78797F"} />
              </span>
            </div>
          </div>
          <div className="table_wrapper">
            <table className="info_table">
              {refTable === "myrefs" ? (
                <>
                  <th>User</th>
                  <th>T1 Count</th>
                  <th>T1 Level</th>
                  <th>T2 Count</th>
                  <th>T2 Level</th>
                  <th>Total Invested</th>
                  <th>Products</th>
                  <th>Your total earnings</th>
                </>
              ) : (
                <>
                  <th>User</th>
                  <th>Investment</th>
                  <th>Lifetime Percentage</th>
                  <th>Total Invested</th>
                  <th>Products</th>
                  <th>Your total earnings</th>
                </>
              )}

              {refTable === "myrefs" ? (
                <>
                  {myReferrals.length > 0 &&
                    myReferrals.map((item, index) => (
                      <tr key={index}>
                        <td>{item.user}</td>
                        <td>{item.t1count}</td>
                        <td>{item.t1Level}</td>
                        <td>{item.t2count}</td>
                        <td>{item.t2Level}</td>
                        <td>{item.total_invested}</td>
                        <td>{item.products}</td>
                        <td>{item.total_earnings}</td>
                      </tr>
                    ))}
                </>
              ) : (
                <>
                  {friendReferrals.length > 0 &&
                    friendReferrals.map((item, index) => (
                      <tr key={index}>
                        <td>{item.user}</td>
                        <td>{item.investment}</td>
                        <td>{item.lifetime_percentage}</td>
                        <td>{item.total_invested}</td>
                        <td>{item.products}</td>
                        <td>{item.total_earnings}</td>
                      </tr>
                    ))}
                </>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReferrals;
