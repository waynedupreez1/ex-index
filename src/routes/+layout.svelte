<script lang="ts">
    import Header from '../components/header.svelte'
    import Footer from '../components/footer.svelte'
    import "../app.css";
</script>
  
<header>
    <Header title="Fitness"/>    
</header>

<main>
    <slot />    
</main>

<footer>
    <Footer info="My webisute"/>
</footer>

<style>
    
</style>