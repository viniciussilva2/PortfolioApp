import React from 'react';
import BarraNavegacao from './components/BarraNavegacao';
import BannerPrincipal from './components/BannerPrincipal';
import SecaoExperiencia from './components/SecaoExperiencia';
import SecaoProjetos from './components/SecaoProjetos';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <BarraNavegacao />
      <main>
        <BannerPrincipal />
        <SecaoExperiencia />
        <SecaoProjetos />
      </main>
      
      <footer style={{ padding: '4rem 2rem', textAlign: 'center', color: 'var(--text-dim)', borderTop: '1px solid var(--border)', marginTop: '4rem' }}>
        <p>© {new Date().getFullYear()} - Portfólio Profissional .NET & React</p>
      </footer>
    </div>
  );
}

export default App;


