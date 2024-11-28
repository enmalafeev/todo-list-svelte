<script lang="ts">
	import TodoForm from '../components/TodoForm.svelte';
	import TodoList from '../components/TodoList.svelte';
	import { validateTodo } from '../utils/validateTodo';

	interface Todo {
		id: number;
		text: string;
	}

	let todos = $state<Todo[]>([]);
	let errors: string[] = $state([]);

	const addTodo = (text: string) => {
		errors = validateTodo(text);
		if (errors.length === 0) {
			const newTodo = {
				id: Date.now(),
				text: text
			};
			todos.push(newTodo);
		}
	};

	const removeTodo = (todoId: number) => {
		const newTodos = todos.filter((todo) => todo.id !== todoId);
		todos = newTodos;
	};
</script>

<h1>Todo App</h1>
<TodoForm onChange={addTodo} {errors} />
<TodoList {todos} {removeTodo} />
