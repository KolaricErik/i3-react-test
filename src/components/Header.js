import React, { useState } from "react";
import { Link } from "react-router-dom";
import mc from '../images/mc.png'

function Header() {
    const [prikaziMenu, setPrikaziMenu] = useState(false);
    return (
        <header>
            <nav>
                <ul>
                    <Link to="/"><li>TKO SMO MI?</li></Link>
                    <Link to="/plan"><li>PLAN</li></Link>
                    <img id="logo" src={mc}/>
                    <Link to="/lokacija"><li>LOKACIJA</li></Link>
                    <Link to="/planovi"><li>PLANOVI</li></Link>
                </ul>
            </nav>
            <div id="hamburger-icon" onClick={() => setPrikaziMenu(!prikaziMenu)}>
                <img id="logo" src={mc}/>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                <ul className="mobile-menu" id={prikaziMenu ? "sakriveno" : "prikazano"}>
                    <Link to="/"><li>TKO SMO MI?</li></Link><hr/>
                    <Link to="/plan"><li>PLAN</li></Link><hr/>
                    <Link to="/kontakt"><li>KONTAKT</li></Link><hr/>
                    <Link to="/lokacija"><li>LOKACIJA</li></Link><hr/>
                    <Link to="/planovi"><li>PLANOVI</li></Link>
                </ul>
            </div>
        </header>
    )
}

export default Header;

