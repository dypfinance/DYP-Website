import Modal from "@mui/material/Modal";
import _ from "lodash";
import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import showToast from "../../../../../Utils/toast";
import Box from "@mui/material/Box";
import ToolTip from "../../../../elements/ToolTip";
import X from "../../../../../assets/images/x_close.png";
import NftPlaceHolder from "../../General/NftPlaceHolder/NftPlaceHolder";

import NftStakingCawChecklist from "../../General/NftStakingCawChecklist/NftStakingCawChecklist";

const NftStakeCheckListModal = ({
                                    nftItem,
                                    open,
                                    onShareClick,
                                    onClose,
                                    onshowToStake,
                                    onshowStaked,
                                    onUnstake,
                                    onClaimAll,
                                    link,
                                }) => {
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: window.innerWidth < 500 ? '77%' : "55%",
        // bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        overflow: "scroll",
        height: "80%",
    };

    const [active, setActive] = useState(true);
    const [showToStake, setshowToStake] = useState(false);
    const [showStaked, setshowStaked] = useState(false);
    const [checkbtn, setCheckBtn] = useState(false);
    const [checkUnstakebtn, setCheckUnstakeBtn] = useState(false);

    const [status, setStatus] = useState(" *Please approve before deposit");
    const [loading, setloading] = useState(false);
    const [loadingdeposit, setloadingdeposit] = useState(false);
    const [showClaim, setshowClaim] = useState(false);
    const [loadingClaim, setloadingClaim] = useState(false);
    const [connectedWallet, setConnectedWallet] = useState(false);
    const [apr, setapr] = useState(0);
    const [showApprove, setshowApprove] = useState(true);
    const [val, setVal] = useState('')

    //Array of selected NFTs
    const [selectNftIds,setSelectedNftIds] = useState([]);

    // array containing items whether Staked or To Stake

    const checkApproval = async () => {
        const address = await window.web3.eth?.getAccounts().then((data) => {
            return data[0];
        });
        if (address) {
            setConnectedWallet(true);
        } else setConnectedWallet(false);

        const stakeApr50 = await window.config.nftstaking_address50;

        if (apr == 50) {
            const result = await window.nft
                .checkapproveStake(address, stakeApr50)
                .then((data) => {
                    return data;
                });
            if (result === true) setshowApprove(false);
            else {
                setshowApprove(true);
            }
        }
    };

    const handleSelectAll = () => {
        setCheckBtn(!checkbtn);
    };

    const handleSelectAllToUnstake = () => {
        setCheckUnstakeBtn(!checkUnstakebtn);
        setCheckBtn(false);
    };

    const handleApprove = async () => {
        const stakeApr25 = await window.config.nftstaking_address;
        const stakeApr50 = await window.config.nftstaking_address50;

        setloading(true);
        setStatus("*Waiting for approval");
        await window.nft
            .approveStake(apr == 25 ? stakeApr25 : stakeApr50)
            .then(() => {
                setActive(false);
                setloading(false);
                setStatus("*Now you can deposit");
            })
            .catch((err) => {
                setloading(false);
                setStatus("*An error occurred. Please try again");
            });
    };

    const handleDeposit = async (value) => {

        let stake_contract = await window.getContract("NFTSTAKING");
        setloadingdeposit(true);
        setStatus("*Processing deposit");

        await stake_contract.methods
            .deposit(checkbtn === true ? nftIds : [parseInt(value)])
            .send()
            .then(() => {
                setloadingdeposit(false);
                setshowClaim(true);
                setActive(true);
                setStatus("*Sucessful deposit");
            })
            .catch((err) => {
                setloadingdeposit(false);
                setStatus("*An error occurred. Please try again");
            });
    };

    useEffect(() => {
        setshowStaked(true);

    }, []);

    useEffect(() => {
        checkApproval().then();
    }, [apr]);
    let nftIds = [];

    // const onChangeHandler = ({ target }) => {
    //   _.set(_, target.name, target.checked)
    // };


    const handleUnstake = async (value) => {

        let stake_contract = await window.getContract("NFTSTAKING");
        setStatus('Unstaking please wait...');

        await stake_contract.methods
            .withdraw([parseInt(value)])
            .send()
            .then(() => {
                setStatus('Successfully unstaked!');

            })
            .catch((err) => {
                window.alertify.error(err?.message);
                setStatus('An error occurred, please try again');
            });
    };
    const placeholder = 4;

    return (
        <Modal
            open={open}
            onClose={() => {
                onClose();
                setCheckUnstakeBtn(false);
                setCheckBtn(false);
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className="left-col">
                    <div className="d-flex align-items-center justify-content-between width-100">
                        <div className="rarity-rank d-grid">
                            <h3 className="" style={{fontSize: 16}}>Stackable NFTs</h3>
                            <h6 className="checklist-subtitle">
                                A list of your NFT collection that can be added and removed from
                                the staking rewards
                            </h6>
                        </div>
                        <img
                            src={X}
                            alt=""
                            className="close-x"
                            onClick={() => {
                                onClose();
                                setCheckUnstakeBtn(false);
                                setCheckBtn(false);
                            }}
                        />
                    </div>
                    <div>
                        <div className="sub-navbar-wrapper">
                            <h5
                                className="to-stake-title"
                                onClick={() => {
                                    onshowToStake();
                                    setshowToStake(true);
                                    setshowStaked(false);
                                    //Make selectedNfts empty []
                                    setSelectedNftIds([]);
                                }}
                                style={{
                                    color: showToStake ? "#E30613" : "#C4C4C4",
                                    borderBottom: showToStake ? "2px solid #E30613" : "none",
                                }}
                            >
                                To Stake
                            </h5>
                            <h5
                                className="to-stake-title"
                                onClick={() => {
                                    onshowStaked();
                                    setshowStaked(true);
                                    setshowToStake(false);
                                    //Make selectedNfts empty []
                                    setSelectedNftIds([]);
                                }}
                                style={{
                                    color: showStaked ? "#E30613" : "#C4C4C4",
                                    borderBottom: showStaked ? "2px solid #E30613" : "none",
                                }}
                            >
                                Staked
                                {showStaked && (
                                    <sup className="sup-notification">
                                        <span style={{marginTop: 4}}>{nftItem.length}</span>
                                    </sup>
                                )}
                            </h5>
                        </div>
                        {showToStake ? (
                            <div className="d-flex justify-content-end">
                                <button
                                    onClick={() => {
                                        handleSelectAll();
                                    }}
                                    className="select-all-btn"
                                >
                                    {" "}
                                    <input
                                        type="checkbox"
                                        id="add-to-stake"
                                        name="checkbtn"
                                        checked={checkbtn}
                                        onChange={() => {
                                        }}
                                    />
                                    {checkbtn ? "Unselect All" : "Select All"}
                                </button>
                            </div>
                        ) : (
                            <div className="d-flex justify-content-end">
                                <button
                                    onClick={() => {
                                        handleSelectAllToUnstake();
                                    }}
                                    className="select-all-btn"
                                >
                                    {" "}
                                    <input
                                        type="checkbox"
                                        id="add-to-stake"
                                        name="AddtoUnstake"
                                        checked={checkUnstakebtn}
                                    />
                                    {checkUnstakebtn ? "Unselect All" : "Select All"}
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="caw-card2">
                        <div className="caw-card2 align-items-center">
                            {nftItem.length == 0 ? (
                                [...Array(placeholder)].map((item, id) => {
                                    return (
                                        <NftPlaceHolder
                                            key={id}
                                            onMintClick={() => {
                                                onClose();
                                                setCheckUnstakeBtn(false);
                                                setCheckBtn(false);
                                            }}
                                        />
                                    );
                                })
                            ) : nftItem.length <= 4 ? (
                                <>
                                    {nftItem.map((item, id) => {
                                        let nftId = item.name?.slice(6, nftItem.name?.length);
                                        if (checkbtn === true && showStaked) {
                                            nftIds.push(nftId);
                                        }

                                        if (showToStake) {
                                            nftIds.push(nftId);

                                        }
                                        if (!checkUnstakebtn && showStaked && !checkbtn) {
                                            nftIds.push(nftId);
                                        }
                                        return (
                                            <>
                                                <NftStakingCawChecklist
                                                    key={id}
                                                    nft={item}
                                                    modalId="#newNftchecklist"
                                                    isStake={showStaked}
                                                    checked={
                                                        (!showStaked && checkbtn) ||
                                                        (showStaked && checkUnstakebtn)
                                                    }
                                                    checklistItemID={nftId}
                                                    onChange={(value) => {
                                                        console.log('tobe');
                                                        setVal(value);
                                                    }}
                                                />
                                            </>
                                        );
                                    })}
                                    {[...Array(placeholder)].map((item, id) => {
                                        return (
                                            <NftPlaceHolder
                                                key={id}
                                                onMintClick={() => {
                                                    onClose();
                                                    setCheckUnstakeBtn(false);
                                                    setCheckBtn(false);
                                                }}
                                            />
                                        );
                                    })}
                                </>
                            ) : (
                                nftItem.map((item, id) => {
                                    let nftId = item.name?.slice(6, nftItem.name?.length);
                                    if (checkbtn === true && showStaked) {
                                        nftIds.push(nftId);
                                    }

                                    if (!checkUnstakebtn && showStaked && !checkbtn) {
                                        nftIds.push(nftId);
                                    }

                                    if (showToStake) {
                                        nftIds.push(nftId);
                                    }
                                    return (
                                        <>
                                            <NftStakingCawChecklist
                                                key={id}
                                                nft={item}
                                                action={onShareClick}
                                                modalId="#newNftchecklist"
                                                isStake={showStaked}
                                                checked={
                                                    (!showStaked && checkbtn) ||
                                                    (showStaked && checkUnstakebtn)
                                                }
                                                checklistItemID={nftId}
                                                onChange={(value) => {

                                                    selectNftIds.indexOf(value) === -1 ? selectNftIds.push(value) : selectNftIds.pop(value);
                                                    setSelectedNftIds(selectNftIds)
                                                    console.log(selectNftIds);
                                                    setVal(value);
                                                }}
                                            />
                                        </>
                                    );
                                })
                            )}
                        </div>
                    </div>

                    <div style={{display: "block"}}>
                        <p className="d-flex info-text">
                            <ToolTip title="Add title here"/>
                            Please select which NFT’S to Stake then once selected you need to
                            approve the process then proceed to deposit the action in order to
                            start receiving rewards.
                        </p>

                        <div className="mt-2">
                            <div style={{display: showStaked === false ? "block" : "none"}}>
                                <h5 className="select-apr">Select APR</h5>
                                <div>
                                    <form className="d-flex" onChange={() => {
                                    }}>
                                        <br/>
                                        <input
                                            type="radio"
                                            id="50APR"
                                            name="locktime"
                                            value="50"
                                            // onChange={(e) => {
                                            //   setapr(e.target.value);
                                            // }}
                                            onClick={(e) => {
                                                setapr(50);
                                                // e.stopPropagation();
                                            }}
                                        />

                                        <span for="50APR" className="radioDesc">
                      30 days lock time (50% APR)
                    </span>
                                        <br/>
                                    </form>
                                </div>
                                <div
                                    className="mt-4 row justify-content-center"
                                    style={{
                                        gap: 20,
                                        display: showStaked === false ? "" : "none",
                                    }}
                                >
                                    <button
                                        className="btn activebtn"
                                        onClick={() => {
                                            handleApprove();
                                        }}
                                        style={{
                                            background: active
                                                ? "linear-gradient(51.32deg, #E30613 -12.3%, #FA4A33 50.14%)"
                                                : "#C4C4C4",
                                            pointerEvents: active ? "auto" : "none",
                                            display: showApprove === true ? "block" : "none",
                                        }}
                                    >
                                        {loading ? (
                                            <>
                                                <div className="spinner-border " role="status"></div>
                                            </>
                                        ) : (
                                            "Approve"
                                        )}
                                    </button>
                                    <button
                                        className="btn passivebtn"
                                        style={{
                                            background:
                                                !active || !showApprove
                                                    ? "linear-gradient(51.32deg, #E30613 -12.3%, #FA4A33 50.14%)"
                                                    : "#C4C4C4",
                                            pointerEvents: !active || !showApprove ? "auto" : "none",
                                        }}
                                        onClick={() => handleDeposit(val)}
                                    >
                                        {loadingdeposit ? (
                                            <>
                                                <div className="spinner-border " role="status"></div>
                                            </>
                                        ) : (
                                            "Deposit"
                                        )}
                                    </button>
                                </div>
                                <p
                                    className="mt-1"
                                    style={{color: active ? "#F13227" : "#52A8A4"}}
                                >
                                    {status}
                                </p>
                            </div>
                        </div>

                        <div
                            className="mt-2"
                            style={{display: showStaked === true ? "block" : "none"}}
                        >
                            <div>
                                <div
                                    className="mt-4 row justify-content-center"
                                    style={{gap: 20}}
                                >
                                    <button
                                        className="btn activebtn"
                                        onClick={() => {
                                            setCheckUnstakeBtn(false);
                                            !checkUnstakebtn ? handleUnstake(val) : onUnstake();
                                        }}
                                        style={{
                                            background: active
                                                ? "linear-gradient(51.32deg, #E30613 -12.3%, #FA4A33 50.14%)"
                                                : "#C4C4C4",
                                            pointerEvents: active ? "auto" : "none",
                                        }}
                                    >
                                        {loading ? (
                                            <>
                                                <div className="spinner-border " role="status"></div>
                                            </>
                                        ) : (
                                            "Unstake"
                                        )}
                                    </button>
                                    <button
                                        className="btn passivebtn"
                                        style={{
                                            display:
                                                showStaked === true && checkUnstakebtn === true
                                                    ? "block"
                                                    : "none",
                                            background:
                                                "linear-gradient(51.32deg, #E30613 -12.3%, #FA4A33 50.14%)",
                                            pointerEvents: "auto",
                                        }}
                                        onClick={() => {
                                            onClaimAll();
                                            setCheckUnstakeBtn(false);
                                        }}
                                    >
                                        {loadingdeposit ? (
                                            <>
                                                <div className="spinner-border " role="status"></div>
                                            </>
                                        ) : (
                                            "Claim All"
                                        )}
                                    </button>
                                </div>
                                <p
                                    className="mt-1"
                                    style={{color: active ? "#F13227" : "#52A8A4"}}
                                >
                                    {showApprove === false ? "*Now you can deposit" : status}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    );
};
NftStakeCheckListModal.propTypes = {
    nftItem: PropTypes.array,
    open: PropTypes.bool,
    onShareClick: PropTypes.func,
    onClose: PropTypes.func,
    onshowToStake: PropTypes.func,
    onshowStaked: PropTypes.func,
    onClaimAll: PropTypes.func,
    onUnstake: PropTypes.func,
};

export default NftStakeCheckListModal;
