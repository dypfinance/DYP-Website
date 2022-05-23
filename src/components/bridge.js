import React from "react";
import { NavLink } from "react-router-dom";
import Bscbridge from "./bscbridge";
import Avaxbridge from "./avaxbridge";

export default class Bridge extends React.Component {
  render() {
    return (
      <>
        <div
          className="earn-hero-area App-container gov-background"
          style={{ paddingTop: 75 }}
        >
          <div className="titleWrapper m-0">
            <div>
              <h1 style={{ fontWeight: 900 }}>Bridge</h1>
              <p>You can swap DYP/iDYP in different chains</p>
            </div>
          </div>
          <div className="container">
            <div
              class="big-circle-decoration"
              style={{
                width: 508,
                height: 508,
                left: "-205px",
                top: "222px",
              }}
            ></div>
            <div
              class="ball-decoration"
              style={{ width: 197, height: 197, top: "350px", left: "-8px" }}
            ></div>
            <div
              class="big-circle-decoration"
              style={{
                width: 508,
                height: 508,
                right: "0px",
                top: "252px",
              }}
            ></div>
            <div
              class="ball-decoration"
              style={{
                width: 197,
                height: 197,
                top: "650px",
                right: "190px",
              }}
            ></div>
            <div
              class="ball-decoration"
              style={{
                width: 197,
                height: 197,
                top: "950px",
                left: "200px",
              }}
            ></div>
            <div className="earn-hero-wrapper">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-12 offset-lg-3 ml-0">
                  <div className="farming-content">
                    {/*<div className="row">*/}
                    {/*    <div className="col-lg-4 col-md-4 col-6">*/}
                    {/*        <a href="https://www.blockchainconsilium.com/" target='_blank'>*/}
                    {/*            <div className="fariming-item">*/}
                    {/*                <div className="icon">*/}
                    {/*                    <img src="img/w2.svg" alt="Image not found" />*/}
                    {/*                    <div className="line"></div>*/}
                    {/*                </div>*/}
                    {/*                <p>Blockchain Consilium</p>*/}
                    {/*            </div>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-4 col-md-4 col-6">*/}
                    {/*        <a href='https://www.certik.org/' target='_blank'>*/}
                    {/*            <div className="fariming-item">*/}
                    {/*                <div className="icon">*/}
                    {/*                    <img src="img/w3.svg" alt="Image not found" />*/}
                    {/*                </div>*/}
                    {/*                <div className="line"></div>*/}
                    {/*                <p>Certik Foundation</p>*/}
                    {/*            </div>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-4 col-md-4 col-6">*/}
                    {/*        <a href="https://peckshield.com/en" target='_blank'>*/}
                    {/*            <div className="fariming-item">*/}
                    {/*                <div className="icon">*/}
                    {/*                    <img src="img/w1.svg" alt="Image not found" />*/}
                    {/*                </div>*/}
                    {/*                <div className="line"></div>*/}
                    {/*                <p>Peckshield</p>*/}
                    {/*            </div>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="row justify-content-center">
                      <div>
                        <Bscbridge />
                      </div>
                      <div>
                        <Avaxbridge />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*<div className="row">*/}
              {/*   <div className="col-lg-8  offset-lg-2">*/}
              {/*      <div className="earn-hero-content p4token-wrapper">*/}
              {/*        <div className='text-left'>*/}
              {/*          <p className='h3'><b>DYP Bridge</b></p>*/}
              {/*          <p>The Bridge will help you swap DYP tokens between Ethereum Network and Binance Smart Chain Network.</p>*/}
              {/*          <p>Visit <a target='_blank' href='https://bridge.dyp.finance'>bridge.dyp.finance</a> to start using the DeFi Yield Protocol Bridge</p>*/}
              {/*          <div className="earn-hero-btns-bridge m-0">*/}
              {/*            <a target='_blank' className='m-0' href="https://dypfinance.medium.com/defi-yield-protocol-bridge-tutorial-9dad5226537f">DYP Bridge Tutorial</a>*/}
              {/*            /!* <a href="#">Read More about DYP</a> *!/*/}
              {/*          </div>*/}
              {/*        </div>*/}
              {/*      </div>*/}
              {/*   </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </>
    );
  }
}
