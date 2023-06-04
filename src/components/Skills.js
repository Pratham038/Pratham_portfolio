import React from "react";
import "./Skills.css";
import fei from "../images/front-end.png";
const Skills = () => {
  const skills = [
    { name: "Front-end Coding", image: fei },
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

  return (
    <div>
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={fei} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
