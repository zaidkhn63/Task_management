import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProjectList = () => {
  const projects = useSelector((state) => state.projects);

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
