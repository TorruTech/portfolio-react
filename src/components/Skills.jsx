import React, { useEffect, useRef, useState } from 'react';

const languages = [
  {
    name: "HTML & CSS",
    percentage: 90
  },
  {
    name: "JavaScript",
    percentage: 85
  },
  {
    name: "React JS",
    percentage: 70
  },
  {
    name: "SQL",
    percentage: 85
  },
  {
    name: "Java",
    percentage: 90
  },
  {
    name: "Flutter",
    percentage: 70
  },
];

export const Skills = () => {
  const skillsRef = useRef(null);
  const [animated, setAnimated] = useState(false);
  const [percentages, setPercentages] = useState(languages.map(() => 0));

  useEffect(() => {
    const handleScroll = () => {
      const rect = skillsRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setAnimated(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check immediately in case it's already in view

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (animated) {
      languages.forEach((language, index) => {
        let currentPercentage = 0;
        const interval = setInterval(() => {
          currentPercentage += 1;
          setPercentages((prev) => {
            const newPercentages = [...prev];
            if (currentPercentage <= language.percentage) {
              newPercentages[index] = currentPercentage;
            } else {
              newPercentages[index] = language.percentage;
              clearInterval(interval);
            }
            return newPercentages;
          });
        }, 40); // Adjust the speed of the animation by changing this value
      });
    }
  }, [animated]);

  return (
    <div id="skills" ref={skillsRef}>
      <h1>Mis habilidades</h1>
      <h3>Siempre buscando aprender cosas nuevas, pero este es mi conjunto de habilidades principal</h3>
      <div id="languages">
        {languages.map((language, index) => (
          <div className="languageBox" key={language.name}>
            <div className="titles">
              <h3>{language.name}</h3>
              <h3 className="counter">{percentages[index]}%</h3>
            </div>
            <div className="barsBg">
              <div className="bars" style={{ width: `${percentages[index]}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
