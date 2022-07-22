import React from 'react'

const WalletModal = ({ handleClose, show, handleConnection }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div
        className={showHideClassName}
        onClick={() => {
          handleClose();
        }}
      >
        <section className="modal-main">
          <div className="sc-frDJqD ljXtWJ" data-reach-dialog-content="">
            <div className="sc-cmTdod kjSopy">
              <div className="sc-lhVmIH xuOEC">
                <div className="sc-feJyhm iTaYul">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="sc-iELTvK cvCpgS"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
                <div className="sc-jwKygS bFQpTL">
                  <div className="sc-jtRfpW iudQQC">Connect to a wallet</div>
                </div>
                <div className="sc-btzYZH cRGnnt">
                  <div className="sc-elJkPf kIebhI">
                    <button
                      onClick={handleConnection}
                      id="connect-METAMASK"
                      className="sc-kvZOFW sc-hqyNC sc-dNLxif fJOgmn"
                    >
                      <div className="sc-jbKcbu GeCum">
                        <div color="#E8831D" className="sc-bbmXgH eDNUCi">
                          MetaMask
                        </div>
                      </div>
                      <div className="sc-jnlKLf gJPfsC">
                        <img src="/img/wallets/metamask.svg" alt="Icon" />
                      </div>
                    </button>
                    <button
                      onClick={handleConnection}
                      id="connect-COIN98"
                      className="sc-kvZOFW sc-hqyNC sc-dNLxif fJOgmn"
                    >
                      <div className="sc-jbKcbu GeCum">
                        <div color="#E8831D" className="sc-bbmXgH eDNUCi">
                          Coin98
                        </div>
                      </div>
                      <div className="sc-jnlKLf gJPfsC">
                        <img src="/img/wallets/coin98.svg" alt="Icon" />
                      </div>
                    </button>
                    <button
                      onClick={handleConnection}
                      id="connect-COIN98"
                      className="sc-kvZOFW sc-hqyNC sc-dNLxif fJOgmn"
                    >
                      <div className="sc-jbKcbu GeCum">
                        <div color="#E8831D" className="sc-bbmXgH eDNUCi">
                          Trust Wallet
                        </div>
                      </div>
                      <div className="sc-jnlKLf gJPfsC">
                        <img src="/img/wallets/trustwallet.svg" alt="Icon" />
                      </div>
                    </button>
                    <button
                      onClick={handleConnection}
                      id="connect-COIN98"
                      className="sc-kvZOFW sc-hqyNC sc-dNLxif fJOgmn"
                    >
                      <div className="sc-jbKcbu GeCum">
                        <div color="#E8831D" className="sc-bbmXgH eDNUCi">
                          SafePal
                        </div>
                      </div>
                      <div className="sc-jnlKLf gJPfsC">
                        <img src="/img/wallets/safepal.svg" alt="Icon" />
                      </div>
                    </button>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  export default WalletModal