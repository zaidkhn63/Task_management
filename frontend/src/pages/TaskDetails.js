import React from "react";
import { useParams } from "react-router-dom";

const TaskDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Task Details</h1>
      <p>Details for task with ID: {id}</p>
    </div>
  );
};

export default TaskDetails;
