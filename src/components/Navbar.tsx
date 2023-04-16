import React, { useState } from 'react'
import "../styles/utility.css"
import Hamburger from '../assets/menu-icon.svg'
import { Link } from 'react-router-dom'
export default function Navbar() {
    const [toggle, settoggle] = useState<Number>(-2000)
    const toggleSetter = () => {
        toggle === 0 ? settoggle(-2000) : settoggle(0)
    }
    return (
        <>
            <div className="sideBar toggleBar" style={{ left: `${toggle}px` }}>
                <div style={{ height: "150px" }}></div>
                <h4 className="text-light text-center mt-2 sidebar-items">
                    <Link onClick={(e) => settoggle(-2000)} to='/'>
                        Home
                    </Link>
                </h4>
                <div style={{ height: "20px;" }}></div>
                <h4 className="text-light text-center mt-2 sidebar-items">
                    <Link onClick={(e) => settoggle(-2000)} to='/project'>
                        Projects
                    </Link>
                </h4>
                <div style={{ height: "20px;" }}></div>
                <h4 className="text-light text-center mt-2 sidebar-items">
                    <Link onClick={(e) => settoggle(-2000)} to='/education'>
                        Education
                    </Link>
                </h4>
                <h4 className="text-light text-center mt-2 sidebar-items">
                    <Link onClick={(e) => settoggle(-2000)} to='/certificate'>
                        Certificate
                    </Link>
                </h4>
            </div>
            <nav style={{ height: "56px;" }}>
                <h3 style={{ marginLeft: "2px;" }}>
                    Personal Website
                </h3>

                <img src={Hamburger} onClick={toggleSetter} style={{ height: "50%", cursor: "pointer" }} alt='' />


            </nav >
        </>
        // <div className="sideBar toggleBar" >
        //     <div style={height: "150px;"}></div>
        //     <h4 class="text-light text-center mt-2 sidebar-items">Home</h4>
        //     <div style="height: 20px;"></div>
        //     <h4 class="text-light text-center mt-2 sidebar-items">Projects</h4>
        //     <div style="height: 20px;"></div>
        //     <h4 class="text-light text-center mt-2 sidebar-items">Education</h4>
        // </div >
    )
}
