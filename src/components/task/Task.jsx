import { useState } from "react";
import { ReactComponent as DeleteIcon } from "../../assests/deleteIcon-3.svg";
import { ReactComponent as TickIcon } from "../../assests/tick1.svg";

import "./Task.css";

const Task = ({ task, state }) => {
  const deleteHandler = (id) => {
    const findTask = state.tasks.find((task) => task.id === id);
    if (findTask.completed) {
      const filteredTasks = state.tasks.filter((task) => task.id !== id);
      state.setTasks(filteredTasks);
    }
  };

  const strikeHandler = (id) => {
    // const findTask = state.tasks.find((task) => task.id === id);
    // findTask.completed = true;
    // state.setTasks([...state.tasks]);
    // const maped = state.tasks.map((task) =>
    //   task.id === id ? { ...task, completed: true } : task
    // );

    // console.log(maped);
    state.setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, completed: true } : task))
    );
  };

  return (
    <>
      <div className="task">
        <button className="button-tick" onClick={() => strikeHandler(task.id)}>
          <TickIcon />
        </button>

        {task.completed ? (
          <div className="task-completed para-container">
            <p>{task.todo}</p>
          </div>
        ) : (
          <div className="task-not-completed para-container">
            <p>{task.todo}</p>
          </div>
        )}

        <button
          className="button-delete"
          onClick={() => deleteHandler(task.id)}
        >
          <DeleteIcon />
        </button>
      </div>
    </>
  );
};

export default Task;
