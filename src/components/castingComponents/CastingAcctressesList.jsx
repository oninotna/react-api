export default function CastingActressesList({ dataActresses }) {
  return dataActresses.map((actress) => (
    <div className="col-3" key={actress.id}>
      <div className="card h-100">
        <div className="card-title">{actress.name}</div>
        <div className="card-img text-center">
          <img
            src={actress.image}
            alt={actress.name}
            style={{ maxWidth: "200px" }}
          />
        </div>
        <div className="card-body">
          <ul>
            <li>{actress.birth_year}</li>
            <li>{actress.nationality}</li>
            <li>{actress.biography}</li>
            <li>{actress.awards}</li>
          </ul>
        </div>
      </div>
    </div>
  ));
}
