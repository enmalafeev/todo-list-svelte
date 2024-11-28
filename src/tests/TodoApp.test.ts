import { render, waitFor, fireEvent } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import TodoApp from '../components/TodoApp.svelte';

describe('TodoApp', () => {
	it('shows validation error when todo input is empty', async () => {
		const { queryByText, getByRole, getByText } = render(TodoApp);

		const input = getByRole('textbox') as HTMLInputElement;
		await fireEvent.input(input, { target: { value: ' ' } });
		await fireEvent.click(getByText('Add Todo'));

		await waitFor(() => {
			expect(queryByText('Название задачи не должно быть пустым.')).not.toBeNull();
		});
	});

	it('shows validation error when todo text is less 3 sybmols', async () => {
		const { queryByText, getByRole, getByText } = render(TodoApp);

		const input = getByRole('textbox') as HTMLInputElement;
		await fireEvent.input(input, { target: { value: 'ch' } });
		await fireEvent.click(getByText('Add Todo'));

		await waitFor(() => {
			expect(queryByText('Название задачи должно быть минимум 3 символа.')).not.toBeNull();
		});
	});

	it('shows validation error when todo text is greater than 50 sybmols', async () => {
		const { queryByText, getByRole, getByText } = render(TodoApp);
		const value = 'Lorem ipsum dolor, sit amet consectetur adipisicing';

		const input = getByRole('textbox') as HTMLInputElement;
		await fireEvent.input(input, { target: { value } });
		await fireEvent.click(getByText('Add Todo'));

		await waitFor(() => {
			expect(queryByText('Название задачи не должно превышать 50 символов.')).not.toBeNull();
		});
	});
});
