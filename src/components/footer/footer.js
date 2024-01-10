import React from "react";

import "./footer.css";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


function Footer(){
    return(
        <footer className="flex justify-between mt-14 items-center">
            <div className="w-[25%]">
                <h1 className="text-base">Sobre a empresa</h1>
                <p className="text-sm"> Satisfação do cliente é nossa prioridade, e buscamos estabelecer parcerias sólidas, baseadas na transparência e na comunicação aberta.</p>
            </div>
            <div className="text-center w-[25%]">
                <ul className="nav flex justify-center flex-col items-center">
                    <li>Sobre a empresa</li>
                    <li>Serviços</li>
                    <li>Contato</li>
                </ul>
            </div>
            <div className="w-[25%] text-center">
                <h1 className="text-base">Redes Sociais</h1>
                <ul className="flex justify-center">
                    <li className="cursor-pointer m-4"><FaFacebook size={25}/></li>
                    <li className="cursor-pointer m-4"><FaInstagram size={25}/></li>
                    <li className="cursor-pointer my-4 ml-4"><FaWhatsapp size={25}/></li>
                </ul>
            </div>
            <div className="w-[25%]">
                <ul className="text-center">
                    <li>Tel: +(99) 9999-9999</li>
                    <li>Endereço: Rua XXXXXX, 999, Rio de janeiro</li>
                </ul>
            </div>
        </footer>
    )
}


export default Footer;