import React, { useState } from 'react';
import './App.css';

function App() {

  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {

    if (!newTask) {
      alert("Enter a task.")
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newTask
    };

    setTasks(oldList => [...oldList, tasks]);
    setNewTask("");
  }

  return (
    <div className='todoApp'>
      <div className='inputTodo'>
        <h1 className='appTitle'>To Do List</h1>
        <input className='todoInput' 
        type='text' 
        placeholder='What to do?'
        value={newTask}
        onChange={e => setNewTask(e.target.value)}></input>
        <button className='btnTodo'
        onClick={() => addTask()}>Add to list</button>
      </div>
      <div className='listTodo'>
        <ul>
          {tasks.map(task => {
            return(
              <li key={task.id}>{task.value}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App;