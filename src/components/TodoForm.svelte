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

<form onsubmit={handleSubmit} class="flex">
	<input
		bind:this={inputElement}
		bind:value
		type="text"
		name="todoInput"
		class="input input-bordered input-primary w-full max-w-xs mr-2"
		class:input-error={errors.length}
		placeholder="Enter new todo..."
	/>
	<button type="submit" class="btn btn-primary">Add Todo</button>
</form>

{#if errors.length > 0}
	<ul>
		{#each errors as error}
			<li class="text-red-600">{error}</li>
		{/each}
	</ul>
{/if}
