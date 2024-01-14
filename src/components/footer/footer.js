import React from "react";

import "./footer.css";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


function Footer(){
    return(
        <footer className="mt-14">
            <div className="flex justify-between items-center px-[12.5%] py-4">
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
            </div>

            <div className="border-t border-zinc-600 bg-zinc-900 w-[100%] px-[12.5%] py-2">
                <p className="text-neutral-400">@Kénosis 2024</p>
            </div>
            
        </footer>
        
    )
}


export default Footer;