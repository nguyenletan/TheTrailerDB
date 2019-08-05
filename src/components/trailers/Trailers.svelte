<script context="module">
  import { setClient, query } from "svelte-apollo";
  import { client, TRAILERS } from "../../data";
  import Trailer from "./Trailer.svelte";
</script>

<script>
  export let movieId = 0;
  try {
    setClient(client);
  } catch (e) {
    console.log(e);
  }
  let trailer = query(client, { query: TRAILERS, variables: { movie_id: movieId } });
</script>

<ul class="trailer-list">
  {#await $trailer}
    <li>Loading...</li>
  {:then result}
    {#each result.data.getTrailers.results as trailer, i}
      <Trailer {trailer} />
    {/each}
  {:catch error}
    <li>Error loading movies: {error}</li>
  {/await}

</ul>
