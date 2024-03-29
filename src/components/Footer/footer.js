import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import SocialIcons from "../../assets/General/SocialIcons";
const Footer = () => {
  const history = useHistory();

  const redirectToOurPartners = () => {
    history.push("/#our-partners");
  }

  const redirectToPress = () => {
    history.push("/latestupdates#press");
    localStorage.setItem('eventTab', null)
  }

  const navigateToNftEarnPage = (tab) => {
    history.push('/earn');
    localStorage.setItem('activeTab', tab)
  }

  return (
    <div className="container-fluid footer-container">
      <div className="row">
        <div className="col-md-2">
          <h3>About us</h3>
          <ul className="list-unstyled footer-group">
            <li className="footer-item">
              <NavLink to="/about">Our team</NavLink>
            </li>
            <li className="footer-item" onClick={redirectToOurPartners}>
              <a href="#our-partners">Our partners</a>
            </li>
            <li className="footer-item">
              <NavLink to="/roadmap">Roadmap</NavLink>
            </li>
            <li className="footer-item">
              <NavLink to="/audit">Security</NavLink>
            </li>
            <li className="footer-item">
              <NavLink to="/tokenomics">Tokenomics</NavLink>
            </li>
            <li className="footer-item">
              <NavLink to="/presskit">Media kit</NavLink>
            </li>
            <li className="footer-item">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h3>Products and Services</h3>
          <div className="row">
            <div className="col">
              <ul className="list-unstyled footer-group">
                <li className="footer-item" style={{cursor: 'pointer'}}>
                <a onClick={() => navigateToNftEarnPage('Buyback')}>Buyback</a>
                </li>
                <li className="footer-item" style={{cursor: 'pointer'}}>
                <a onClick={() => navigateToNftEarnPage('Vault')}>Vault</a>
                </li>
                <li className="footer-item" style={{cursor: 'pointer'}}>
                  <a onClick={() => navigateToNftEarnPage('Farming')}>Farm</a>
                </li>
                <li className="footer-item" style={{cursor: 'pointer'}}>
                <a onClick={() => navigateToNftEarnPage('Stake')}>Stake</a>
                </li>
                <li className="footer-item">
                  <NavLink to="/bridge">Bridge</NavLink>
                </li>

                <li className="footer-item highlited">
                  <NavLink to="/iDYP-token">iDYP Token</NavLink>
                </li>
              </ul>
            </div>

            <div className="col">
              <ul className="list-unstyled footer-group">
                <li className="footer-item">
                  <NavLink to="/caws">CAWS NFT</NavLink>
                </li>
                <li className="footer-item">
                  <NavLink to="/buyDYP">Buy DYP</NavLink>
                </li>
                <li className="footer-item">
                  <NavLink to="/iDYP-token">Buy iDYP</NavLink>
                </li>
                <li className="footer-item">
                  <a href="https://tools.dyp.finance/" target={"_blank"}>
                    DYP Tools
                  </a>
                </li>
                <li className="footer-item">
                  <NavLink to="/vote">Governance</NavLink>
                </li>
                <li className="footer-item">
                  <NavLink to="/launchpad">Launchpad</NavLink>
                </li>
                {/* <li className="footer-item">
                  <NavLink to="/earnv1">Finished</NavLink>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <h3>Announcements</h3>
          <ul className="list-unstyled footer-group">
            <li className="footer-item"  onClick={()=>{localStorage.setItem('eventTab', null)}}>
              <NavLink to="/latestupdates">Latest announcements</NavLink>
            </li>
            <li className="footer-item" onClick={()=>{localStorage.setItem('eventTab', 'Events')}}>
              <NavLink to="/latestupdates">Latest events</NavLink>
            </li>
            <li className="footer-item"  onClick={redirectToPress}>
            <a href="#press">Press</a>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <h3>Learn</h3>
          <ul className="list-unstyled footer-group">
            <li className="footer-item">
              <a href="https://www.youtube.com/playlist?list=PL8K0d30DJYVPmcjxnKg6SgP2B1rCtBMld" target={'_blank'}>How to buy DYP</a>
            </li>
            <li className="footer-item">
              <a href="https://www.youtube.com/playlist?list=PL8K0d30DJYVPAbzuedp9ii6OszPT1STy8" target={'_blank'} >How to Stake</a>
            </li>
            <li className="footer-item">
              <a href="https://www.youtube.com/playlist?list=PL8K0d30DJYVPKtu_gWiu7vm73k_TnZOs4" target='_blank'>How to Farm</a>
            </li>
            <li className="footer-item">
              <a href="https://www.youtube.com/playlist?list=PL8K0d30DJYVPJ7CX0lKPaXS_ELKCk7FnW" target={'_blank'}>How to use Buyback</a>
            </li>
            <li className="footer-item">
              <a href="https://www.youtube.com/watch?v=t8Yr3ZIxHJA&feature=youtu.be" target={'_blank'}>How to use the Vault</a>
            </li>
            <li className="footer-item">
              <a href="https://www.youtube.com/playlist?list=PL8K0d30DJYVNMvlnKe8ouT9Ma_UE_WBx2" target={"_blank"}>
                How to use DYP Tools
              </a>
            </li>
            <li className="footer-item">
              <a href="https://www.youtube.com/playlist?list=PL8K0d30DJYVPmVy8aBOZratFGWKIBbthl" target={'_blank'}>How to Bridge</a>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <h3 style={{marginLeft: 2}}>Community</h3>
          <ul className="list-inline social-list">
            <li className="footer-item list-inline-item">
              <a
                href="https://twitter.com/dypfinance"
                target={"_blank"}
                rel="noreferrer"
              >
                <SocialIcons name="twitter" />
              </a>
            </li>
            <li className="footer-item list-inline-item">
              <a
                href="https://t.me/dypfinance"
                target={"_blank"}
                rel="noreferrer"
              >
                <SocialIcons name="telegram" />
              </a>
            </li>
            <li className="footer-item list-inline-item">
              <a
                href="https://discord.com/invite/dypcaws"
                target={"_blank"}
                rel="noreferrer"
              >
                <SocialIcons name="discord" />
              </a>
            </li>
            <li className="footer-item list-inline-item">
              <a
                href="https://www.instagram.com/dyp.finance/"
                target={"_blank"}
                rel="noreferrer"
              >
                <SocialIcons name="instagram" />
              </a>
            </li>
            <li className="footer-item list-inline-item">
              <a
                href="https://dypfinance.medium.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                <SocialIcons name="medium" />
              </a>
            </li>
            <li className="footer-item list-inline-item">
              <a
                href="https://www.youtube.com/c/DeFiYieldProtocol/featured"
                target={"_blank"}
                rel="noreferrer"
              >
                <SocialIcons name="youtube" />
              </a>
            </li>
            <li className="footer-item list-inline-item">
              <a
                href="https://www.linkedin.com/company/defi-yield-protocol"
                target={"_blank"}
                rel="noreferrer"
              >
                <SocialIcons name="linkedin" />
              </a>
            </li>
            <li className="footer-item list-inline-item">
              <a
                href="https://github.com/dypfinance"
                target={"_blank"}
                rel="noreferrer"
              >
                <SocialIcons name="github" />
              </a>
            </li>
            <li className="footer-item list-inline-item">
              <a
                href="mailto:contact@dyp.finance"
                target={"_blank"}
                rel="noreferrer"
              >
                <SocialIcons name="email" />
              </a>
            </li>
            {/* <li className='footer-item list-inline-item'>
                             <a href="https://twitter.com/dypfinance"  target={"_blank"} rel="noreferrer"><SocialIcons name="teams" /></a>
                        </li> */}
          </ul>
        </div>
      </div>

      <div className="divider mb-0"></div>

      <div className="row subfooter">
        <div className="col-md-8">
          <ul className="list-unstyled list-inline" id='list-wrapper'>
            <li className="list-inline-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="list-inline-item">
              <a href="https://coinmarketcap.com/currencies/defi-yield-protocol/" target={'_blank'}>CoinMarketCap</a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.coingecko.com/en/coins/defi-yield-protocol" target={'_blank'}>CoinGecko</a>
            </li>
            <li className="list-inline-item">
              <NavLink to="/disclaimer">Disclaimer</NavLink>
            </li>
          </ul>
        </div>
        <div className="col-md-4 copyright">
          <p>
            Copyright © DeFi Yield Protocol {new Date().getFullYear()}. All
            rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
