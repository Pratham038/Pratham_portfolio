import React from "react";
import "./SocialIcons.css";
const SocialIcons = () => {
  return (
    <div className="contact-icon">
      <ul>
        <li>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i
              className="fas fa-phone"
              style={{ transform: "rotate(90deg)" }}
            ></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-envelope"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
