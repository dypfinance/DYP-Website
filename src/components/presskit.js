import React from "react";
import { NavLink } from "react-router-dom";
import Download from '../assets/images/download.svg'
export default class Presskit extends React.Component {
  render() {
    return (
      <>
        <div
          className="earn-hero-area App-container"
          style={{ paddingTop: 75 }}
        >
          <div className="container">
            <div className="earn-hero-wrapper">
              <div className="row">
                <div className="col-lg-5  offset-lg-2 ml-5">
                  <div
                    className="earn-hero-content p4token-wrapper"
                    style={{ boxShadow: "none", background: 'none' }}
                  >
                    <div className="text-left">
                      <div>
                        <span className="mediakit">OUR MEDIA KIT</span>
                        <h1 className="ptichDeck">& PITCH DECK</h1>
                      </div>
                      <br />
                      <p className="h3 mb-4">
                        Our guidelines layouts to our use of logo and assests
                        are avaliable to download and use the provided
                        specifications to your needs.
                      </p>
                      <div>
                        <div>
                          <div>
                              <h6>Media Kit</h6>
                              <p>Feel free to use these resources but please treat our brand well. Download the PDF document guidelines.</p>
                          </div>
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
                           <img src={Download} alt='download'/> Download brand kit
                          </a>
                          </div>
                        </div>
                      </div>
                      {/* <ul>
                        <li
                          style={{
                            listStyleType: "square",
                            listStylePosition: "inside",
                          }}
                        >
                          <a
                            style={{
                              color: "var(--color_white)",
                              textDecoration: "underline",
                              textDecorationThickness: "2px",
                            }}
                            className="mb-0"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://drive.google.com/drive/folders/1Sh77agasJV4iYn3xU25JS3phIIVBGeZg?usp=sharing"
                          >
                            Media Kit
                          </a>
                        </li>
                        <li
                          style={{
                            listStyleType: "square",
                            listStylePosition: "inside",
                          }}
                        >
                          <a
                            style={{
                              color: "var(--color_white)",
                              textDecoration: "underline",
                              textDecorationThickness: "2px",
                            }}
                            className="mb-0"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://drive.google.com/file/d/1RJVDUi6twu_dmf4gp-pOrrrXQIZ29uOx/view?usp=sharing"
                          >
                            Pitch Deck
                          </a>
                        </li>
                      </ul> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-5  offset-lg-2 ml-2">
                  <div
                    className="earn-hero-content p4token-wrapper"
                    style={{ boxShadow: "none" }}
                  >
                    <div className="text-left">
                      <br />
                      <p className="h3 mb-4">
                        Also we have our Pitch Deck which is a brief
                        presentation that gives our potential investors or
                        clients an overview of your business plan, products,
                        services and additional information they may require.
                      </p>
                      <div className="pitchDeckWrapper">
                        <div>
                          <div>
                              <h6>Pitch Deck </h6>
                              <p>Pitch Deck Feel free to download our Pitch Deck presentation that coints information of who we are and our products & services</p>
                          </div>
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
                           <img src={Download} alt='download'/> Download brand kit
                          </a>
                          </div>
                        </div>
                      </div>
                      {/* <ul>
                        <li
                          style={{
                            listStyleType: "square",
                            listStylePosition: "inside",
                          }}
                        >
                          <a
                            style={{
                              color: "var(--color_white)",
                              textDecoration: "underline",
                              textDecorationThickness: "2px",
                            }}
                            className="mb-0"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://drive.google.com/drive/folders/1Sh77agasJV4iYn3xU25JS3phIIVBGeZg?usp=sharing"
                          >
                            Media Kit
                          </a>
                        </li>
                        <li
                          style={{
                            listStyleType: "square",
                            listStylePosition: "inside",
                          }}
                        >
                          <a
                            style={{
                              color: "var(--color_white)",
                              textDecoration: "underline",
                              textDecorationThickness: "2px",
                            }}
                            className="mb-0"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://drive.google.com/file/d/1RJVDUi6twu_dmf4gp-pOrrrXQIZ29uOx/view?usp=sharing"
                          >
                            Pitch Deck
                          </a>
                        </li>
                      </ul> */}
                    </div>
                  </div>
                </div>
                {/*<div className='col-lg-8 offset-lg-2 mt-5'>*/}
                {/*    <div className="farming-content">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-lg-4 col-md-4 col-6">*/}
                {/*                <a href="https://www.blockchainconsilium.com/" target='_blank'>*/}
                {/*                    <div className="fariming-item">*/}
                {/*                        <div className="icon">*/}
                {/*                            <img src="img/w2.svg" alt="Image not found" />*/}
                {/*                            <div className="line"></div>*/}
                {/*                        </div>*/}
                {/*                        <p>Blockchain Consilium</p>*/}
                {/*                    </div>*/}
                {/*                </a>*/}
                {/*            </div>*/}
                {/*            <div className="col-lg-4 col-md-4 col-6">*/}
                {/*                <a href='https://www.certik.org/' target='_blank'>*/}
                {/*                    <div className="fariming-item">*/}
                {/*                        <div className="icon">*/}
                {/*                            <img src="img/w3.svg" alt="Image not found" />*/}
                {/*                        </div>*/}
                {/*                        <div className="line"></div>*/}
                {/*                        <p>Certik Foundation</p>*/}
                {/*                    </div>*/}
                {/*                </a>*/}
                {/*            </div>*/}
                {/*            <div className="col-lg-4 col-md-4 col-6">*/}
                {/*                <a href="https://peckshield.com/en" target='_blank'>*/}
                {/*                    <div className="fariming-item">*/}
                {/*                        <div className="icon">*/}
                {/*                            <img src="img/w1.svg" alt="Image not found" />*/}
                {/*                        </div>*/}
                {/*                        <div className="line"></div>*/}
                {/*                        <p>Peckshield</p>*/}
                {/*                    </div>*/}
                {/*                </a>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
