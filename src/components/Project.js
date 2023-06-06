import React from "react";
import "./Project.css";
const Project = ({ name, link, description }) => {
  return (
    <div className="project">
      <h3 className="project-name">{name}</h3>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        {link}
      </a>
      <p className="project-description">{description}</p>
    </div>
  );
};

export default Project;
