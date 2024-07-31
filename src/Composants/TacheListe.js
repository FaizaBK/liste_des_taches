import React from 'react';
import Tache from './Tache';


const TacheListe = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Tache key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TacheListe;