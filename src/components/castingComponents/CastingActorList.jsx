import CastingCard from "./CastingCard.jsx";

export default function CastingActorList({ dataActor }) {
  return dataActor.map((actor) => (
    <div className="col-3" key={actor.id}>
       <CastingCard dataArtist={actor} />
    </div>
  ));
}