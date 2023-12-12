export default function Elem (props) {
  function katt () {
    console.log (props.blocked);
    if (props.blocked) {
      console.log (props.blocked);
      console.log (props.index);
      console.log (props.adat);
      props.katt (props.index);
    }
  }
  return (
    <div className="elem" onClick={katt}>
      <p>{props.adat}</p>
    </div>
  );
}
