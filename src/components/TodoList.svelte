<script lang="ts">
	let { todos, removeTodo } = $props();
</script>

<ul>
	{#each todos as todo}
		<li>
			{todo.text}
			<button onclick={() => removeTodo(todo.id)} class="button delete" aria-label="remove todo"
			></button>
		</li>
	{/each}
</ul>

<style>
	.delete {
		border: none;
		background: url(../icons/delete.svg) no-repeat 50% 50%;
		background-size: 1rem 1rem;
		cursor: pointer;
		height: 100%;
		aspect-ratio: 1;
		opacity: 0.5;
		transition: opacity 0.2s;
	}

	.delete:hover {
		opacity: 1;
	}
</style>
