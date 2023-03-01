import moves from "./data.js";
import PokeMoveCard from "./PokeMoveCard.js";

function PokeMoves() {
  return (
    <div>
      <h1>Poke moves</h1>
      <ul>
        {moves.map((item) => (
          <PokeMoveCard key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default PokeMoves;
