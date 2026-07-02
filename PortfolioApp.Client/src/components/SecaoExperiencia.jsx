import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function SecaoExperiencia() {
  const [experiencias, setExperiencias] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5136/api/Experiencia')
      .then(res => res.json())
      .then(data => {
        setExperiencias(data);
        setCarregando(false);
      })
      .catch(err => {
        console.error("Erro ao buscar experiências:", err);
        setCarregando(false);
      });
  }, []);

  return (
    <section id="experiencia">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Experiência Profissional</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {experiencias.map((exp, index) => (
          <motion.div
            key={index}
            className="glass"
            style={{ padding: '2rem' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>{exp.cargo}</h3>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Briefcase size={18} /> {exp.empresa}
                </h4>
              </div>
              <div style={{ textAlign: 'right', color: 'var(--text-dim)' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end' }}>
                  <Calendar size={16} /> {exp.periodo}
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end' }}>
                  <MapPin size={16} /> {exp.localizacao}
                </p>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <ul style={{ listStyle: 'none' }}>
                {exp.atividades.map((act, i) => (
                  <li key={i} style={{ color: 'var(--text-main)', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--secondary)' }}>•</span> {act}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {exp.tecnologias.map((tech, i) => (
                <span key={i} style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', color: 'var(--accent)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

