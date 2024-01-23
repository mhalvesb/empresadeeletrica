import React, {useState} from "react";
import "./header.css";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";
import Text from "../../assets/images/title.png"
function Header(){
    const [listaVisivel, setListaVisivel] = useState(false);
    
    function ToggleList(){
        setListaVisivel(!listaVisivel);
    }

    
    

    return(
        <header>
            <div className="himgs">
            <img src={Logo} alt="logo" className="logo"></img>
            <img src={Text} alt="logo" className="title"></img>
            </div>
            
        
            <div className={ `${listaVisivel ? 'activemobileheader' : ""} mobileheader`} onClick={ToggleList}>
                <div className={`${listaVisivel ? 'activemobiletracer' : ""} mobiletrace`}></div>
                <div className={`${listaVisivel ? "activemobiletracer" : ""} mobiletrace`}></div>
                <div className={`${listaVisivel ? "activemobiletracer" : ""} mobiletrace`}></div>
            </div>

            <ul className="ulmobile" style={{display: listaVisivel ? 'block' : 'none'}}>
                    <Link to="/"><li>Inicio</li></Link>
                    <Link to="/about"><li>Sobre a empresa</li></Link>
                    <Link to="/services"><li>Serviços</li></Link>
                    <Link to="/contact"><li>Contato</li></Link>
                    
            </ul>

            <ul className="desktopheader">
                <Link to="/"><li>Inicio</li></Link>
                <Link to="/about"><li>Sobre a empresa</li></Link>
                <Link to="/services"><li>Serviços</li></Link>
                <Link to="/contact"><li>Contato</li></Link>
            </ul>
        </header>
    )
}


export default Header;