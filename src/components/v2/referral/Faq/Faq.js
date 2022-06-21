import React, { useState } from "react";
import Search from "../assets/search.svg";
import Close from "../assets/close.svg";

const Faq = () => {
  const faq = [
    {
      question: "What is the referral program?",
      answer:
        "One of the ways Defi Yield Protocol can reward you for spreading the word about our products is through our referral program. You can use the referral program to create a unique link that you can share on one of your social media platforms, and users who join Defi Yield Protocol after clicking on that link are considered your referrals.",
    },
    {
      question: "How does the referral program work?",
      answer:
        "After one of your followers clicks on your personal link and signs up through it, you will earn a lifetime commission for each investment that is made on our site by that user. Depending on the size of the investment, you can also earn a sign-up bonus of up to $300. Additionally, you can earn a 5% Lifetime commission for each friend you invite, and there are continuous special campaigns that offer even more rewards.",
    },
    {
      question: "What are the benefits of using the referral program?",
      answer:
        "By using the referral program, you can be rewarded by spreading the word about our products safely and hassle-free. This is a way for you to utilize our platform to the fullest and earn a long lasting, solid stream of revenue – even if you’re not looking to make investments yourself. The referral program has been designed by experts of referral and affiliate programs, who have ensured a manipulation-proof process with completely fair and attainable rewards by every user. We utilize a 45 Day Cookie Duration period, ensuring that your referrals have more than enough time to make a decision and start earning you rewards.",
    },
    { question: "What does the 45 Day Cookie Duration period mean for me?" },
    { question: "How can I invite a referral?" },
    { question: "Where can I share my referral link and banners?" },
    { question: "Who can I invite to the referral program?" },
    { question: "How can I invite to the referral program?" },
  ];

  const [clicked, setClicked] = useState(false);
  return (
    <div className="faq_wrapper">
      <div className="left_faq">
        <h1 className="faq_title">FAQ & Contact</h1>
        <p className="faq_subtitle">
          Here you can find a list of our most frequently asked questions. If
          you’re unable to find what you’re looking for, feel free to contact us
          directly.
        </p>
        <div style={{ padding: "15px 0" }} className="referral">
          <div className="referral-wrapper">
            <div
              style={{
                padding: "20px 20px 0",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h2 className="contactus">Contact Us</h2>
            </div>
            <div
              className="row justify-content-between m-0"
              style={{ padding: "20px" }}
            >
              <h6 className="contact_subtitle">
                Unable to find what you’re looking for here? If you have any
                questions or issues, you can contact us directly.
              </h6>
              <button className="white-details-btn">Contact us</button>
            </div>
          </div>
        </div>
        <div className="earn_wrapper">
          <h6>Earnings breakdown</h6>

          <div className="search_wrapper2">
            <div className="d-flex">
              <input
                type="text"
                className="search_input2"
                placeholder="Search"
              />
              <div className="search_icon_wrapper">
                <img
                  src={Search}
                  alt=""
                  style={{ width: 20, height: 20, cursor: "pointer" }}
                />
              </div>
              <div className="x_icon_wrapper">
                <img
                  src={Close}
                  alt=""
                  style={{
                    width: 15,
                    height: 25,
                    cursor: "pointer",
                    background: "#FCFCFC",
                  }}
                />
              </div>
            </div>
            <div>
              {faq.length > 0 &&
                faq.map((item, index) => (
                  <p key={index} className={"singlefaq"}>
                    {item.question}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="right_faq">
        {faq.length > 0 &&
          faq.map((item, index) => (
            <>
              {index < 3 && (
                <>
                  <h5>
                    <b>{item.question}</b>
                  </h5>
                  <br />
                  <p key={index} style={{ textAlign: "justify" }}>
                    {item.answer}
                  </p>
                </>
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default Faq;
