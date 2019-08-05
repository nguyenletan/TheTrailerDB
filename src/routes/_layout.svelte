<script>
    import '../components/Styles.svelte';
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
</style>

<header class="container nav-wrapper" id="header">
    <Nav {segment}/>
</header>

<main class="container">
	<slot></slot>
</main>

<footer class="container" id="footer">
    <p>Version 0.1.0 - Code with love</p>
</footer>