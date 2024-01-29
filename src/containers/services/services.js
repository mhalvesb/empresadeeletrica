import React, {useState, useEffect} from "react";

import "./services.css"

import Header from "../../components/headers/header.js";
import Footer from "../../components/footer/footer.js";
import Loading from "../../components/loading/loading";

import serv1 from "../../assets/images/serv1.jpg";
import serv2 from "../../assets/images/serv2.jpg";
import serv3 from "../../assets/images/serv3.jpg";
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
                <div className="servicesbox">
                    <div className="imgbox" onClick={() => Img(serv1)}>
                        <img src={serv1} alt="" className="imgmain"></img>
                        <img src={icon} alt="" className="imgicon"></img>
                    </div>
                    <div className="textbox">
                        <h1>Edificações</h1>

                        <p>Rua: XXXX, Bairro: XXXX</p>

                    </div>

                </div>
                <div className="servicesbox" onClick={() => Img(serv2)}>

                    <div className="imgbox" >
                        <img src={serv2} alt="" className="imgmain"></img>
                        <img src={icon} alt="" className="imgicon"></img>
                    </div>
                    <div className="textbox">
                        <h1>Pintura</h1>
                        <p>Rua: XXXX, Bairro: XXXX</p>
                    </div>
                    
                </div>
                <div className="servicesbox">

                    <div className="imgbox" onClick={() => Img(serv3)}>
                            <img src={serv3} alt="" className="imgmain"></img>
                            
                            <img src={icon} alt="" className="imgicon"></img>
                            

                            
                    </div>
                    <div className="textbox">
                        <h1>Eletrica</h1>
                        <p>Rua: XXXX, Bairro: XXXX</p>
                    </div>
                    
                </div>
                <div className="servicesbox">

                    <div className="imgbox" onClick={() => Img(serv3)}>
                        <img src={serv3} alt="" className="imgmain"></img>
                        <img src={icon} alt="" className="imgicon"></img>
                    </div>
                    <div className="textbox">
                        <h1>Eletrica</h1>
                        <p>Rua: XXXX, Bairro: XXXX</p>
                    </div>
                    
                </div>
                <div className="servicesbox">
                    <div className="imgbox" onClick={() => Img(serv1)}>
                        <img src={serv1} alt="" className="imgmain"></img>
                        <img src={icon} alt="" className="imgicon"></img>
                    </div>
                    <div className="textbox">
                        <h1>Edificações</h1>
                        <p>Rua: XXXX, Bairro: XXXX</p>                   
                    </div>

                </div>
                <div className="servicesbox" onClick={() => Img(serv2)}>

                    <div className="imgbox" >
                        <img src={serv2} alt="" className="imgmain"></img>
                        <img src={icon} alt="" className="imgicon"></img>
                    </div>
                    <div className="textbox">
                        <h1>Pintura</h1>
                        <p>Rua: XXXX, Bairro: XXXX</p>
                    </div>
                    
                </div>
                <div className="servicesbox">

                    <div className="imgbox" onClick={() => Img(serv3)}>
                            <img src={serv3} alt="" className="imgmain"></img>
                            
                            <img src={icon} alt="" className="imgicon"></img>
                            

                            
                    </div>
                    <div className="textbox">
                        <h1>Eletrica</h1>
                        <p>Rua: XXXX, Bairro: XXXX</p>
                    </div>
                    
                </div>
                <div className="servicesbox">

                    <div className="imgbox" onClick={() => Img(serv3)}>
                        <img src={serv3} alt="" className="imgmain"></img>
                        <img src={icon} alt="" className="imgicon"></img>
                    </div>
                    <div className="textbox">
                        <h1>Eletrica</h1>
                        <p>Rua: XXXX, Bairro: XXXX</p>
                    </div>
                    
                </div>
                <div className="servicesbox">
                    <div className="imgbox" onClick={() => Img(serv1)}>
                        <img src={serv1} alt="" className="imgmain"></img>
                        <img src={icon} alt="" className="imgicon"></img>
                    </div>
                    <div className="textbox">
                        <h1>Edificações</h1>
                        <p>Rua: XXXX, Bairro: XXXX</p>
                    </div>

                </div>
                <div className="servicesbox" onClick={() => Img(serv2)}>

                    <div className="imgbox" >
                        <img src={serv2} alt="" className="imgmain"></img>
                        <img src={icon} alt="" className="imgicon"></img>
                    </div>
                    <div className="textbox">
                        <h1>Pintura</h1>
                        <p>Rua: XXXX, Bairro: XXXX</p>
                    </div>
                    
                </div>
                <div className="servicesbox">

                    <div className="imgbox" onClick={() => Img(serv3)}>
                            <img src={serv3} alt="" className="imgmain"></img>
                            
                            <img src={icon} alt="" className="imgicon"></img>
                            

                            
                    </div>
                    <div className="textbox">
                        <h1>Eletrica</h1>
                        <p>Rua: XXXX, Bairro: XXXX</p>
                    </div>
                    
                </div>
                <div className="servicesbox">

                    <div className="imgbox" onClick={() => Img(serv3)}>
                        <img src={serv3} alt="" className="imgmain"></img>
                        <img src={icon} alt="" className="imgicon"></img>
                    </div>
                    <div className="textbox">
                        <h1>Eletrica</h1>
                        <p>Rua: XXXX, Bairro: XXXX</p>
                    </div>
                    
                </div>
            </div>

            <Footer/>
        </div>
    )
}


export default Services;