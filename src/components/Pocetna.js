import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.scss';
import image from '../images/image.png'
import Oglas from './Oglas'

function Pocetna() {

    return (
        <div id="tekst">
            <div id="desni">
                <img id="fotka" src={image}></img>
            </div>
            <div id="lijevi">
                <h1 id="naslov">Krenimo s upoznavanjem :D</h1>
                <p className="paragraf">M1 Pro i M1 Max izvrsnu arhitekturu čipova M1 podižu na nove visine te prvi put u 
                    profesionalna prijenosna računala uvode arhitekturu sustava na čipu (SoC). Oba čipa odlikuju se većim brojem 
                    jezgri procesora, većim brojem jezgri grafičkog procesora i više objedinjene memorije od modela M1. 
                    Uz snažan Neural Engine za superbrzo strojno učenje te poboljšane module za medijske sadržaje s 
                    podrškom za ProRes, M1 Pro i M1 Max profesionalcima omogućuju ono što dosad nije bilo moguće.
                </p><br/>
                <p className="paragraf">ProMotion. Ovo je prvi put da je ProMotion dostupan na Macu i, zahvaljujući njemu, sve od pomicanja po 
                    web-stranicama do igranja igrica postaje iznimno fluidno i responzivno. A uz to se smanjuje potrošnja 
                    energije. Uz stope osvježavanja do 120 Hz adaptivna tehnologija automatski se prilagođava pomicanju sadržaja. 
                    Montažeri ProMotion videozapisa mogu odabrati i fiksnu stopu osvježavanja koja je potpuno usklađena s 
                    njihovim snimkama.
                </p><br/>
                <p className="paragraf">
                    Prenosi fotografije i videozapise putem čitača SDXC kartica. Poveži ga s TV-om ili zaslonima putem HDMI izlaza. 
                    Slušaj putem 3,5-milimetarskog priključka za slušalice koji otkriva slušalice visoke impedancije i automatski 
                    se prilagođava njima. Priključi brzu perifernu opremu ili zaslone putem tri Thunderbolt 4 priključka. I brzo ga 
                    napuni putem MagSafe 3 priključka s brzim otpuštanjem.
                </p><br/>
                <Oglas/>
            </div>
        </div>
    )
}


export default Pocetna;

