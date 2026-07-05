import React from 'react';
import { Link } from 'react-router-dom';

const viralFormula = [
  {
    label: 'Simples de aprender',
    desc: 'O jogador entende em 5 segundos',
    icon: '⚡',
  },
  {
    label: 'Difícil de dominar',
    desc: 'Horas de jogo para masterizar',
    icon: '🔥',
  },
  {
    label: 'Compartilhável',
    desc: '"Olha meu score!" — loop social',
    icon: '📢',
  },
  {
    label: 'Hook imediato',
    desc: 'Primeiros 3s capturam a atenção',
    icon: '🎯',
  },
];

export function Viral() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="section-label mb-4">// ESTRATÉGIA DE VIRALIZAÇÃO</p>
      <h1 className="text-5xl font-extrabold mb-4">
        A <span className="neon-teal">Fórmula</span>
        <br />
        do Jogo Viral
      </h1>
      <p
        className="text-base mb-12"
        style={{ color: '#7a7893', maxWidth: '540px' }}
      >
        Jogos como Flappy Bird, Wordle e Suika Game não viralizaram por sorte.
        Existe uma lógica por trás.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {viralFormula.map((item, i) => (
          <div key={i} className="p-6 rounded-xl viral-card">
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="font-bold text-lg mb-1 neon-teal">{item.label}</h3>
            <p className="text-sm" style={{ color: '#7a7893' }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <p className="section-label mb-6">// REFERÊNCIAS DE SUCESSO</p>
      <div className="space-y-4 mb-16">
        {[
          {
            game: 'Flappy Bird',
            dev: '1 dev, 2-3 dias',
            hook: "Frustração compartilhável — 'você consegue passar?'",
            color: '#f5a623',
          },
          {
            game: 'Wordle',
            dev: '1 dev, projeto pessoal',
            hook: 'Gradilha de emojis — spoiler sem spoiler, share perfeito',
            color: '#00d4aa',
          },
          {
            game: 'Suika Game',
            dev: 'Indie japonês',
            hook: "Satisfação visual + physics simples + 'mais uma rodada'",
            color: '#9d8cff',
          },
          {
            game: 'Geometry Dash',
            dev: '1 dev / indie',
            hook: 'Dificuldade extrema + música + levels da comunidade',
            color: '#ff6b6b',
          },
          {
            game: 'Teslagrad',
            dev: 'Rain Games (indie)',
            hook: 'Narrativa visual + poderes únicos + atmosfera — referência do KAÍ',
            color: '#f5a623',
          },
        ].map((item) => (
          <div
            key={item.game}
            className="p-5 rounded-lg flex items-center gap-6"
            style={{ background: '#1a1828', border: '1px solid #2a2840' }}
          >
            <div
              className="mono font-bold text-lg w-40 flex-shrink-0"
              style={{ color: item.color }}
            >
              {item.game}
            </div>
            <div className="flex-1">
              <p className="text-xs mono mb-1" style={{ color: '#7a7893' }}>
                {item.dev}
              </p>
              <p className="text-sm" style={{ color: '#e8e6f0' }}>
                {item.hook}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="section-label mb-6">// MARKETING SEM VERBA</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            platform: 'TikTok / Reels',
            strategy:
              "Devlog de 30–60s: 'fiz essa fase em 1 semana'. Alta viralidade orgânica.",
            icon: '📱',
            color: '#ff6b6b',
          },
          {
            platform: 'GitHub / Portfolio',
            strategy:
              'Todo projeto com README detalhado. Repositório = currículo vivo.',
            icon: '💻',
            color: '#00d4aa',
          },
          {
            platform: 'Discord / Reddit',
            strategy:
              'r/indiegaming, r/unity. Feedback real e tráfego orgânico.',
            icon: '🎮',
            color: '#9d8cff',
          },
        ].map((item) => (
          <div
            key={item.platform}
            className="p-5 rounded-xl"
            style={{
              background: '#1a1828',
              border: `1px solid ${item.color}30`,
            }}
          >
            <div className="text-2xl mb-3">{item.icon}</div>
            <h4 className="font-bold mb-2" style={{ color: item.color }}>
              {item.platform}
            </h4>
            <p className="text-xs" style={{ color: '#7a7893' }}>
              {item.strategy}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex gap-4 flex-wrap">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg mono text-sm"
          style={{ border: '1px solid #2a2840', color: '#7a7893' }}
        >
          ← Hub
        </Link>
        <Link
          to="/stack"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg mono text-sm font-bold"
          style={{
            background: 'rgba(0,212,170,0.1)',
            border: '1px solid rgba(0,212,170,0.4)',
            color: '#00d4aa',
          }}
        >
          Ver Tech Stack →
        </Link>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

const techStack = [
  {
    name: 'Unity LTS',
    role: 'Engine principal',
    color: '#f5a623',
    why: 'Estabilidade garantida + ecossistema maduro',
  },
  {
    name: 'Corgi Engine',
    role: 'Platformer base',
    color: '#00d4aa',
    why: 'Movimento, câmera, física — tudo pronto. Meses economizados.',
  },
  {
    name: 'URP',
    role: 'Render Pipeline',
    color: '#9d8cff',
    why: 'Shaders 2D modernos — necessário para a Visão Expandida',
  },
  {
    name: 'C#',
    role: 'Linguagem',
    color: '#ff6b6b',
    why: 'Nativo no Unity. Você já tem familiaridade.',
  },
  {
    name: 'Git + GitHub',
    role: 'Controle de versão',
    color: '#00d4aa',
    why: 'Portfólio e backup automático',
  },
  {
    name: 'Aseprite',
    role: 'Pixel art',
    color: '#f5a623',
    why: 'Licença única ~R$90. Padrão da indústria indie.',
  },
  {
    name: 'Google Play',
    role: 'Distribuição Android',
    color: '#9d8cff',
    why: 'R$150 único — maior mercado mobile',
  },
  {
    name: 'FMOD (free tier)',
    role: 'Áudio adaptativo',
    color: '#ff6b6b',
    why: 'Integração Unity nativa. Áudio generativo para a nave.',
  },
];

export function Stack() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="section-label mb-4">// FERRAMENTAS E TECNOLOGIAS</p>
      <h1 className="text-5xl font-extrabold mb-4">
        <span className="neon-purple">Tech Stack</span>
        <br />
        do Estúdio
      </h1>
      <p
        className="text-base mb-12"
        style={{ color: '#7a7893', maxWidth: '540px' }}
      >
        Cada ferramenta foi escolhida por propósito. Unity + Corgi Engine porque
        você já tem acesso e familiaridade.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {techStack.map((tech, i) => (
          <div
            key={i}
            className="p-6 rounded-xl flex items-start gap-4 transition-all hover:translate-x-1"
            style={{ background: '#1a1828', border: '1px solid #2a2840' }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: `${tech.color}18`,
                border: `1px solid ${tech.color}40`,
              }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  background: tech.color,
                  boxShadow: `0 0 8px ${tech.color}`,
                }}
              />
            </div>
            <div>
              <h3 className="font-bold" style={{ color: tech.color }}>
                {tech.name}
              </h3>
              <p className="text-xs mono mb-2" style={{ color: '#7a7893' }}>
                {tech.role}
              </p>
              <p className="text-sm" style={{ color: '#e8e6f0' }}>
                {tech.why}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="p-8 rounded-2xl mb-8"
        style={{
          background:
            'linear-gradient(135deg, rgba(0,212,170,0.06), rgba(245,166,35,0.04))',
          border: '1px solid rgba(0,212,170,0.2)',
        }}
      >
        <p className="section-label mb-4">
          // POR QUE UNITY + CORGI E NÃO GODOT?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold mb-3 neon-teal">Unity + Corgi ✓</h4>
            <ul className="space-y-2">
              {[
                'Você já tem instalado e familiaridade',
                'Corgi Engine resolve meses de trabalho base',
                'URP com shaders 2D para a Visão Expandida',
                'Ecossistema maduro com muita documentação',
                'C# abre portas no mercado de freela',
              ].map((i) => (
                <li
                  key={i}
                  className="text-sm flex gap-2 items-start"
                  style={{ color: '#e8e6f0' }}
                >
                  <span style={{ color: '#00d4aa' }}>+</span> {i}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3" style={{ color: '#7a7893' }}>
              Godot (plano B)
            </h4>
            <ul className="space-y-2">
              {[
                'Precisaria aprender do zero',
                'Sem o Corgi Engine equivalente',
                'Menor ecossistema de assets pagos',
                'Boa escolha para projetos futuros menores',
                'Manter como opção para jogos casuais rápidos',
              ].map((i) => (
                <li
                  key={i}
                  className="text-sm flex gap-2 items-start"
                  style={{ color: '#7a7893' }}
                >
                  <span style={{ color: '#7a7893' }}>–</span> {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex gap-4 flex-wrap">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg mono text-sm"
          style={{ border: '1px solid #2a2840', color: '#7a7893' }}
        >
          ← Hub
        </Link>
        <Link
          to="/sobre"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg mono text-sm font-bold"
          style={{
            background: 'rgba(157,140,255,0.1)',
            border: '1px solid rgba(157,140,255,0.4)',
            color: '#9d8cff',
          }}
        >
          Manifesto →
        </Link>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export function Sobre() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="section-label mb-4">// MANIFESTO</p>
      <h1 className="text-5xl font-extrabold mb-8">
        O <span className="neon-amber">Porquê</span>
        <br />
        deste Plano
      </h1>

      <div className="space-y-6 mb-12">
        {[
          {
            title: 'Não é fórmula mágica',
            text: 'Este plano é construído sobre realidade: trabalho, família, tempo limitado. Cada etapa foi desenhada para ser executável com 2–4 horas por dia sem abandonar a renda atual.',
          },
          {
            title: 'Transição segura',
            text: 'Nos primeiros 6 meses, o foco é aprendizado e construção. A partir do mês 7, freela começa a complementar a renda. A transição completa só acontece quando houver segurança financeira real.',
          },
          {
            title: 'Por que games?',
            text: 'Games são o cruzamento perfeito de código, criatividade e mercado bilionário. Um jogo bem feito por um dev solo pode alcançar milhões — sem investimento inicial além de tempo e dedicação.',
          },
          {
            title: 'Por que o KAÍ?',
            text: 'A história nasceu do próprio criador. Não é uma cópia de tendência — é uma narrativa original com personagem, universo e mecânica únicos. Isso é vantagem competitiva real no mercado indie.',
          },
          {
            title: 'A meta real',
            text: 'Não é ficar rico rapidamente. É construir um negócio próprio, ter controle sobre o próprio tempo e dar uma vida tranquila para a família. O estúdio NK.DEV é o veículo para essa liberdade.',
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-xl"
            style={{ background: '#1a1828', border: '1px solid #2a2840' }}
          >
            <h3 className="font-bold mb-2 neon-amber">{item.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#7a7893' }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <div
        className="text-center p-10 rounded-2xl"
        style={{
          background:
            'linear-gradient(135deg, rgba(245,166,35,0.08), rgba(157,140,255,0.06))',
          border: '1px solid rgba(245,166,35,0.25)',
        }}
      >
        <div className="text-4xl mb-4 floating">🎮</div>
        <h2 className="text-3xl font-extrabold mb-3 neon-amber">
          2026 é o ano.
        </h2>
        <p className="text-sm mb-6" style={{ color: '#7a7893' }}>
          Um passo de cada vez. Um jogo de cada vez. Um sonho construído com
          consistência.
        </p>
        <Link
          to="/caderno"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold mono text-sm glow-btn"
          style={{
            background: 'rgba(245,166,35,0.12)',
            border: '1px solid #f5a623',
            color: '#f5a623',
          }}
        >
          ABRIR O CADERNO →
        </Link>
      </div>

      <div className="mt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg mono text-sm"
          style={{ border: '1px solid #2a2840', color: '#7a7893' }}
        >
          ← Hub
        </Link>
      </div>
    </div>
  );
}
