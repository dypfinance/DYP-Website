import React, {useState, useRef} from "react";
import validate from "./validateinfo";
import Payment from "./payment.png";
import Mail from "./mail.png"
import Button from "../../assets/General/Button";
import ChevronArrowSvg from "../../assets/General/ChevronArrowSvg/ChevronArrowSvg";
import ReCaptchaV2 from "react-google-recaptcha"
import axios from "axios";
import $alert from "../../functions/$alert";

import "./contact.scss";

const Contact = () =>
{
    const recaptchaRef = useRef(null)

    const initialState = {
        email:'',
        subject:'',
        message:'',
        recaptcha:''
    }

    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState({});

    const handleChange = async (e) => {

        const {name, value} = e.target

        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = async (e) =>
    {
        e.preventDefault();

        setErrors(validate(values));

        if(Object.keys(errors).length === 0)
        {
            const captchaToken = await recaptchaRef.current.executeAsync();

            const data = {
                email: values.email,
                subject: values.subject,
                message: values.message,
                recaptcha: captchaToken
            }

            if(values.message !== "" && values.subject !== "" && values.email !== "")
            {
                const send = await axios.post("https://api-mail.dyp.finance/api/contact", data).then(function (result)
                {
                    return result.data

                }).catch(function (error)
                {
                    console.error(error)
                })

                if(send.status === 1)
                {
                    const bios = {
                        alert: {
                            title: "Message sent",
                            content: "Your message has been sent successfully.",
                        },
                    };

                    $alert(bios["alert"]);
                }
                else
                {
                    const bios = {
                        alert: {
                            title: "Error",
                            content: "Something goes to wrong.",
                        },
                    };

                    $alert(bios["alert"]);
                }
            }

            recaptchaRef.current.reset();

            setValues({ ...initialState });
        }
    };

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
                            >

                            </div>
                            <div
                                class="ball-decoration"
                                style={{ width: 200, height: 200, top: "420px", left: "-8px" }}
                            >

                            </div>
                            <div
                                class="big-circle-decoration"
                                style={{
                                    width: 508,
                                    height: 508,
                                    right: "0px",
                                    top: "302px",
                                }}
                            >

                            </div>

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
                                                    <label form="email" htmlFor="email">
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
                                                    <label form="inputAddress" htmlFor="subject">
                                                        Subject
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="subject"
                                                        id="inputAddress"
                                                        value={values.subject}
                                                        onChange={handleChange}
                                                        placeholder="Subject"
                                                    />
                                                    {errors.message && (
                                                        <span className="errormessage">
                              {errors.subject}
                            </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label form="inputAddress" htmlFor="message">
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
                                            <ReCaptchaV2 sitekey={ process.env.REACT_APP_GOOGLE_RECAPTCHA_PUBLIC_KEY }
                                                         style={{ display: "inline-block" }}
                                                         theme="dark"
                                                         size="invisible"
                                                         ref={recaptchaRef}
                                            />
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
                                    >

                                    </div>
                                    <img src={Payment}  alt="" />
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
