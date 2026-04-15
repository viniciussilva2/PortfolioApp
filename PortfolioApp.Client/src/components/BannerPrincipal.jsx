import React from 'react';
import { motion } from 'framer-motion';
import { Link, ExternalLink, Mail, MousePointer2 } from 'lucide-react';

export default function BannerPrincipal() {
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
          Analista de Sistemas e Desenvolvedor .NET especializado em arquiteturas modernas e Clean Code.
        </p>
        
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <a href="#" className="glass" style={{ padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'white' }}>
            <Link size={20} /> GitHub
          </a>
          <a href="#" className="glass" style={{ padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'white' }}>
            <ExternalLink size={20} /> LinkedIn
          </a>
          <a href="vinyoli.vs@gmail.com" className="glass" style={{ padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'white' }}>
            <Mail size={20} /> Contato
          </a>
        </div>
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
