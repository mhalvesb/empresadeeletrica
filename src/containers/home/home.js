import React from "react";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";



import Sectionimg from "../../assets/icons/worker.png";
import Sectionimgs from "../../assets/icons/electrician.png"
import Sectionclient from "../../assets/icons/clients.png"
import "./home.css";


function Home(){
    return(
        <div>
            <Header/>
            <main>
                    <div className="bg">
                        <h2>Somos os profissionais</h2>
                        <h1>Para o seu projeto</h1>
                        <button className="mt-2">Entrar em contato</button>
                    </div>
                    <div className="sec b3sec">
                        <section className="rounded-tl-lg flex-1 mb-14">
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

                        <section className="flex-1 mb-14">
                            <div className="sectionimg p-2 bg-white rounded-full mr-4 ">
                                <img className="" src={Sectionimgs} alt="png"></img>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-white">Excelentes profissionais</h1>
                                <p className="text-sm mt-2 text-white">Conduzimos nosso trabalho com maestria, unindo comprometimento com a segurança e a promessa de proporcionar 
                                    soluções elétricas.</p>
                            </div>


                        </section>

                        <section className="rounded-tr-lg flex-1 mb-14">
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