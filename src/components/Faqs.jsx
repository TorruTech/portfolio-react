import React, { useState } from 'react';

const faqData = [
  {
    question: "¿Cómo me defino?",
    answer: "Mientras trabajaba como tecnólogo de alimentos y enseñaba física y química en secundaria, me encontré con el mundo de la programación. Fue un cambio radical para mí. La lógica y las infinitas posibilidades de la codificación me cautivaron, llevándome a sumergirme en este nuevo campo."
  },
  {
    question: "¿Cuál es mi experiencia?",
    answer: "Mientras trabajaba como tecnólogo de alimentos y enseñaba física y química en secundaria, me encontré con el mundo de la programación. Fue un cambio radical para mí. La lógica y las infinitas posibilidades de la codificación me cautivaron, llevándome a sumergirme en este nuevo campo."
  },
  {
    question: "¿Qué tecnologías manejo?",
    answer: "Mientras trabajaba como tecnólogo de alimentos y enseñaba física y química en secundaria, me encontré con el mundo de la programación. Fue un cambio radical para mí. La lógica y las infinitas posibilidades de la codificación me cautivaron, llevándome a sumergirme en este nuevo campo."
  },
  {
    question: "¿Cómo contacto conmigo?",
    answer: "Mientras trabajaba como tecnólogo de alimentos y enseñaba física y química en secundaria, me encontré con el mundo de la programación. Fue un cambio radical para mí. La lógica y las infinitas posibilidades de la codificación me cautivaron, llevándome a sumergirme en este nuevo campo."
  }
];

export const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <aside>
    <h1>FAQs</h1>
    <div id="questionsContainer">
      {faqData.map((item, index) => (
        <div className="questionItem" key={index}>
          <div className="questionCircle" onClick={() => handleToggle(index)}>
            <h3 className={`question ${activeIndex === index ? 'active' : ''}`}>
              {item.question}
            </h3>
            <img
              src="./public/images/chevronRight.svg"
              alt="chevron"
              className={`chevronRight ${activeIndex === index ? 'active' : ''}`}
            />
          </div>
          <p className={`answers ${activeIndex === index ? 'active' : ''}`}>
            {item.answer}
          </p>
        </div>
      ))}
    </div>
  </aside>
  );
};
