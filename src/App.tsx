import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import './App.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Theme
import { theme } from './styles/theme';
import { MainContainer } from './styles/MainStyles';

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
