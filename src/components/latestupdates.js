import React, { useState, useEffect } from "react";
import BannerCarousel from "./bannerCarousel";
import DYP_News from "./DYP_news";
import CircleButton from "../assets/General/CircleButton";
import ChevronArrowSvg from "../assets/General/ChevronArrowSvg/ChevronArrowSvg";
import Newspaper from "../assets/images/newspaper.svg";
import Newspaper_Passive from "../assets/images/newspaper-passive.svg";
import Events from "../assets/images/events.svg";
import Events_Active from "../assets/images/events-active.svg";
import EventCard from "./elements/EventCard";
const LatestUpdates = () => {
  const newsArray = [
    {
      date: "27",
      month: "May",
      title: "Check out our new website!",
      link: "https://twitter.com/dypfinance/status/1530181037766189059",
      year: '2022'
    },
    {
      date: "10",
      month: "May",
      title: "New smart contract for DYP staking!",
      link: "https://twitter.com/dypfinance/status/1524075021379022848",
      year: '2022'
    },
    {
      date: "7",
      month: "May",
      title: "CAWS staking pool is open for business!",
      link: "https://twitter.com/dypfinance/status/1522968871812141057",
      year: '2022'
    },
    {
      date: "14",
      month: "Apr",
      title: "Gate.io support for DYP on BNB Chain and C-CHAIN!",
      link: "https://twitter.com/dypfinance/status/1514627082025852936",
      year: '2022'
    },
    {
      date: "4",
      month: "Mar",
      title: "March - DYP Vault is ready for action!",
      link: "https://twitter.com/dypfinance/status/1499761913001136136",
      year: '2022'
    },
    {
      date: "22",
      month: "Feb",
      title: "V.R. is the next step for #DYP.",
      link: "https://twitter.com/dypfinance/status/1496072467814756353",
      year: '2022'
    },
    {
      date: "11",
      month: "Jan",
      title: "Cats and Watches Society Whitelist!",
      link: "https://twitter.com/dypfinance/status/1480623073208549380",
      year: '2022'

    },
    {
      date: "11",
      month: "Jan",
      title: "It's raining $KNC on KyberSwap for $DYP!",
      link: "https://twitter.com/KyberNetwork/status/1480850588980051969",
      year: '2022'

    },
    {
      date: "15",
      month: "Dec",
      title: "Staking, Farming, and Buyback V2 ETH",
      link: "https://twitter.com/dypfinance/status/1471162808041713665",
      year: '2021'

    },
    {
      date: "08",
      month: "Dec",
      title: "Staking, Farming, and Buyback V2 AVAX",
      link: "https://twitter.com/dypfinance/status/1468652091799482378",
      year: '2021'

    },
    {
      date: "20",
      month: "Nov",
      title: "Staking, Farming, and Buyback V2 BSC",
      link: "https://twitter.com/dypfinance/status/1462032099708391428",
      year: '2021'

    },
    {
      date: "18",
      month: "Oct",
      title: "#iDYP Community Allocation is Live",
      link: "https://twitter.com/dypfinance/status/1450102523361206276",
      year: '2021'

    },
    {
      date: "14",
      month: "Oct",
      title: "The New Contracts and #iDYP token",
      link: "https://twitter.com/dypfinance/status/1448664965598957577",
      year: '2021'

    },
    {
      date: "5",
      month: "Oct",
      title: "It's raining $DYP + $KNC!",
      link: "https://twitter.com/KyberNetwork/status/1445210348944912388",
      year: '2021'

    },
    {
      date: "21",
      month: "Sep",
      title: "DeFi Yield Protocol $DYP is coming to @0xPolygon!",
      link: "https://twitter.com/dypfinance/status/1440337326077472771",
      year: '2021'

    },
    {
      date: "10",
      month: "Sep",
      title: "DeFi Yield Protocol (DYP) is on DeFi Pulse!",
      link: "https://twitter.com/defipulse/status/1436388557896159235",
      year: '2021'

    },
    {
      date: "1",
      month: "Sep",
      title: "#DYPTools is Live on #Avalanche!",
      link: "https://twitter.com/dypfinance/status/1433086017045680128",
      year: '2021'

    },
    {
      date: "11",
      month: "Aug",
      title: "DeFi Yield Protocol will be integrated with Coin98 Wallet!",
      link: "https://twitter.com/dypfinance/status/1425400583012425730?s=20",
      year: '2021'

    },
    {
      date: "04",
      month: "Aug",
      title: "The Buyback Program with #DYP Staking integrated is LIVE!",
      link: "https://twitter.com/dypfinance/status/1422907203338518533?s=20",
      year: '2021'

    },
    {
      date: "22",
      month: "Jul",
      title: "DeFi Yield Protocol strategic integration with Aircoins.io",
      link: "https://dypfinance.medium.com/defi-yield-protocol-strategic-integration-with-aircoins-io-augmented-reality-app-666209ce08e",
      year: '2021'

    },
    {
      date: "14",
      month: "Jul",
      title: "Pangolin partners with DeFi Yield Protocol (DYP)",
      link: "https://dypfinance.medium.com/pangolin-partners-with-defi-yield-protocol-dyp-a-unique-cross-chain-platform-b52b7e93e0a9",
      year: '2021'

    },
    {
      date: "08",
      month: "Jul",
      title: "Yield Farming Tutorial on Avalanche",
      link: "https://dypfinance.medium.com/defi-yield-protocol-community-update-yield-farming-tutorial-on-avalanche-9c0053593cd8",
      year: '2021'

    },
    {
      date: "08",
      month: "Jul",
      title: " DeFi Yield Protocol Avalanche Bridge Tutorial",
      link: "https://dypfinance.medium.com/defi-yield-protocol-avalanche-bridge-tutorial-9404d827a4a",
      year: '2021'

    },
    {
      date: "05",
      month: "Jul",
      title: "Getting Started with the DeFi Yield Protocol NFT Marketplace",
      link: "https://dypfinance.medium.com/getting-started-with-the-defi-yield-protocol-nft-marketplace-a518356f47f",
      year: ''

    },
    {
      date: "22",
      month: "Jun",
      title: "DeFi Yield Protocol launches NFT dApp V1",
      link: "https://dypfinance.medium.com/defi-yield-protocol-launches-nft-dapp-v1-a796b19aaabb",
      year: '2021'

    },
    {
      date: "22",
      month: "Jun",
      title: "DeFi Yield Protocol Integrates Chainlink",
      link: "https://dypfinance.medium.com/defi-yield-protocol-integrates-chainlink-price-feeds-to-secure-yield-farming-data-on-ethereum-and-3fe85062a0e5",
      year: '2021'

    },
    {
      date: "23",
      month: "Jun",
      title: " DeFi Yield Protocol (DYP) is Expanding to Avalanche",
      link: "https://dypfinance.medium.com/getting-started-with-the-defi-yield-protocol-nft-marketplace-a518356f47f",
      year: '2021'

    },
  ];

  const eventsArray = [
    {
      date: "19",
      month: "May",
      title: "Gate.io $DYP Lock-up ＆ Earn #3",
      link: "https://twitter.com/gate_io/status/1527204993052426241",
      year: '2022'
    },
    {
      date: "27",
      month: "Apr",
      title: "Gate.io $DYP Lock-up ＆ Earn #2",
      link: "https://twitter.com/gate_io/status/1519243718141874177",
      year: '2022'
    },
    {
      date: "18",
      month: "Apr",
      title: "10 #ETH Giveaway",
      link: "https://twitter.com/dypfinance/status/1516108338685165569",
      year: '2022'
    },
    {
      date: "15",
      month: "Apr",
      title: "http://Gate.io $DYP Lock-up ＆ Earn #1",
      link: "https://twitter.com/gate_io/status/1514868696069595139",
      year: '2022'
    },
    {
      date: "19",
      month: "Sep",
      title: "KyberDMM Joint Liquidity Mining on Avalanche.",
      link: "https://twitter.com/dypfinance/status/1439562983663968262?s=20",
      year: '2021'
    },
    {
      date: "16",
      month: "Sep",
      title: "@dypfinance is extending its liquidity mining campaign.",
      link: "https://twitter.com/hummingbot_io/status/1438559792927178755?s=20",
      year: '2021'
    },
    {
      date: "20",
      month: "Aug",
      title: "6 new strategies are available for auto-compounding on Snowball.",
      link: "https://twitter.com/snowballdefi/status/1428813432183087111?s=20",
      year: '2021'
    },
    {
      date: "20",
      month: "Aug",
      title: "New $PNG reward pools are ready for pre-deposits!",
      link: "https://twitter.com/pangolindex/status/1428563006481260547?s=20",
      year: '2021'
    },
    {
      date: "18",
      month: "Aug",
      title: "Listing Celebration to @coin98_wallet: Win $2500 in $DYP",
      link: "https://twitter.com/dypfinance/status/1427912209762603008?s=20",
      year: '2021'
    },
    {
      date: "05",
      month: "Aug",
      title: "Aircoins is excited to announce newest partner with DYP",
      link: "https://twitter.com/AIRCOINS_App/status/1423352145697546241",
      year: '2021'
    },
    {
      date: "03",
      month: "Aug",
      title: "Pangolin hosting a giveaway with Defi Yield Protocol",
      link: "https://twitter.com/pangolindex/status/1422604691251163142",
      year: '2021'
    },
    {
      date: "12",
      month: "Jul",
      title: "DeFi Yield Protocol NFT Creative Competition is LIVE!",
      link: "https://twitter.com/pangolindex/status/1422604691251163142",
      year: '2021'
    },
  ];

  const eventsTab = localStorage.getItem("eventTab");
  console.log(eventsTab);
  useEffect(() => {
    if (eventsTab === "Events") {
      handleEventButtonClick();
      // localStorage.setItem('eventTab', null)
    } else {
      handleAnnButtonClick();
    }
  }, [eventsTab]);
  const [active, setActive] = useState(true);
  const [eventActive, setEventActive] = useState(false);

  const handleAnnButtonClick = () => {
    setActive(true);
    setEventActive(false);
  };
  const handleEventButtonClick = () => {
    setActive(false);
    setEventActive(true);
  };

  const devicewidth = window.innerWidth;
  return (
    <>
      <div
        className="earn-hero-area App-container latestupdates"
        style={{ paddingTop: 127, paddingBottom: 80 }}
      >
        <div
          class="big-circle-decoration"
          style={{
            width: 598,
            height: 598,
            left: "105px",
            top: "162px",
            display: devicewidth < 700 ? 'none' : ''
          }}
        ></div>
        <div
          class="ball-decoration"
          style={{ width: 167, height: 167, top: "600px", left: "-8px" }}
        ></div>
        <div
          class="big-circle-decoration"
          style={{
            width: 743,
            height: 743,
            right: "0px",
            top: "252px",
            display: devicewidth < 700 ? 'none' : ''
          }}
        ></div>
        <div
          class="ball-decoration"
          style={{
            width: 144,
            height: 144,
            top: "450px",
            right: "0px",
          }}
        ></div>
        <div className="container" style={{ paddingBottom: 80 }}>
          <div>
            <h3
              className="mt-4 mt-lg-0 aboutus-subtitle"
              style={{ textAlign: "left" }}
            >
              MAIN
            </h3>
            <h1 className="aboutus-title" style={{ textAlign: "left" }}>
              NEWS
            </h1>
          </div>
          <BannerCarousel />

          <div className="earn-hero-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <div className="earn-hero-content p4token-wrapper">
                  <div
                    className="row justify-content-between"
                    style={{
                      alignItems: "center",
                      borderBottom: "1px solid rgba(153, 153, 153, 0.3)",
                      padding: "0 30px 30px 0",
                      paddingLeft: devicewidth < 680 ? "30px" : "0",
                    }}
                  >
                    <div>
                      <h3
                        className="mt-4 mt-lg-0 aboutus-subtitle"
                        style={{ textAlign: "left" }}
                      >
                        LATEST
                      </h3>
                      <h1
                        className="aboutus-title"
                        style={{ textAlign: "left" }}
                      >
                        UPDATES
                      </h1>
                    </div>
                    <div
                      className="row justify-content-between"
                      style={{ gap: 20 }}
                    >
                      <button
                        className="ann-btn"
                        onClick={() => {
                          handleAnnButtonClick();
                        }}
                        style={{
                          background:
                            active === true
                              ? "linear-gradient(264.13deg, #FC4F36 9.12%, #E30613 93.37%)"
                              : "",
                          color: active ? "white" : "",
                        }}
                      >
                        <img
                          src={active ? Newspaper : Newspaper_Passive}
                          alt=""
                        />
                        Latest Announcements
                      </button>
                      <button
                        className="ann-btn"
                        onClick={() => {
                          handleEventButtonClick();
                        }}
                        style={{
                          background:
                            eventActive === true
                              ? "linear-gradient(264.13deg, #FC4F36 9.12%, #E30613 93.37%)"
                              : "",
                          color: eventActive ? "white" : "",
                        }}
                      >
                        <img
                          src={eventActive ? Events_Active : Events}
                          alt=""
                        />
                        Latest Events
                      </button>
                    </div>
                  </div>
                  <div className="row mt-4" style={{ rowGap: 30 }}>
                    {active === true ? (
                      <>
                        {newsArray.map((item, id) => {
                          return (
                            <a href={item.link} target="_blank">
                              <div className="d-flex" key={id}>
                                <EventCard
                                  date={item.date}
                                  month={item.month}
                                  title={item.title}
                                  year={item.year}

                                />
                                <div className="circle-btn-wrapper">
                                  <CircleButton size="35">
                                    <ChevronArrowSvg />
                                  </CircleButton>
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </>
                    ) : (
                      <>
                        {eventsArray.map((item, id) => {
                          return (
                            <a href={item.link} target="_blank">
                            <div className="d-flex" key={id}>
                              <EventCard
                                date={item.date}
                                month={item.month}
                                title={item.title}
                                year={item.year}

                              />
                              <div className="circle-btn-wrapper">
                                <CircleButton size="35">
                                  <ChevronArrowSvg />
                                </CircleButton>
                              </div>
                            </div>
                            </a>
                          );
                        })}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DYP_News />
      </div>
    </>
  );
};

export default LatestUpdates;
