import React from "react";
import MediaKit from "../assets/images/mediaKit.png";
import Download from "../assets/images/download.svg";
import PitchDeck from "../assets/images/pitchDeck.png";

export default class Presskit extends React.Component {
  render() {
const devicewidth = window.innerWidth;

    return (
      <>
        <div
          className="earn-hero-area App-container"
          style={{ paddingTop: 75 }}
        >
          <div className="container" style={{height: devicewidth < 900 ? 'auto' : '70vh'}}>
            <div className="earn-hero-wrapper mt-5">
              <div className="row">
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
                  style={{ width: 97, height: 97, top: "350px", left: "-8px" }}
                ></div>
                <div
                  class="big-circle-decoration"
                  style={{
                    width: 508,
                    height: 508,
                    right: "0px",
                    top: "302px",
                  }}
                ></div>
                <div
                  class="ball-decoration"
                  style={{
                    width: 97,
                    height: 97,
                    top: "550px",
                    right: "0px",
                  }}
                ></div> 
                <div className="col-lg-6  offset-lg-2 ml-0">
                  <div
                    className="earn-hero-content p4token-wrapper px-0"
                    style={{ boxShadow: "none", background: "none" }}
                  >
                    <div className="text-left">
                      <div>
                        <span className="mediakit">OUR MEDIA KIT</span><br/>
                        <span className="ptichDeck">& PITCH DECK</span>
                      </div>
                      <br />
                      {/*<p className="h3 mb-4">*/}
                      {/*  Our guidelines layouts to our use of logo and assests*/}
                      {/*  are avaliable to download and use the provided*/}
                      {/*  specifications to your needs.*/}
                      {/*</p>*/}
                      <div>
                        <div className="pressContainers d-flex align-items-center">
                          <img
                            src={MediaKit}
                            alt="mediakit"
                            className='pressimg'
                          />
                          <div className="pl-4">
                            <h6>Media Kit</h6>
                            <p>
                              Feel free to use these resources but please treat our brand well.
                              Download the PDF document guidelines.
                            </p>

                            <div className="go-buy-button">
                              <a
                                style={{
                                  color: "#fff",
                                  textDecoration: "none",
                                  textDecorationThickness: "2px",
                                }}
                                className="mb-0"
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://drive.google.com/drive/folders/1Sh77agasJV4iYn3xU25JS3phIIVBGeZg?usp=sharing"
                              >
                                <img src={Download} alt="download" /> Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6  offset-lg-2 ml-0">
                  <div
                    className="earn-hero-content p4token-wrapper px-0"
                    style={{ boxShadow: "none", background: "none" }}
                  >
                    <div className="text-left">
                      <div style={{ visibility: "hidden" }}>
                        <span className="mediakit">OUR MEDIA KIT</span>
                        <h1 className="ptichDeck">& PITCH DECK</h1>
                      </div>
                      <br />
                      {/*<p className="h3 mb-2">*/}
                      {/*  Also we have our Pitch Deck which is a brief*/}
                      {/*  presentation that gives our potential investors or*/}
                      {/*  clients an overview of your business plan, products,*/}
                      {/*  services and additional information they may require.*/}
                      {/*</p>*/}
                      <div className="pitchDeckWrapper">
                        <div className="pressContainers">
                          <img
                            src={PitchDeck}
                            className='pressimg'
                            alt="pitchdeck"
                          />
                          <div className="pl-4">
                            <h6>Pitch Deck </h6>
                            <p>
                              Feel free to download our Pitch Deck presentation
                              that contains information of who we are and our products & services.
                            </p>

                            <div className="go-buy-button">
                              <a
                                style={{
                                  color: "#fff",
                                  textDecoration: "none",
                                  textDecorationThickness: "2px",
                                }}
                                className="mb-0"
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://drive.google.com/file/d/1Qq4licpNnRNTUAA3k1XapCwMEqAhhbQD/view"
                              >
                                <img src={Download} alt="download" /> Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
