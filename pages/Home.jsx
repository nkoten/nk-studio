import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const hubCards = [
  {
    to: '/roadmap',
    accent: 'amber',
    color: '#f5a623',
    icon: '🗺️',
    tag: 'PLANEJAMENTO',
    title: 'Roadmap 2026',
    desc: 'Plano estratégico de 12 meses: da base técnica ao lançamento do estúdio. Fases, metas e projeção de renda.',
    stat: '4 fases · 12 meses',
  },
  {
    to: '/caderno',
    accent: 'teal',
    color: '#00d4aa',
    icon: '📓',
    tag: 'DESENVOLVIMENTO',
    title: 'Caderno do Dev',
    desc: 'Guia de mentor interativo para o KAÍ na Unity + Corgi Engine. Checklist, anotações por etapa e linha do tempo viva do projeto.',
    stat: '5 módulos · guia completo',
    badge: 'NOVO',
  },
  {
    to: '/viral',
    accent: 'purple',
    color: '#9d8cff',
    icon: '🚀',
    tag: 'MARKETING',
    title: 'Estratégia Viral',
    desc: 'A fórmula por trás de jogos que viralizaram. Referências, mecânicas e marketing orgânico sem verba.',
    stat: '4 pilares · exemplos reais',
  },
  {
    to: '/stack',
    accent: 'coral',
    color: '#ff6b6b',
    icon: '⚙️',
    tag: 'TECNOLOGIA',
    title: 'Tech Stack',
    desc: 'Unity LTS + Corgi Engine + URP. Cada ferramenta escolhida com propósito. Comparativo e justificativas.',
    stat: 'Unity · Corgi · URP',
  },
];

const stats = [
  { label: 'Projeto atual', val: 'KAÍ: O Despertar', color: '#f5a623' },
  { label: 'Engine', val: 'Unity + Corgi Engine', color: '#00d4aa' },
  { label: 'Status', val: 'Em desenvolvimento', color: '#9d8cff' },
  { label: 'Meta 2026', val: 'Lançar na Play Store', color: '#ff6b6b' },
];

export default function Home() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');
  const clock = `${pad(time.getHours())}:${pad(time.getMinutes())}:${pad(time.getSeconds())}`;

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* ── HERO ── */}
      <div className="mb-16 reveal">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <p className="section-label">// NK.DEV — HUB CENTRAL</p>
          <span
            className="mono text-xs px-3 py-1.5 rounded"
            style={{
              background: 'rgba(245,166,35,0.08)',
              border: '1px solid rgba(245,166,35,0.2)',
              color: '#f5a623',
            }}
          >
            {clock}
          </span>
        </div>

        <h1
          className="hero-title text-5xl md:text-7xl font-extrabold leading-none mb-6"
          style={{ color: '#e8e6f0' }}
        >
          NK<span className="neon-amber">.</span>DEV
          <br />
          <span style={{ color: '#2a2840' }}>STUDIO</span>
        </h1>

        <p className="text-base max-w-xl mb-8" style={{ color: '#7a7893' }}>
          Central de operações do estúdio. Aqui ficam o planejamento, o caderno
          de desenvolvimento, a estratégia de lançamento e todas as ferramentas
          do projeto.
        </p>

        {/* status bar */}
        <div className="flex flex-wrap gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="px-4 py-2 rounded-lg"
              style={{
                background: `${s.color}10`,
                border: `1px solid ${s.color}30`,
              }}
            >
              <span className="mono text-xs" style={{ color: '#7a7893' }}>
                {s.label}:{' '}
              </span>
              <span
                className="mono text-xs font-bold"
                style={{ color: s.color }}
              >
                {s.val}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── HUB CARDS ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {hubCards.map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className={`hub-card ${card.accent}`}
          >
            {card.badge && (
              <span
                className="absolute top-4 right-4 mono text-xs px-2 py-0.5 rounded"
                style={{
                  background: `${card.color}20`,
                  border: `1px solid ${card.color}50`,
                  color: card.color,
                }}
              >
                {card.badge}
              </span>
            )}
            <div className="flex items-start gap-4">
              <div className="text-3xl mt-1">{card.icon}</div>
              <div className="flex-1 min-w-0">
                <p className="mono text-xs mb-1" style={{ color: '#7a7893' }}>
                  {card.tag}
                </p>
                <h2
                  className="text-xl font-bold mb-2"
                  style={{ color: card.color }}
                >
                  {card.title}
                </h2>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: '#7a7893' }}
                >
                  {card.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="mono text-xs" style={{ color: '#7a7893' }}>
                    {card.stat}
                  </span>
                  <span className="mono text-xs" style={{ color: card.color }}>
                    ACESSAR →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ── PROGRESSO GLOBAL ── */}
      <div
        className="p-6 rounded-2xl mb-12"
        style={{ background: '#1a1828', border: '1px solid #2a2840' }}
      >
        <p className="section-label mb-6">
          // PROGRESSO DO PROJETO — KAÍ: O DESPERTAR
        </p>
        <div className="space-y-4">
          {[
            {
              label: 'Documentação (GDD + Prólogo)',
              pct: 100,
              color: '#f5a623',
            },
            { label: 'Setup Unity + Corgi Engine', pct: 10, color: '#00d4aa' },
            { label: 'Fase 1 — O Quarto', pct: 0, color: '#9d8cff' },
            { label: 'Ato I completo', pct: 0, color: '#ff6b6b' },
            { label: 'Publicação Play Store', pct: 0, color: '#f5a623' },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm" style={{ color: '#e8e6f0' }}>
                  {item.label}
                </span>
                <span className="mono text-xs" style={{ color: item.color }}>
                  {item.pct}%
                </span>
              </div>
              <div
                style={{
                  height: '4px',
                  background: '#2a2840',
                  borderRadius: '2px',
                }}
              >
                <div
                  style={{
                    width: `${item.pct}%`,
                    height: '4px',
                    background: item.color,
                    borderRadius: '2px',
                    transition: 'width 1s ease',
                    boxShadow:
                      item.pct > 0 ? `0 0 8px ${item.color}80` : 'none',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── QUICK ACCESS ── */}
      <div>
        <p className="section-label mb-4">// ACESSO RÁPIDO</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            {
              to: '/caderno',
              label: 'Guia Unity',
              icon: '🎮',
              color: '#00d4aa',
            },
            { to: '/roadmap', label: 'Fases', icon: '📍', color: '#f5a623' },
            { to: '/viral', label: 'Marketing', icon: '📢', color: '#9d8cff' },
            { to: '/sobre', label: 'Manifesto', icon: '💡', color: '#ff6b6b' },
          ].map((q) => (
            <Link
              key={q.to}
              to={q.to}
              className="p-4 rounded-xl text-center transition-all hover:-translate-y-1"
              style={{ background: '#1a1828', border: '1px solid #2a2840' }}
            >
              <div className="text-2xl mb-2">{q.icon}</div>
              <p className="mono text-xs font-bold" style={{ color: q.color }}>
                {q.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
