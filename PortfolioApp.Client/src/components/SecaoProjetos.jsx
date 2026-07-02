import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function SecaoProjetos() {
    const [projetos, setProjetos] = useState([]);
    const [carregando, setCarregando] = useState(true);

  useEffect(() => {
        fetch('https://api.github.com/users/viniciussilva2/repos?sort=updated&per_page=6')
          .then(res => res.json())
          .then(data => {
                    const repos = data.filter(repo => !repo.fork).slice(0, 6);
                    const mapeados = repos.map(repo => ({
                                nome: repo.name,
                                descricao: repo.description || 'Sem descricao disponivel.',
                                url: repo.html_url,
                                linguagem: repo.language || 'N/A',
                                estrelas: repo.stargazers_count,
                    }));
                    setProjetos(mapeados);
                    setCarregando(false);
          })
          .catch(err => {
                    console.error('Erro ao buscar projetos:', err);
                    setCarregando(false);
          });
  }, []);

  return (
        <section id="projetos" style={{ padding: '5rem 2rem', background: 'var(--section-bg)' }}>
          <motion.div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                          <motion.div
                                      initial={{ opacity: 0, y: 30 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.6 }}
                                      viewport={{ once: true }}
                                      style={{ textAlign: 'center', marginBottom: '3rem' }}
                                    >
                                    <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                                                Projetos em Destaque
                                    </h2>
                                    <p style={{ color: 'var(--text-dim)', fontSize: '1rem' }}>Repositorios publicos do GitHub</p>
                          </motion.div>
                </div>
          </motion.div>
        </section>
  );
}



