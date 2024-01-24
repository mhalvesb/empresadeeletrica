import React, {useState, useRef} from "react";
import {useNavigate} from "react-router-dom";
import emailjs from "@emailjs/browser";

import Header from "../../components/headers/header.js";
import Footer from "../../components/footer/footer.js";



import "./contact.css";

function Contact(){
    const navigate = useNavigate();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
      emailjs.sendForm('service_p67t25c', 'template_5lmsdwa', form.current, '8v-OrSlNzRtVinck_')
        .then((result) => {

            console.log(result.text);
            

        }, (error) => {
            console.log(error.text);
            
        });
        const input = document.querySelectorAll("input");

            input.forEach(input =>{
                input.value = "";
            })
    };



    return(
      
        <div className="content">
              <Header/>
              <main className="contactmain">
                <div className="textsbox">
                    <h1>Entre em contato</h1>
                    <p>Estamos muito gratos pela sua consideração e apreciamos antecipadamente o tempo que você dedicará para entrar em contato conosco. Nossa equipe está ansiosa para ouvir mais sobre suas necessidades e discutir como podemos fornecer um serviço excepcional para atender às suas expectativas.

                        Agradecemos antecipadamente pela sua atenção e estamos ansiosos para iniciar um novo serviço que não apenas atenda, mas supere as suas expectativas. Sua satisfação é a nossa prioridade, e estamos prontos para colaborar de maneira proativa para garantir que sua experiência conosco seja verdadeiramente notável.

                        Não hesite em nos contatar através dos meios fornecidos acima. Mal podemos esperar para começar esta jornada juntos.</p>
                </div>
                <form ref={form} onSubmit={sendEmail} className="inputbox">
                    <div className="flex justify-between mb-1">
                            <div className="flex flex-col w-[49%]">
                                <label htmlFor="user_name" name="user_name">Nome</label>
                                <input type="text" name="user_name" id="name"></input>
                            </div>
                            <div className="flex flex-col w-[49%]">
                                <label htmlFor="user_lastname" name="user_lastname">Sobrenome</label>
                                <input type="text" name="user_lastname" id="lastname"></input>
                            </div>
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="email" name="user_email">Email</label>
                        <input type="email" name="user_email" id="email" required></input>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" name="message">Nos diga como podemos te ajudar?</label>
                        <textarea id="message" name="message">

                        </textarea>
                    </div>
                    
                    <button type="submit" value="Send">Enviar</button>
                </form>
              </main>
              <Footer/>
        </div>
        
    )
}


export default Contact;