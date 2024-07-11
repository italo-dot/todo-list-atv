import React from 'react';

const TodoItem = ({ task, onRemove }) => {
  // Verifica se a task está definida antes de tentar acessar suas propriedades
  if (!task) return null;

  const { id, title, description } = task;

  return (
    <div className="todo-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => onRemove(id)}>Remover</button>
    </div>
  );
};

export default TodoItem;
