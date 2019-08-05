<script context="module">
  import { setClient, query } from "svelte-apollo";
  import { client, MOVIES } from "../../data";

  import Poster from "./Poster.svelte";
</script>

<script>
  export let page = 1;
  let maxPage = 30; // hard code, we will come back to change late
  try {
    setClient(client);
  } catch (e) {
    console.log(e);
  }
  let movies = query(client, { query: MOVIES, variables: { page: page } });

  const goToNextPage = () => {
    if (page < maxPage) {
      page++;
      movies = query(client, { query: MOVIES, variables: { page: page } });
    }
  };

  const goToPrevPage = () => {
    if (page > 1) {
      page--;
      movies = query(client, { query: MOVIES, variables: { page: page } });
    }
  };
</script>

<div class="pagination">
  <button class="btn btn-default btn-ghost" on:click={goToPrevPage}>&lt;&lt; Prev Page</button>
  <button class="btn btn-default btn-ghost" on:click={goToNextPage}>Next Page &gt;&gt;</button>
</div>
<ul class="movies-list">
  {#await $movies}
    <li>Loading...</li>
  {:then result}
    {#each result.data.discoverMovies.results as movie, i}
      <Poster {movie} />
    {/each}
  {:catch error}
    <li>Error loading movies: {error}</li>
  {/await}
</ul>
<div class="pagination">
  <button class="btn btn-default btn-ghost" on:click={goToPrevPage}>&lt;&lt; Prev Page</button>
  <button class="btn btn-default btn-ghost" on:click={goToNextPage}>Next Page &gt;&gt;</button>
</div>
