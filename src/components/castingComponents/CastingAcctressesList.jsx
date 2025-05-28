import CastingCard from "./CastingCard.jsx";

export default function CastingActressesList({ dataActresses }) {
  return dataActresses.map((actress) => (
    <div className="col-3" key={actress.id}>
       <CastingCard dataArtist={actress} />
    </div>
  ));
}
