import React from 'react';

function Experience({ experience }) {
  return (
    <div>
      <h2>Experience</h2>
      <ul>
        {experience.map((exp, index) => (
          <li key={index}>
            {exp.position} at {exp.company} ({exp.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
