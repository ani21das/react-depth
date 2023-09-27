import React from 'react';

function Education({ education }) {
  return (
    <div className="mb-4">
      <h2>Education</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            {edu.degree} in {edu.school} ({edu.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
