import React, {useState, useEffect} from "react";

import icon from "../../assets/icons/workerloading.png";

import "./loading.css";



function Loading(){
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setLoading(false);
        }, 1000)
    })

    return(
        <div>
            <div className="center" style={{display: loading ? "flex" : "none"}}>
                <div className="large">
                    <div className="medium">
                        <div className="small">
                            <div className="bgs"></div>
                        </div>
                    </div>
                </div>
                <div className="imgloading"><img src={icon} width="100px" alt=""></img></div>
                <h1>Carregando...</h1>
            </div>
        </div>
    )
}


export default Loading;



