export function Die(props) {
  return(
    <section className="die-component">
     <button className="dice-numbering">{props.value}</button>
    </section>
  );
}