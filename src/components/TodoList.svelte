<script lang="ts">
	let { todos } = $props();
</script>

<ul>
	{#each todos as todo}
		<li>{todo.text}</li>
	{/each}
</ul>
