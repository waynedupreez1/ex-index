<script lang="ts">
    import Header from '../components/header.svelte'
    import Footer from '../components/footer.svelte'
    import Nav from '../components/navbar.svelte'
    import "../app.css";
</script>

<Nav></Nav>

<main>
    <slot />    
</main>


<Footer info="My webisute"/>


<style lang="postcss">
	:global(html) {
	  background-color: theme(colors.gray.100);
	}
</style>