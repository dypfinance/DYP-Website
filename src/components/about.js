import React from "react";
import Carousel from "./carousel";
import $alert from "../functions/$alert";

const Icon = ({ href, name = "github" }) => (
  <a target="_blank" href={href} rel="noopener noreferrer">
    <span
      id="whitelink"
      style={{ background: "white", borderRadius: "5px" }}
      class="linkedin"
    >
      {" "}
      <i
        style={{
          height: "40px",
          width: "40px",
          fontSize: "20px",
          background: "rgba(33, 158, 225, 0.1)",
          borderRadius: "5px",
          paddingTop: "10px",
          color: "#1D91D0",
        }}
        className={`fab fa-${name}`}
      ></i>{" "}
    </span>
    <span
      id="darklink"
      style={{ background: "#1C181F", borderRadius: "5px" }}
      class="linkedin"
    >
      {" "}
      <i
        style={{
          height: "40px",
          width: "40px",
          fontSize: "20px",
          borderRadius: "5px",
          paddingTop: "10px",
          color: "#1D91D0",
        }}
        className={`fab fa-${name}`}
      ></i>{" "}
    </span>
  </a>
);

const bios = {
  michael: {
    title: "About Mihai",
    content: `I am a self-professed crypto-capitalist. I got involved in crypto in early 2017 when I purchased my first Ethereum mining rigs and in 2018 I've created a company that is offering different services (like hosting and maintenance) for people that own mining rigs. I learned all about cryptocurrency and blockchain technology during this time. In July 2020, I discovered Uniswap and yield farming. Thus, I started to explore different protocols and learn more about Decentralized finance. Shortly afterward, I had the idea to create DeFi Yield Protocol, a platform that would allow anyone to provide their liquidity, receive rewards in Ethereum for the first time since DeFi started, and use an anti-manipulation feature to convert the rewards into ETH without overly affecting the price. In other words, any person can provide liquidity and earn ETH with minimum risks. DeFi Yield Protocol is my vision, so I am working on the business development and operations background.`,
  },
  ion: {
    title: "About Razvan",
    content: `Razvan holds a Bachelor's degree from Politehnica University of Bucharest, Faculty of Automatic Control and Computer Science. Prior to his role at DeFi Yield Protocol, Razvan worked on implementing and maintaining data security plans, Database Design and Programming with SQL, Oracle Academy. He also received a CISCO Networking Academy reward. Razvan is committed to driving the innovation and research of Defi, as well the real use case for DYP token.`,
  },
  teki: {
    title: "About Teki",
    content: `An enthusiastic, dedicated and highly self-motivated professional. Naturally questioning, with an aptitude for developing innovative, effective ideas to issues. Strong analytical and strategic planning skills are combined with the ability to communicate and build relationships effectively at all levels. Well organized and possessing the leadership and influencing skills required to motivate multidisciplinary teams.`,
  },
  const: {
    title: "About Constantin",
    content: `Constantin Bogdan graduated from the University of Bucharest in 2007 and he holds a Master in Human Resource Psychology. Bogdan has ten years of experience in enterprise in a variety of roles at startups, private companies, and ANOFM Bucharest including product management, product marketing, and sales management, and is the Marketing Manager for DeFi Yield Protocol.`,
  },
  gino: {
    title: "About Gino",
    content: `I'm 34 years old, and at the age of 10, I started coding and learning programming basics. I have 20 years of experience in system design, software architecture, and I am a security researcher. I currently work in PHP, C#, Python, Perl, C, Ruby on Rails, Html, Mysql databases, Javascript, and Java.`,
  },
  daniel: {
    title: "About Daniel",
    content: `With 20 years of experience in Finance and Business Development, I have found my true passion in the Cryptocurrency and NFT marketplace. I've been involved in Cryptocurrency since 2015 and have been collecting and selling NFT's for the last year. I love art, technology, finance and entrepreneurship so when I was introduced to the DYP team it felt like a dream come true. In my spare time I enjoy nature and spending time with my wife and my dog.  I am excited about the opportunities that DYP offers and I truly believe in our Cats and Watches Society NFT. I look forward to help grow the discord community into something uniquely special where our members can feel welcome, safe and rewarded for being investors in this new, exciting, and growing space. "With rapid change comes great opportunity" - Daniel`,
  },
  fatjon: {
    title: "About Fatjon",
    content:
      "Over the last few years, I’ve worked with a wide range of products to create an insight led, human-centred digital experiences. My approach to UI/UX combines design thinking, user research and with a focus on the humans who use the designs I create. In my free time, I enjoy exploring design by seeing what can be done next in the future, trying to push my knowledge and abilities even further. I enjoy playing with designs and exploring new pathways I haven’t tried before… but most importantly I love what I do.",
  },
  shila: {
    title: "About Shila",
    content:
      "I’m a UI / UX Designer whose passion for design started a few years before graduating in Communication Design in Tirana, Albania. During my career, I’ve worked with various companies and industries, starting from e-learning and business management to fintech. I’m motivated and inspired by clean and simple UI and elegant solutions to complex problems.",
  },
  lorena: {
    title: "About Lorena",
    content: "I'm a Software Developer driven to explore different solutions in order to deliver the best in a software product. After graduating in Software Enginnering I had the luck to discover DeFi and since then my life turned to a different new direction. I enjoy exploring different technologies in my free time, like React Native or Blender3D, as well as new music genres.",
  },
  vjola: {
    title: "About Vjola",
    content:
      "Vjola Canka holds a Master’s Degree in Albanian-Modern Linguistics. She started writing short stories at the young age of eight. Meanwhile, she had already mastered Italian and headed to French, Spanish, and English. One of her first gigs was translating movies and documentaries for one important local television. For more than ten years, she’s been creating engaging original written materials in various agencies in all mediums. In the past couple of years, Vjola started training young copywriters in new startups.",
  },
  alexandra: {
    title: "About Alexandra",
    content:
      "Highly self – motivated marketing specialist with a Master Degree in Media Communication. Managing the marketing activities by demonstrating expertise in various areas, including optimization, advertising, social media, direct marketing and event planning. With a strong attention to details, knowledge of current marketing tools and a high level of creativity my goal is to bring humanity into digital. I’m developing marketing strategies and creative content that separates DeFi Yield Protocol from the crowd.",
  },
  dinakar: {
    title: "About Dinakar",
    content:
      "I am a Web Developer by profession and Crypto enthusiast by passion, I started getting involved in Crypto Late 2020's that is when I came across DYP (Defi Yield Protocol), I joined them as an investor fell in love with project learned about DYP out and out, and then started helping the community sharing the knowledge I already gained. On one fine day DYP team Digital Strategy Manager Teki Kolaneci approached me to offer Moderator role to handle DYP Telegram and Discords and then rest are best movements I enjoyed every part of being part of hard working, enthusiast DYP Team, gained good name from community with this progress I got promoted to Community Manager of DYP, I am so glad and thankful for DYPians and DYP Team for putting me in this position. I will improve my skills everyday to provide better services in all the aspects I can to make DYP a successful project.",
  },
  sheyn: {
    title: "About Sheyn",
    content:
      "I discovered Cryptocurrency back in 2017 when bounty campaign from Bitcointalk.org is the crypto marketing trend. I saw that there is a future on digital assets and I believe that it is the future so I decided to make investments and did some trading. I started to work as bounty campaign manager and community manager for several projects since 2019. I offered a bounty campaign to Sir Mihai for DeFi Yield Protocol during the ICO and managed it then He assigned me as a telegram and discord moderator after the campaign ended. My aim as a moderator is to assist the community with every query they bring and ensure to convey the right answer. I believe that a better communication is crucial for building a solid community. I am grateful to be a part and looking forward for DeFi Yield Protocol to achieve a successfully complete DeFi ecosystem.",
  },
  daniel2: {
    title: "About Daniel",
    content: `My passion for technology developed during my youth when I first started coding at age 16. I graduated from the Department of Computer Science and Engineering at my college, in 2012. During my studies, I worked for several IT companies and developed some ASIC and FPGA designs with Verilog. From 2012–2017, I worked as a full-stack web developer. In 2017, Mihai contacted me to help him set up the first Ethereum mining rigs that he had purchased. Then I discovered Bitcoin and Ethereum and started to learn more about blockchain technology and solidity. Since 2017, I have provided software and hardware maintenance for the mining farm. In 2018, I began creating dApps on the Ethereum network.`,
  },
};

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSrc: "img/ximg.svg",
    };
  }

  handleChangeImage = (e) => {
    if (e.target.tagName != "IMG") return;
    this.setState({ activeSrc: e.target.getAttribute("src") });
  };

  handleShowBio = (name) => (e) => {
    e && e.preventDefault();
    $alert(bios[name]);
  };

  render() {
    return (
      <>
        <div class="about-hero App-container">
          <div class="container">
            <div
              class="ball-decoration"
              style={{ width: 97, height: 97, bottom: "26%", left: "-8px" }}
            ></div>
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
              class="big-circle-decoration"
              style={{
                width: 508,
                height: 508,
                right: "0px",
                top: "902px",
              }}
            ></div>
            <div
              class="ball-decoration"
              style={{
                width: 97,
                height: 97,
                top: "800px",
                right: "0px",
              }}
            ></div>

            <div
              class="big-circle-decoration"
              style={{
                width: 508,
                height: 508,
                right: "0px",
                top: "2002px",
              }}
            ></div>
            <div
              class="ball-decoration"
              style={{
                width: 200,
                height: 200,
                top: "2000px",
                right: "20px",
              }}
            ></div>

            <div
              class="big-circle-decoration"
              style={{
                width: 508,
                height: 508,
                left: "-205px",
                top: "2022px",
              }}
            ></div>

            <div
              class="ball-decoration"
              style={{
                width: 200,
                height: 200,
                top: "2500px",
                left: "0px",
              }}
            ></div>

            <div class="about-her-wrapper">
              <div class="row  align-items-center">
                <div class="col-lg-6 order-2 order-lg-1">
                  <div class="left">
                    <h3 className="mt-4 mt-lg-0" className="aboutus-subtitle">
                      DYP
                    </h3>
                    <h1 className="aboutus-title">What we do</h1>
                    <p>
                      The DeFi Yield Protocol (DYP) is a unique platform that
                      offers solutions for yield farming, staking, NFTs, and
                      enabling users to leverage the advanced trading tools of
                      the DYP. What makes the DYP a unique yield farming
                      aggregator? <br /> <br /> The DYP made history in the DeFi
                      space by becoming the first and only protocol to reward
                      users in Ethereum. The protocol employs an
                      anti-manipulation feature that aims to limit the market
                      impact on users’ converting rewards into ETH and other
                      native platform tokens. Anti-manipulation aims to maintain
                      stability, fair access to liquidity, and provide a secure
                      and simplified DeFi platform for users of all sizes.
                      <br /> <br />
                      The core feature of the DYP is the decentralized tool
                      dashboard. It provides advanced features, such as
                      Decentralized Score, Unique Community Trust Vote System,
                      DYP Locker, Yield Farm Data, and LaunchPad, allowing
                      investors to make informed decisions that maximize yields
                      and reduce risks.
                    </p>
                  </div>
                </div>
                <div class="col-lg-6  order-1 order-lg-2">
                  <div class="right">
                    <div class="main-img">
                      <img
                        key={this.state.activeSrc}
                        src={this.state.activeSrc}
                        alt="Image not found"
                      />
                    </div>
                    <div onClick={this.handleChangeImage} class="about-sub-img">
                      <div class="img">
                        <img src="/img/about/rig1.jpg" alt="" />
                      </div>
                      <div class="img">
                        <img src="/img/about/rig2.jpg" alt="" />
                      </div>
                      <div class="img">
                        <img src="/img/about/rig3.jpg" alt="" />
                      </div>
                      <div class="img">
                        <img src="/img/about/rig4.jpg" alt="" />
                      </div>
                      <div class="img">
                        <img src="/img/about/rig5.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="leader-ship-area App-container">
          <div class="container">
            <div class="leader-ship-wrapper">
              <div class="row">
                <div class="col-lg-12  offset-lg-1 ml-0">
                  <div className="farming-header">
                    <h3>Our Team</h3>
                  </div>
                  <div class="leader-ship-content">
                    <div class="row">
                      <div class="col-lg-3  col-sm-6">
                        <a
                          href="https://www.linkedin.com/in/mihai-nicusor/"
                          target={"_blank"}
                        >
                          <div class="flip-card">
                            <div class="flip-card-inner">
                              <div class="flip-card-front">
                                <div className="articalone"></div>
                                <div className="about-section">
                                  <h4>Mihai Nicusor</h4>
                                  <p>CEO</p>
                                </div>
                              </div>
                              <div class="flip-card-back">
                                <p>{bios["michael"].content}</p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div
                          className="d-none d-md-flex"
                          style={{ height: 50 }}
                        ></div>
                        <a
                          href="https://www.linkedin.com/in/razvan-ion-b455ba95/"
                          target={"_blank"}
                        >
                          <div class="flip-card">
                            <div class="flip-card-inner">
                              <div class="flip-card-front">
                                <div className="articaltwo"></div>
                                <div className="about-section">
                                  <h4>Razvan Ion</h4>
                                  <p>Chief Technical Officer</p>
                                </div>
                              </div>
                              <div class="flip-card-back">
                                <p>{bios["ion"].content}</p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div
                          className="d-none d-md-flex"
                          style={{ height: 100 }}
                        ></div>
                        <a
                          href="https://www.linkedin.com/in/teki-kolaneci"
                          target={"_blank"}
                        >
                          <div class="flip-card">
                            <div class="flip-card-inner">
                              <div class="flip-card-front">
                                <div className="articalthree"></div>
                                <div className="about-section">
                                  <h4>Teki Kolaneci</h4>
                                  <p>Global Strategy Director</p>
                                </div>
                              </div>
                              <div class="flip-card-back">
                                <p>{bios["teki"].content}</p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div
                          className="d-none d-md-flex"
                          style={{ height: 150 }}
                        ></div>
                        <a href="https://github.com/gianviz" target={"_blank"}>
                          <div class="flip-card">
                            <div class="flip-card-inner">
                              <div class="flip-card-front">
                                <div className="articalfour"></div>
                                <div className="about-section">
                                  <h4>Gino Vizintin</h4>
                                  <p>Chief Ecosystem Officer</p>
                                </div>
                              </div>
                              <div class="flip-card-back">
                                <p>{bios["gino"].content}</p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <a
                          href="https://www.linkedin.com/in/fatjon-shaba-9a751313a"
                          target="_blank"
                        >
                          <div class="flip-card">
                            <div class="flip-card-inner">
                              <div class="flip-card-front">
                                <div className="articalfive"></div>
                                <div className="about-section">
                                  <h4>Fatjon Shaba</h4>
                                  <p>Lead UI/UX Designer</p>
                                </div>
                              </div>
                              <div class="flip-card-back">
                                <p>{bios["fatjon"].content}</p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div
                          className="d-none d-md-flex"
                          style={{ height: 50 }}
                        ></div>
                        <a
                          href="https://www.linkedin.com/in/shilakellezi/"
                          target="_blank"
                        >
                          <div class="flip-card">
                            <div class="flip-card-inner">
                              <div class="flip-card-front">
                                <div className="articalsix"></div>
                                <div className="about-section">
                                  <h4>Shila Kellezi</h4>
                                  <p>Senior UI/UX Designer</p>
                                </div>
                              </div>
                              <div class="flip-card-back">
                                <p>{bios["shila"].content}</p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div
                          className="d-none d-md-flex"
                          style={{ height: 100 }}
                        ></div>
                        <a
                          href="https://www.linkedin.com/in/lorena-li%C3%A7i-276965185/"
                          target={"_blank"}
                        >
                          <div class="flip-card">
                            <div class="flip-card-inner">
                              <div class="flip-card-front">
                                <div className="articalseven"></div>
                                <div className="about-section">
                                  <h4>Lorena Liçi</h4>
                                  <p>Front-End Engineer</p>
                                </div>
                              </div>
                              <div class="flip-card-back">
                                <p>{bios["lorena"].content}</p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div
                          className="d-none d-md-flex"
                          style={{ height: 150 }}
                        ></div>
                        <a
                          href="https://www.linkedin.com/in/alexandra-chifor/"
                          target="_blank"
                        >
                          <div class="flip-card">
                            <div class="flip-card-inner">
                              <div class="flip-card-front">
                                <div className="articaleight"></div>
                                <div className="about-section">
                                  <h4>Chifor Alexandra</h4>
                                  <p>Head of Marketing</p>
                                </div>
                              </div>
                              <div class="flip-card-back">
                                <p>{bios["alexandra"].content}</p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <a
                          href="https://www.linkedin.com/in/bogdan-constantin-1105b7201/"
                          target="_blank"
                        >
                          <div class="flip-card">
                            <div class="flip-card-inner">
                              <div class="flip-card-front">
                                <div className="articalnine"></div>
                                <div className="about-section">
                                  <h4>Constantin Bogdan</h4>
                                  <p>Marketing Manager</p>
                                </div>
                              </div>
                              <div class="flip-card-back">
                                <p>{bios["const"].content}</p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>

                      <div class="col-lg-3 col-sm-6">
                        <div
                          className="d-none d-md-flex"
                          style={{ height: 50 }}
                        ></div>
                        <a href="https://github.com/dypfinance" target="_blank">
                          <div class="flip-card">
                            <div class="flip-card-inner">
                              <div class="flip-card-front">
                                <div className="articalten"></div>
                                <div className="about-section">
                                  <h4>Daniel Provak</h4>
                                  <p>Software Developer</p>
                                </div>
                              </div>
                              <div class="flip-card-back">
                                <p>{bios["daniel2"].content}</p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div
                          className="d-none d-md-flex"
                          style={{ height: 100 }}
                        ></div>
                        <a
                          href="https://www.linkedin.com/in/thedg3/"
                          target="blank"
                        >
                          <div class="flip-card">
                            <div class="flip-card-inner">
                              <div class="flip-card-front">
                                <div className="artical11"></div>
                                <div className="about-section">
                                  <h4>Daniel Garrett</h4>
                                  <p>Community Manager</p>
                                </div>
                              </div>
                              <div class="flip-card-back">
                                <p>{bios["daniel"].content}</p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div
                          className="d-none d-md-flex"
                          style={{ height: 150 }}
                        ></div>
                        <a
                          href="https://www.linkedin.com/in/dinakar-kodati-985ba25a/"
                          target={"_blank"}
                        >
                          <div class="flip-card">
                            <div class="flip-card-inner">
                              <div class="flip-card-front">
                                <div className="artical12"></div>
                                <div className="about-section">
                                  <h4>Dinakar Kodati</h4>
                                  <p>Community Manager</p>
                                </div>
                              </div>
                              <div class="flip-card-back">
                                <p>{bios["dinakar"].content}</p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <a
                          href="https://www.linkedin.com/in/gerlie-cabalse-yael07/"
                          target="_blank"
                        >
                          <div class="flip-card">
                            <div class="flip-card-inner">
                              <div class="flip-card-front">
                                <div className="artical13"></div>
                                <div className="about-section">
                                  <h4>Sheyn Cabalse</h4>
                                  <p>Community Manager</p>
                                </div>
                              </div>
                              <div class="flip-card-back">
                                <p>{bios["sheyn"].content}</p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="farming-area-white App-container">
          <div class="container">
            <div class="working-wrapper">
              <div className="farming-header">
                <h3>Our Partners</h3>
              </div>
              <div class="working-content">
                <div class="row">
                  <div class="col-lg-10  offset-lg-1">
                    <div class="row">
                      <div class="col-lg-3  col-sm-6 mb-5">
                        <a href="https://chain.link/" target="_blank">
                          <div class="working-item l-shadow">
                            <div class="img2">
                              <img
                                src="/img/about/chainlink-logo.svg"
                                alt="Image not  found"
                              />
                            </div>
                            <span class="line"></span>
                            <h4>Chainlink</h4>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-3  col-sm-6 mb-5">
                        <a href="https://www.avalabs.org/" target="_blank">
                          <div class="working-item l-shadow">
                            <div class="img">
                              <img
                                src="/img/about/avalanche.png"
                                alt="Image not  found"
                              />
                            </div>
                            <span class="line"></span>
                            <h4>Avalanche</h4>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-3  col-sm-6 mb-5">
                        <a href="https://pangolin.exchange/" target="_blank">
                          <div className="working-item l-shadow">
                            <div className="img">
                              <img
                                src="/img/favicon/pangolin.svg"
                                alt="Image not  found"
                              />
                            </div>
                            <span className="line"></span>
                            <h4>Pangolin</h4>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-3  col-sm-6 mb-5">
                        <a href="https://kyber.network/" target="_blank">
                          <div className="working-item l-shadow">
                            <div className="img">
                              <img
                                src="/img/about/kyber-logo-knc.png"
                                alt="Image not  found"
                              />
                            </div>
                            <span className="line"></span>
                            <h4>Kyber Network</h4>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-3  col-sm-6 mb-5">
                        <a href="https://coin98.com/wallet" target="_blank">
                          <div className="working-item l-shadow">
                            <div className="img">
                              <img
                                src="/img/about/coin98.png"
                                alt="Image not  found"
                              />
                            </div>
                            <span className="line"></span>
                            <h4>Coin98</h4>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-3  col-sm-6 mb-5">
                        <a href="https://hummingbot.io/" target="_blank">
                          <div className="working-item l-shadow">
                            <div className="img">
                              <img
                                src="/img/about/humming.jpg"
                                alt="Image not  found"
                              />
                            </div>
                            <span className="line"></span>
                            <h4>Hummingbot</h4>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-3  col-sm-6 mb-5">
                        <a href="https://www.efrontier.io/" target="_blank">
                          <div className="working-item l-shadow">
                            <div className="img">
                              <img
                                src="/img/about/efrontier.jpg"
                                alt="Image not  found"
                              />
                            </div>
                            <span className="line"></span>
                            <h4>Efficient Frontier</h4>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-3  col-sm-6 mb-5">
                        <a href="https://www.aircoins.io/" target="_blank">
                          <div className="working-item l-shadow">
                            <div className="img">
                              <img
                                src="/img/about/aircoins.png"
                                alt="Image not  found"
                              />
                            </div>
                            <span className="line"></span>
                            <h4>Aircoins</h4>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-10  offset-lg-1">
                    <div className="row">
                      <div className="col-lg-3  col-sm-6 mb-5">
                        <a href="https://peckshield.com/" target="_blank">
                          <div className="working-item l-shadow">
                            <div className="img">
                              <img src="/img/w1.svg" alt="Image not  found" />
                            </div>
                            <span className="line"></span>
                            <h4>PeckShield </h4>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-3  col-sm-6 mb-5">
                        <a
                          href="https://www.blockchainconsilium.com/"
                          target="_blank"
                        >
                          <div className="working-item l-shadow">
                            <div className="img">
                              <img src="/img/w2.svg" alt="Image not  found" />
                            </div>
                            <span className="line"></span>
                            <h4>Blockchain Consilium </h4>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-3  col-sm-6 mb-5">
                        <a href="https://www.certik.org/" target="_blank">
                          <div className="working-item l-shadow">
                            <div className="img">
                              <img src="/img/w3.svg" alt="Image not  found" />
                            </div>
                            <span className="line"></span>
                            <h4>Certik Foundation </h4>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-3  col-sm-6 mb-5">
                        <a href="https://cryptoadventure.com/" target="_blank">
                          <div className="working-item l-shadow">
                            <div className="img">
                              <img
                                src="/img/about/cryptoadventure.jpg"
                                alt="Image not  found"
                              />
                            </div>
                            <span className="line"></span>
                            <h4>CryptoAdventure</h4>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-10  offset-lg-1">
                    <div className="row">
                      <div className="col-lg-3  col-sm-6 mb-5">
                        <a
                          href="https://crypto.com/price/defi-yield-protocol"
                          target="_blank"
                        >
                          <div className="working-item l-shadow">
                            <div className="img">
                              <img
                                src="/img/about/cryptocom.jpg"
                                alt="Image not  found"
                              />
                            </div>
                            <span className="line"></span>
                            <h4>Crypto.com </h4>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-3  col-sm-6 mb-5">
                        <a
                          href="https://trade.kucoin.com/DYP-USDT"
                          target="_blank"
                        >
                          <div className="working-item l-shadow">
                            <div className="img">
                              <img
                                src="/img/coins/kucoin.png"
                                alt="Image not  found"
                              />
                            </div>
                            <span className="line"></span>
                            <h4>KuCoin </h4>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-3  col-sm-6 mb-5">
                        <a
                          href="https://www.gate.io/trade/dyp_usdt"
                          target="_blank"
                        >
                          <div className="working-item l-shadow">
                            <div className="img">
                              <img
                                src="/img/coins/Gate.png"
                                alt="Image not  found"
                              />
                            </div>
                            <span className="line"></span>
                            <h4>Gate.io </h4>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-3  col-sm-6 mb-5">
                        <a
                          href="https://poloniex.com/exchange/USDT_DYP"
                          target="_blank"
                        >
                          <div className="working-item l-shadow">
                            <div className="img">
                              <img
                                src="/img/coins/poloniex.png"
                                alt="Image not  found"
                              />
                            </div>
                            <span className="line"></span>
                            <h4>Poloniex</h4>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="farming-area App-container">
          <div className="farming-header">
            <h3>Press Highlights</h3>
          </div>
          <div
            className="d-flex pb-5 mx-auto"
            style={{ overflow: "hidden", maxWidth: "4350px" }}
          >
            <div className="partners-wrapper">
              <div className="slide d-flex" style={{ width: "4350px" }}>
                <div className="partners-group py-3">
                  <a
                    href="https://news.bitcoin.com/defi-yield-protocol-dyp-launches-dyp-earn-vault/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "17px", left: "23px", bottom: "auto" }}
                  >
                    <img src="img/news/bitcoincom.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">BitcoinCom</div>
                    </div>
                  </a>
                  <a
                    href="https://cointelegraph.com/press-releases/defi-yield-protocol-your-new-defi-gem-with-anti-manipulation-feature"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "27px", bottom: "65px" }}
                  >
                    <img src="img/news/cointelegraph.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Cointelegraph</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://btcmanager.com/dyp-protocol-staking-dapp-binance-smart-chain-bsc-lp-passive-income-eth-dyp-bnb/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner big d-flex align-items-center justify-content-center"
                    style={{ top: "119px", left: "13px", bottom: "auto" }}
                  >
                    <img src="img/news/btcmanager.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">BtcManager</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://www.newsbtc.com/press-releases/defi-yield-protocol-takes-yield-farming-to-the-next-level/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "6px", left: "22px", bottom: "auto" }}
                  >
                    <img src="img/news/newsbtc.jpg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">NewsBtc</div>
                    </div>
                  </a>
                  <a
                    href="https://news.yahoo.com/news/dyp-introduces-services-binance-smart-140000357.html"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner big d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "20px", bottom: "18px" }}
                  >
                    <img src="img/news/yahoo.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Yahoo Finance</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://www.cryptocompare.com/coins/guides/defi-yield-protocol-could-be-a-massive-boost-for-yield-farmers-and-the-defi-space/"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "113px", left: "25px", bottom: "auto" }}
                  >
                    <img src="img/news/cryptocompare.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">CryptoCompare</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://coindoo.com/defi-yield-protocol-dyp-eliminates-the-risks-of-whale-interference/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "51px", left: "44px", bottom: "auto" }}
                  >
                    <img src="img/news/coindoo.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Coindoo</div>
                    </div>
                  </a>
                  <a
                    href="https://news.bitcoin.com/defi-yield-protocol-is-a-massive-boost-for-yield-farmers-and-the-defi-space/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "51px", bottom: "12px" }}
                  >
                    <img src="img/news/bitcoincom.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">BitcoinCom</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://techbullion.com/defi-yield-protocol-the-first-manipulation-free-defi-platform-in-bsc-and-eth/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "124px", left: "29px", bottom: "auto" }}
                  >
                    <img src="img/news/techbullion.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">TechBullion</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://www.newsbtc.com/news/company/dyp-finance-a-unique-yield-farming-platform/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner big d-flex align-items-center justify-content-center"
                    style={{ top: "21px", left: "6px", bottom: "auto" }}
                  >
                    <img src="img/news/newsbtc.jpg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">NewsBtc</div>
                    </div>
                  </a>
                  <a
                    href="https://www.bitcoininsider.org/article/110411/defi-yield-protocol-first-manipulation-free-defi-platform-bsc-and-eth"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner big d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "16px", bottom: "20px" }}
                  >
                    <img src="img/news/bitcoininsider.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">BitcoinInsider</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://www.cryptocompare.com/coins/guides/dypfinance-a-unique-yield-farming-platform/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "125px", left: "34px", bottom: "auto" }}
                  >
                    <img src="img/news/cryptocompare.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">CryptoCompare</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://u.today/defi-yield-protocol-dyp-launches-staking-pools-on-binance-smart-chain?amp"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "48px", left: "28px", bottom: "auto" }}
                  >
                    <img src="img/news/utoday.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">u.Today</div>
                    </div>
                  </a>
                  <a
                    href="https://hackernoon.com/a-stable-smart-contract-platform-for-enabling-eth-mining-and-eliminating-whale-manipulation-wjr3z08"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner big d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "17px", bottom: "16px" }}
                  >
                    <img src="img/news/hackernoon.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Hackernoon</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://blockonomi.com/dyp-staking-app-binance-smart-chain/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "80px", left: "44px", bottom: "auto" }}
                  >
                    <img src="img/news/blokonomi.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Blockonomi</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://news.bitcoin.com/defi-yield-protocol-dyp-witnesses-massive-growth-following-binance-smart-chain-integration/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner big d-flex align-items-center justify-content-center"
                    style={{ top: "15px", left: "23px", bottom: "auto" }}
                  >
                    <img src="img/news/bitcoincom.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">BitcoinCom</div>
                    </div>
                  </a>
                  <a
                    href="https://coindoo.com/dyp-sees-explosive-growth-after-binance-smart-chain-bsc-integration/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner big d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "22px", bottom: "3px" }}
                  >
                    <img src="img/news/coindoo.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Coindoo</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://cryptopotato.com/defi-yield-protocol-dyp-all-in-one-platform-yielding-benefits/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "116px", left: "49px", bottom: "auto" }}
                  >
                    <img src="img/news/cryptopototo.jpg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Cryptopototo</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://techbullion.com/dyp-launches-staking-dapp-on-binance-smart-chain-bsc/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "7px", left: "17px", bottom: "auto" }}
                  >
                    <img src="img/news/techbullion.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Techbullion</div>
                    </div>
                  </a>
                  <a
                    href="https://finance.yahoo.com/news/4-unique-defi-projects-know-130000391.html"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner big d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "5px", bottom: "4px" }}
                  >
                    <img src="img/news/yahoo.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Yahoo Finance</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://coincodex.com/article/11092/earn-compound-yields-on-binance-smart-chain-using-defi-yield-protocol-dyp/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "131px", left: "38px", bottom: "auto" }}
                  >
                    <img src="img/news/coincodex.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">CoinCodex</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://coinmarketcap.com/headlines/news/dyp-finance-a-unique-yield-farming-platform/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "48px", left: "39px", bottom: "auto" }}
                  >
                    <img src="img/news/coinmarketcap.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Coinmarketcap</div>
                    </div>
                  </a>
                  <a
                    href="https://www.newsbtc.com/news/company/leading-yield-farming-ecosystem-dyp-now-on-binance-smart-chain/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "31px", bottom: "9px" }}
                  >
                    <img src="img/news/newsbtc.jpg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">NewsBtc</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://techbullion.com/dyp-finance-stake-defi-tokens-and-get-paid-in-eth"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "103px", left: "28px", bottom: "auto" }}
                  >
                    <img src="img/news/techbullion.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">TechBullion</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://cryptopress.news/defi-yield-protocol-dyp-staking-and-governance-is-now-live/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner big d-flex align-items-center justify-content-center"
                    style={{ top: "17px", left: "19px", bottom: "auto" }}
                  >
                    <img src="img/news/cryptopress.jpg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">CryptoPress</div>
                    </div>
                  </a>
                  <a
                    href="https://www.cryptofolds.com/defi-yield-protocol-dyp-staking-and-governance-is-now-live"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner big d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "6px", bottom: "21px" }}
                  >
                    <img src="img/news/cryptofolds.jpg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">CryptoFolds</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://medium.com/the-capital/defi-yield-protocol-dyp-staking-and-governance-is-now-live-e18c0f14a442"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "120px", left: "38px", bottom: "auto" }}
                  >
                    <img src="img/news/medium.jpg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Medium</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://u.today/defi-yield-protocol-launches-staking-and-governance-dapp"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "3px", left: "49px", bottom: "auto" }}
                  >
                    <img src="img/news/utoday.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">U.today</div>
                    </div>
                  </a>
                  <a
                    href="https://finance.yahoo.com/news/defi-yield-protocol-dyp-staking-163000220.html"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner big d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "9px", bottom: "17px" }}
                  >
                    <img src="img/news/yahoo.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Yahoo Finance</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://news.bitcoin.com/dyp-launches-staking-and-governance-dapp/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "84px", left: "15px", bottom: "auto" }}
                  >
                    <img src="img/news/bitcoincom.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">BitcoinCom</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://bitcoinist.com/defi-yield-protocol-debuts-new-staking-and-governance-dapp/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "23px", left: "18px", bottom: "auto" }}
                  >
                    <img src="img/news/bitcoinist.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Bitcoinist</div>
                    </div>
                  </a>
                  <a
                    href="https://apnews.com/press-release/accesswire/business-prices-deflation-economy-54076ee83d21025c63d8347c8accc1e2"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "37px", bottom: "39px" }}
                  >
                    <img src="img/news/apnews.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">ApNews</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://coinmarketcap.com/headlines/news/defi-yield-protocol-launches-staking-and-governance-dapp-dyp-holders-earn-ethereum/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner big d-flex align-items-center justify-content-center"
                    style={{ top: "97px", left: "24px", bottom: "auto" }}
                  >
                    <img src="img/news/coinmarketcap.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Coinmarketcap</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://hackernoon.com/defi-projects-that-offer-top-staking-rewards-in-2021-7fs34qs"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "45px", left: "51px", bottom: "auto" }}
                  >
                    <img src="img/news/hackernoon.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">HackerNoon</div>
                    </div>
                  </a>
                  <a
                    href="https://coindoo.com/dyp-maximizing-the-benefits-of-yield-farming-protocols/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "46px", bottom: "61px" }}
                  >
                    <img src="img/news/coindoo.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Coindoo</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://www.newsbtc.com/news/company/defi-yield-protocol-launches-staking-and-governance-dapp-dyp-holders-earn-ethereum/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "130px", left: "22px", bottom: "auto" }}
                  >
                    <img src="img/news/newsbtc.jpg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">NewsBtc</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://btcmanager.com/defi-yield-protocol-dyp/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "18px", left: "35px", bottom: "auto" }}
                  >
                    <img src="img/news/btcmanager.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">BtcManager</div>
                    </div>
                  </a>
                  <a
                    href="https://coingape.com/how-to-use-dyp-to-earn-big-defi-rois/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "25px", bottom: "50px" }}
                  >
                    <img src="img/news/coingape.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">CoinGape</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://www.bitcoininsider.org/article/100387/defi-yield-protocol-dyp-provides-new-level-transparency-market"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "133px", left: "25px", bottom: "auto" }}
                  >
                    <img src="img/news/bitcoininsider.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">BitcoinInsider</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://www.cryptocompare.com/coins/guides/defi-yield-protocol-liquidity-providers-earn-25-000-in-eth-per-day-staking-dyp/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "34px", left: "31px", bottom: "auto" }}
                  >
                    <img src="img/news/cryptocompare.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">CryptoCompare</div>
                    </div>
                  </a>
                  <a
                    href="https://coincodex.com/article/10261/defi-yield-protocol-anti-manipulation-farm-yielding-platform/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "34px", bottom: "8px" }}
                  >
                    <img src="img/news/coincodex.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">CoinCodex</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://cryptopotato.com/tackling-volatility-issues-for-liquidity-providers-with-defi-yield-protocol-dyp/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "82px", left: "31px", bottom: "auto" }}
                  >
                    <img src="img/news/cryptopototo.jpg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">CryptoPototo</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://hackernoon.com/5-defi-projects-you-should-know-about-in-2021-irq347a"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "15px", left: "28px", bottom: "auto" }}
                  >
                    <img src="img/news/hackernoon.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">HackerNoon</div>
                    </div>
                  </a>
                  <a
                    href="https://finance.yahoo.com/news/investors-defi-yield-protocol-earned-151500497.html"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "47px", bottom: "0px" }}
                  >
                    <img src="img/news/yahoo.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Yahoo Finance</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="slide d-flex" style={{ width: "4350px" }}>
                <div className="partners-group py-3">
                  <a
                    href="https://news.bitcoin.com/defi-yield-protocol-dyp-launches-dyp-earn-vault/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "17px", left: "23px", bottom: "auto" }}
                  >
                    <img src="img/news/bitcoincom.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">BitcoinCom</div>
                    </div>
                  </a>
                  <a
                    href="https://cointelegraph.com/press-releases/defi-yield-protocol-your-new-defi-gem-with-anti-manipulation-feature"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "27px", bottom: "65px" }}
                  >
                    <img src="img/news/cointelegraph.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Cointelegraph</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://btcmanager.com/dyp-protocol-staking-dapp-binance-smart-chain-bsc-lp-passive-income-eth-dyp-bnb/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner big d-flex align-items-center justify-content-center"
                    style={{ top: "119px", left: "13px", bottom: "auto" }}
                  >
                    <img src="img/news/btcmanager.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">BtcManager</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://www.newsbtc.com/press-releases/defi-yield-protocol-takes-yield-farming-to-the-next-level/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "6px", left: "22px", bottom: "auto" }}
                  >
                    <img src="img/news/newsbtc.jpg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">NewsBtc</div>
                    </div>
                  </a>
                  <a
                    href="https://news.yahoo.com/news/dyp-introduces-services-binance-smart-140000357.html"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner big d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "20px", bottom: "18px" }}
                  >
                    <img src="img/news/yahoo.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Yahoo Finance</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://www.cryptocompare.com/coins/guides/defi-yield-protocol-could-be-a-massive-boost-for-yield-farmers-and-the-defi-space/"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "113px", left: "25px", bottom: "auto" }}
                  >
                    <img src="img/news/cryptocompare.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">CryptoCompare</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://coindoo.com/defi-yield-protocol-dyp-eliminates-the-risks-of-whale-interference/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "51px", left: "44px", bottom: "auto" }}
                  >
                    <img src="img/news/coindoo.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Coindoo</div>
                    </div>
                  </a>
                  <a
                    href="https://news.bitcoin.com/defi-yield-protocol-is-a-massive-boost-for-yield-farmers-and-the-defi-space/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "51px", bottom: "12px" }}
                  >
                    <img src="img/news/bitcoincom.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">BitcoinCom</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://techbullion.com/defi-yield-protocol-the-first-manipulation-free-defi-platform-in-bsc-and-eth/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "124px", left: "29px", bottom: "auto" }}
                  >
                    <img src="img/news/techbullion.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">TechBullion</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://www.newsbtc.com/news/company/dyp-finance-a-unique-yield-farming-platform/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner big d-flex align-items-center justify-content-center"
                    style={{ top: "21px", left: "6px", bottom: "auto" }}
                  >
                    <img src="img/news/newsbtc.jpg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">NewsBtc</div>
                    </div>
                  </a>
                  <a
                    href="https://www.bitcoininsider.org/article/110411/defi-yield-protocol-first-manipulation-free-defi-platform-bsc-and-eth"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner big d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "16px", bottom: "20px" }}
                  >
                    <img src="img/news/bitcoininsider.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">BitcoinInsider</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://www.cryptocompare.com/coins/guides/dypfinance-a-unique-yield-farming-platform/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "125px", left: "34px", bottom: "auto" }}
                  >
                    <img src="img/news/cryptocompare.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">CryptoCompare</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://u.today/defi-yield-protocol-dyp-launches-staking-pools-on-binance-smart-chain?amp"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "48px", left: "28px", bottom: "auto" }}
                  >
                    <img src="img/news/utoday.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">u.Today</div>
                    </div>
                  </a>
                  <a
                    href="https://hackernoon.com/a-stable-smart-contract-platform-for-enabling-eth-mining-and-eliminating-whale-manipulation-wjr3z08"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner big d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "17px", bottom: "16px" }}
                  >
                    <img src="img/news/hackernoon.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Hackernoon</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://blockonomi.com/dyp-staking-app-binance-smart-chain/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "80px", left: "44px", bottom: "auto" }}
                  >
                    <img src="img/news/blokonomi.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Blockonomi</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://news.bitcoin.com/defi-yield-protocol-dyp-witnesses-massive-growth-following-binance-smart-chain-integration/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner big d-flex align-items-center justify-content-center"
                    style={{ top: "15px", left: "23px", bottom: "auto" }}
                  >
                    <img src="img/news/bitcoincom.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">BitcoinCom</div>
                    </div>
                  </a>
                  <a
                    href="https://coindoo.com/dyp-sees-explosive-growth-after-binance-smart-chain-bsc-integration/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner big d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "22px", bottom: "3px" }}
                  >
                    <img src="img/news/coindoo.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Coindoo</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://cryptopotato.com/defi-yield-protocol-dyp-all-in-one-platform-yielding-benefits/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "116px", left: "49px", bottom: "auto" }}
                  >
                    <img src="img/news/cryptopototo.jpg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Cryptopototo</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://techbullion.com/dyp-launches-staking-dapp-on-binance-smart-chain-bsc/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "7px", left: "17px", bottom: "auto" }}
                  >
                    <img src="img/news/techbullion.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Techbullion</div>
                    </div>
                  </a>
                  <a
                    href="https://finance.yahoo.com/news/4-unique-defi-projects-know-130000391.html"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner big d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "5px", bottom: "4px" }}
                  >
                    <img src="img/news/yahoo.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Yahoo Finance</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://coincodex.com/article/11092/earn-compound-yields-on-binance-smart-chain-using-defi-yield-protocol-dyp/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "131px", left: "38px", bottom: "auto" }}
                  >
                    <img src="img/news/coincodex.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">CoinCodex</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://coinmarketcap.com/headlines/news/dyp-finance-a-unique-yield-farming-platform/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "48px", left: "39px", bottom: "auto" }}
                  >
                    <img src="img/news/coinmarketcap.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Coinmarketcap</div>
                    </div>
                  </a>
                  <a
                    href="https://www.newsbtc.com/news/company/leading-yield-farming-ecosystem-dyp-now-on-binance-smart-chain/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "31px", bottom: "9px" }}
                  >
                    <img src="img/news/newsbtc.jpg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">NewsBtc</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://techbullion.com/dyp-finance-stake-defi-tokens-and-get-paid-in-eth"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "103px", left: "28px", bottom: "auto" }}
                  >
                    <img src="img/news/techbullion.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">TechBullion</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://cryptopress.news/defi-yield-protocol-dyp-staking-and-governance-is-now-live/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner big d-flex align-items-center justify-content-center"
                    style={{ top: "17px", left: "19px", bottom: "auto" }}
                  >
                    <img src="img/news/cryptopress.jpg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">CryptoPress</div>
                    </div>
                  </a>
                  <a
                    href="https://www.cryptofolds.com/defi-yield-protocol-dyp-staking-and-governance-is-now-live"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner big d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "6px", bottom: "21px" }}
                  >
                    <img src="img/news/cryptofolds.jpg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">CryptoFolds</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://medium.com/the-capital/defi-yield-protocol-dyp-staking-and-governance-is-now-live-e18c0f14a442"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "120px", left: "38px", bottom: "auto" }}
                  >
                    <img src="img/news/medium.jpg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Medium</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://u.today/defi-yield-protocol-launches-staking-and-governance-dapp"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "3px", left: "49px", bottom: "auto" }}
                  >
                    <img src="img/news/utoday.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">U.today</div>
                    </div>
                  </a>
                  <a
                    href="https://finance.yahoo.com/news/defi-yield-protocol-dyp-staking-163000220.html"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner big d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "9px", bottom: "17px" }}
                  >
                    <img src="img/news/yahoo.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Yahoo Finance</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://news.bitcoin.com/dyp-launches-staking-and-governance-dapp/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "84px", left: "15px", bottom: "auto" }}
                  >
                    <img src="img/news/bitcoincom.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">BitcoinCom</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://bitcoinist.com/defi-yield-protocol-debuts-new-staking-and-governance-dapp/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "23px", left: "18px", bottom: "auto" }}
                  >
                    <img src="img/news/bitcoinist.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Bitcoinist</div>
                    </div>
                  </a>
                  <a
                    href="https://apnews.com/press-release/accesswire/business-prices-deflation-economy-54076ee83d21025c63d8347c8accc1e2"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "37px", bottom: "39px" }}
                  >
                    <img src="img/news/apnews.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">ApNews</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://coinmarketcap.com/headlines/news/defi-yield-protocol-launches-staking-and-governance-dapp-dyp-holders-earn-ethereum/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner big d-flex align-items-center justify-content-center"
                    style={{ top: "97px", left: "24px", bottom: "auto" }}
                  >
                    <img src="img/news/coinmarketcap.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Coinmarketcap</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://hackernoon.com/defi-projects-that-offer-top-staking-rewards-in-2021-7fs34qs"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "45px", left: "51px", bottom: "auto" }}
                  >
                    <img src="img/news/hackernoon.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">HackerNoon</div>
                    </div>
                  </a>
                  <a
                    href="https://coindoo.com/dyp-maximizing-the-benefits-of-yield-farming-protocols/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "46px", bottom: "61px" }}
                  >
                    <img src="img/news/coindoo.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Coindoo</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://www.newsbtc.com/news/company/defi-yield-protocol-launches-staking-and-governance-dapp-dyp-holders-earn-ethereum/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "130px", left: "22px", bottom: "auto" }}
                  >
                    <img src="img/news/newsbtc.jpg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">NewsBtc</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://btcmanager.com/defi-yield-protocol-dyp/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "18px", left: "35px", bottom: "auto" }}
                  >
                    <img src="img/news/btcmanager.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">BtcManager</div>
                    </div>
                  </a>
                  <a
                    href="https://coingape.com/how-to-use-dyp-to-earn-big-defi-rois/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "25px", bottom: "50px" }}
                  >
                    <img src="img/news/coingape.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">CoinGape</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://www.bitcoininsider.org/article/100387/defi-yield-protocol-dyp-provides-new-level-transparency-market"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "133px", left: "25px", bottom: "auto" }}
                  >
                    <img src="img/news/bitcoininsider.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">BitcoinInsider</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://www.cryptocompare.com/coins/guides/defi-yield-protocol-liquidity-providers-earn-25-000-in-eth-per-day-staking-dyp/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "34px", left: "31px", bottom: "auto" }}
                  >
                    <img src="img/news/cryptocompare.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">CryptoCompare</div>
                    </div>
                  </a>
                  <a
                    href="https://coincodex.com/article/10261/defi-yield-protocol-anti-manipulation-farm-yielding-platform/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "34px", bottom: "8px" }}
                  >
                    <img src="img/news/coincodex.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">CoinCodex</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://cryptopotato.com/tackling-volatility-issues-for-liquidity-providers-with-defi-yield-protocol-dyp/"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "82px", left: "31px", bottom: "auto" }}
                  >
                    <img src="img/news/cryptopototo.jpg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">CryptoPototo</div>
                    </div>
                  </a>
                </div>

                <div className="partners-group py-3">
                  <a
                    href="https://hackernoon.com/5-defi-projects-you-should-know-about-in-2021-irq347a"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner medium d-flex align-items-center justify-content-center"
                    style={{ top: "15px", left: "28px", bottom: "auto" }}
                  >
                    <img src="img/news/hackernoon.jpeg" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">HackerNoon</div>
                    </div>
                  </a>
                  <a
                    href="https://finance.yahoo.com/news/investors-defi-yield-protocol-earned-151500497.html"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="partner small d-flex align-items-center justify-content-center"
                    style={{ top: "auto", left: "47px", bottom: "0px" }}
                  >
                    <img src="img/news/yahoo.png" />

                    <div className="partner-tooltip">
                      <div className="px-2 py-1">Yahoo Finance</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
