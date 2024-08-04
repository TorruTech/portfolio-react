import React, { useEffect, useRef } from 'react';

export const Galaxy = () => {
  const textElement = useRef(null);
  const isTextAnimated = useRef(false); // Ref to track if the text has already been animated

  useEffect(() => {
    const text = "Soy Javier Torrubia";
    let index = 0;

    if (isTextAnimated.current) return; // If text is already animated, do nothing

    function typeWriter() {
      if (index < text.length) {
        textElement.current.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 130); // Adjust the typing speed if needed
      } else {
        textElement.current.style.borderRight = 'none'; // Stop the cursor blinking
        isTextAnimated.current = true; // Mark text as animated
      }
    }

    function borderIntermittent() {
      const borderBlinkInterval = setInterval(() => {
        if (textElement.current.style.borderRight === 'none') {
          textElement.current.style.borderRight = '.15em solid orange';
        } else {
          textElement.current.style.borderRight = 'none';
        }
      }, 500); // Change border every 500 ms

      return borderBlinkInterval;
    }

    typeWriter();
    const borderInterval = borderIntermittent();

    // Cleanup interval on component unmount
    return () => {
      clearInterval(borderInterval); // Clear the interval when the component unmounts
    };

  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div id="galaxy">
      <div className="content">
        <h2>¡Bienvenido!</h2>
        <h1
          ref={textElement}
          id="animated-text"
          style={{ borderRight: '.15em solid orange', whiteSpace: 'nowrap', overflow: 'hidden' }}
        >
          {/* Text will be dynamically added here */}
        </h1>
        <h3>Full Stack Developer</h3>
        <h4>Más sobre mí</h4>
        <div id="socialMedia">
          <i className="fab fa-instagram" aria-hidden="true"></i>
          <i className="fab fa-github" aria-hidden="true"></i>
          <i className="fab fa-linkedin" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};
