import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
// import SvgEyeIcon from "../NftCawCard/SvgEyeIcon";
import EthLogo from "../../../../../assets/General/eth-create-nft.png";
import CountDownTimer from "../../../../elements/Countdown";
import { formattedNum } from "../../../../../functions/formatUSD";

const NftStakingCawChecklist = ({
                                    modalId,
                                    nft,
                                    isStake,
                                    checked,
                                    checklistItemID,
                                    onChange,
                                }) => {
    const [checkbtn, setCheckBtn] = useState(false);
    const [Unstakebtn, setUnstakeBtn] = useState(false);
    const [isconnectedWallet, setisConnectedWallet] = useState(false);
    const [EthRewards, setEthRewards] = useState(0);
    const [cawsIdsArray, setCawsIdsArray] = useState([]);
    const [ethToUSD, setethToUSD] = useState(0);

    const checkConnection = async () => {
        let test = await window.web3.eth?.getAccounts().then((data) => {
            data.length === 0
                ? setisConnectedWallet(false)
                : setisConnectedWallet(true);
        });
    };

    const convertEthToUsd = async () => {
        const res = axios
            .get("https://api.coinbase.com/v2/prices/ETH-USD/spot")
            .then((data) => {
                return data.data.data.amount;
            });
        return res;
    };

    const calculateReward = async (currentId) => {
        const address = await window.web3.eth?.getAccounts().then((data) => {
            return data[0];
        });

        let calculateRewards;
        let staking_contract = await window.getContract("NFTSTAKING");

        calculateRewards = await staking_contract.methods
            .calculateReward(address, [currentId])
            .call()
            .then((data) => {
                return data;
            })
            .catch((err) => {
                // window.alertify.error(err?.message);
            });

        let a = await window.web3.utils.fromWei(calculateRewards, "ether");
        const ethprice = await convertEthToUsd();
        setethToUSD(Number(ethprice) * Number(a));
        setEthRewards(Number(a));
    };

    const handleClaim = async (itemId) => {
        let staking_contract = await window.getContract("NFTSTAKING");

        await staking_contract.methods
            .claimRewards([itemId])
            .send()
            .then(() => {
                // setethToUSD(0);
                setEthRewards(0);
            })
            .catch((err) => {
                window.alertify.error(err?.message);
            });
    };

    useEffect(() => {
        checkConnection().then();
        if (isconnectedWallet) {
            getStakesIds().then();
        }

        const interval = setInterval(async () => {
            if (isconnectedWallet) {
                calculateReward(checklistItemID).then();
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [EthRewards, checklistItemID, isconnectedWallet]);

    useEffect(() => {
        setCheckBtn(checked);
        setUnstakeBtn(checked);
    }, [checked]);

    if (!nft) {
        return null;
    }

    const handleCheckButton = async (checklistItemID) => {
        let mystakes = await getStakesIds().then();
        let arrayOfCheckedItems = mystakes;

        const testt = mystakes;
        setCheckBtn(!checkbtn);

        const test = arrayOfCheckedItems.filter(
            (item, index) => mystakes[index] == checklistItemID
        );
        // setCawsIdsArray([...test, ...cawsIdsArray])
        cawsIdsArray.push(test);

        // console.log(cawsIdsArray);
    };

    const getStakesIds = async () => {
        const address = await window.web3.eth?.getAccounts().then((data) => {
            return data[0];
        });
        let staking_contract = await window.getContract("NFTSTAKING");
        let stakenft = [];
        let myStakes = await staking_contract.methods
            .depositsOf(address)
            .call()
            .then((result) => {
                for (let i = 0; i < result.length; i++)
                    stakenft.push(parseInt(result[i]));
                return stakenft;
            });
        return myStakes;
    };

    return (
        <>
            <div className="nft-caw-card" data-toggle="modal" data-target={modalId}>
                <div
                    className="elevated-stake-container"
                    style={{ background: !isStake ? "transparent" : "#fff" }}
                >
                    <div
                        style={{
                            background: isStake
                                ? checked && Unstakebtn
                                    ? "linear-gradient(209.67deg, #FF4229 1.51%, #E30613 98.12%)"
                                    : "white"
                                : checkbtn && !isStake
                                    ? "linear-gradient(209.67deg, #FF4229 1.51%, #E30613 98.12%)"
                                    : "white",
                        }}
                        className="sub-container"
                    >
                        <img
                            src={nft.image.replace("images", "thumbs")}
                            className="nft-img"
                            alt=""
                        />
                        <p
                            style={{
                                color: isStake
                                    ? checked && Unstakebtn
                                        ? "#fff"
                                        : "var(--light-gray-99-nft)"
                                    : checkbtn && !isStake
                                        ? "#fff"
                                        : "var(--light-gray-99-nft)",
                            }}
                        >
                            CAWS {checklistItemID}
                        </p>
                        <div className="footer">
                            <p
                                className="nft-id"
                                style={{
                                    color: isStake
                                        ? checked && Unstakebtn
                                            ? "#fff"
                                            : "var(--black-nft)"
                                        : checkbtn && !isStake
                                            ? "#fff"
                                            : "var(--black-nft)",
                                }}
                            >
                                #{String(nft.name).replace("CAWS #", "")}
                            </p>
                            {/* <div className="img">
              <SvgEyeIcon />
            </div> */}
                        </div>
                    </div>
                    {isStake ? (
                        <>
                            <div className="earn-checklist-container ">
                                <p id="earnedText">Earned</p>
                                <div>
                                    <p id="ethPrice">{EthRewards}ETH</p>
                                    <p id="fiatPrice">{formattedNum(ethToUSD, true)}</p>
                                </div>
                                <img src={EthLogo} alt="" style={{ width: 24, height: 24 }} />
                            </div>
                            <button
                                className="claim-rewards-btn-countdown mb-1"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleClaim(checklistItemID);
                                }}
                                style={{
                                    pointerEvents: EthRewards == 0 ? "none" : "auto",
                                    borderColor: EthRewards == 0 ? "#C4C4C4" : "#FF0000",
                                    color: EthRewards == 0 ? "#fff" : "#FF0000",
                                    background: EthRewards == 0 ? "#C4C4C4" : "#fff",
                                }}
                            >
                                Claim reward
                            </button>
                            {/* <div className="earnwrapper justify-content-center">
                <CountDownTimer date={"Wed, 23 Apr 2022 13:06:00 GMT-0000"} />
              </div>*/}
                            <button
                                className="checkbox-button"
                                onClick={() => {
                                    setUnstakeBtn(!Unstakebtn);
                                    onChange(checklistItemID);
                                }}
                                style={{
                                    background:
                                        (!checked && !Unstakebtn) || (checked && !Unstakebtn)
                                            ? "linear-gradient(51.32deg, #e30613 -12.3%, #fa4a33 50.14%)"
                                            : "#C4C4C4",
                                }}
                            >
                                <input
                                    type="checkbox"
                                    id={checklistItemID}
                                    name="AddtoUnstake"
                                    checked={Unstakebtn}
                                />
                                {!Unstakebtn && isStake ? "Select" : "UnSelect"}
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                className="checkbox-button"
                                onClick={
                                    // handleCheckButton(checklistItemID)
                                    () => {
                                        setCheckBtn(!checkbtn);
                                        onChange(checklistItemID);
                                    }
                                }
                                style={{
                                    background:
                                        (!checked && !checkbtn) || (checked && !checkbtn)
                                            ? "linear-gradient(51.32deg, #e30613 -12.3%, #fa4a33 50.14%)"
                                            : "#C4C4C4",
                                }}
                            >
                                <input
                                    type="checkbox"
                                    id={checklistItemID}
                                    name="checkbtn"
                                    checked={checkbtn}
                                    onChange={(e) => {
                                        //console.log(e.target.id);
                                    }}
                                />
                                {(!checked && !checkbtn) || (checked && !checkbtn && !isStake)
                                    ? "Add to Stake"
                                    : "Remove Stake"}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};
NftStakingCawChecklist.propTypes = {
    modalId: PropTypes.string,
    nft: PropTypes.object,
    isStake: PropTypes.bool,
    checked: PropTypes.bool,
    checklistItemID: PropTypes.number,
    onChange: PropTypes.func,
};

export default NftStakingCawChecklist;
