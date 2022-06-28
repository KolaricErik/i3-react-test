function Oglas(props) {
    return(
        <div className="korisnik" key={props.id }>
            <p className="tekst">{props.id}.</p>
            <img className="foto" src={props.fotka}></img>
            <h2>{props.ime}</h2>
            <h2>{props.prezime}</h2>
        </div>   
    )
}

export default Oglas