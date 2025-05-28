export default function CastingCard ({ dataArtist }) {
    return (
        <div className="card h-100">
        <div className="card-title text-center fw-bold">{dataArtist.name}</div>
        <div className="card-img text-center">
          <img
            src={dataArtist.image}
            alt={dataArtist.name}
            style={{ maxHeight: "200px" }}
          />
        </div>
        <div className="card-body">
          <ul>
            <li>{dataArtist.birth_year}</li>
            <li>{dataArtist.nationality}</li>
            <li>{dataArtist.biography}</li>
            <li>{dataArtist.awards}</li>
          </ul>
        </div>
      </div>
    )
}