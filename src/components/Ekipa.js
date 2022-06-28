import { useState } from "react"
import {Podatki} from './Podatki'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import Osoba from '../components/Osoba'

const Ekipa = ({osoba}) => {
    const [trenutni, setTrenutni] = useState(0)
    const duzina = osoba.length
    const sljedeci = () => {
        setTrenutni(trenutni === duzina - 1 ? 0 : trenutni + 1)
    }
    const prethodni = () => {
        setTrenutni(trenutni === 0 ? duzina - 1 : trenutni - 1)
    }
    return(
        <div className="prikaz">
            <div className="korisnici">
                    {Podatki.map((korisnik) => (
                        <Osoba key={korisnik.id} id={korisnik.id} fotka={korisnik.fotka} ime={korisnik.ime} prezime={korisnik.prezime}></Osoba>
                    ))}
            </div>
            <div className="mobile-user">    
                <FaArrowLeft className="otraga" onClick={prethodni}/>
                <FaArrowRight className="naprijed" onClick={sljedeci}/>
                {Podatki.map((korisnik, index) => {
                    return(
                        <div className={index === trenutni ? "slide active" : "slide"} key={index+1}>
                                {index === trenutni && (
                                    <Osoba key={korisnik.id} id={korisnik.id} fotka={korisnik.fotka} ime={korisnik.ime} prezime={korisnik.prezime}></Osoba>
                                )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Ekipa