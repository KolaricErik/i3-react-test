import React from "react";
import '../App.scss';
import {OglasPodatki} from './OglasPodatki'
import Oglas from '../components/Oglas'

function ListaOglasa() {
    return (
        <div id="oglasi" >
            {OglasPodatki.map((oglas) => (
                <Oglas key={oglas.id} fotka={oglas.fotka} tekst={oglas.tekst}></Oglas>
            ))}
        </div>
    )
}

export default ListaOglasa;

