import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import SvgEyeIcon from "../NftCawCard/SvgEyeIcon";
import EthLogo from "../../../../../assets/General/eth-create-nft.png";
import CountDownTimer from "../../../../elements/Countdown";

const NftStakingCawChecklist = ({
  modalId,
  nft,
  isStake,
  checked,
  checklistItemID,
}) => {
  const [checkbtn, setCheckBtn] = useState(false);
  const [Unstakebtn, setUnstakeBtn] = useState(false);
  const [isconnectedWallet, setisConnectedWallet] = useState(false);
  const [EthRewards, setEthRewards] = useState(0);
  const [cawsIdsArray, setCawsIdsArray] = useState([]);

  const checkConnection = async () => {
    let test = await window.web3.eth?.getAccounts().then((data) => {
      data.length === 0
        ? setisConnectedWallet(false)
        : setisConnectedWallet(true);
    });
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

    setEthRewards(Number(a));
  };

  const handleClaim = async (itemId) => {
    let staking_contract = await window.getContract("NFTSTAKING");

    await staking_contract.methods
      .claimRewards([itemId])
      .send()
      .then(() => {
        setEthRewards(0);
      })
      .catch((err) => {
        window.alertify.error(err?.message);
      });
  };

  useEffect(() => {
    checkConnection().then();
    const interval = setInterval(async () => {
      if (isconnectedWallet) {
        calculateReward(checklistItemID).then();
        getStakesIds().then();
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

    // a.push(...checklistItemID)
    console.log(test);
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
              background: isStake ? (checked && Unstakebtn)
                  ? "linear-gradient(209.67deg, #FF4229 1.51%, #E30613 98.12%)"
                  : "white"
                : (checkbtn && !isStake)
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
                color:
                
                  !checkbtn && !isStake && !checked
                    ? "var(--light-gray-99-nft)"
                    : isStake
                    ? "var(--light-gray-99-nft)"
                    : "#fff",
              }}
            >
              CAWS {checklistItemID}
            </p>
            <div className="footer">
              <p
                className="nft-id"
                style={{
                  color:
                    !checkbtn && !isStake && !checked
                      ? "var(--black-nft)"
                      : isStake
                      ? "var(--black-nft)"
                      : "#fff",
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
                <p id="earnedText">Earned {checklistItemID}</p>
                <div>
                  <p id="ethPrice">{EthRewards}ETH</p>
                  <p id="fiatPrice">$tbd</p>
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
                onClick={() => {
                  // setCawsIdsArray(...checklistItemID);
                  handleCheckButton(checklistItemID);
                }}
                className="checkbox-button"
                onClick={() => {
                  setUnstakeBtn(!Unstakebtn);
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
                  id="add-to-unstake"
                  name="AddtoUnstake"
                  checked={Unstakebtn}
                  // onChange={(e)=>{console.log(e)}}
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
                  id="add-to-stake"
                  name="checkbtn"
                  checked={checkbtn}
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
};

export default NftStakingCawChecklist;
