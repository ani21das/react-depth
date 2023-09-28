import React from 'react';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import resumeData from '../data';
import Hobbies from './Hobbies';

function Resume () {

  const skillsLimit = 2;
  const educationLimit = 1;
  const experienceLimit = 2; 
  const hobbiesLimit = 2; 

  const handlePrint = () => {
    window.print();
  };
  
  return (
    <div>
      <h1 className="mb-2">{ resumeData.name }'s Resume</h1>
      <div className="mb-4">
        <p>Email: { resumeData.email }</p>
      </div>
      
      { resumeData.skills.length > 0 && <Skills skills={ resumeData.skills.slice(0,skillsLimit) } /> }

      { resumeData.education.length > 0 && <Education education={ resumeData.education.slice(0,educationLimit) } /> }
   
      { resumeData.experience.length > 0 && <Experience experience={ resumeData.experience.slice(0,experienceLimit) } /> }

      { resumeData.hobbies.length > 0 && <Hobbies hobbies={ resumeData.hobbies.slice( 0, hobbiesLimit ) } /> }
      
      
      <button onClick={handlePrint}>Print</button>

    </div>
  );
}

export default Resume;
