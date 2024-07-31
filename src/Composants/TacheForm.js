import React, { useState } from 'react';
import './TacheForm.css';

const TacheForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit= (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Ajouter une tâche"
        className="task-input"
      />
      <button type="submit" className="task-button">Ajouter</button>
    </form>
  );
};

export default TacheForm;
