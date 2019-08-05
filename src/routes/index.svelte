<script context="module">
  import "cross-fetch/polyfill";
  import PosterList from "../components/posters/PosterList.svelte";
</script>

<svelte:head>
  <title>Popular Movies - The Trailer GraphQl (TTG)</title>
</svelte:head>

<h1 class="terminal-prompt">Popular Movies</h1>
<PosterList />
