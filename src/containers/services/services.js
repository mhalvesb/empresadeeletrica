import React, {useState, useEffect} from "react";

import "./services.css"

import Header from "../../components/headers/header.js";
import Footer from "../../components/footer/footer.js";
import Loading from "../../components/loading/loading";

import serv1 from "../../assets/images/serv1.jpg";
import serv2 from "../../assets/images/serv2.jpg";
import serv3 from "../../assets/images/serv3.jpg";

import edf1 from "../../assets/images/edf1.jpg";
import edf2 from "../../assets/images/edf2.jpg";
import edf3 from "../../assets/images/edf3.jpg";
import edf4 from "../../assets/images/edf4.jpg";
import edf5 from "../../assets/images/edf5.jpg";
import edf6 from "../../assets/images/edf6.jpg";
import edf7 from "../../assets/images/edf7.jpg";
import edf8 from "../../assets/images/edf8.jpg";
import edf9 from "../../assets/images/edf9.jpg";
import edf10 from "../../assets/images/edf10.jpg";
import edf11 from "../../assets/images/edf11.jpg";
import edf12 from "../../assets/images/edf12.jpg";
import edf13 from "../../assets/images/edf13.jpg";
import edf14 from "../../assets/images/edf14.jpg";
import edf15 from "../../assets/images/edf15.jpg";
import edf16 from "../../assets/images/edf16.jpg";
import edf17 from "../../assets/images/edf17.jpg";
import edf18 from "../../assets/images/edf18.jpg";
import edf19 from "../../assets/images/edf19.jpg";
import edf20 from "../../assets/images/edf20.jpg";
import edf21 from "../../assets/images/edf21.jpg";

import elet1 from "../../assets/images/elet1.jpg";
import elet2 from "../../assets/images/elet2.jpg";
import elet3 from "../../assets/images/elet3.jpg";
import elet4 from "../../assets/images/elet4.jpg";
import elet5 from "../../assets/images/elet5.jpg";
import elet6 from "../../assets/images/elet6.jpg";
import elet7 from "../../assets/images/elet7.jpg";

import pint1 from "../../assets/images/pintura1.jpg";
import pint2 from "../../assets/images/pintura2.jpg";
import pint3 from "../../assets/images/pintura3.jpg";
import pint4 from "../../assets/images/pintura4.jpg";
import pint5 from "../../assets/images/pintura5.jpg";
import pint6 from "../../assets/images/pintura6.jpg";
import pint7 from "../../assets/images/pintura7.jpg";
import pint8 from "../../assets/images/pintura8.jpg";
import pint9 from "../../assets/images/pintura9.jpg";

import icon from "../../assets/icons/zoom.png";
function Services(){
    const [images, setImages] = useState(null);


    function Img(setImage){
        console.log(setImage);
        setImages(setImage);
    }

    return(
        <div>
            <Loading/>

            
                <div className="imgwidth" style={{display: images ? "flex" : "none"}}>
                    <div className="imgboxwidth">
                        <h1 onClick={() => Img(null)}>Fechar</h1>

                        <img src={images} alt="" className="imgcontent"></img>
                    </div>
                    
                </div>
            

            <Header/>
            

            <div className="servicestxt">
                <h1>Serviços feitos pela empresa</h1>
            </div>

            <div className="servicesarea">
                <h1>Edificações</h1>
                <div className="services-slider">
                    <div className="services-box" onClick={()=> Img(edf1)}>
                        <img src={icon} className="imgicon"></img>
                        <img src={edf1} alt="services" className="serviceimg"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(edf2)}>
                        <img src={icon} className="imgicon"></img>
                        <img src={edf2} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(edf3)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={edf3} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(edf4)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={edf4} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(edf5)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={edf5} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(edf6)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={edf6} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(edf7)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={edf7} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(edf8)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={edf8} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(edf9)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={edf9} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(edf10)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={edf10} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(edf11)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={edf11} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(edf12)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={edf12} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(edf13)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={edf13} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(edf14)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={edf14} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(edf15)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={edf15} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(edf16)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={edf16} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(edf17)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={edf17} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(edf18)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={edf18} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(edf19)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={edf19} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(edf20)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={edf20} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(edf21)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={edf21} alt="services"></img>
                    </div>
                </div>
                <h1>Pinturas</h1>
                <div class="services-slider">
                <div className="services-box" onClick={()=> Img(pint1)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={pint1} alt="services"></img>
                    </div>
                    
                <div className="services-box" onClick={()=> Img(pint2)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={pint2} alt="services"></img>
                    </div>
                    
                <div className="services-box" onClick={()=> Img(pint3)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={pint3} alt="services"></img>
                    </div>
                    
                <div className="services-box" onClick={()=> Img(pint4)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={pint4} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(pint5)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={pint5} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(pint6)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={pint6} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(pint7)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={pint7} alt="services"></img>
                    </div>

                    <div className="services-box" onClick={()=> Img(pint8)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={pint8} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(pint9)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={pint9} alt="services"></img>
                    </div>
                </div>
                <h1>Elétrica</h1>
                <div class="services-slider">
                <div className="services-box" onClick={()=> Img(elet1)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={elet1} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(elet2)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={elet2} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(elet3)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={elet3} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(elet4)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={elet4} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(elet5)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={elet5} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(elet6)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={elet6} alt="services"></img>
                    </div>
                    <div className="services-box" onClick={()=> Img(elet7)}>
                    <img src={icon} className="imgicon"></img>
                        <img src={elet7} alt="services"></img>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}


export default Services;