import React from "react";
import { NavLink } from "react-router-dom";

export default class Buyback extends React.Component {
  render() {
    return (
      <>
        <div className="earn-hero-area App-container">
          <div className="container">
            <div className="earn-hero-wrapper">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 mt-5">
                  <div className="farming-content">
                    <div className="row">
                      <div className="col-lg-4">
                        <NavLink to="/ethbuyback">
                          <div className="fariming-item">
                            <div className="icon">
                              <img src="img/i1.svg" alt="Image not found" />
                              <div className="line"></div>
                            </div>
                            <h4>ETH Buyback</h4>
                            <p style={{ color: "var(--black)" }}>100% APR</p>
                          </div>
                        </NavLink>
                      </div>
                      <div className="col-lg-4">
                        <NavLink to="/bscbuyback">
                          <div className="fariming-item">
                            <div className="icon">
                              <img
                                src="img/farms/bnb-yield.svg"
                                alt="Image not found"
                              />
                            </div>
                            <div className="line"></div>
                            <h4>BSC Buyback</h4>
                            <p style={{ color: "var(--black)" }}>100% APR</p>
                          </div>
                        </NavLink>
                      </div>
                      <div className="col-lg-4">
                        <NavLink to="/avaxbuyback">
                          <div className="fariming-item">
                            <div className="icon">
                              <img
                                src="img/farms/avax-yield.png"
                                alt="Image not found"
                              />
                            </div>
                            <div className="line"></div>
                            <h4>AVAX Buyback</h4>
                            <p style={{ color: "var(--black)" }}>100% APR</p>
                          </div>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
