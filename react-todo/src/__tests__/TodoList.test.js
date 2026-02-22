import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders the TodoList component correctly', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByTestId('todo-input')).toBeInTheDocument();
    expect(screen.getByTestId('add-button')).toBeInTheDocument();
  });

  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');

    fireEvent.change(input, { target: { value: 'New Todo Item' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo Item')).toBeInTheDocument();
  });

  test('does not add empty todo', () => {
    render(<TodoList />);
    const initialItems = screen.getAllByTestId('todo-item');
    const addButton = screen.getByTestId('add-button');

    fireEvent.click(addButton);

    expect(screen.getAllByTestId('todo-item')).toHaveLength(initialItems.length);
  });

  test('toggles a todo item completion status', () => {
    render(<TodoList />);
    const todoText = screen.getByText('Learn React');

    expect(todoText).toHaveStyle('text-decoration: none');
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();

    const todoItems = screen.getAllByTestId('todo-item');
    const firstDeleteButton = todoItems[0].querySelector('button');
    fireEvent.click(firstDeleteButton);

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

  test('clears input after adding a todo', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');

    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(addButton);

    expect(input.value).toBe('');
  });
});