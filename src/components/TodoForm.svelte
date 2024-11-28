<script lang="ts">
	import { onMount } from 'svelte';

	let { onChange, errors }: { onChange: (s: string) => void; errors: string[] } = $props();
	let inputElement: HTMLInputElement;
	let value = $state<string>('');

	onMount(() => setInputFocus());
	$effect(() => {
		setInputFocus();
	});

	const handleSubmit = (event: Event) => {
		event.preventDefault();
		onChange(value);
		value = '';
	};

	function setInputFocus() {
		inputElement.focus();
	}
</script>

<form onsubmit={handleSubmit}>
	<input
		bind:this={inputElement}
		bind:value
		type="text"
		name="todoInput"
		placeholder="Enter new todo..."
	/>
	<button type="submit">Add Todo</button>

	{#if errors.length > 0}
		<ul>
			{#each errors as error}
				<li>{error}</li>
			{/each}
		</ul>
	{/if}
</form>
