import React from "react";
import { useSelector } from "react-redux";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      <h2>Tasks</h2>
      <div>
        <h3>To-Do</h3>
        <ul>
          {tasks
            .filter((task) => task.status === "To-Do")
            .map((task) => (
              <li key={task.id}>{task.title}</li>
            ))}
        </ul>
      </div>
      <div>
        <h3>In Progress</h3>
        <ul>
          {tasks
            .filter((task) => task.status === "In Progress")
            .map((task) => (
              <li key={task.id}>{task.title}</li>
            ))}
        </ul>
      </div>
      <div>
        <h3>Completed</h3>
        <ul>
          {tasks
            .filter((task) => task.status === "Completed")
            .map((task) => (
              <li key={task.id}>{task.title}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
