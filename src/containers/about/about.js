import React from "react";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";


import electricpanel from "../../assets/icons/electricpanel.png";
import construction from "../../assets/icons/construction.png";
import paintroller from "../../assets/icons/paintroller.png";
import quadroeletrico from "../../assets/images/quadroeletrico.jpg";
import engenheiro from "../../assets/images/constructions.jpg";
import pintura from "../../assets/images/pintorkenosis.png";

import "./about.css"


function About(){

    return(
        <div>
            <Header/>



            <div className="central text-center">
                    <h1>Construção e Tecnologia</h1>
                    <h2>Cada Projeto, um Compromisso de Excelência.</h2>
                

                <p className="mt-10 mb-14 text-base">
                Empresa especializada em quadros elétricos e pinturas e construção civil desempenhando um papel essenciais em setores distintos, 
                contribuindo para a funcionalidade e estética de diferentes ambientes. No campo dos quadros elétricos, 
                a empresa projeta, fabrica e instala estruturas para a distribuição segura de energia, 
                adotando soluções inteligentes e garantindo conformidade com normas elétricas.
                Por outro lado, no ramo das pinturas, a empresa foca na transformação visual de espaços, 
                oferecendo uma variedade de serviços que incluem pintura interna e externa, texturização de paredes e aplicação de revestimentos especiais. Elas visam não apenas aprimorar a estética, mas também proteger as superfícies contra desgaste e danos, utilizando materiais de alta qualidade.
                </p>

                <div className="flex items-center">
                    <div className="flex bg-slate-100 w-[100%] items-center pl-10 pr-10 pt-10 pb-10 rounded-md mark1 h-96 flex-col justify-center">
                        <div className="imgs imgs1">
                            <img src={electricpanel} alt="eletrica"></img>
                    </div>
                        
                        <p className="text-black text-xl font-bold">Especializada em quadros elétricos, 
                            oferecemos soluções essenciais para distribuição e controle de energia em diversos ambientes. 
                            Esses quadros são estruturas que abrigam componentes elétricos, como disjuntores, fusíveis, relés e medidores, 
                            organizando e protegendo os circuitos elétricos.</p>
                    </div>


                </div>

                

            <div className="flex items-center">
            

                <div className="flex mt-6 bg-slate-100 w-[100%] items-center pr-10 pl-10 pt-10 pb-10 rounded-md flex-1 mark2 h-96 flex-col justify-center">
                    

                    <p className="text-black text-xl font-bold">Em pinturas desempenhamos um papel vital na transformação estética de espaços, 
                    sejam eles residenciais, comerciais ou industriais. Seu foco principal está na aplicação de técnicas
                     e materiais de pintura para proporcionar um ambiente visualmente atraente e proteger as superfícies contra desgaste e danos.
                    </p>
                        <div className="imgs imgs2">
                            <img src={paintroller} alt="eletrica"></img>
                        </div>
                    </div>
            </div>
                

            <div className="flex items-center">
                <div className="flex mt-6 bg-slate-100 w-[100%] items-center pl-10 pr-10 pt-10 pb-10 rounded-md h-96 mark3 flex-col justify-center">

                <div className="pl-1 imgs imgs3">
                            <img src={construction} alt="eletrica"></img>
                        </div>

                    <p className="text-black text-xl font-bold"> Estamos na vanguarda da inovação estrutural, incorporando as mais recentes tecnologias e 
                    práticas sustentáveis em cada projeto. Acreditamos que cada construção não é apenas um edifício, mas uma oportunidade 
                    de deixar uma marca positiva em comunidades e no meio ambiente.
                    </p>
                        
                    </div>
                </div>
                   
            </div>

            <Footer/>
        </div>
        


    )
}


export default About;