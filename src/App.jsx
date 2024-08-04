// src/App.js
import React from 'react';
import { NavBar } from './components/NavBar';
import { Faqs } from './components/Faqs';
import { Galaxy } from './components/Galaxy';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Mountains } from './components/Mountains';
import { VideoContainer } from './components/VideoContainer';
import { FormContainer } from './components/FormContainer';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Faqs />
      <Galaxy />
      <AboutMe />
      <Skills />
      <Mountains />
      <VideoContainer />
      <FormContainer />
      <Footer />
    </div>
  );
}

export default App;
