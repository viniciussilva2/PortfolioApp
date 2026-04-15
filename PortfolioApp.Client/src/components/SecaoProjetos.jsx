import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, Star, ExternalLink, Code2 } from 'lucide-react';

export default function SecaoProjetos() {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5136/api/Projeto')
      .then(res => res.json())
      .then(data => setProjetos(data))
      .catch(err => console.error("Erro ao buscar projetos:", err));
  }, []);

  return (
    <section id="projetos">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Projetos em Destaque</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {projetos.length > 0 ? projetos.map((projeto, index) => (
          <motion.div
            key={index}
            className="glass"
            style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <Code2 style={{ color: 'var(--primary)' }} />
              <div style={{ display: 'flex', gap: '0.8rem' }}>
                <a href={projeto.urlHtml} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)' }}>
                  <Link size={18} />
                </a>
                <ExternalLink size={18} style={{ color: 'var(--text-dim)' }} />
              </div>
            </div>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'white' }}>{projeto.nome}</h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1 }}>
              {projeto.descricao || "Sem descrição disponível."}
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem' }}>
              <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>{projeto.linguagem}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: 'var(--text-dim)' }}>
                <Star size={14} /> {projeto.contagemEstrelas}
              </div>
            </div>
          </motion.div>
        )) : (
          <div style={{ textAlign: 'center', gridColumn: '1/-1', color: 'var(--text-dim)' }}>
            Carregando repositórios do GitHub...
          </div>
        )}
      </div>
    </section>
  );
}
