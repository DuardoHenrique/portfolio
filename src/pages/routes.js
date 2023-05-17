import React, { useContext } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './home';
import { About } from './about';
import { Header } from '../components/header';
import { Skills } from './skills';
import { Projects } from './projects';
import { ThemeContext } from '../contexts/theme-context';


const AppRoutes = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <BrowserRouter>
      <section style={{background: theme.background }}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default AppRoutes;
