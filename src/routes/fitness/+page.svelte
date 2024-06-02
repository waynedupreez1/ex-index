<script lang="ts">
	export let data;

	let exercises = data.exercises.slice(0, 5);
</script>

<svelte:head>
	<title>Fitness</title>
</svelte:head>

<h1>Fitness</h1>

<ul>
	{#each exercises as { id, name, force, equipment, gif }}
		<li>
			<p>
				{name}
				{force}
				{equipment}
				<img src={gif} alt="Girl in a jacket" width="300" height="300">
			</p>
		</li>
	{/each}
</ul>
