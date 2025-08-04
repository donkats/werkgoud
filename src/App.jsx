// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';

import Home from './pages/Home';
import Workout from './pages/Workout';
import Samenwerkingspartners from './pages/Samenwerkingspartners';
import Bedrijfsgeneeskundecoaching from './pages/Bedrijfsgeneeskundecoaching';
import Contact from './pages/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  /* ---------- Smooth-scroll helper ---------- */
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);          // close mobile menu
    }
  };

  /* ---------- Track section in view ---------- */
  useEffect(() => {
    const ids = [
      'home',
      'workout',
      'samenwerkingspartners',
      'bedrijfsgeneeskundecoaching',
      'contact',
    ];

    const onScroll = () => {
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ---------- Reusable link buttons ---------- */
  const navButtons = (
    <>
      <button
        className={`nav-link ${activeSection === 'workout' ? 'active' : ''}`}
        onClick={() => scrollToSection('workout')}
      >
        Workout
      </button>
      <button
        className={`nav-link ${activeSection === 'samenwerkingspartners' ? 'active' : ''}`}
        onClick={() => scrollToSection('samenwerkingspartners')}
      >
        Samenwerkingspartners
      </button>
      <button
        className={`nav-link ${activeSection === 'bedrijfsgeneeskundecoaching' ? 'active' : ''}`}
        onClick={() => scrollToSection('bedrijfsgeneeskundecoaching')}
      >
        Bedrijfsgeneeskundecoaching
      </button>
      <button
        className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
        onClick={() => scrollToSection('contact')}
      >
        Contact
      </button>
    </>
  );

  return (
    <div className="App">
      <nav className="navbar">
        {/* ----- Home (always visible) ----- */}
        <button
          className={`nav-home ${activeSection === 'home' ? 'active' : ''}`}
          onClick={() => scrollToSection('home')}
        >
          Home
        </button>

        {/* ----- Desktop links ----- */}
        <div className="nav-links desktop">
          {navButtons}
        </div>

        {/* ----- Mobile dropdown links ----- */}
        <div className={`nav-links mobile ${menuOpen ? 'open' : ''}`}>
          {navButtons}
        </div>

        {/* ----- Hamburger (mobile only) ----- */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </nav>

      {/* ----- Page Sections ----- */}
      <main>
        <section id="home"><Home /></section>
        <section id="workout"><Workout /></section>
        <section id="samenwerkingspartners"><Samenwerkingspartners /></section>
        <section id="bedrijfsgeneeskundecoaching"><Bedrijfsgeneeskundecoaching /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
