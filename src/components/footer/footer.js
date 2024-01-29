import React from "react";

import {Link} from "react-router-dom";

import "./footer.css";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import tel from "../../assets/icons/telefone.png";
import locali from "../../assets/icons/marcador.png";
import emails from "../../assets/icons/envelope.png";


function Footer(){
    
    return(
        <footer className="">
            <div className="navfooter footer flex justify-between items-center px-[12.5%] py-4">
                <div className="navcontainer">
                    <h1 className="">Sobre a empresa</h1>
                    <p className="text-sm"> Satisfação do cliente é nossa prioridade, e buscamos estabelecer parcerias sólidas, baseadas na transparência e na comunicação aberta.</p>
                </div>
                <div className="navcontainer w-[25%] text-center">
                    <h1 className="">Redes Sociais</h1>
                    <ul className="flex justify-center">
                        <Link to="http://www.facebook.com.br"><li className="cursor-pointer m-4"><FaFacebook size={25}/></li></Link>
                        <Link to="https://www.instagram.com/kenosisengtec?igsh=MXM3Y3Vkc3Y4bmJxNw%3D%3D&utm_source=qr"><li className="cursor-pointer m-4"><FaInstagram size={25}/></li></Link>
                        <Link to="https://contate.me/kenosis"><li className="cursor-pointer my-4 ml-4"><FaWhatsapp size={25}/></li></Link>
                    </ul>
                </div>
                <div className="navcontainer">
                    <ul className="text-center ulcontact">
                        <li><img src={tel} width="10px" alt="tel"/> +(21) 98479-7579</li>
                        <li><img src={emails} width="10px" alt="email"/> kenosis2011hd@gmail.com</li>
                        <li><img src={locali} width="10px" alt="address"/> R. Remanso, 255, Rio de janeiro</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-zinc-600 bg-zinc-900 w-[100%] px-[12.5%] py-2">
                <p className="text-neutral-400">@Kénosis 2024</p>
            </div>
            
        </footer>
        
    )
}


export default Footer;