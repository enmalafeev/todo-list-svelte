<script lang="ts">
	import TodoApp from '../components/TodoApp.svelte';
</script>

<div
	class="hero min-h-screen"
	style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);"
>
	<div class="hero-overlay bg-opacity-60"></div>
	<div class="hero-content text-neutral-content text-center">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">Todo App</h1>
			<TodoApp />
		</div>
	</div>
</div>

<style lang="postcss"></style>
