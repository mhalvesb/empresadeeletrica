import React, {useState} from "react";

import "./services.css"

import Header from "../../components/headers/header.js";
import Footer from "../../components/footer/footer.js";


import serv1 from "../../assets/images/serv1.jpg";
import serv2 from "../../assets/images/serv2.jpg";
import serv3 from "../../assets/images/serv3.jpg";
import icon from "../../assets/icons/zoom.png";
function Services(){
    return(
        <div>
            <Header/>
            

            <div className="servicestxt">
                <h1>Serviços feitos pela empresa</h1>
            </div>

            <div className="servicesarea">
                <div className="servicesbox">

                    <div className="imgbox">
                        <img src={serv1} alt="" className="imgmain"></img>
                        <img src={icon} alt="" className="imgicon"></img>
                    </div>
                    <div className="textbox">
                        <h1>Edificações</h1>
                        <p>Localização</p>
                    </div>

                </div>
                <div className="servicesbox">

                    <div className="imgbox" >
                        <img src={serv2} alt="" className="imgmain"></img>
                        <img src={icon} alt="" className="imgicon"></img>
                    </div>
                    <div className="textbox">
                        <h1>Pintura</h1>
                        <p>Localização</p>
                    </div>
                    
                </div>
                <div className="servicesbox">

                    <div className="imgbox">
                            <img src={serv3} alt="" className="imgmain"></img>
                            
                            <img src={icon} alt="" className="imgicon"></img>
                            

                            
                    </div>
                    <div className="textbox">
                        <h1>Eletrica</h1>
                        <p>Localização</p>
                    </div>
                    
                </div>
                <div className="servicesbox">

                    <div className="imgbox">
                        <img src={serv3} alt="" className="imgmain"></img>
                        <img src={icon} alt="" className="imgicon"></img>
                    </div>
                    <div className="textbox">
                        <h1>Eletrica</h1>
                        <p>Localização</p>
                    </div>
                    
                </div>
            </div>

            <Footer/>
        </div>
    )
}


export default Services;