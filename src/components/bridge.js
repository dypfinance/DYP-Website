import React from 'react'
import {NavLink} from "react-router-dom";

export default class Bridge extends React.Component {
    render() {
        return (
            <>
                  <div className="earn-hero-area App-container">
        <div className="container">
           <div className="earn-hero-wrapper">
               <div className="row">
                   <div className='col-lg-9 offset-lg-3 mt-5'>
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
                           <div className="row">
                               <div className="col-lg-4">
                                   <NavLink to='/bscbridge'>
                                       <div className="fariming-item">
                                           <div className="icon">
                                               <img src="img/farms/bnb-yield.svg" alt="Image not found" />
                                           </div>
                                           <div className="line"></div>
                                           <h4>BSC bridge</h4>
                                       </div>
                                   </NavLink>
                               </div>
                               <div className="col-lg-4">
                                   <NavLink to='/avaxbridge'>
                                       <div className="fariming-item">
                                           <div className="icon">
                                               <img src="img/farms/avax-yield.png" alt="Image not found" />
                                           </div>
                                           <div className="line"></div>
                                           <h4>AVAX bridge</h4>
                                       </div>
                                   </NavLink>
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
        )
    }
}