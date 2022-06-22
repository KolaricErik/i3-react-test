import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.scss';
import image from '../images/image.png'

import slikica1 from '../images/slikica1.png'
import slikica2 from '../images/slikica2.png'
import slikica3 from '../images/slikica3.png'

function Oglas() {

    
    const [oglasi, setOglasi] = useState([
        {id: 1, fotka: slikica1, tekst: "aaaaaaaaaa"},
        {id: 2, fotka: slikica2, tekst: "bbbbbbbbbb"},
        {id: 3, fotka: slikica3, tekst: "cccccccccc"}
    ])


    return (
        <div id="oglasi">
            {oglasi.map((oglas) => (
                <div className="oglas" key={oglas.id}>
                    <img src={oglas.fotka} className="slikica"></img>
                    <p>{oglas.tekst}</p>
                </div>
            ))}
           
        </div>
    )
}


export default Oglas;

