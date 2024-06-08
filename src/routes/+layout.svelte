<script lang="ts">
    import Header from '../components/Header.svelte'
    import Footer from '../components/Footer.svelte'
    import Nav from '../components/Navbar.svelte'
    import "../app.css";
</script>

<Nav></Nav>

<main>
    <slot />    
</main>


<Footer info="My webisute"/>

