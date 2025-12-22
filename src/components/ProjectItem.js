import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id, skills, delay = 0 }) {
  const navigate = useNavigate();

  const skillsArray = skills
    ? skills.split(",").map((skill) => skill.trim())
    : [];

  return (
    <div
      className="projectItem"
      style={{ animationDelay: `${delay}s` }}
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div className="projectItem-content">
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage">
          <div className="project-overlay">
            <div className="project-hover-content">
              <span className="view-project">View Project →</span>
            </div>
          </div>
        </div>
        <div className="projectItem-info">
          <h1 className="projectItem-title">{name}</h1>
          {skillsArray.length > 0 && (
            <div className="projectItem-skills">
              {skillsArray.slice(0, 3).map((skill, idx) => (
                <span key={idx} className="skill-badge">
                  {skill}
                </span>
              ))}
              {skillsArray.length > 3 && (
                <span className="skill-badge more">
                  +{skillsArray.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

ProjectItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  skills: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

export default ProjectItem;
