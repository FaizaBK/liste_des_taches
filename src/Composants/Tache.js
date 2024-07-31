import React from 'react';


const Tache = ({ task, toggleTask, deleteTask }) => {
  const handleDelete = (taskId) => {
    if (window.confirm('Vous confirmez la suppression?')) {
      deleteTask(taskId);
    }
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <span>{task.text}</span>
      <div className="task-buttons">
        <button onClick={() => toggleTask(task.id)} className="task-toggle">
          {task.completed ? 'Invalider' : 'Valider'}
        </button>
        <button onClick={() => handleDelete(task.id)} className="task-delete">Supprimer</button>
      </div>
    </div>
  );
};

export default Tache;