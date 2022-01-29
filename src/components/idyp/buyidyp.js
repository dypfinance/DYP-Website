import React from "react";

export default class BuyiDYP extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div class="buy-dyp earn-hero-area App-container">
                    <div class="container">
                        <h2 className='mt-4' style={{color: 'var(--box-text)'}}>How can I get iDYP tokens?</h2>
                        <div className='offset-lg-2 col-lg-11 mt-5'>
                            <div className="row">
                                <div className="col-lg-3 col-sm-6 col-md-3">
                                    <div className="buy-item">
                                        <a target='_blank' href="https://app.uniswap.org/#/swap?use=V2&inputCurrency=0xbd100d061e120b2c67a24453cf6368e63f1be056">
                                            <img class="blogo" src="img/coins/uniswap.png" />
                                            <img class="logo" src="img/coins/uniswap.png" /></a>
                                        <div className="item-btns">
                                            <div class="line"></div>
                                            <h5 style={{color: 'var(--box-text)'}}>Uniswap V2</h5>
                                            <a target='_blank' href="https://app.uniswap.org/#/swap?use=V2&inputCurrency=0xbd100d061e120b2c67a24453cf6368e63f1be056">Buy</a>
                                            {/*<a onClick={this.handleShowModal("uniswap")} href="javascript:void(0)">Tutorial</a>*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-md-3">
                                    <div className="buy-item">
                                        <a target='_blank' href="https://app.pangolin.exchange/#/swap?&outputCurrency=0xbd100d061e120b2c67a24453cf6368e63f1be056">
                                            <img class="blogo" src="img/coins/pangolin.png" />
                                            <img class="logo" src="img/coins/pangolin.png" /></a>
                                        <div className="item-btns">
                                            <div class="line"></div>
                                            <h5 style={{color: 'var(--box-text)'}}>Pangolin</h5>
                                            <a target='_blank' href="https://app.pangolin.exchange/#/swap?&outputCurrency=0xbd100d061e120b2c67a24453cf6368e63f1be056">Buy</a>
                                            {/*<a onClick={this.handleShowModal("pangolin")} href="javascript:void(0)">Tutorial</a>*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-md-3">
                                    <div className="buy-item">
                                        <a target='_blank' href="https://pancakeswap.finance/swap?inputCurrencty=BNB&outputCurrency=0xbd100d061e120b2c67a24453cf6368e63f1be056">
                                            <img class="blogo" src="img/coins/pancake.png" />
                                            <img class="logo" src="img/coins/pancake.png" /></a>
                                        <div className="item-btns">
                                            <div class="line"></div>
                                            <h5 style={{color: 'var(--box-text)'}}>PancakeSwap V2</h5>
                                            <a target='_blank' href="https://pancakeswap.finance/swap?inputCurrencty=BNB&outputCurrency=0xbd100d061e120b2c67a24453cf6368e63f1be056">Buy</a>
                                            {/*<a onClick={this.handleShowModal("pancake")} href="javascript:void(0)">Tutorial</a>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<div className='offset-lg-3 mb-5'>*/}
                        {/*    <div className='row'>*/}
                        {/*        <div className="col-lg-4 col-sm-6 col-md-3">*/}
                        {/*            <div className="buy-item">*/}
                        {/*                <a target='_blank' href="https://poloniex.com/exchange/USDT_DYP">*/}
                        {/*                    <img className="blogo" src="img/coins/poloniex.png"/>*/}
                        {/*                    <img className="logo" src="img/coins/poloniex.png"/></a>*/}
                        {/*                <div className="item-btns">*/}
                        {/*                    <div className="line"></div>*/}
                        {/*                    <h5 style={{color: 'var(--box-text)'}}>Poloniex</h5>*/}
                        {/*                    <a target='_blank' href="https://poloniex.com/exchange/USDT_DYP">Buy</a>*/}
                        {/*                    /!*<a onClick={this.handleShowModal("mycoint")} href="javascript:void(0)">Tutorial</a>*!/*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="col-lg-4 col-sm-6 col-md-3">*/}
                        {/*            <div className="buy-item">*/}
                        {/*                <a target='_blank' href="https://www.mycointainer.com/dashboard/exchange/dyp/">*/}
                        {/*                    <img className="blogo" src="img/coins/mycointainer.png"/>*/}
                        {/*                    <img className="logo" src="img/coins/mycointainer.png"/></a>*/}
                        {/*                <div className="item-btns">*/}
                        {/*                    <div className="line"></div>*/}
                        {/*                    <h5 style={{color: 'var(--box-text)'}}>MyCointainer</h5>*/}
                        {/*                    <a target='_blank' href="https://www.mycointainer.com/dashboard/exchange/dyp/">Buy</a>*/}
                        {/*                    <a onClick={this.handleShowModal("mycoint")} href="javascript:void(0)">Tutorial</a>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}


                    </div>
                </div>
            </>
        );
    }
}
