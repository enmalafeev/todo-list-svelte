<script lang="ts">
	import { onMount } from 'svelte';

	let { onChange }: { onChange: (s: string) => void } = $props();
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
		placeholder="Введите текст..."
	/>
	<button type="submit">Add Todo</button>
</form>
