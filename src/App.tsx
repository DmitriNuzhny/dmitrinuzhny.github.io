import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import './App.css';

// Pages
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Experience from './pages/Experience.tsx';
import Projects from './pages/Projects.tsx';
import Contact from './pages/Contact.tsx';

// Components
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';

// Theme
import { theme } from './styles/theme.ts';
import { MainContainer } from './styles/MainStyles.ts';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </MainContainer>
    </ThemeProvider>
  );
};

export default App;
