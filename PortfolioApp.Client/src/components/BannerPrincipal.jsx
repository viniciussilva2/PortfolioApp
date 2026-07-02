import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, ExternalLink, Mail, MousePointer2 } from 'lucide-react';

export default function BannerPrincipal() {
  const [modalAberto, setModalAberto] = useState(false);
  return (
    <section className="hero-section" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }} className="title-gradient">
          Portfólio Profissional
        </h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-dim)', maxWidth: '800px', margin: '0 auto 2rem' }}>
          Analista de Sistemas e Desenvolvedor .NET especializado em sistemas de alta performance e legados.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <a href="https://github.com/viniciussilva2" className="glass" style={{ padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--text-main)' }}>
            <Link size={20} /> Meu GitHub
          </a>
          <a href="https://www.linkedin.com/in/vinicius-silva-a6381122a/" className="glass" style={{ padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--text-main)' }}>
            <ExternalLink size={20} /> LinkedIn
          </a>
          <button type="button" onClick={() => setModalAberto(true)} className="glass contact-button">
            <Mail size={20} /> Contato via E-mail
          </button>
        </div>

        {modalAberto && (
          <div className="modal-overlay" onClick={() => setModalAberto(false)}>
            <div className="modal glass" role="dialog" aria-modal="true" aria-labelledby="titulo-modal-email" onClick={(e) => e.stopPropagation()}>
              <button type="button" className="modal-close" onClick={() => setModalAberto(false)} aria-label="Fechar modal">×</button>
              <Mail className="modal-icon" size={32} aria-hidden="true" />
              <h2 id="titulo-modal-email">Meu e-mail</h2>
              <p>Entre em contato comigo pelo endereço:</p>
              <a href="mailto:vinyoli.vs@gmail.com">
                vinyoli.vs@gmail.com
              </a>
            </div>
          </div>
        )}
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ marginTop: '4rem', color: 'var(--primary)' }}
      >
        <MousePointer2 size={30} />
      </motion.div>
    </section>
  );
}

