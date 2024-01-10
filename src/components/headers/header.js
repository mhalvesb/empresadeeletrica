import React from "react";
import "./header.css";
import Logo from "../../assets/images/logo.png";
import Text from "../../assets/images/title.png"
function Header(){
    return(
        <header>
            <div className="imgs">
            <img src={Logo} alt="logo" class="logo"></img>
            <img src={Text} alt="logo" class="title"></img>
            </div>
            
            <ul>
                <li>Inicio</li>
                <li>Sobre a empresa</li>
                <li>Serviços</li>
                <li>Contato</li>
            </ul>
        </header>
    )
}


export default Header;