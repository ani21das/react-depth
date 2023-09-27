import React from 'react';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import resumeData from '../data';
import Hobbies from './Hobbies';

function Resume() {
  return (
    <div>
      <h1 className="mb-2">{resumeData.name}'s Resume</h1>
      <div className="mb-4">
        <p>Email: {resumeData.email}</p>
      </div>
      <Skills skills={resumeData.skills} />
      <Education education={resumeData.education} />
      <Experience experience={ resumeData.experience } />
      <Hobbies hobbies={resumeData.hobbies} />
    </div>
  );
}

export default Resume;
