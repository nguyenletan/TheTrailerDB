<script context="module">
  import { onMount } from "svelte";
  import { setClient, restore, query } from "svelte-apollo";
  import { client, MOVIE } from "../../data";
  import { MAX_VOTE_COUNT } from "../../constanst";
  import Trailers from "../../components/trailers/Trailers.svelte";
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const { slug } = params;
    console.log(slug);
    const id = Number(slug);

    return {
      cache: await client.query({ query: MOVIE, variables: { id: id } })
    };
  }
</script>

<script>
  export let cache;
  restore(client, MOVIE, cache.data);
  const movie = cache.data.getMovieDetail;
  const title = movie ? `${movie.title} (${new Date(movie.release_date).getUTCFullYear()})` : "";
  const imageUrl = movie ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}` : "";
  const imageUrlx1 = movie ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path} 1x` : "";
  const imageUrlx2 = movie ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path} 2x` : "";
  const vote_count_ratio = movie ? (movie.vote_count > MAX_VOTE_COUNT ? 100 : (movie.vote_count * 100) / MAX_VOTE_COUNT) : 0;
  const companyLogoComponent = (imagePath, companyName) => {
    if (imagePath) {
      imagePath = `https://image.tmdb.org/t/p/original${imagePath}`;
      return `<img class="logo" src="${imagePath}" alt="${companyName}" />`;
    }
    return `<span class="logo">${companyName}</span>`;
  };
</script>

<svelte:head>
  <title>{title} - The Movies GraphQl (TMG)</title>
</svelte:head>
<div class="movie">
  <h1 class="terminal-prompt">{title}</h1>

  <div class="content">

    <div class="image_content">
      <img srcset="{imageUrlx1}, {imageUrlx2}" sizes="auto" src={imageUrl} class="" alt={title} />

    </div>
    <div class="info">
      <section class="overview">
        <h2>Overview</h2>
        <p>{movie.overview}</p>
      </section>

      <section class="release-information">
        <h2>Information:</h2>
        <dl>
          <dt class="status">
            <strong>Status:&nbsp;</strong>
            <span class="secondary-text">{movie.status}</span>
          </dt>
          <dt class="release-date">
            <strong>Release date:</strong>
            <span class="secondary-text">{movie.release_date}</span>
          </dt>
          <dt class="status">
            <strong>Budget:&nbsp;</strong>
            <span class="highlight-text">${movie.budget.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
          </dt>
          <dt class="status">
            <strong>Revenue:</strong>
            <span class="highlight-text">
              ${parseFloat(movie.revenue)
                .toFixed(2)
                .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
            </span>
          </dt>
        </dl>
      </section>

      <section class="genres">
        <h2>Genres:</h2>
        <ul class="genres-list">
          {#each movie.genres as genre, i}
            <li id={genre.id}>{genre.name}</li>
          {/each}
        </ul>
      </section>

      <section class="production-companies">
        <h2>Productions:</h2>
        <ul class="product-company-list">
          {#each movie.production_companies as production, i}
            <li id={production.id}>
              <div class="logo-wrapper">
                {@html companyLogoComponent(production.logo_path, production.name)}
              </div>
            </li>
          {/each}
        </ul>
      </section>
    </div>

    <div class="charts">
      <h2>Statistics for {movie.title}</h2>
      <hr />
      <div class="progress-bar progress-bar-show-percent chart lg">
        <div class="progress-bar-filled tertiary-color" style="width: {movie.vote_average * 10}%" data-filled="vote avegrate: {movie.vote_average * 10}%" />
      </div>
      <div class="progress-bar progress-bar-show-percent chart lg">
        <div class="progress-bar-filled secondary-color" style="width: {(movie.popularity / 10) * 1.5}%" data-filled="popularity: {movie.popularity}" />
      </div>
      <div class="progress-bar progress-bar-show-percent chart lg">
        <div class="progress-bar-filled highlight-color" style="width: {vote_count_ratio}%" data-filled="vote count: {movie.vote_count}" />
      </div>
    </div>

    <div class="trailers">
      <h2>{movie.title} trailers</h2>
      <hr />

      <Trailers movieId={movie.id} />
    </div>

  </div>

</div>
