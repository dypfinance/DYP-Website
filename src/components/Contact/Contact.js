import React from "react";
import useForm from "./useForm";
import validate from "./validateinfo";
import Payment from "./payment.png";
import Mail from './mail.png'
import Button from "../../assets/General/Button";
import ChevronArrowSvg from "../../assets/General/ChevronArrowSvg/ChevronArrowSvg";

import "./contact.scss";
const Contact = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);
  return (
    <>
      <div className="earn-hero-area App-container" style={{ paddingTop: 75, paddingBottom: 75 }}>
        <div
          className="container"
          style={{
            // height: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="earn-hero-wrapper">
            <div className="row align-items-center content-wrapper">
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
                style={{ width: 200, height: 200, top: "420px", left: "-8px" }}
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
              
              <div className="col-lg-7  offset-lg-2 ml-0">
                <div
                  className="earn-hero-content p4token-wrapper"
                  style={{ background: "white" }}
                >
                  <div className="form-wrapper">
                    <form className="contactform" onSubmit={handleSubmit}>
                      <h1>Contact Us</h1>
                      <div className="row justify-content-between">
                        <div className="form-group col-md-6">
                          <label for="email" htmlFor="email">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="@gmail.com"
                          />
                          {errors.email && (
                            <span className="errormessage">{errors.email}</span>
                          )}
                        </div>

                        <div className="form-group col-md-6">
                          <label for="inputAddress" htmlFor="subject">
                            Question
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="subject"
                            id="inputAddress"
                            value={values.subject}
                            onChange={handleChange}
                            placeholder="Questions"
                          />
                          {errors.message && (
                            <span className="errormessage">
                              {errors.subject}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="inputAddress" htmlFor="message">
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          id="inputAddress"
                          onChange={handleChange}
                          name="message"
                          value={values.message}
                          rows="4"
                          cols="50"
                        />

                        {errors.message && (
                          <span className="errormessage">{errors.message}</span>
                        )}
                      </div>
                      <Button
                        style={{ padding: "6px 24px" }}
                        text="Send"
                        icon={<ChevronArrowSvg />}
                        action={() => {}}
                      />
                    </form>
                    <img src={Mail} alt='' id='mail-icon'/>
                  </div>
                </div>
              </div>
              <div className="col-lg-5  offset-lg-2 ml-0">
                <div
                  className="earn-hero-content p4token-wrapper hero-img-wrapper p-0"
                  style={{ boxShadow: "none", background: "none" }}
                >
                  <div
                    class="ball-decoration"
                    style={{
                      width: "420px",
                      height: " 508px",
                      left: "157px",
                      zIndex: "-1",
                      top: "-28px",
                    }}
                  ></div>
                  <img src={Payment} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
