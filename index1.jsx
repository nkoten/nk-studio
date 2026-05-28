import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route, Link, useLocation } from "react-router-dom";

// ─── DATA ────────────────────────────────────────────────────────────────────

const phases = [
  {
    id: 1,
    num: "01",
    period: "Meses 1–3",
    color: "#f5a623",
    accent: "amber",
    title: "Base Técnica",
    subtitle: "Fundações sólidas + primeiro projeto de portfólio",
    icon: "⚙️",
    tags: ["Godot 4", "GDScript", "Git / GitHub", "Android Export"],
    tasks: [
      { done: false, text: "Dominar Godot 4 — engine gratuita, ideal para mobile e 2D indie" },
      { done: false, text: "Criar primeiro jogo casual: runner infinito ou estilo Flappy Bird" },
      { done: false, text: "Publicar código no GitHub e documentar no portfólio" },
      { done: false, text: "Rotina 2h/dia: 1h engine + 1h lógica de programação" },
      { done: false, text: "Documentar aprendizado publicamente (LinkedIn ou blog)" },
    ],
    meta: "1 jogo funcional no portfólio",
    metaColor: "#f5a623",
  },
  {
    id: 2,
    num: "02",
    period: "Meses 4–6",
    color: "#00d4aa",
    accent: "teal",
    title: "Primeiro Lançamento",
    subtitle: "Publicar na Play Store e construir audiência inicial",
    icon: "🚀",
    tags: ["Google Play", "Google AdMob", "TikTok / Reels", "Métricas D1/D7"],
    tasks: [
      { done: false, text: "Exportar jogo casual para Android e publicar na Play Store" },
      { done: false, text: "Implementar anúncios AdMob — primeira renda real como dev" },
      { done: false, text: "Criar TikTok mostrando bastidores do desenvolvimento (devlog)" },
      { done: false, text: "Meta: 100 downloads + 10 avaliações reais" },
      { done: false, text: "Analisar métricas: retenção D1, D7, duração média de sessão" },
    ],
    meta: "100 downloads + renda inicial",
    metaColor: "#00d4aa",
  },
  {
    id: 3,
    num: "03",
    period: "Meses 7–9",
    color: "#9d8cff",
    accent: "purple",
    title: "Plataforma 2D + Freela",
    subtitle: "Projeto mais ambicioso e primeira renda recorrente como dev",
    icon: "🎮",
    tags: ["Plataforma 2D", "Tilemaps", "Upwork / 99freelas", "itch.io"],
    tasks: [
      { done: false, text: "Desenvolver jogo plataforma 2D com 5–8 fases bem polidas" },
      { done: false, text: "Pegar 1–2 freelas pequenos: app simples, landing page ou jogo casual" },
      { done: false, text: "Meta de renda extra: R$ 500–1.000/mês com trabalhos freelance" },
      { done: false, text: "Publicar também no itch.io para alcançar público internacional" },
      { done: false, text: "Estudar trends de jogos virais: Wordle, Suika Game, Geometry Dash" },
    ],
    meta: "R$ 500–1.000/mês de freela",
    metaColor: "#9d8cff",
  },
  {
    id: 4,
    num: "04",
    period: "Meses 10–12",
    color: "#ff6b6b",
    accent: "coral",
    title: "Jogo Viral + Estúdio",
    subtitle: "Lançamento estratégico e formalização do negócio",
    icon: "🏆",
    tags: ["MEI Aberto", "Hook Viral", "Discord", "App Store iOS"],
    tasks: [
      { done: false, text: "Lançar jogo com mecânica viciante e hook claro (puzzle único ou meta)" },
      { done: false, text: "Criar comunidade no Discord + TikTok dedicado ao estúdio" },
      { done: false, text: "Abrir MEI — formalizar o estúdio de desenvolvimento" },
      { done: false, text: "Portfólio com 3+ jogos publicados = credibilidade real como dev" },
      { done: false, text: "Meta: 10.000 downloads no lançamento e mídia espontânea" },
    ],
    meta: "Estúdio aberto + 10k downloads",
    metaColor: "#ff6b6b",
  },
];

