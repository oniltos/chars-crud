export default function Char(props) {
  return (
    <div className="char">
      <h2>
        <b>Name</b>: {props.name}
      </h2>
      <h3>
        <b>Occupation</b>: {props.occupation}
      </h3>
      <h3>
        <b>Weapon</b>: {props.weapon}
      </h3>
      <h3>
        <b>Debt?</b>: {props.debt ? "True" : "False"}
      </h3>
    </div>
  );
}
