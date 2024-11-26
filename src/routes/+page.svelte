<script lang="ts">
	import TodoForm from '../components/TodoForm.svelte';
	import TodoList from '../components/TodoList.svelte';

	interface Todo {
		id: number;
		text: string;
	}

	let todos = $state<Todo[]>([]);

	const addTodo = (text: string) => {
		const newTodo = {
			id: Date.now(),
			text: text
		};
		todos.push(newTodo);
	};
</script>

<h1>Todo App</h1>
<TodoForm onChange={addTodo} />
<TodoList {todos} />
