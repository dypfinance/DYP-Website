import React from "react";
import getFormattedNumber from "../../functions/get-formatted-number";
import coin from '../../assets/images/dypCoin.svg';
import uniswapCard from '../../assets/images/uniswapCard.svg';
import pangolinCard from '../../assets/images/pangolinCard.svg';
import pancakeCard from '../../assets/images/pancakeCard.svg';

const deviceWidth = window.innerWidth;
export default class BuyiDYP extends React.Component {
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
        circ = await window.getCirculatingSupplyiDYP();

        let circSupply = circ;
        this.setState({ circSupply });
        return circSupply;
    };

    render() {
        return (
            <>
                <div class="buy-dyp earn-hero-area App-container idyp-bg">
                    <div class="container-fluid idyp mt-4">
                        {/* =============== GET TOKENS ================= */}
                        <div className="col-lg-10 offset-lg-1 text-start d-md-flex justify-content-between p-0">
                            <div className="col-lg-5 p-0">
                                {/* <h2 className='mt-4' style={{ color: 'var(--box-text)' }}>
                                    HOW CAN I GET <br />
                                    <span>
                                        IDYP TOKENS?
                                    </span>
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere mi sed felis tempus, non consectetur urna venenatis.<br /><br />
                                    Aliquam consectetur laoreet ante eget consectetur. Integer faucibus risus nec egestas ultricies. Etiam turpis nisi, dignissim et risus non, convallis eleifend justo.
                                </p> */}
                                <div className="supplyCirculated m-0 col-9 col-lg-8 py-3 d-grid mt-3 mt-md-0">
                                    <p style={{ fontSize: 14 }}>
                                        Circulating supply{" "}
                                    </p>
                                    <h3 className="p4token-content-strong text-left">
                                        <span>
                                            {getFormattedNumber(this.state.circSupply, 2)} DYP
                                        </span>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-6 align-self-center p-0">
                                <img src={coin} width={`${deviceWidth < 787 ? "100%" : '70%'}`} alt="coin" />
                            </div>
                        </div>
                        <div className="d-none d-md-flex" style={{ height: 100 }}>&nbsp;</div>
                        {/* ============== TOKEN PLATFORMS =============== */}
                        <div className="col-md-11 offset-lg-1 text-start d-grid d-md-flex h-100 p-0">
                            <div className="platforms col-md-3 p-0">
                            <h2 className='mt-4' style={{ color: 'var(--box-text)' }}>
                                    HOW CAN I GET <br />
                                    <span>
                                        IDYP TOKENS?
                                    </span>
                                </h2>
                            </div>
                            <div className="col-md-3 uniswap-card-bg p-0">
                                <div className="d-none d-md-flex" style={{ height: 50 }}></div>
                                <a href="https://app.uniswap.org/#/swap?use=V2&inputCurrency=0xbd100d061e120b2c67a24453cf6368e63f1be056"
                                    target="_blank" without rel="noreferrer">
                                    <img src={uniswapCard} alt="uniswap-card" />
                                </a>
                            </div>
                            <div className="col-md-3 pangolin-card-bg p-0">
                                <div className="d-none d-md-flex" style={{ height: 100 }}></div>
                                <a href="https://app.pangolin.exchange/#/swap?&outputCurrency=0xbd100d061e120b2c67a24453cf6368e63f1be056"
                                    target="_blank" without rel="noreferrer">
                                    <img src={pangolinCard} alt="pangolin-card" />
                                </a>

                            </div>
                            <div className="col-md-3 pancake-card-bg p-0">
                                <div className="d-none d-md-flex" style={{ height: 150 }}></div>
                                <a href="https://pancakeswap.finance/swap?inputCurrencty=BNB&outputCurrency=0xbd100d061e120b2c67a24453cf6368e63f1be056"
                                    target="_blank" without rel="noreferrer">
                                    <img src={pancakeCard} alt="pancake-card" />
                                </a>
                            </div>
                        </div>
                        <div className="d-none d-md-flex" style={{ height: 150 }}></div>
                        {/* ============== ALLOCATIONS & AIRDROP =============== */}
                        <div className="col-md-11 offset-lg-1 text-start d-grid d-md-flex h-100 p-0">
                            <div className="col-md-6 d-grid d-md-flex p-0" style={{ gap: 60 }}>
                                <div className="platforms col-md-5 p-0">
                                    <h1>
                                        Allocation
                                    </h1>
                                    {/* <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p> */}
                                    <div className="d-none d-md-flex" style={{ height: 50 }}></div>
                                    <div className="icon">
                                        <a href="https://app-bsc.dyp.finance/vesting" target="_blank" without rel="noreferrer">
                                            <img
                                                src="img/bscBanner.svg"
                                                alt="binance"
                                                width="100%"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="icon col-md-5 p-0 mt-3 mt-md-0">
                                    <div className="d-none d-md-flex" style={{ height: 150 }}></div>
                                    <a href="https://app-avax.dyp.finance/vesting" target="_blank" without rel="noreferrer">
                                        <img
                                            src="img/avaxBanner.svg"
                                            alt="avax"
                                            width="100%"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex flex-col-reverse d-md-flex p-0"
                                style={{ gap: deviceWidth < 767 ? '1rem' : 60 }}>
                                <div className="col-md-5 p-0 icon order-md-1">
                                    <div className="d-none d-md-flex" style={{ height: 450 }}></div>
                                    <a href="https://app-bsc.dyp.finance/airdrop" target="_blank" without rel="noreferrer">
                                        <img
                                            src="img/bscBanner.svg"
                                            alt="binance"
                                            width="100%"
                                        />
                                    </a>
                                </div>
                                <div className="platforms col-md-5 p-0 order-1">
                                    <div className="d-none d-md-flex" style={{ height: 150 }}></div>
                                    <h1>
                                        Airdrop
                                    </h1>
                                    {/* <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p> */}
                                    <div className="d-none d-md-flex" style={{ height: 50 }}></div>
                                    <div className="icon">
                                        <a href="https://app-avax.dyp.finance/vesting" target="_blank" without rel="noreferrer">
                                            <img
                                                src="img/avaxBanner.svg"
                                                alt="avax"
                                                width="100%"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-none d-md-flex" style={{ height: 100 }}></div>
                    </div>
                </div>
            </>
        );
    }
}
