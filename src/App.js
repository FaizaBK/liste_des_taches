import React, { useState } from 'react';
import TacheForm from './Composants/TacheForm';
import TacheListe from './Composants/TacheListe';
import './App.css';


const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    if (window.confirm('Voulez-vous vraiment supprimer cette tâche ?')) {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }
  };

  return (
    <div className="app">
      <h1>Gestion des tâches</h1>
      <TacheForm addTask={addTask} />
      <TacheListe tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;