// src/App.js
import React from 'react';
import { NavBar } from './components/NavBar';
import { Faqs } from './components/Faqs';
import { Galaxy } from './components/Galaxy';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Proyects } from './components/Proyects';
import { Mountains } from './components/Mountains';
import { VideoContainer } from './components/VideoContainer';
import { FormContainer } from './components/FormContainer';
import { Footer } from './components/Footer';

function App() {
  return (
    <body>
      <NavBar />
      <Galaxy />
      <AboutMe />
      <Skills />
      <Proyects />
      <Mountains />
      <VideoContainer />
      <Faqs />
      <FormContainer />
      <Footer />
    </body>
  );
}

export default App;
