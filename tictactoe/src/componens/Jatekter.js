import Elem from './Elem.js';
import './JatekTer.css';

export default function JatekTer (props) {
  return (
    <div className="jatekter">
      {props.lista.map ((elem, index) => {
        return (
          <Elem
            adat={elem}
            index={index}
            key={index}
            blocked={elem === ' ' ? true : false}
            katt={props.katt}
           
          />
          
        );
      })}
    </div>
  );
}
