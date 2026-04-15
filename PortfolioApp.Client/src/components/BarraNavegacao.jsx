import React from 'react';

export default function BarraNavegacao() {
  return (
    <nav className="glass" style={{ 
      position: 'fixed', 
      top: '1.5rem', 
      left: '50%', 
      transform: 'translateX(-50%)', 
      zIndex: 1000,
      padding: '0.8rem 2rem',
      display: 'flex',
      gap: '2rem',
      width: 'max-content'
    }}>
      <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Início</a>
      <a href="#experiencia" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: '500' }}>Experiência</a>
      <a href="#projetos" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: '500' }}>Projetos</a>
      <a href="#contato" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: '500' }}>Contato</a>
    </nav>
  );
}
