import { render, fireEvent } from '@testing-library/svelte';
import { describe, it, vi, expect } from 'vitest';
import TodoForm from '../components/TodoForm.svelte';

describe('TodoForm test', () => {
	const fn = vi.fn();
	it('should update the value when typing', async () => {
		const { getByRole } = render(TodoForm, { props: { onChange: fn(), errors: [] } });

		const input = getByRole('textbox') as HTMLInputElement;
		expect(input.value).toBe('');

		await fireEvent.input(input, { target: { value: 'test' } });
		expect(input.value).toBe('test');
	});

	it('should call onChange handler with updated value', async () => {
		const mockOnChange = vi.fn(() => 'test');
		const { getByRole } = render(TodoForm, { props: { onChange: mockOnChange, errors: [] } });

		const input = getByRole('textbox');
		const button = getByRole('button');
		await fireEvent.input(input, { target: { value: 'test' } });
		await fireEvent.click(button);

		expect(mockOnChange).toHaveBeenCalledWith('test');
	});
});
