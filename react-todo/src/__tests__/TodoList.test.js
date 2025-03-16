import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders the TodoList with initial todos', () => {
    render(<TodoList />);
    
    // Check if the header is present
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  test('adds a new todo when the form is submitted', () => {
    render(<TodoList />);
    
    // Find the input and button
    const input = screen.getByTestId('new-todo-input');
    const button = screen.getByTestId('add-todo-button');
    
    // Type a new todo and submit
    fireEvent.change(input, { target: { value: 'Test the app' } });
    fireEvent.click(button);
    
    // Check if the new todo is added
    expect(screen.getByText('Test the app')).toBeInTheDocument();
    
    // Check if the input is cleared
    expect(input.value).toBe('');
  });

  test('toggles a todo when clicked', () => {
    render(<TodoList />);
    
    // Find the first todo item
    const todoItem = screen.getByTestId('todo-item-1');
    
    // Initially, the todo should not be completed
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
    
    // Click the todo to toggle it
    fireEvent.click(todoItem);
    
    // After clicking, the todo should be completed
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    
    // Click again to toggle back
    fireEvent.click(todoItem);
    
    // After clicking again, the todo should not be completed
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo when the delete button is clicked', () => {
    render(<TodoList />);
    
    // Check if the todo exists initially
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    
    // Find the delete button for the first todo
    const deleteButton = screen.getByTestId('delete-button-1');
    
    // Click the delete button
    fireEvent.click(deleteButton);
    
    // Check if the todo is removed
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

  test('does not add empty todos', () => {
    render(<TodoList />);
    
    // Count initial todos
    const initialTodoCount = screen.getAllByText(/Learn React|Build a Todo App|Write tests/).length;
    
    // Find the input and button
    const input = screen.getByTestId('new-todo-input');
    const button = screen.getByTestId('add-todo-button');
    
    // Try to submit with empty input
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(button);
    
    // Count todos after attempted add
    const afterTodoCount = screen.getAllByText(/Learn React|Build a Todo App|Write tests/).length;
    
    // Check that the count hasn't changed
    expect(afterTodoCount).toBe(initialTodoCount);
  });
});