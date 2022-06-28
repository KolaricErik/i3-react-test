import '../App.scss';
import { useInView} from 'react-intersection-observer'

function Oglas(props) {
    const { ref: pokreni, inView: vidljivo } = useInView()
    return (
        <div className={`${"oglas"} ${vidljivo ? "animacija" : ""}`} key={props.id} ref={pokreni}>
            <img src={props.fotka} className="slikica"></img>
            <p>{props.tekst}</p>
        </div>
    )
}

export default Oglas;

