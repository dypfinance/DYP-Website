import React from "react";
import TripleArrow from "../../assets/General/TripleArrows.svg";
import CtaBtn from "../../assets/General/ctabtn.png";
import { NavLink } from "react-router-dom";

const  CtaButton = () => {
  return (
    <div className="col-lg-2" style={{marginTop: '190px'}}>
      <div>
        <h3 className="startTitle">Start</h3>
        <div className="d-flex flex-column align-items-center">
         <img src={TripleArrow} alt="arrow" />
         
     <img src={CtaBtn} className='ctabtn'/> 
       
        <NavLink class="mintBtn mt-4" to='/mint'><span>GO MINT</span></NavLink>
        </div>
      </div>
    </div>
  );
};

export default CtaButton
