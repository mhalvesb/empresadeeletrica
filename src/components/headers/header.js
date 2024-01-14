import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";
import Text from "../../assets/images/title.png"
function Header(){
    return(
        <header>
            <div className="himgs">
            <img src={Logo} alt="logo" className="logo"></img>
            <img src={Text} alt="logo" className="title"></img>
            </div>
            
            <ul>
                <Link to="/"><li>Inicio</li></Link>
                <Link to="/about"><li>Sobre a empresa</li></Link>
                <li>Serviços</li>
                <li>Contato</li>
            </ul>
        </header>
    )
}


export default Header;