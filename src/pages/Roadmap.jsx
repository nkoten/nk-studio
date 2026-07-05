import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const phases = [
  {
    id: 1,
    num: '01',
    period: 'Meses 1–3',
    color: '#f5a623',
    accent: 'amber',
    title: 'Base Técnica',
    subtitle: 'Fundações sólidas + primeiro projeto de portfólio',
    icon: '⚙️',
    tags: ['Unity + Corgi', 'C#', 'Git / GitHub', 'Android Export'],
    tasks: [
      {
        done: false,
        text: 'Dominar Unity LTS + Corgi Engine para platformer 2D',
      },
      {
        done: false,
        text: 'Criar Fase 1 do KAÍ: o quarto — protótipo jogável',
      },
      {
        done: false,
        text: 'Publicar código no GitHub e documentar no portfólio',
      },
      { done: false, text: 'Rotina 2–4h/dia: engine + narrativa + arte' },
      {
        done: false,
        text: 'Documentar aprendizado publicamente (devlog TikTok)',
      },
    ],
    meta: 'Fase 1 jogável no portfólio',
    metaColor: '#f5a623',
  },
  {
    id: 2,
    num: '02',
    period: 'Meses 4–6',
    color: '#00d4aa',
    accent: 'teal',
    title: 'Ato I Completo',
    subtitle: 'Fases 1–3 com arte final e soft launch Android',
    icon: '🚀',
    tags: ['Google Play', 'E-book KAÍ', 'TikTok Devlog', 'Métricas D1/D7'],
    tasks: [
      {
        done: false,
        text: 'Fases 1–3 (O Quarto, O Véu, O Penhasco) com arte final',
      },
      {
        done: false,
        text: 'E-book KAÍ: O Despertar publicado e distribuído gratuitamente',
      },
      {
        done: false,
        text: 'Soft launch no Google Play — coleta de feedback real',
      },
      { done: false, text: 'Meta: 100 downloads + 10 avaliações reais' },
      { done: false, text: 'Analisar métricas: retenção D1, D7, sessão média' },
    ],
    meta: 'Ato I publicado + e-book',
    metaColor: '#00d4aa',
  },
  {
    id: 3,
    num: '03',
    period: 'Meses 7–9',
    color: '#9d8cff',
    accent: 'purple',
    title: 'Jogo Completo + Freela',
    subtitle: 'Atos II e III finalizados e primeira renda como dev',
    icon: '🎮',
    tags: ['Atos II e III', 'Upwork / 99freelas', 'itch.io PC', 'Beta fechado'],
    tasks: [
      {
        done: false,
        text: 'Desenvolver Atos II e III — nave, retorno, confronto final',
      },
      {
        done: false,
        text: 'Pegar 1–2 freelas: app simples, landing page ou jogo casual',
      },
      { done: false, text: 'Meta renda extra: R$ 500–1.000/mês com freela' },
      {
        done: false,
        text: 'Publicar versão beta no itch.io para feedback internacional',
      },
      { done: false, text: 'QA e correção de bugs críticos' },
    ],
    meta: 'R$ 500–1.000/mês + jogo completo',
    metaColor: '#9d8cff',
  },
  {
    id: 4,
    num: '04',
    period: 'Meses 10–12',
    color: '#ff6b6b',
    accent: 'coral',
    title: 'Lançamento + Estúdio',
    subtitle: 'Lançamento oficial e formalização do negócio',
    icon: '🏆',
    tags: [
      'MEI Aberto',
      'Play Store + App Store',
      'Discord',
      'Campanha de lançamento',
    ],
    tasks: [
      { done: false, text: 'Build final publicada na Play Store e App Store' },
      {
        done: false,
        text: 'Criar comunidade Discord + TikTok do estúdio NK.DEV',
      },
      {
        done: false,
        text: 'Abrir MEI — formalizar o estúdio de desenvolvimento',
      },
      {
        done: false,
        text: 'Portfólio com KAÍ completo + projetos menores = credibilidade',
      },
      {
        done: false,
        text: 'Meta: 10.000 downloads no lançamento e mídia espontânea',
      },
    ],
    meta: 'Estúdio aberto + 10k downloads',
    metaColor: '#ff6b6b',
  },
];

