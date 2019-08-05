<script>
  export let movie = {
    id: 0,
    title: "",
    vote_count: 823,
    video: false,
    vote_average: 0.0,
    popularity: 0.0,
    poster_path: "",
    original_language: "",
    original_title: "",
    genre_ids: [],
    backdrop_path: "",
    adult: false,
    overview: "",
    release_date: ""
  };

  const imagePath = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`;
  const imagePathx1 = `${imagePath} 1x`;
  const imagePathx2 = `${imagePath} 2x`;
  if (movie.overview === "") {
    movie.overview = "We don't have an overview translated in English. Help us expand our database by adding one.";
  }
</script>

<li class="poster" id="poster-movie-{movie.id}">
  <div class="image_content">
    <a rel="prefetch" id="movie_420818" class="result" href="/movie/{movie.id}" title={movie.title} alt={movie.title}>
      <img class="poster-image" alt={movie.title} sizes="185px" srcset="{imagePathx1}, {imagePathx2}" src={imagePath} />
    </a>
  </div>
  <div class="info">
    <div class="wrapper">
      <div class="">
        <h2>
          <a rel="prefetch" id="movie-title-{movie.id}" class="title" href="/movie/{movie.id}" title={movie.title} alt={movie.title}>{movie.title}</a>
        </h2>
        <span class="release-date">{movie.release_date}</span>
      </div>
    </div>
    <p class="overview">{movie.overview}</p>
    <p class="view_more">
      <a rel="prefetch" id="movie-info-{movie.id}" class="result" href="/movie/{movie.id}" title={movie.title} alt={movie.title}>More Info</a>
    </p>
  </div>
</li>

