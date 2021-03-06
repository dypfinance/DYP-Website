import React from "react";
import TripleArrow from "../../assets/General/TripleArrows.svg";
import CtaBtn from "../../assets/General/ctabtn.png";
import { NavLink } from "react-router-dom";

const  CtaButton = () => {
  return (
    <div className="col-lg-2 mintButtonMobile" >
      <div>
        <h3 className="startTitle">START</h3>
          <NavLink to='/mint'>
            <div className="d-flex flex-column align-items-center">
                <img src={TripleArrow} alt="arrow" />
                <img src={CtaBtn} className='ctabtn'/>
                <NavLink class="mintBtn mt-4" to='/mint'><span>GO MINT</span></NavLink>
            </div>
          </NavLink>
      </div>
    </div>
  );
};

export default CtaButton
