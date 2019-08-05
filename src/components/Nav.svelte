<script>
    import Logo from './Logo.svelte';
	export let segment;
</script>

<style>
</style>

<nav class="terminal-nav">
    <Logo {segment}/>
    <div class="terminal-menu">
        <ul>
            <li><a rel=prefetch class='{segment === undefined || segment ==="movie" ? "selected" : "movies"}' href='.'>Movies</a></li>
            <li><a rel=prefetch class='{segment === "tv-shows" ? "selected" : ""}' href='tv-shows'>TV Shows</a></li>
            <li><a rel=prefetch class='{segment === "people" ? "selected" : ""}' href='people'>People</a></li>

            <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
                 the blog data when we hover over the link or tap it on a touchscreen -->
            <!--<li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a></li>-->
        </ul>
	</div>
</nav>