function PhaseCard({ phase, index }) {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState(phase.tasks);
  const done = tasks.filter((t) => t.done).length;
  const pct = Math.round((done / tasks.length) * 100);

  const toggleTask = (i) => {
    const updated = [...tasks];
    updated[i] = { ...updated[i], done: !updated[i].done };
    setTasks(updated);
  };

  return (
    <div className="phase-card rounded-lg cursor-pointer">
      <div className="p-6" onClick={() => setOpen(!open)}>
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center gap-2">
            <div
              className="timeline-dot"
              style={{
                borderColor: phase.color,
                background: done > 0 ? phase.color : '#0f0e17',
                boxShadow: done > 0 ? `0 0 10px ${phase.color}` : 'none',
              }}
            />
            {index < phases.length - 1 && (
              <div
                style={{ width: '2px', height: '24px', background: '#2a2840' }}
              />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1 flex-wrap">
              <span className="mono text-xs" style={{ color: '#7a7893' }}>
                {phase.period}
              </span>
              <span className="text-base">{phase.icon}</span>
              <span
                className="mono text-xs px-2 py-0.5 rounded"
                style={{
                  background: `${phase.color}18`,
                  color: phase.color,
                  border: `1px solid ${phase.color}30`,
                }}
              >
                FASE {phase.num}
              </span>
            </div>
            <h3
              className="text-xl font-bold mb-1"
              style={{ color: phase.color }}
            >
              {phase.title}
            </h3>
            <p className="text-sm" style={{ color: '#7a7893' }}>
              {phase.subtitle}
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div
                className="flex-1 rounded-full"
                style={{ height: '4px', background: '#2a2840' }}
              >
                <div
                  className="rounded-full transition-all duration-700"
                  style={{
                    width: `${pct}%`,
                    height: '4px',
                    background: phase.color,
                  }}
                />
              </div>
              <span className="mono text-xs" style={{ color: '#7a7893' }}>
                {done}/{tasks.length}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {phase.tags.map((t) => (
                <span
                  key={t}
                  className="mono text-xs px-2 py-1 rounded"
                  style={{
                    background: 'rgba(245,166,35,0.06)',
                    border: '1px solid rgba(245,166,35,0.2)',
                    color: '#f5a623',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="text-right hidden md:block">
            <div className="mono text-xs mb-1" style={{ color: '#7a7893' }}>
              META
            </div>
            <div
              className="text-sm font-semibold"
              style={{ color: phase.metaColor }}
            >
              {phase.meta}
            </div>
          </div>
          <div
            style={{
              color: '#7a7893',
              transform: open ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.3s',
            }}
          >
            ▼
          </div>
        </div>
      </div>
      {open && (
        <div className="px-6 pb-6 border-t" style={{ borderColor: '#2a2840' }}>
          <p className="mono text-xs mt-4 mb-3" style={{ color: '#7a7893' }}>
            // TAREFAS — clique para marcar
          </p>
          <div className="space-y-3">
            {tasks.map((task, i) => (
              <div
                key={i}
                className="task-item flex items-start gap-3 cursor-pointer"
                onClick={() => toggleTask(i)}
              >
                <div
                  className="mt-0.5 w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-all"
                  style={{
                    borderColor: task.done ? phase.color : '#2a2840',
                    background: task.done ? phase.color : 'transparent',
                  }}
                >
                  {task.done && (
                    <span
                      style={{
                        fontSize: '10px',
                        color: '#0f0e17',
                        fontWeight: 'bold',
                      }}
                    >
                      ✓
                    </span>
                  )}
                </div>
                <span
                  className="text-sm"
                  style={{
                    color: task.done ? '#7a7893' : '#e8e6f0',
                    textDecoration: task.done ? 'line-through' : 'none',
                  }}
                >
                  {task.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Roadmap() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-16 reveal">
        <p className="section-label mb-4">// PLANEJAMENTO ESTRATÉGICO</p>
        <h1
          className="hero-title text-5xl md:text-7xl font-extrabold leading-none mb-4"
          style={{ color: '#e8e6f0' }}
        >
          MEU
          <br />
          <span className="neon-amber">ESTÚDIO</span>
          <br />
          <span style={{ color: '#2a2840' }}>DE GAMES</span>
        </h1>
        <p className="text-lg mt-6 max-w-xl" style={{ color: '#7a7893' }}>
          Roadmap de 12 meses para entrar na área dev, lançar o KAÍ e abrir o
          próprio estúdio em 2026.
        </p>
        <div className="flex items-center gap-4 mt-8 flex-wrap">
          <div
            className="mono text-sm px-4 py-2 rounded"
            style={{
              background: 'rgba(245,166,35,0.1)',
              border: '1px solid rgba(245,166,35,0.3)',
              color: '#f5a623',
            }}
          >
            ⏱ 12 meses
          </div>
          <div
            className="mono text-sm px-4 py-2 rounded"
            style={{
              background: 'rgba(0,212,170,0.08)',
              border: '1px solid rgba(0,212,170,0.25)',
              color: '#00d4aa',
            }}
          >
            🎯 4 fases
          </div>
          <div
            className="mono text-sm px-4 py-2 rounded"
            style={{
              background: 'rgba(157,140,255,0.08)',
              border: '1px solid rgba(157,140,255,0.25)',
              color: '#9d8cff',
            }}
          >
            📱 2–4h/dia
          </div>
        </div>
      </div>

      <div
        className="mb-12 p-6 rounded-xl"
        style={{ background: '#1a1828', border: '1px solid #2a2840' }}
      >
        <p className="section-label mb-4">// PROJEÇÃO DE RENDA</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              label: 'Meses 1–6',
              val: 'Trabalho atual',
              sub: 'Estabilidade enquanto estuda',
              color: '#7a7893',
              pct: 30,
            },
            {
              label: 'Meses 7–9',
              val: 'R$ 500–1k/mês',
              sub: 'Freela paralelo ao emprego',
              color: '#9d8cff',
              pct: 60,
            },
            {
              label: 'Meses 10–12',
              val: 'Renda do estúdio',
              sub: 'Games + freela + lançamento',
              color: '#f5a623',
              pct: 90,
            },
          ].map((item) => (
            <div key={item.label}>
              <div className="mono text-xs mb-2" style={{ color: '#7a7893' }}>
                {item.label}
              </div>
              <div
                className="font-bold text-lg mb-1"
                style={{ color: item.color }}
              >
                {item.val}
              </div>
              <div className="text-xs mb-2" style={{ color: '#7a7893' }}>
                {item.sub}
              </div>
              <div
                style={{
                  height: '4px',
                  background: '#2a2840',
                  borderRadius: '2px',
                }}
              >
                <div className="income-bar" style={{ width: `${item.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <p className="section-label mb-6">
          // FASES DO PLANO — clique para expandir
        </p>
        {phases.map((phase, i) => (
          <PhaseCard key={phase.id} phase={phase} index={i} />
        ))}
      </div>

      <div className="mt-16 flex gap-4 flex-wrap">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg mono text-sm"
          style={{ border: '1px solid #2a2840', color: '#7a7893' }}
        >
          ← Hub
        </Link>
        <Link
          to="/viral"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm mono glow-btn"
          style={{
            background: 'rgba(245,166,35,0.12)',
            border: '1px solid #f5a623',
            color: '#f5a623',
          }}
        >
          VER ESTRATÉGIA VIRAL →
        </Link>
      </div>
    </div>
  );
}
