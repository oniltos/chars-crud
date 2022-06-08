export default function CharacterCard(props) {
  return (
    <div className="char-card">
      <p>
        <b>Nome</b>: {props.name}
      </p>
      <p>
        <b>Weapon</b>: {props.weapon}
      </p>
    </div>
  );
}
