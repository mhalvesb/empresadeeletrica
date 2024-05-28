import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";


import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";
import Loading from "../../components/loading/loading";


import Sectionimg from "../../assets/icons/worker.png";
import Sectionimgs from "../../assets/icons/electrician.png"
import Sectionclient from "../../assets/icons/clients.png"

import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaWhatsapp} from "react-icons/fa";

import "./home.css";


function Home(){
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    console.log(scrollPosition);

    
    useEffect(() =>{
        const handleScroll = () =>{
            setScrollPosition(window.scrollY);
        }

        window.addEventListener("scroll", handleScroll);

        return  () =>{
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);




    function Open(){
        setIsOpen(true);
    }

    function Close(){
        setIsOpen(false);
    }
    return(
        <div>
            <Loading/>
            <div className="contatosbox" style={{display: isOpen ? "flex" : "none"}}>
                <div className="contatosarea">
                    
                    <h2>Entre em contato conosco pelas nossas redes sociais</h2>
                        <div className="contatosredes">
                            <li><Link to="http://www.facebook.com.br"><FaFacebook size={40} color="#001400"></FaFacebook></Link></li>
                            <li><Link to="https://www.instagram.com/kenosisengtec?igsh=MXM3Y3Vkc3Y4bmJxNw%3D%3D&utm_source=qr"><FaInstagram size={40}></FaInstagram></Link></li>
                            <li><Link to="https://contate.me/kenosis"><FaWhatsapp size={40}></FaWhatsapp></Link></li>
                        </div>
                    <h2>Ou nos envie um e-mail</h2>
                    <Link to="/contact"><button className="sendemail">Enviar e-mail</button></Link>
                    
                </div>
                <p className="pbutton" onClick={Close}>Fechar</p>
                </div>
            <Header/>
            <main>
                
                    <div className="bg">
                        <h2 className="textanim">Somos os profissionais</h2>
                        <h1 className="textanim">Para o seu projeto</h1>
                        <button onClick={Open}>Entrar em contato</button>
                    </div>
                    <div className="sec b3sec">
                        <section className={`rounded-tl-lg flex-1 mb-14 ${scrollPosition >= 100 ? "sec1": "secnone"}`}>
                            <div className="sectionimg rounded-full bg-black mr-4 p-2">
                                <img src={Sectionimg} alt="housepng"></img>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-black">Qualidade na construção</h1>
                                <p className="text-sm mt-2 text-black">Na nossa construção civil, elevamos a arte de edificar ao patamar da excelência, 
                                    unindo experiência, inovação e compromisso 
                                    com a mais alta qualidade em cada projeto que entregamos.</p>
                            </div>
                        </section>

                        <section className={`flex-1 mb-14 ${scrollPosition >= 100 ? "sec2": "secnone"}`}>
                            <div className="sectionimg p-2 bg-white rounded-full mr-4 ">
                                <img className="" src={Sectionimgs} alt="png"></img>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-white">Excelentes profissionais</h1>
                                <p className="text-sm mt-2 text-white">Conduzimos nosso trabalho com maestria, unindo comprometimento com a segurança e a promessa de proporcionar 
                                    soluções elétricas.</p>
                            </div>


                        </section>

                        <section className={`rounded-tr-lg flex-1 mb-14 ${scrollPosition >= 100 ? "sec3" : "secnone"}`}>
                        <div className="sectionimg p-2 bg-black rounded-full mr-4">
                                <img className="" src={Sectionclient} alt="png"></img>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-black">Dedicados para nossos clientes</h1>
                                <p className="text-sm mt-2 text-black">Dedicamos cada instante ao nosso compromisso com os clientes, buscando superar expectativas, ouvir atentamente suas necessidades e entregar serviços.</p>
                            </div>
                        </section>
                    </div>

            </main>
            <Footer/>
        </div>
    )
}



export default Home;