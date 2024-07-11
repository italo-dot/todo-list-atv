import React, { useState } from 'react';
import TodoItem from './TodoItem';
import '../App.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    if (title.trim() !== '') {
      const newTask = {
        id: Date.now(), // Usando timestamp como ID (idealmente, use algum UUID)
        title: title,
        description: description
      };
      setTasks([...tasks, newTask]);
      setTitle('');
      setDescription('');
    }
  };

  const handleRemoveTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      <h2>Lista de Tarefas</h2>

      <div className="add-task">
        <input
          type="text"
          placeholder="Título da tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Descrição da tarefa"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleAddTask}>Adicionar Tarefa</button>
      </div>

      <div className="tasks">
        {tasks.map(task => (
          <TodoItem key={task.id} task={task} onRemove={handleRemoveTask} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
