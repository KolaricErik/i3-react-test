import { useState } from "react"
import {Podatki} from './Podatki'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'





const User = ({slides}) => {


    const [trenutni, setTrenutni] = useState(0)

    const length = slides.length


    const sljedeci = () => {
        setTrenutni(trenutni === length - 1 ? 0 : trenutni + 1)
    }

    const prethodni = () => {
        setTrenutni(trenutni === 0 ? length - 1 : trenutni - 1)
    }


    return(
        <div className="prikaz">
            <div className="users">
                    {Podatki.map((user) => (
                        <div className="user" key={user.id }>
                            <img className="foto" src={user.fotka}></img>
                            <h2>{user.ime}</h2>
                            <h2>{user.prezime}</h2>
                        </div>
                    ))}
            </div>

            <div className="mobile-user">    
                <FaArrowLeft className="otraga" onClick={prethodni}/>
                <FaArrowRight className="naprijed" onClick={sljedeci}/>
                {Podatki.map((korisnik, index) => {
                    return(
                        <div className={index === trenutni ? "slide active" : "slide"} key={index}>
                                {index === trenutni && (
                                    <div className="user">
                                        <img src={korisnik.fotka} className="foto"/>
                                        <h2>{korisnik.ime}</h2>
                                        <h2>{korisnik.prezime}</h2>
                                    </div>

                                )}
                        </div>
                    )
                })}
            </div>
        </div>


    )
}







export default User