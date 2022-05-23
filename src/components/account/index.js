import React from 'react'
import TiersCard from '../tierscard'

export default class Account extends React.Component {
    render() {
        return (
            <div className="p3main-account" style={{paddingTop: 120}}>
                <div className="wallet">
                    <div className="container">
                        <div className="wallet-wrapper-account">
                            <div className="wallet-left-account">
                                <p><strong>Your wallet:</strong>{this.props.appState.coinbase}</p>
                            </div>
                            <div className="wallet-right-account">
                                <div className="p2process-reports">
                                    <p style={{cursor: 'pointer'}} onClick={this.props.handleConnection} id="dropdownMenuButton">{this.props.appState.isConnected ? "Wallet Connected" : "Connect Wallet"}</p>
                                    {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        {/* <div className="block-dev d-block d-md-none">
                            <div className="p2process-blocks">
                                <div className="p2process-block-heading">
                                    <h4>You don’t have a launchpad tier yet. Please upgrade your level</h4>
                                </div>
                                <div className="p2process-block-bar">
                                    <div className="p2progress-bar-wrapper">
                                        <div className="p2p2process-block-bar-block">
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="p2process-blocks-devide-blocks">
                                        <div className="p2process-blocks-devide-one">
                                            <div className="p2process-tik">
                                                <span><img src="img/tik.svg" alt="images not found"/></span>
                                                <div className="p2process-text">
                                                    <h4>Start</h4>
                                                    <p>Limit 0 DYP</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p2process-blocks-devide-one">
                                            <div className="p2process-tik">
                                                <span><img src="img/tik.svg" alt="images not found"/></span>
                                                <div className="p2process-text">
                                                    <h4>Bronze</h4>
                                                    <p>Limit 150 DYP</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p2process-blocks-devide-one">
                                            <div className="p2process-tik">
                                                <span id="blank"><img src="img/tik.svg" alt="images not found"/></span>
                                                <div className="p2process-text">
                                                    <h4>Silver</h4>
                                                    <p>Limit 200 DYP</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p2process-blocks-devide-one">
                                            <div className="p2process-tik">
                                                <span id="blank"><img src="img/tik.svg" alt="images not found"/></span>
                                                <div className="p2process-text">
                                                    <h4>Gold</h4>
                                                    <p>Limit 250 DYP</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p2process-blocks-devide-one">
                                            <div className="p2process-tik">
                                                <span id="blank"><img src="img/tik.svg" alt="images not found"/></span>
                                                <div className="p2process-text">
                                                    <h4>platinum</h4>
                                                    <p>Limit 300 DYP</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>					 */}
                        {/* <div className="balance">
                            <div className="balance-content text-center">
                                <h3>Available Balance: 0</h3>
                                <input type="text" name="text" placeholder=""/>
                                <div className="balance-link">
                                    <div className="prodet-right-link">
                                        <a href="#">Lock in</a>
                                        <a href="#">Unlock</a>
                                    </div>
                                </div>
                            </div>
                            <div className="balance-para">
                                <p>You have 0 DYP in your wallet aND 0 locked-in</p>
                            </div>
                        </div>		 */}
                        <div className="block-dev-account d-blocks">
                            <TiersCard tierInfo={this.props.appState.tierInfo} />
                            {/* <div className="p2process-blocks">
                                <div className="p2process-block-heading">
                                    <h4>You don’t have a launchpad tier yet. Please upgrade your level</h4>
                                </div>
                                <div className="p2process-block-bar">
                                    <div className="p2progress-bar-wrapper">
                                        <div className="p2p2process-block-bar-block">
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="p2process-blocks-devide-blocks">
                                        <div className="p2process-blocks-devide-one">
                                            <div className="p2process-tik">
                                                <span><img src="img/tik.svg" alt="images not found"/></span>
                                                <div className="p2process-text">
                                                    <h4>Start</h4>
                                                    <p>Limit 0 DYP</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p2process-blocks-devide-one">
                                            <div className="p2process-tik">
                                                <span><img src="img/tik.svg" alt="images not found"/></span>
                                                <div className="p2process-text">
                                                    <h4>Bronze</h4>
                                                    <p>Limit 150 DYP</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p2process-blocks-devide-one">
                                            <div className="p2process-tik">
                                                <span id="blank"><img src="img/tik.svg" alt="images not found"/></span>
                                                <div className="p2process-text">
                                                    <h4>Silver</h4>
                                                    <p>Limit 200 DYP</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p2process-blocks-devide-one">
                                            <div className="p2process-tik">
                                                <span id="blank"><img src="img/tik.svg" alt="images not found"/></span>
                                                <div className="p2process-text">
                                                    <h4>Gold</h4>
                                                    <p>Limit 250 DYP</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p2process-blocks-devide-one">
                                            <div className="p2process-tik">
                                                <span id="blank"><img src="img/tik.svg" alt="images not found"/></span>
                                                <div className="p2process-text">
                                                    <h4>platinum</h4>
                                                    <p>Limit 300 DYP</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        {/* <div className="p3dyp">
                            <div className="row">
                                <div className="col-lg-6 col-md-8">
                                    <div className="p3dyp-left">
                                        <div className="p3dyp-left-heading">
                                            <h3>DYP Balance</h3>
                                        </div>
                                        <div className="p3dyp-left-block">
                                            <div className="p3dyp-left-block-one">
                                                <p>Locked DYP</p>
                                                <p>Lock Period</p>
                                                <p>Last Deposit</p>
                                            </div>
                                            <div className="p3dyp-left-block-two text-right">
                                                <p>0%</p>
                                                <p>30 days</p>
                                                <p>0 day(s) ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6"></div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}