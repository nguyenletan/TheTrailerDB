<script>
  export let trailer = [
    {
      key: "",
      site: "YouTube",
      type: "",
      size: "",
      name: ""
    }
  ];
  const videoUrl = trailer.site === "YouTube" ? `https://www.youtube.com/embed/${trailer.key}` : "";
</script>

{#if videoUrl !== ''}
  <li class="resp-container">
    <iframe class="resp-iframe"
      src="https://www.youtube.com/embed/{trailer.key}"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen />
  </li>
{/if}
