<script lang="ts">
	export let data;

	let exercises = data.exercises.slice(0, 5);


	function getInput(event: Event){
		const target = event.target as HTMLInputElement;

		console.log(target.value)
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="A simple, no subscription required exercise searching application, that also works in offline mode."/>
</svelte:head>

<div class="grid grid-cols-3">
{#each exercises as { name, force, equipment, gif }}
<div class="p-6 max-w-32 mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
	<div class="shrink-0">
		<img class="block mx-auto h-24 rounded-lg sm:mx-0 sm:shrink-0" src={gif} alt="Girl in a jacket" />
	</div>
	<div>
	  <div class="text-l font-medium text-black">Name: {name}</div>
	  <div class="text-l font-normal text-black">Force Type: {force}</div>
	  <div class="text-l font-normal text-black">Equipment: {equipment}</div>
	</div>
  </div>
{/each}
</div>
