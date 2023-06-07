import React from "react";
import "./Skills.css";
import fei from "../images/front-end.svg";
import Project from "./Project";
import "./Project.css";
const Skills = () => {
  const skills = [
    { name: "Front-End Coding", image: fei },
    { name: "React", image: fei },
    { name: "Redux", image: fei },
    { name: "SQL", image: fei },
    { name: "MongoDB", image: fei },
    { name: "Javascript", image: fei },
    { name: "Python", image: fei },
    { name: "JAVA", image: fei },
    { name: "React Native", image: fei },
    { name: "PowerBI", image: fei },
    { name: "Node", image: fei },
    { name: "ExpressJs", image: fei },
  ];
  const projects = [
    {
      name: "Project 1",
      link: "https://example.com/project1",
      description: "This is the description for Project 1.",
    },
    {
      name: "Project 2",
      link: "https://example.com/project2",
      description: "This is the description for Project 2.",
    },
    {
      name: "Project 3",
      link: "https://example.com/project3",
      description: "This is the description for Project 3.",
    },
  ];

  return (
    <>
      <div className="skill-flex">
        <div className="skill-div">
          <div class="button1">
            <span>
              <code>|| Skills ||</code>
            </span>
          </div>
        </div>
        <div className="skills-flex">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <img src={skill.image} alt={skill.name} />
              <code>
                <p className="skill-name">{skill.name}</p>
              </code>
            </div>
          ))}
        </div>
      </div>
      {/* Projects div */}
      <div
        classname="repro"
        style={{
          backgroundColor: "",
          width: "100%",
          padding: "1rem 3rem",
        }}
      >
        <h1 className="project-cont-head">Projects </h1>
        {projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            link={project.link}
            description={project.description}
          />
        ))}
      </div>
    </>
  );
};

export default Skills;
