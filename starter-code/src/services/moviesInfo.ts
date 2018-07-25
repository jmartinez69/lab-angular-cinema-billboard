interface Movie  {
  id: Number,
  title: String,
  poster: String,
  synopsis:  String,
  genres: Array<String>,
  year: Number,
  director: String,
  actors: Array<String>,
  hours?: Array<String>,
  room?: Number
}

export default Movie;

