import React from 'react';

function Skills({ skills }) {
  return (
    <div className="mb-4">
      <h2>Skills</h2>
      <ol>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ol>
    </div>
  );
}

export default Skills;
