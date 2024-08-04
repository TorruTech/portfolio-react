import React, { useEffect, useRef, useState } from 'react';

export const Skills = () => {
  const skillsRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = skillsRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight) {
        setAnimated(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check immediately in case it's already in view

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="skills" ref={skillsRef}>
      <h1>Mis habilidades</h1>
      <h3>Siempre buscando aprender cosas nuevas, pero este es mi conjunto de habilidades principal</h3>
      <div id="languages">
        {['HTML & CSS', 'JavaScript', 'React JS', 'SQL', 'Java', 'Flutter'].map((skill, index) => (
          <div className="languageBox" key={skill}>
            <div className="titles">
              <h3 style={{ color: 'white' }}>{skill}</h3>
              <h3 className="counter">{animated ? `${index * 10 + 70}%` : '0%'}</h3>
            </div>
            <div className="barsBg">
              <div className="bars" style={{ width: animated ? `${index * 10 + 70}%` : '0%' }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
