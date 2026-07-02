import React, { useState } from 'react';

const opcoesTema = [
  { valor: 'sistema', rotulo: 'Sistema', icone: '\uD83D\uDDA5\uFE0F' },
  { valor: 'claro', rotulo: 'Claro', icone: '\u2600\uFE0F' },
  { valor: 'escuro', rotulo: 'Escuro', icone: '\uD83C\uDF19' },
];

export default function BarraNavegacao({ tema, alterarTema }) {
  const [menuTemaAberto, setMenuTemaAberto] = useState(false);
  const temaAtual = opcoesTema.find((opcao) => opcao.valor === tema) ?? opcoesTema[0];

  const selecionarTema = (novoTema) => {
    alterarTema(novoTema);
    setMenuTemaAberto(false);
  };

  return (
    <>
      <nav className="glass" style={{ position: 'fixed', top: '1.5rem', left: '50%', transform: 'translateX(-50%)', zIndex: 1000, padding: '0.8rem 2rem', display: 'flex', gap: '2rem', width: 'max-content' }}>
        <a href="#" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '500' }}>In&iacute;cio</a>
        <a href="#experiencia" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: '500' }}>Experi&ecirc;ncia</a>
        <a href="#projetos" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: '500' }}>Projetos</a>
        <a href="#contato" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: '500' }}>Contato</a>
      </nav>

      <div className="theme-picker">
        <span className="theme-picker-label">Tema</span>
        <button type="button" className="theme-toggle glass" onClick={() => setMenuTemaAberto((aberto) => !aberto)} aria-haspopup="menu" aria-expanded={menuTemaAberto}>
          <span className="theme-icon" aria-hidden="true">{temaAtual.icone}</span>
          <span>{temaAtual.rotulo}</span>
        </button>

        {menuTemaAberto && (
          <div className="theme-menu glass" role="menu" aria-label="Selecionar tema">
            {opcoesTema.map((opcao) => (
              <button key={opcao.valor} type="button" role="menuitemradio" aria-checked={tema === opcao.valor} className={`theme-option ${tema === opcao.valor ? 'active' : ''}`} onClick={() => selecionarTema(opcao.valor)}>
                <span className="theme-icon" aria-hidden="true">{opcao.icone}</span>
                <span>{opcao.rotulo}</span>
                {tema === opcao.valor && <span className="theme-check" aria-hidden="true">✓</span>}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
