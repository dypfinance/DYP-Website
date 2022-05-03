import Button from '../../assets/General/Button'
import DarkModeToggleButton from '../../assets/General/DarkModeToggleButton/DarkModeToggleButton'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import PropType from "prop-types"
import SvgLogo from './Svg/SvgLogo'
import SvgTeam from './Svg/SvgTeam'
import SvgPartners from './Svg/SvgPartners'
import SvgRoadmap from './Svg/SvgRoadmap'
import SvgSecurity from './Svg/SvgSecurity'
import SvgTokenomics from './Svg/SvgTokenomics'
import { SvgMediakit } from './Svg/SvgMediakit'
import { SvgBusinessContact } from './Svg/SvgBusinessContact'
import ChevronArrowSvg from '../../assets/General/ChevronArrowSvg/ChevronArrowSvg'

const Header = ({ onToggleDarkMode }) => {
    const [openMenu, setOpenMenu] = useState(false)
    const [openDropDown, setDropDownOpen] = useState(null)
    
    const aboutItems = [
        {
            icon: <SvgTeam />,
            text: "Our team",
            to: '/about'
        },
        {
            icon: <SvgPartners />,
            text: "Our partners",
            to: '/'

        },
        {
            icon: <SvgRoadmap />,
            text: "Roadmap",
            to: '/roadmap'

        },
        {
            icon: <SvgSecurity />,
            text: "Security",
            to: '/audit'
            
        },
        {
            icon: <SvgTokenomics />,
            text: "Tokenomics",
            to: '/tokenomics'

        }
        , {
            icon: <SvgMediakit />,
            text: "Media kit",
            to: '/presskit'

        },
        {
            icon: <SvgBusinessContact />,
            text: "Business contact",
            to: '/contact'

        }
    ]

    const handleDropDown = (key) => {
        if(openDropDown == key){
            setDropDownOpen(false)
        }else{
            setDropDownOpen(key)
        }
    }
    const DYPTools = () => {
        window.open("https://tools.dyp.finance", "_blank");
    }
    return (
        <div className={`${openMenu && window.innerWidth < 992 && 'open-menu-overlay'}`}>
            <header className='header-menu header-menu-fixed'>
                <div className={`hamburger-button ${openMenu && "hamburger-button-open"}`} onClick={() => setOpenMenu(!openMenu)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div style={{display: 'flex', width: '100%'}}>
                        <div className="col-12 col-sm-1">
                            <div className="logo">
                                <NavLink to='/'>
                                <SvgLogo />
                                </NavLink>
                            </div>
                        </div>
                        <div className={`col-12 col-sm-11 menu  ${openMenu && 'open-menu'}  `}>
                            <div className="row d-flex justify-content-lg-end">
                                <div className="col-12  col-lg-9 main-menu order-2 order-lg-1">
                                <div className="drop-down main-menu-item">
                                        {/* <div className="drop-down-select" onClick={() => handleDropDown('earn')}> */}
                                            {/* <p className='item'>Earn</p>
                                            <span className={`arrow ${openDropDown == 'earn' && 'openArrow'}`}>
                                                <ChevronArrowSvg color="#e30613"/>  
                                            </span> */}
                                        {/* </div> */}
                                        {/* you can use 'right' class here to show the submenu on the right side of the screen */}
                                        <div className={`drop-down-content right ${openDropDown == 'earn' ? 'drop-down-content-open' : ' '}`}>
                                            {aboutItems?.map((item, id) => (
                                                <NavLink key={id} to={item.to} className="drop-down-content-item">
                                                    <div className="icon">
                                                        {item.icon}
                                                    </div>
                                                    <p className="text">
                                                        {item.text}
                                                    </p>
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                    <NavLink to="/nft-earn" className="main-menu-item" >
                                        <p>Earn</p>
                                    </NavLink>
                                    <NavLink to="/caws" className="main-menu-item" >
                                        <p>CAWS NFT</p>
                                    </NavLink>
                                    <NavLink to="/buyDYP" className="main-menu-item" >
                                        <p>Buy DYP</p>
                                    </NavLink>
                                    <NavLink to="/vote" className="main-menu-item" >
                                        <p>Governance</p>
                                    </NavLink>
                                    <NavLink to="/bridge" className="main-menu-item" >
                                        <p>Bridge</p>
                                    </NavLink>
                                    <NavLink to="/launchpad" className="main-menu-item" >
                                        <p>Launchpad</p>
                                    </NavLink>
                                    {/* <NavLink to="/referralv2" className="main-menu-item" >
                                        <p>Referral Program</p>
                                    </NavLink> */}
                                    <div className="drop-down main-menu-item">
                                        <div className="drop-down-select" onClick={() => handleDropDown('about')}>
                                            <p className='item'>About</p>
                                            <span className={`arrow ${openDropDown == 'about' && 'openArrow'}`}>
                                                <ChevronArrowSvg color="#e30613"/>  
                                            </span>
                                        </div>
                                        <div className={`drop-down-content ${openDropDown == 'about' ? 'drop-down-content-open' : ' '}`}>
                                            {aboutItems?.map((item, id) => (
                                                <NavLink key={id} to={item.to} className="drop-down-content-item">
                                                    <div className="icon">
                                                        {item.icon}
                                                    </div>
                                                    <p className="text">
                                                        {item.text}
                                                    </p>
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12  col-lg-3 order-1 order-lg-2 d-flex align-items-center  pl-lg-0" style={{justifyContent: 'space-evenly'}}>
                                    {/* <div className=""> */}
                                        <Button rounded={true} text="DYP Tools" onClick={DYPTools}></Button>
                                        <DarkModeToggleButton onToggleDarkMode={onToggleDarkMode} />
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </header>
        </div>

    )
}
Header.propTypes = {
    onToggleDarkMode: PropType.func
}

export default Header