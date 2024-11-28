export function validateTodo(todoText: string): string[] {
	const errors: string[] = [];

	if (!todoText.trim()) {
		errors.push('Название задачи не должно быть пустым.');
	} else if (todoText.length < 3) {
		errors.push('Название задачи должно быть минимум 3 символа.');
	} else if (todoText.length > 50) {
		errors.push('Название задачи не должно превышать 50 символов.');
	}

	return errors;
}
