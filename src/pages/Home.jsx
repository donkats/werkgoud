// Home.jsx
import React from 'react';
import foto from '../assets/foto.png';
import woordmerk from '../assets/woordmerk.svg';

function Home() {
  return (
    <div className="page-container home-container">
      <img src={woordmerk} alt="Logo" className="home-logo" />
      <div className="home-main-content">
        <img src={foto} alt="Featured" className="home-image" />
        <div className="page-content home-content">
          <div className="home-text">
            <p className="home-line">Terugkeer in werk is een WORKOUT</p>
            <p className="home-line">Ware TOPSPORT!</p>
            <p className="home-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En daarin ga ik voor GOUD</p>
          </div>
        </div>
      </div>
      
      {/* New text block underneath */}
      <div className="home-second-textblock">
        <p className="home-second-line">Ballet is balanceren, het leven is balanceren</p>
        <p className="home-second-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gezondheid is balanceren, re-integreren is balanceren</p>
        <p className="home-second-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ik help je de balans te herstellen</p>
      </div>
    </div>
  );
}

export default Home;
