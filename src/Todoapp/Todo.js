import React, { useState } from 'react';
import './todo.css';
import ListTask from './ListTask';
import AddTask from './AddTask';

const Todo = () => {
    const [Tasks,setTasks] = useState([]);

    const addTask = (title)=>{
        const newTask = [...Tasks, {title}]
        setTasks(newTask);
    }

    const removeTask = (index)=> {
        const newTask = [...Tasks]
        newTask.splice(index,1)
        setTasks(newTask)
    }

  return (
    <>
    <div className='todo-container'>
        <div className='header'>☰MY TODO☰</div>
        <div className='add-task'>
            <AddTask addTask ={addTask}/>
        </div>
        <div className='tasks'>
           {Tasks.map((task,index)=>(
               <ListTask task ={task} removeTask = {removeTask} index = {index} key={index}  />
            ))}
        </div>
    </div>
        
    </>
  )
}

export default Todo