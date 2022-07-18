import React, { useRef } from "react";
import PropTypes from "prop-types";

const TypeAssetCard = ({
  icon,
  text,
  percentage,
  activeItem,
  setActiveItem,
}) => {
  const elementScrollRef = useRef(null);

  return (
    <>
      <div
        className={`type-asset-card ${
            text == 'ETH Stake'
            ? activeItem === 'ETH Stake' ? text.split(" ")[0].toLowerCase() + "-active " + "active-asset" : ''
            : text === 'AVAX Stake' ?
            activeItem === 'AVAX Stake' ? text.split(" ")[0].toLowerCase() + "-active " + "active-asset" +" new-pool" : ' new-pool'
            : text === 'BSC Stake'
            ? activeItem === 'BSC Stake' ? text.split(" ")[0].toLowerCase() + "-active " + "active-asset" +" new-pool" : ' new-pool'
            : ''
        } `}
        onClick={() => {
          setActiveItem(text);
          elementScrollRef?.current?.scrollIntoView({
            block: "nearest",
            behavior: "auto",
            inline: "center",
          });
        }}
        ref={elementScrollRef}
      >
        {icon}
        <div className="data">
          <p className="text">{text}</p>
          <p className="percentage">{percentage} APR</p>
        </div>
      </div>
    </>
  );
};

TypeAssetCard.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
  percentage: PropTypes.string,
  activeItem: PropTypes.string,
  setActiveItem: PropTypes.func,
};

export default TypeAssetCard;
