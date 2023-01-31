import { useState } from "react";

import Task from "./task/Task";

import './Input.css'

const Input = () => {
  const [tasks, setTasks] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    const inputBox = event.target.task;
    const newTask = {
      todo: inputBox.value,
      id: Math.random(),
      completed: false,
    };

    setTasks([...tasks, newTask]);

    inputBox.value = "";
    inputBox.focus();
  };

  return (
    <div className="app-container">
      <form onSubmit={submitHandler}>
        <input type="text" name="task" placeholder="To-do" required />
        <button className="button-add">Add</button>
      </form>

      <div className="task-Container">
        {tasks.length > 0 &&
          tasks.map((singleTask) => {
            return <Task  key={singleTask.id} task={singleTask} state={{ tasks, setTasks }} />;
          })}
      </div>
    </div>
  );
};

export default Input;

// (

//   <div key={task.id} className="task">

//     <button className="button-68" onClick={() => strikeHandler(task.id)}>✔</button>
//     {task.completed ? <p id="strike" style={{textDecoration:"line-through"}}>{task.todo} </p> : <p id="no-strike">{task.todo} </p>}

//     <button  className="button-24" onClick={() => deleteHandler(task.id)}>X</button>
//   </div>

// )
