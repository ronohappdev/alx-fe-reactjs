import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="todo-item">
      <span 
        onClick={onToggle}
        style={{ 
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer'
        }}
        data-testid={`todo-item-${todo.id}`}
      >
        {todo.text}
      </span>
      <button 
        onClick={onDelete}
        className="delete-button"
        data-testid={`delete-button-${todo.id}`}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;