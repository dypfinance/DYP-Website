import React from "react";
import getFormattedNumber from "../functions/get-formatted-number";
import rightArrow from "../../src/assets/svg/white-arrow.svg";
import graphic from "../../src/assets/images/pie_graph_noshadow.png";
import lineGraph from "../../src/assets/images/line-graph.svg";

export default class Tokenomics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            circSupply: "",
        };
    }

    componentDidMount() {
        this.getCirculatingSupply();
    }
    getCirculatingSupply = async () => {
        let circ = 0;
        circ = await window.getCirculatingSupply();

        let circSupply = circ;
        this.setState({ circSupply });
        return circSupply;
    };

    render() {
        return (
            <div className="p4token-bg App-container" style={{ paddingTop: 135 }}>
                <div className="p4token">
                    <div className="container">
                        <h1
                            className="col-lg-10 offset-lg-1 pl-0"
                            style={{ fontWeight: "bold" }}
                        >
                            Tokenomics
                        </h1>
                        <div className="row">
                            <div className="col-lg-12 offset-lg-1">
                                <div
                                    className="p4dyp-wrapper d-grid d-md-flex"
                                    style={{
                                        background: "none",
                                        boxShadow: "none",
                                        padding: 0,
                                    }}
                                >
                                    <div className="col-lg-8 ml-0 p-0 d-grid py-5">
                                        <div
                                            className="d-md-flex col-lg-12 p-0"
                                            style={{ gap: 20 }}
                                        >
                                            <div className="p4token-content-one p4dyp-wrapper col-lg-7 d-block align-items-center align-self-center m-0">
                                                <p className="pb-2">DYP Contract Address: </p>
                                                <p className="p4token-content-strong">
                          <span>
                            0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17
                          </span>
                                                </p>
                                            </div>
                                            <div className="supplyCirculated m-0 col-lg-5 py-3 d-grid mt-3 mt-md-0">
                                                <p style={{ fontSize: 14 }}>Circulating supply </p>
                                                <h3 className="p4token-content-strong">
                          <span>
                            {getFormattedNumber(this.state.circSupply, 2)} DYP
                          </span>
                                                </h3>
                                            </div>
                                        </div>
                                        <div
                                            className="p4token-content p4dyp-wrapper col-lg-12 px-3 py-3 mt-3 d-grid d-md-flex align-self-center"
                                            style={{ justifyContent: "space-between" }}
                                        >
                                            <div className="col-md-7 m-0 p-0 align-self-center">
                                                <img src={lineGraph} width={"100%"} alt="line-graph" />
                                            </div>
                                            <div className="col-md-4 m-0 p-0 justify-content-start align-self-center pt-4 pt-md-0">
                                                <div className="d-flex justify-content-start align-self-center"></div>
                                                <div
                                                    id="crypto-widget-CoinBlocks"
                                                    data-design="modern"
                                                    data-coins="defi-yield-protocol"
                                                ></div>

                                                <div className="d-flex justify-content-start"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 d-flex justify-content-center align-self-center">
                                        <img src={graphic} alt="graph" width={300} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p4dyp">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-11 offset-lg-1 justify-content-start">
                                <div className="supplyCirculated">
                                    30,000,000 DYP have been minted at genesis and will become
                                    accessible over the course of 2 years. &nbsp;
                                    <span>The 2-year allocation is as follows:</span>
                                </div>
                                <div className="p4dyp-content-one-left justify-content-start m-auto w-100">
                                    <h4>Community</h4>
                                </div>
                                <div
                                    className="d-grid d-md-flex justify-content-start m-auto"
                                    style={{ gap: 40 }}
                                >
                                    <div className="p4dyp-wrapper">
                                        <div className="p4dyp-content-one-left">
                                            <p>
                                                Distributed for pool rewards over the next 12 months
                                            </p>
                                            <h3>
                                                12,000,000.00 <span>DYP</span>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="p4dyp-wrapper">
                                        <div className="p4dyp-content-one-left">
                                            <p>Distributed to Binance Smart Chain</p>
                                            <h3>4,500,000.00 DYP</h3>
                                        </div>
                                    </div>
                                    <div className="p4dyp-wrapper">
                                        <div className="p4dyp-content-one-left">
                                            <p>Distributed to Avalanche Network</p>
                                            <h3>2,090,000.00 DYP</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-11 offset-lg-1 justify-content-start">
                                <div className="d-grid d-md-flex m-auto" style={{ gap: 40 }}>
                                    <div className="p4dyp-wrapper">
                                        <div className="p4dyp-content-one-left">
                                            <p>
                                                Distributed for providing liquidity to CEX and Marketing
                                            </p>
                                            <h3>1,214,111.00 DYP</h3>
                                        </div>
                                    </div>
                                    <div className="p4dyp-wrapper">
                                        <div className="p4dyp-content-one-left">
                                            <p>
                                                Reserved for other pools or chains - Locked on smart
                                                contract
                                            </p>
                                            <h3>2,584,689.00 DYP</h3>
                                        </div>
                                    </div>
                                    <div className="p4dyp-wrapper">
                                        <div className="p4dyp-content-one-left">
                                            <p>
                                                Locked for one year to Uniswap liquidity on token launch
                                            </p>
                                            <h3>200,000.00 DYP</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-10 offset-lg-1 justify-content-start">
                                <div className="p4dyp-content-one-left justify-content-start m-auto w-100">
                                    <h4>Users</h4>
                                </div>
                                <div
                                    className="d-grid d-md-flex justify-content-start m-auto"
                                    style={{ gap: 40 }}
                                >
                                    <div className="p4dyp-wrapper">
                                        <div className="p4dyp-content-one-left">
                                            <p>Public Sale</p>
                                            <h3>651,531.00 DYP</h3>
                                        </div>
                                    </div>
                                    <div
                                        className="p4dyp-wrapper d-grid d-md-flex align-content-center"
                                        style={{ gap: 20 }}
                                    >
                                        <div className="p4dyp-content-one-left">
                                            <p style={{ wordWrap: "break-word" }}>
                                                Burned and removed from the total supply
                                            </p>
                                            <h3>4,348,469.00 DYP</h3>
                                        </div>
                                        <div className="p4dyp-content-red-button">
                                            <a
                                                href="https://etherscan.io/tx/0x69d1faef4d41752c200dfe68b103c2823f94f225c502b455321bae0d94ebf8a5"
                                                target="_blank"
                                                without
                                                rel="noreferrer"
                                            >
                                                View transaction &nbsp;{" "}
                                                <img src={rightArrow} alt="arrow" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-10 offset-lg-1 justify-content-start">
                                <div className="p4dyp-content-one-left justify-content-start m-auto w-100">
                                    <h4>Team</h4>
                                </div>
                                <div
                                    className="d-grid d-md-flex justify-content-start m-auto"
                                    style={{ gap: 40 }}
                                >
                                    <div
                                        className="p4dyp-wrapper d-grid d-md-flex align-content-center"
                                        style={{ gap: 20 }}
                                    >
                                        <div className="p4dyp-content-one-left">
                                            <p>Vested for 24 months, released monthly</p>
                                            <h3 className="pr-4">2,411,200.00 DYP</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-grid d-md-flex justify-content-start m-auto">
                                    <div className="supplyCirculated justify-content-center d-flex">
                                        No additional tokens can be minted
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
