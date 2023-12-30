import React, { useState } from 'react';
import './App.css';

function App() {

  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editTask, setEditTask] = useState({ id: null, value: '' });


  function addTask() {

    if (!newTask) {
      alert("Enter a task.")
      return;
    }

    const task = {
      id: Math.floor(Math.random() * 1000),
      value: newTask
    };

    setTasks(oldList => [...oldList, task]);
    setNewTask("");
  }

  function deleteTask(id) {
    const newArray = tasks.filter(task => task.id !== id);
    setTasks(newArray);
  }

  function editTaskValue(id) {
    const editedTask = tasks.find(task => task.id === id);
    setEditTask({ id: editedTask.id, value: editedTask.value });
    setEditMode(true);
  }
  
  function updateTask() {
    const updatedTasks = tasks.map(task => {
      if (task.id === editTask.id) {
        return { ...task, value: editTask.value };
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditTask({ id: null, value: '' });
    setEditMode(false);
  }

  return (
    <div className='todoApp'>
      <div className='inputTodo'>
        <h1 className='appTitle'>To Do List</h1>
        <input className='todoInput' 
        type='text' 
        placeholder='What to do?'
        value={editMode ? editTask.value : newTask}
        onChange={e => editMode ? setEditTask({ ...editTask, value: e.target.value }) : setNewTask(e.target.value)}/>
        <button className='btnTodo'
        onClick={() => editMode ? updateTask() : addTask()}>Add to list</button>
      </div>
      <div className='listTodo'>
        <ul className='ToDo'
        style={{ listStyleType: 'none' }}>
          {tasks.map(task => {
            return(
              <li className='taskName' key={task.id}>
              <button className='btnTask' onClick={() => deleteTask(task.id)}>Delete</button> 
              <button className='btnTask' onClick={() => editTaskValue(task.id)}>Edit</button>
              {task.value}</li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}

export default App;