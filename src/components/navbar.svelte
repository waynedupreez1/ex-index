<script lang="ts">
	export let data;

	let exercises = data.exercises.slice(0, 5);


	function getInput(event: Event){
		const target = event.target as HTMLInputElement;

		console.log(target.value)
	};
</script>

