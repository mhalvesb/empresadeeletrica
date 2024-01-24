import React from "react";

import {Link} from "react-router-dom";

import "./footer.css";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


function Footer(){
    
    return(
        <footer className="">
            <div className="navfooter footer flex justify-between items-center px-[12.5%] py-4">
                <div className="navcontainer">
                    <h1 className="">Sobre a empresa</h1>
                    <p className="text-sm"> Satisfação do cliente é nossa prioridade, e buscamos estabelecer parcerias sólidas, baseadas na transparência e na comunicação aberta.</p>
                </div>
                <div className="navcontainer text-center">
                    <ul className="nav flex justify-center flex-col items-center">
                        <Link to="/"><li>Inicio</li></Link>
                        <Link to="/about"><li>Sobre a empresa</li></Link>
                        <Link to="/services"><li>Serviços</li></Link>
                        <Link to="/contact"><li>Contato</li></Link>
                    </ul>
                </div>
                <div className="navcontainer w-[25%] text-center">
                    <h1 className="">Redes Sociais</h1>
                    <ul className="flex justify-center">
                        <Link to="http://www.facebook.com.br"><li className="cursor-pointer m-4"><FaFacebook size={25}/></li></Link>
                        <Link to="http://www.instagram.com"><li className="cursor-pointer m-4"><FaInstagram size={25}/></li></Link>
                        <Link to="https://contate.me/kenosis"><li className="cursor-pointer my-4 ml-4"><FaWhatsapp size={25}/></li></Link>
                    </ul>
                </div>
                <div className="navcontainer">
                    <ul className="text-center">
                        <li>Tel: +(21) 98479-7579</li>
                        <li>Email: kenosis2011hd@gmail.com</li>
                        <li>Endereço: Rua XXXXXX, 999, Rio de janeiro</li>
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