const viralFormula = [
  { label: "Simples de aprender", desc: "O jogador entende em 5 segundos", icon: "⚡" },
  { label: "Difícil de dominar", desc: "Horas de jogo para masterizar", icon: "🔥" },
  { label: "Compartilhável", desc: '"Olha meu score!" — loop social', icon: "📢" },
  { label: "Hook imediato", desc: "Primeiros 3s capturam a atenção", icon: "🎯" },
];

const techStack = [
  { name: "Godot 4", role: "Engine principal", color: "#478cbf", why: "Gratuita, leve, perfeita para indie" },
  { name: "GDScript / C#", role: "Linguagem", color: "#f5a623", why: "GDScript fácil; C# se já souber" },
  { name: "Git + GitHub", role: "Controle de versão", color: "#00d4aa", why: "Portfólio e backup automático" },
  { name: "Google Play", role: "Distribuição Android", color: "#9d8cff", why: "R$150 único — maior mercado mobile" },
  { name: "AdMob", role: "Monetização", color: "#ff6b6b", why: "Ads in-game — renda passiva" },
  { name: "TikTok / Reels", role: "Marketing", color: "#f5a623", why: "Devlog = comunidade orgânica" },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

const NavBar = () => {
  const location = useLocation();
  const links = [
    { to: "/", label: "Roadmap" },
    { to: "/viral", label: "Estratégia Viral" },
    { to: "/stack", label: "Tech Stack" },
    { to: "/sobre", label: "Sobre o Plano" },
  ];
  return (
    <nav className="sticky top-0 z-50 border-b" style={{ background: "rgba(15,14,23,0.9)", borderColor: "#2a2840", backdropFilter: "blur(12px)" }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="neon-amber mono text-sm font-bold">NK.DEV</span>
          <span style={{ color: "#2a2840" }}>|</span>
          <span className="mono text-xs" style={{ color: "#7a7893" }}>STUDIO_ROADMAP_2026</span>
        </div>
        <div className="flex gap-1">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className="px-4 py-2 rounded text-sm transition-all duration-200"
              style={{
                color: location.pathname === l.to ? "#f5a623" : "#7a7893",
                background: location.pathname === l.to ? "rgba(245,166,35,0.1)" : "transparent",
                border: location.pathname === l.to ? "1px solid rgba(245,166,35,0.3)" : "1px solid transparent",
              }}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

// ─── PAGE: ROADMAP ────────────────────────────────────────────────────────────

const PhaseCard = ({ phase, index }) => {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState(phase.tasks);
  const done = tasks.filter(t => t.done).length;
  const pct = Math.round((done / tasks.length) * 100);

  const toggleTask = (i) => {
    const updated = [...tasks];
    updated[i] = { ...updated[i], done: !updated[i].done };
    setTasks(updated);
  };

  return (
    <div
      className="phase-card rounded-lg cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Header */}
      <div className="p-6" onClick={() => setOpen(!open)}>
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="timeline-dot" style={{ borderColor: phase.color, background: done > 0 ? phase.color : "#0f0e17", boxShadow: done > 0 ? `0 0 10px ${phase.color}` : "none" }} />
            {index < phases.length - 1 && <div style={{ width: "2px", height: "24px", background: "#2a2840" }} />}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1 flex-wrap">
              <span className="mono text-xs" style={{ color: "#7a7893" }}>{phase.period}</span>
              <span className="text-base">{phase.icon}</span>
              <span className="mono text-xs px-2 py-0.5 rounded" style={{ background: `${phase.color}18`, color: phase.color, border: `1px solid ${phase.color}30` }}>
                FASE {phase.num}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-1" style={{ color: phase.color }}>{phase.title}</h3>
            <p className="text-sm" style={{ color: "#7a7893" }}>{phase.subtitle}</p>

            {/* Progress */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex-1 rounded-full" style={{ height: "4px", background: "#2a2840" }}>
                <div className="rounded-full transition-all duration-700" style={{ width: `${pct}%`, height: "4px", background: phase.color }} />
              </div>
              <span className="mono text-xs" style={{ color: "#7a7893" }}>{done}/{tasks.length}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              {phase.tags.map(t => (
                <span key={t} className="mono text-xs px-2 py-1 rounded" style={{ background: "rgba(245,166,35,0.06)", border: "1px solid rgba(245,166,35,0.2)", color: "#f5a623" }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Meta */}
          <div className="text-right hidden md:block">
            <div className="mono text-xs mb-1" style={{ color: "#7a7893" }}>META</div>
            <div className="text-sm font-semibold" style={{ color: phase.metaColor }}>{phase.meta}</div>
          </div>

          {/* Chevron */}
          <div style={{ color: "#7a7893", transform: open ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}>▼</div>
        </div>
      </div>

      {/* Body */}
      {open && (
        <div className="px-6 pb-6 border-t" style={{ borderColor: "#2a2840" }}>
          <p className="mono text-xs mt-4 mb-3" style={{ color: "#7a7893" }}>// TAREFAS — clique para marcar como concluída</p>
          <div className="space-y-3">
            {tasks.map((task, i) => (
              <div key={i} className="task-item flex items-start gap-3 cursor-pointer group" onClick={() => toggleTask(i)}>
                <div className="mt-0.5 w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-all"
                  style={{ borderColor: task.done ? phase.color : "#2a2840", background: task.done ? phase.color : "transparent" }}>
                  {task.done && <span style={{ fontSize: "10px", color: "#0f0e17", fontWeight: "bold" }}>✓</span>}
                </div>
                <span className="text-sm transition-all" style={{ color: task.done ? "#7a7893" : "#e8e6f0", textDecoration: task.done ? "line-through" : "none" }}>
                  {task.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Roadmap = () => {
  const [progress] = useState(0);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="mb-16 reveal">
        <p className="section-label mb-4">// PLANEJAMENTO ESTRATÉGICO</p>
        <h1 className="hero-title text-5xl md:text-7xl font-extrabold leading-none mb-4" style={{ color: "#e8e6f0" }}>
          MEU<br /><span className="neon-amber">ESTÚDIO</span><br />
          <span style={{ color: "#2a2840" }}>DE GAMES</span>
        </h1>
        <p className="text-lg mt-6 max-w-xl" style={{ color: "#7a7893" }}>
          Roadmap de 12 meses para entrar na área dev, lançar os primeiros jogos e abrir o próprio estúdio em 2026.
        </p>
        <div className="flex items-center gap-4 mt-8 flex-wrap">
          <div className="mono text-sm px-4 py-2 rounded" style={{ background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.3)", color: "#f5a623" }}>
            ⏱ 12 meses
          </div>
          <div className="mono text-sm px-4 py-2 rounded" style={{ background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.25)", color: "#00d4aa" }}>
            🎯 4 fases
          </div>
          <div className="mono text-sm px-4 py-2 rounded" style={{ background: "rgba(157,140,255,0.08)", border: "1px solid rgba(157,140,255,0.25)", color: "#9d8cff" }}>
            📱 2h–4h/dia
          </div>
        </div>
      </div>

      {/* Income Projection */}
      <div className="mb-12 p-6 rounded-xl" style={{ background: "#1a1828", border: "1px solid #2a2840" }}>
        <p className="section-label mb-4">// PROJEÇÃO DE RENDA</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Meses 1–6", val: "Trabalho atual", sub: "Estabilidade enquanto estuda", color: "#7a7893", pct: 30 },
            { label: "Meses 7–9", val: "R$ 500–1k/mês", sub: "Freela paralelo ao emprego", color: "#9d8cff", pct: 60 },
            { label: "Meses 10–12", val: "Renda do estúdio", sub: "Games + freela + ads", color: "#f5a623", pct: 90 },
          ].map(item => (
            <div key={item.label}>
              <div className="mono text-xs mb-2" style={{ color: "#7a7893" }}>{item.label}</div>
              <div className="font-bold text-lg mb-1" style={{ color: item.color }}>{item.val}</div>
              <div className="text-xs mb-2" style={{ color: "#7a7893" }}>{item.sub}</div>
              <div style={{ height: "4px", background: "#2a2840", borderRadius: "2px" }}>
                <div className="income-bar" style={{ width: `${item.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Phases */}
      <div className="space-y-4">
        <p className="section-label mb-6">// FASES DO PLANO — clique para expandir</p>
        {phases.map((phase, i) => (
          <PhaseCard key={phase.id} phase={phase} index={i} />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <Link to="/viral" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm mono glow-btn transition-all"
          style={{ background: "rgba(245,166,35,0.12)", border: "1px solid #f5a623", color: "#f5a623" }}>
          VER ESTRATÉGIA VIRAL →
        </Link>
      </div>
    </div>
  );
};

// ─── PAGE: VIRAL STRATEGY ────────────────────────────────────────────────────

const ViralStrategy = () => (
  <div className="max-w-4xl mx-auto px-6 py-16">
    <p className="section-label mb-4">// ESTRATÉGIA DE VIRALIZAÇÃO</p>
    <h1 className="text-5xl font-extrabold mb-4">
      A <span className="neon-teal">Fórmula</span><br />do Jogo Viral
    </h1>
    <p className="text-base mb-12" style={{ color: "#7a7893", maxWidth: "540px" }}>
      Jogos como Flappy Bird, Wordle e Suika Game não viralizaram por sorte. Existe uma lógica por trás.
    </p>

    {/* Formula Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
      {viralFormula.map((item, i) => (
        <div key={i} className="p-6 rounded-xl viral-card">
          <div className="text-3xl mb-3">{item.icon}</div>
          <h3 className="font-bold text-lg mb-1 neon-teal">{item.label}</h3>
          <p className="text-sm" style={{ color: "#7a7893" }}>{item.desc}</p>
        </div>
      ))}
    </div>

    {/* Viral Examples */}
    <p className="section-label mb-6">// REFERÊNCIAS DE SUCESSO</p>
    <div className="space-y-4 mb-16">
      {[
        { game: "Flappy Bird", dev: "1 dev, 2-3 dias", hook: "Frustração compartilhável — 'você consegue passar?'", color: "#f5a623" },
        { game: "Wordle", dev: "1 dev, projeto pessoal", hook: "Gradilha de emojis — spoiler sem spoiler, share perfeito", color: "#00d4aa" },
        { game: "Suika Game", dev: "Indie japonês", hook: "Satisfação visual + physics simples + 'mais uma rodada'", color: "#9d8cff" },
        { game: "Geometry Dash", dev: "1 dev / indie", hook: "Dificuldade extrema + música + levels criados pela comunidade", color: "#ff6b6b" },
      ].map(item => (
        <div key={item.game} className="p-5 rounded-lg flex items-center gap-6" style={{ background: "#1a1828", border: "1px solid #2a2840" }}>
          <div className="mono font-bold text-lg w-40 flex-shrink-0" style={{ color: item.color }}>{item.game}</div>
          <div className="flex-1">
            <p className="text-xs mono mb-1" style={{ color: "#7a7893" }}>{item.dev}</p>
            <p className="text-sm" style={{ color: "#e8e6f0" }}>{item.hook}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Content Marketing */}
    <p className="section-label mb-6">// MARKETING DE CONTEÚDO — SEM VERBA</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[
        { platform: "TikTok / Reels", strategy: "Devlog de 30–60s: 'fiz esse jogo em 1 semana'. Alta viralidade orgânica.", icon: "📱", color: "#ff6b6b" },
        { platform: "GitHub / Portfolio", strategy: "Todo projeto com README detalhado. Repositório = currículo vivo.", icon: "💻", color: "#00d4aa" },
        { platform: "Discord / Reddit", strategy: "Comunidades r/indiegaming, r/godot. Feedback e tráfego orgânico.", icon: "🎮", color: "#9d8cff" },
      ].map(item => (
        <div key={item.platform} className="p-5 rounded-xl" style={{ background: "#1a1828", border: `1px solid ${item.color}30` }}>
          <div className="text-2xl mb-3">{item.icon}</div>
          <h4 className="font-bold mb-2" style={{ color: item.color }}>{item.platform}</h4>
          <p className="text-xs" style={{ color: "#7a7893" }}>{item.strategy}</p>
        </div>
      ))}
    </div>

    <div className="mt-12 flex gap-4 flex-wrap">
      <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg mono text-sm" style={{ border: "1px solid #2a2840", color: "#7a7893" }}>← Voltar</Link>
      <Link to="/stack" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg mono text-sm font-bold" style={{ background: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.4)", color: "#00d4aa" }}>Ver Tech Stack →</Link>
    </div>
  </div>
);

// ─── PAGE: TECH STACK ────────────────────────────────────────────────────────

const TechStack = () => (
  <div className="max-w-4xl mx-auto px-6 py-16">
    <p className="section-label mb-4">// FERRAMENTAS E TECNOLOGIAS</p>
    <h1 className="text-5xl font-extrabold mb-4">
      <span className="neon-purple">Tech Stack</span><br />do Estúdio
    </h1>
    <p className="text-base mb-12" style={{ color: "#7a7893", maxWidth: "540px" }}>
      Cada ferramenta foi escolhida por ser gratuita, eficiente e com alta demanda no mercado indie.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
      {techStack.map((tech, i) => (
        <div key={i} className="p-6 rounded-xl flex items-start gap-4 transition-all hover:translate-x-1"
          style={{ background: "#1a1828", border: "1px solid #2a2840" }}>
          <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: `${tech.color}18`, border: `1px solid ${tech.color}40` }}>
            <div className="w-3 h-3 rounded-full" style={{ background: tech.color, boxShadow: `0 0 8px ${tech.color}` }} />
          </div>
          <div>
            <h3 className="font-bold" style={{ color: tech.color }}>{tech.name}</h3>
            <p className="text-xs mono mb-2" style={{ color: "#7a7893" }}>{tech.role}</p>
            <p className="text-sm" style={{ color: "#e8e6f0" }}>{tech.why}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Why Godot section */}
    <div className="p-8 rounded-2xl mb-8" style={{ background: "linear-gradient(135deg, rgba(245,166,35,0.06), rgba(0,212,170,0.04))", border: "1px solid rgba(245,166,35,0.2)" }}>
      <p className="section-label mb-4">// POR QUE GODOT E NÃO UNITY?</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-bold mb-3 neon-amber">Godot 4 ✓</h4>
          <ul className="space-y-2">
            {["100% gratuito, sem royalties", "Leve — roda em qualquer máquina", "Exportação nativa para Android", "Comunidade indie ativa e crescendo", "Open source — sem surpresas de preço"].map(i => (
              <li key={i} className="text-sm flex gap-2 items-start" style={{ color: "#e8e6f0" }}>
                <span style={{ color: "#00d4aa" }}>+</span> {i}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3" style={{ color: "#7a7893" }}>Unity ✗</h4>
          <ul className="space-y-2">
            {["Cobrou taxas por instalação em 2023", "Pesado para máquinas modestas", "Plano gratuito com limitações", "Confiança da comunidade abalada", "Complexidade desnecessária para indie"].map(i => (
              <li key={i} className="text-sm flex gap-2 items-start" style={{ color: "#7a7893" }}>
                <span style={{ color: "#ff6b6b" }}>–</span> {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div className="flex gap-4 flex-wrap">
      <Link to="/viral" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg mono text-sm" style={{ border: "1px solid #2a2840", color: "#7a7893" }}>← Voltar</Link>
      <Link to="/sobre" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg mono text-sm font-bold" style={{ background: "rgba(157,140,255,0.1)", border: "1px solid rgba(157,140,255,0.4)", color: "#9d8cff" }}>Sobre o Plano →</Link>
    </div>
  </div>
);

// ─── PAGE: SOBRE ─────────────────────────────────────────────────────────────

const Sobre = () => (
  <div className="max-w-3xl mx-auto px-6 py-16">
    <p className="section-label mb-4">// MANIFESTO</p>
    <h1 className="text-5xl font-extrabold mb-8">
      O <span className="neon-amber">Porquê</span><br />deste Plano
    </h1>

    <div className="space-y-6 mb-12" style={{ color: "#e8e6f0" }}>
      {[
        { title: "Não é fórmula mágica", text: "Este plano é construído sobre realidade: trabalho, família, tempo limitado. Cada etapa foi desenhada para ser executável com 2–4 horas por dia sem abandonar a renda atual." },
        { title: "Transição segura", text: "Nos primeiros 6 meses, o foco é aprendizado. A partir do mês 7, freela começa a complementar a renda. A transição completa só acontece quando houver segurança financeira real." },
        { title: "Por que games?", text: "Games são o cruzamento perfeito de código, criatividade e mercado bilionário. Um jogo bem feito por um dev solo pode alcançar milhões — sem investimento inicial além de tempo e dedicação." },
        { title: "A meta real", text: "Não é ficar rico rapidamente. É construir um negócio próprio, ter controle sobre o próprio tempo e dar uma vida tranquila para a família. O estúdio é o veículo para essa liberdade." },
      ].map((item, i) => (
        <div key={i} className="p-6 rounded-xl" style={{ background: "#1a1828", border: "1px solid #2a2840" }}>
          <h3 className="font-bold mb-2 neon-amber">{item.title}</h3>
          <p className="text-sm leading-relaxed" style={{ color: "#7a7893" }}>{item.text}</p>
        </div>
      ))}
    </div>

    {/* Final CTA */}
    <div className="text-center p-10 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(245,166,35,0.08), rgba(157,140,255,0.06))", border: "1px solid rgba(245,166,35,0.25)" }}>
      <div className="text-4xl mb-4 floating">🎮</div>
      <h2 className="text-3xl font-extrabold mb-3 neon-amber">2026 é o ano.</h2>
      <p className="text-sm mb-6" style={{ color: "#7a7893" }}>Um passo de cada vez. Um jogo de cada vez. Um sonho construído com consistência.</p>
      <Link to="/" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold mono text-sm glow-btn"
        style={{ background: "rgba(245,166,35,0.12)", border: "1px solid #f5a623", color: "#f5a623" }}>
        COMEÇAR O ROADMAP →
      </Link>
    </div>

    <div className="mt-8">
      <Link to="/stack" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg mono text-sm" style={{ border: "1px solid #2a2840", color: "#7a7893" }}>← Voltar</Link>
    </div>
  </div>
);

// ─── APP ─────────────────────────────────────────────────────────────────────

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen grid-pattern" style={{ background: "#0f0e17" }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Roadmap />} />
          <Route path="/viral" element={<ViralStrategy />} />
          <Route path="/stack" element={<TechStack />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <footer className="text-center py-8 mono text-xs" style={{ color: "#2a2840", borderTop: "1px solid #2a2840" }}>
          NK.DEV STUDIO © 2026 — construído com dedicação
        </footer>
      </div>
    </HashRouter>
  );
}

createRoot(document.getElementById("app_root")).render(<App />);
