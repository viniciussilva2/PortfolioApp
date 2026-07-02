import React, { useEffect, useState } from 'react';
import BarraNavegacao from './components/BarraNavegacao';
import BannerPrincipal from './components/BannerPrincipal';
import SecaoExperiencia from './components/SecaoExperiencia';
import SecaoProjetos from './components/SecaoProjetos';
import './App.css';

function App() {
  const [tema, setTema] = useState(() => {
    const temaSalvo = localStorage.getItem('tema');
    return ['sistema', 'claro', 'escuro'].includes(temaSalvo) ? temaSalvo : 'sistema';
  });

  useEffect(() => {
    const preferenciaSistema = window.matchMedia('(prefers-color-scheme: dark)');

    const aplicarTema = () => {
      const temaAplicado = tema === 'sistema'
        ? (preferenciaSistema.matches ? 'escuro' : 'claro')
        : tema;

      document.documentElement.dataset.theme = temaAplicado;
    };

    aplicarTema();
    localStorage.setItem('tema', tema);

    if (tema === 'sistema') {
      preferenciaSistema.addEventListener('change', aplicarTema);
    }

    return () => preferenciaSistema.removeEventListener('change', aplicarTema);
  }, [tema]);

  return (
    <div className="app-container">
      <BarraNavegacao tema={tema} alterarTema={setTema} />
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



