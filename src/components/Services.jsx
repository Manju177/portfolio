import React from 'react';


const SkillBand = ({ skill, proficiency }) => {
  const skillBandStyle = {
    width: `${proficiency}%`,
    backgroundColor: proficiency >= 70 ? 'rgb(71 64 171)' : proficiency >= 30 ? 'rgb(126 127 179)' : 'rgb(126 127 179)',
  };

  return (
    <>
    
    <div className="skill-band">
      <div className="skill-info">
        <div className="skill-name">{skill}</div>
        <div className="proficiency">{proficiency}%</div>
      </div>
      <div className="progress-bar">
        <div className="progress" style={skillBandStyle}></div>
      </div>
    </div>
    </>
  );
};

const Services = () => {
  const skills = [
    { skill: 'HTML', proficiency: 90 },
    { skill: 'CSS', proficiency: 80 },
    { skill: 'JavaScript', proficiency: 75 },
    { skill: 'React JS', proficiency: 80 },
    { skill: 'Redux', proficiency: 70 },
    { skill: 'Bootstrap', proficiency: 65 },
    { skill: 'Tailwind', proficiency: 65 },
    { skill: 'Git', proficiency: 65 },
    // Add more skills as needed
  ];

  return (
    <div className="skill-bands-container">
      {skills.map((s, index) => (
        <SkillBand key={index} skill={s.skill} proficiency={s.proficiency} />
      ))}
    </div>
  );
};

export default Services;
