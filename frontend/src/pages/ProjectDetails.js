import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../api/taskApi";
import { setTasks } from "../state/slices/taskSlice";

const ProjectDetails = ({ id }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    const loadTasks = async () => {
      const response = await fetchTasks(id);
      dispatch(setTasks(response.data));
    };

    loadTasks();
  }, [id, dispatch]);

  return (
    <div>
      <h1>Project Details</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;
