import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import TodoList from '../components/TodoList.svelte';

describe('TodoList test', () => {
	it('renders a list of todos', () => {
		const todos = [
			{ id: 1, text: 'one' },
			{ id: 2, text: 'two' }
		];
		const { container } = render(TodoList, { props: { todos } });

		const listItems = container.querySelectorAll('li');
		expect(listItems.length).toBe(todos.length);

		listItems.forEach((listItem, index) => {
			expect(listItem.textContent).toBe(todos[index].text);
		});
	});
});
