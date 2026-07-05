import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// ─── STORAGE HELPERS ─────────────────────────────────────────────────────────
const STORAGE_KEY = 'nkdev_caderno_v1';
const loadState = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};
const saveState = (state) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const MODULES = [
  {
    id: 'setup',
    icon: '⚙️',
    color: '#f5a623',
    label: 'Configuração Inicial',
    sub: 'Projeto Unity, URP, Corgi Engine',
    steps: [
      {
        title: 'Criar projeto Unity com URP',
        sub: 'Universal Render Pipeline — obrigatório para a Visão Expandida',
        tip: "Selecione o template '2D (URP)' — não o '2D' simples. Se errar, delete e refaça. Vale a pena.",
        warn: null,
        tasks: [
          'Abrir Unity Hub → New Project',
          "Template: '2D (URP)' — não use o '2D' simples",
          'Nome: KAI_Despertar',
          'Pasta acessível (não dentro de Downloads)',
          'Create Project e aguardar carregar',
        ],
      },
      {
        title: 'Verificar versão do Unity',
        sub: 'Corgi Engine tem requisitos — confirme compatibilidade',
        tip: 'Sempre use versão LTS. Nunca atualize a versão no meio do projeto.',
        warn: 'Nunca atualize a versão Unity no meio de um projeto. Decida agora e fique nela até terminar.',
        tasks: [
          'Unity Hub → Installs — ver versão instalada',
          'Versão mínima: Unity 2022 LTS ou 2023 LTS',
          'Se mais antiga: baixar LTS mais recente',
          'Confirmar compatibilidade com Corgi Engine na documentação',
        ],
      },
      {
        title: 'Importar o Corgi Engine',
        sub: 'Asset Store → baixar e importar',
        tip: 'Vai aparecer muitos arquivos. Não entre em pânico. Foque só no que este guia pede.',
        warn: null,
        tasks: [
          'Window → Package Manager → My Assets',
          'Corgi Engine → Download → Import',
          'Selecionar tudo e confirmar',
          'Aguardar recompilação (2–5 minutos)',
          "Verificar pasta 'CorgiEngine' no Project panel",
        ],
      },
      {
        title: 'Estrutura de pastas do projeto',
        sub: 'Organização desde o início evita caos depois',
        tip: 'O underscore _ mantém suas pastas no topo, separadas do Corgi. Parece burocrático agora, mas em 3 meses você vai agradecer.',
        warn: null,
        tasks: [
          'Criar em Assets: _Scenes / _Scripts / _Sprites / _Audio / _Prefabs / _Tilemaps',
          "File → Save As → _Scenes → 'Fase1_Quarto'",
          'Confirmar cena no Project panel',
        ],
      },
    ],
  },
  {
    id: 'scene',
    icon: '🏠',
    color: '#00d4aa',
    label: 'Cena do Quarto',
    sub: 'Tilemaps, câmera, elementos e triggers',
    steps: [
      {
        title: 'Câmera e resolução base',
        sub: '320×180 — pixel art autêntico',
        tip: 'Pixel art em 320×180 escalado 4x = 1280×720. Segredo dos games indie bonitos: baixa resolução, alta intencionalidade.',
        warn: 'Não use resolução alta para pixel art. 1920×1080 com pixel art pequeno fica horrível.',
        tasks: [
          'Main Camera → Projection: Orthographic',
          'Size: 5',
          'Background: cor escura (quarto noturno)',
          'Game view → Free Aspect → adicionar 320x180',
        ],
      },
      {
        title: 'Layout do quarto com Tilemaps',
        sub: 'Chão, paredes, teto — estrutura básica',
        tip: 'Sem tileset ainda? Use quadrados coloridos como placeholder. O importante é a estrutura funcionar. Arte vem depois.',
        warn: 'Sempre adicione Composite Collider junto com Tilemap Collider. Sem isso o personagem trava em junções.',
        tasks: [
          'Hierarchy → 2D Object → Tilemap → Rectangular',
          "Renomear Tilemap para 'TM_Paredes'",
          "Window → 2D → Tile Palette → Create New Palette 'Quarto_Palette'",
          'Montar: chão, paredes, teto (≈20×12 tiles)',
          'Add Component → Tilemap Collider 2D',
          "Add Component → Composite Collider 2D → marcar 'Used By Composite'",
        ],
      },
      {
        title: 'Elementos do quarto',
        sub: 'Cama, guarda-roupa, janela — cada um com função',
        tip: "Organize em Empty 'Elementos_Quarto' no Hierarchy. Hierarchy limpo = mente limpa.",
        warn: null,
        tasks: [
          'Criar Empty para cada elemento: Cama, Guarda_Roupa, Janela, Mancha_Teto',
          'Sprite Renderer em cada → arrastar sprite',
          'Box Collider 2D nos que Kaí pula em cima',
          'Cama: borda esquerda (ponto de partida)',
          'Guarda-roupa: parede esquerda com plataforma no topo',
          'Janela: parede direita (decorativo, sem colisão)',
          "Criar layer 'Interativo' para objetos com triggers",
        ],
      },
      {
        title: 'Interaction Zones (gatilhos de narrativa)',
        sub: 'Triggers que ativam narração ao se aproximar',
        tip: 'Comece com Debug.Log() no lugar do texto. Confirme que o trigger funciona antes de adicionar UI.',
        warn: null,
        tasks: [
          "Para cada elemento: adicionar Empty child 'InteractionZone'",
          'Box Collider 2D → Is Trigger ✓',
          "Criar script C#: 'NarrationTrigger'",
          'OnTriggerEnter2D → mostrar texto → esperar → esconder',
          'Configurar texto de cada zona no Inspector',
        ],
      },
    ],
  },
  {
    id: 'kai',
    icon: '🧍',
    color: '#9d8cff',
    label: 'Personagem Kaí',
    sub: 'CharacterController, animações e movimento',
    steps: [
      {
        title: 'Personagem base com Corgi Engine',
        sub: 'Usar prefab do Corgi como ponto de partida',
        tip: "Não tente criar do zero. Estude a demo 'RetroVania' do Corgi — ela mostra como tudo está configurado. Copiar e adaptar é o jeito certo.",
        warn: 'Não delete os exemplos do Corgi Engine. Você vai precisar deles como referência.',
        tasks: [
          'Abrir uma demo do Corgi Engine como referência',
          "Criar Empty: 'Kai_Crianca' ou duplicar prefab da demo",
          'Verificar componentes: Character, Rigidbody2D, Colliders',
          'Salvar como prefab em _Prefabs/',
        ],
      },
      {
        title: 'Configurar CharacterController2D',
        sub: 'Kaí criança: mais lento, pulo menor',
        tip: 'Teste e ajuste no Play Mode. Aperta Play, sente, sai, ajusta, repete. Isso é normal.',
        warn: 'Nunca salve alterações feitas durante o Play Mode. Unity descarta tudo ao sair.',
        tasks: [
          'Max Run Speed: 5 (adulto terá 8)',
          'Jump Height: 2.5',
          'Gravity: 30',
          'Desabilitar: AbilityDash, AbilityDoubleJump, AbilityWallJump',
          'Manter: AbilityRun, AbilityJump, AbilityInteract',
        ],
      },
      {
        title: 'Animações: Idle, Walk, Jump',
        sub: 'As três essenciais para começar',
        tip: "Sem sprite ainda? Use um retângulo colorido. Chame de 'Kai Placeholder'. O jogo precisa funcionar primeiro.",
        warn: 'Nomes dos parâmetros do Animator devem ser EXATAMENTE os que o Corgi Engine espera. Consulte a documentação.',
        tasks: [
          'Importar sprites para _Sprites/Kai_Crianca/',
          'Criar Animator Controller → _Prefabs/Animations/',
          'Estados: Idle, Walk, Jump',
          'Parâmetros Bool: isWalking, isGrounded',
          'Confirmar nomes com a documentação do Corgi Engine',
        ],
      },
      {
        title: 'Primeiro teste de movimento',
        sub: 'Kaí se movendo no quarto — marco real',
        tip: 'Este momento é emocionante. Aproveite. Não se preocupe se estiver feio. Funciona = vitória.',
        warn: null,
        tasks: [
          'Posicionar Kai_Crianca em cima da cama',
          'Apertar Play',
          'Testar WASD/setas + Espaço',
          'Verificar colisão com chão e paredes',
          'Ajustar valores de física até sentir bom',
          'Sair do Play Mode e salvar a cena',
        ],
      },
    ],
  },
  {
    id: 've',
    icon: '👁️',
    color: '#f5a623',
    label: 'Visão Expandida',
    sub: 'Shader de dessaturação + glow dourado',
    steps: [
      {
        title: 'Shader de dessaturação global',
        sub: 'Mundo cinza + elementos dourados — efeito central do jogo',
        tip: 'O Lerp entre colorido e cinza deve durar ~0.3s. Rápido demais choca, lento demais entedia.',
        warn: 'Post Processing no URP exige Main Camera → Rendering → Post Processing ✓.',
        tasks: [
          "Hierarchy → Create Empty → 'PostProcessing_Manager'",
          'Add Component → Volume (URP) → Is Global ✓',
          'Add Override → Color Adjustments → Saturation: 0',
          "Criar script 'ExpandedVisionController.cs'",
          'Toggle com Lerp de saturação 0 → -100',
          'Testar: ativar/desativar vê o mundo dessaturar',
        ],
      },
      {
        title: 'ExpandedVisionTargets — glow dourado',
        sub: 'Objetos interativos que brilham ao ativar a VE',
        tip: "O glow dourado sobre o mundo cinza é o momento 'uau' do jogo. Ajuste até ficar bonito.",
        warn: null,
        tasks: [
          "Criar Layer: 'ExpandedVision'",
          'Adicionar Point Light 2D (child) em cada objeto interativo',
          'Layer: ExpandedVision · Intensity: 0 (desativado) · Cor: #F5C47A',
          "Criar script 'ExpandedVisionTarget.cs'",
          'Ativa/desativa Light2D junto com o sistema de VE',
          'Testar: VE liga → objetos brilham em dourado',
        ],
      },
      {
        title: 'Aura das Entidades — vermelho pulsante',
        sub: 'Reveladas apenas pela Visão Expandida',
        tip: 'Dourado = aliado/interativo. Vermelho = ameaça. O jogador aprende essa linguagem sem nenhum texto.',
        warn: null,
        tasks: [
          'Figura do quarto: Point Light 2D cor #CC2200',
          'Animação Pulse no Animator (alpha 0.6 → 1.0, loop 0.8s)',
          'Desativada por padrão, ativa com VE ligada',
          'Testar: VE → figura pulsa vermelho sobre mundo cinza',
        ],
      },
      {
        title: 'Input e barra de Foco',
        sub: 'Botão que ativa/desativa com consumo de energia',
        tip: 'Quando o Foco acabar e a VE desligar, será frustrante — e isso é bom. Cria tensão estratégica.',
        warn: 'Separe a lógica de Input do sistema de VE. No mobile o botão touch chamará a mesma função que o teclado.',
        tasks: [
          'Input.GetKeyDown(KeyCode.LeftShift) → ToggleVision()',
          'float focus = 100f — decresce 20/s com VE ativa',
          'Se focus <= 0 → desativar VE automaticamente',
          'Recuperação: +30/s quando VE desativada',
          'Testar ciclo completo: ativar → usar → esgotar → recuperar',
        ],
      },
    ],
  },
  {
    id: 'polish',
    icon: '✨',
    color: '#ff6b6b',
    label: 'Áudio e Polish',
    sub: 'Iluminação, som, eventos e build Android',
    steps: [
      {
        title: 'Iluminação atmosférica',
        sub: 'Escuro com fontes de luz específicas',
        tip: 'Iluminação é narrativa. A ausência de luz no canto da figura é tão importante quanto a luz na cama.',
        warn: null,
        tasks: [
          'Global Light 2D → Intensity: 0.15 (quase escuro)',
          'Point Light 2D na janela: cor #A0C4FF · Intensity: 0.8',
          'Spot Light para listras da persiana',
          'Luminária: cor #FFD080 · Intensity: 0.4',
          'Canto da figura: sem luz — escuridão proposital',
        ],
      },
      {
        title: 'Áudio ambiente do quarto',
        sub: 'Ventilador, silêncio anômalo, coração',
        tip: 'O silêncio é o efeito sonoro mais poderoso desta fase. Quando o ventilador para, o jogador percebe antes de ver a figura.',
        warn: null,
        tasks: [
          "Empty 'AudioManager_Fase1' → Audio Source loop",
          'Som ambiente (ventilador/noite) Volume: 0.3',
          "Script 'AnomalousSilence.cs': reduz volume para 0 em 1s",
          'Ativar no trigger da figura',
          'Áudio cardíaco: Audio Source separado, ativa perto da figura',
        ],
      },
      {
        title: 'VE automática ao chegar na figura',
        sub: 'Tutorial implícito — o jogador descobre a mecânica',
        tip: 'Este é o momento que faz pessoas recomendarem o jogo. Faça-o ser memorável.',
        warn: null,
        tasks: [
          'Trigger zone 2 tiles ao redor da figura',
          "Script 'FiguraTrigger.cs' → ActivateForced() (sem custo de foco)",
          'CinemachineImpulse: tremor leve de câmera ao ativar',
          'Áudio: filtro lowpass ao ativar VE',
          'Testar: chegar perto → VE ativa sozinha → figura pulsa vermelho',
        ],
      },
      {
        title: 'Primeira build Android',
        sub: 'O jogo no celular de verdade — marco do projeto',
        tip: 'Teste no celular CEDO e com frequência. O que funciona no editor pode estar errado no celular.',
        warn: 'Performance no mobile é diferente. Alvo: 60fps em celular intermediário. Reduza partículas se travar.',
        tasks: [
          'File → Build Settings → Android',
          'Player Settings → Company: NKStudio · Product: KAI',
          'Minimum API Level: Android 8.0 (API 26)',
          'Instalar Android SDK se necessário (Unity Hub → Add Module)',
          'Celular via USB com Developer Mode ativo',
          'Build and Run — aguardar compilação',
          'Anotar o que sentiu diferente do editor e ajustar',
        ],
      },
    ],
  },
];

const TIMELINE_EVENTS = [
  {
    id: 'doc',
    date: 'Mai 2026',
    label: 'GDD + Prólogo concluídos',
    color: '#f5a623',
    done: true,
  },
  {
    id: 'setup',
    date: 'Jun 2026',
    label: 'Setup Unity + Corgi Engine',
    color: '#00d4aa',
    done: false,
  },
  {
    id: 'fase1',
    date: 'Jul 2026',
    label: 'Fase 1 — O Quarto (protótipo)',
    color: '#9d8cff',
    done: false,
  },
  {
    id: 'ato1',
    date: 'Set 2026',
    label: 'Ato I completo + arte final',
    color: '#ff6b6b',
    done: false,
  },
  {
    id: 'ebook',
    date: 'Out 2026',
    label: 'E-book KAÍ publicado',
    color: '#f5a623',
    done: false,
  },
  {
    id: 'soft',
    date: 'Nov 2026',
    label: 'Soft launch Android',
    color: '#00d4aa',
    done: false,
  },
  {
    id: 'full',
    date: 'Dez 2026',
    label: 'Lançamento oficial + campanha',
    color: '#9d8cff',
    done: false,
  },
  {
    id: 'store',
    date: 'Jan 2027',
    label: 'App Store iOS + itch.io PC',
    color: '#ff6b6b',
    done: false,
  },
];

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function TaskItem({ text, done, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className="flex items-start gap-3 cursor-pointer py-2 px-3 rounded-lg transition-all hover:bg-white/5"
      style={{ borderLeft: `2px solid ${done ? '#00d4aa' : '#2a2840'}` }}
    >
      <div
        className="mt-0.5 w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-all"
        style={{
          borderColor: done ? '#00d4aa' : '#2a2840',
          background: done ? '#00d4aa' : 'transparent',
        }}
      >
        {done && (
          <span
            style={{ fontSize: '9px', color: '#0f0e17', fontWeight: 'bold' }}
          >
            ✓
          </span>
        )}
      </div>
      <span
        className="text-sm"
        style={{
          color: done ? '#7a7893' : '#e8e6f0',
          textDecoration: done ? 'line-through' : 'none',
        }}
      >
        {text}
      </span>
    </div>
  );
}

function StepCard({ step, moduleColor, tasks, onToggle, note, onNoteChange }) {
  const [open, setOpen] = useState(false);
  const done = tasks.filter(Boolean).length;
  const pct = Math.round((done / step.tasks.length) * 100);

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        border: `1px solid ${open ? moduleColor + '60' : '#2a2840'}`,
        background: '#1a1828',
      }}
    >
      <div
        className="p-4 cursor-pointer flex items-center gap-4"
        onClick={() => setOpen(!open)}
      >
        <div className="flex-1 min-w-0">
          <p
            className="font-semibold text-sm mb-0.5"
            style={{ color: '#e8e6f0' }}
          >
            {step.title}
          </p>
          <p className="text-xs" style={{ color: '#7a7893' }}>
            {step.sub}
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="text-right">
            <p
              className="mono text-xs"
              style={{ color: pct === 100 ? '#00d4aa' : '#7a7893' }}
            >
              {done}/{step.tasks.length}
            </p>
            <div
              style={{
                width: '60px',
                height: '3px',
                background: '#2a2840',
                borderRadius: '2px',
                marginTop: '4px',
              }}
            >
              <div
                style={{
                  width: `${pct}%`,
                  height: '3px',
                  background: moduleColor,
                  borderRadius: '2px',
                  transition: 'width .4s',
                }}
              />
            </div>
          </div>
          <span
            style={{
              color: '#7a7893',
              transform: open ? 'rotate(180deg)' : 'none',
              transition: 'transform .2s',
              fontSize: '12px',
            }}
          >
            ▼
          </span>
        </div>
      </div>

      {open && (
        <div className="px-4 pb-4 border-t" style={{ borderColor: '#2a2840' }}>
          {step.tip && (
            <div
              className="mt-3 p-3 rounded-lg text-xs leading-relaxed"
              style={{
                background: 'rgba(245,166,35,0.06)',
                border: '1px solid rgba(245,166,35,0.2)',
                color: '#e8e6f0',
              }}
            >
              💡 <strong style={{ color: '#f5a623' }}>Dica de mentor:</strong>{' '}
              {step.tip}
            </div>
          )}
          {step.warn && (
            <div
              className="mt-2 p-3 rounded-lg text-xs leading-relaxed"
              style={{
                background: 'rgba(255,107,107,0.06)',
                border: '1px solid rgba(255,107,107,0.2)',
                color: '#e8e6f0',
              }}
            >
              ⚠️ <strong style={{ color: '#ff6b6b' }}>Atenção:</strong>{' '}
              {step.warn}
            </div>
          )}
          <div className="mt-3 space-y-1">
            {step.tasks.map((t, i) => (
              <TaskItem
                key={i}
                text={t}
                done={tasks[i] || false}
                onToggle={() => onToggle(i)}
              />
            ))}
          </div>
          <div className="mt-4">
            <p className="mono text-xs mb-2" style={{ color: '#7a7893' }}>
              // sua anotação
            </p>
            <textarea
              className="note-textarea"
              placeholder="Anote aqui dúvidas, problemas encontrados, soluções..."
              value={note || ''}
              onChange={(e) => onNoteChange(e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────

export default function Caderno() {
  const [activeModule, setActiveModule] = useState('setup');
  const [activeTab, setActiveTab] = useState('guia'); // guia | timeline
  const [checkState, setCheckState] = useState({});
  const [notes, setNotes] = useState({});
  const [timeline, setTimeline] = useState(TIMELINE_EVENTS);

  // load from localStorage on mount
  useEffect(() => {
    const saved = loadState();
    if (saved) {
      if (saved.checkState) setCheckState(saved.checkState);
      if (saved.notes) setNotes(saved.notes);
      if (saved.timeline) setTimeline(saved.timeline);
    }
  }, []);

  // save whenever state changes
  useEffect(() => {
    saveState({ checkState, notes, timeline });
  }, [checkState, notes, timeline]);

  const mod = MODULES.find((m) => m.id === activeModule);

  // flat key for each task: moduleId_stepIdx_taskIdx
  const getKey = (mId, si, ti) => `${mId}_${si}_${ti}`;
  const getNoteK = (mId, si) => `note_${mId}_${si}`;

  const toggleTask = (mId, si, ti) => {
    const k = getKey(mId, si, ti);
    setCheckState((prev) => ({ ...prev, [k]: !prev[k] }));
  };

  const setNote = (mId, si, val) => {
    const k = getNoteK(mId, si);
    setNotes((prev) => ({ ...prev, [k]: val }));
  };

  const toggleTimeline = (id) => {
    setTimeline((prev) =>
      prev.map((e) => (e.id === id ? { ...e, done: !e.done } : e)),
    );
  };

  // global progress
  const totalTasks = MODULES.reduce(
    (a, m) => a + m.steps.reduce((b, s) => b + s.tasks.length, 0),
    0,
  );
  const doneTasks = MODULES.reduce(
    (a, m) =>
      a +
      m.steps.reduce(
        (b, s, si) =>
          b +
          s.tasks.filter((_, ti) => checkState[getKey(m.id, si, ti)]).length,
        0,
      ),
    0,
  );
  const globalPct = Math.round((doneTasks / totalTasks) * 100);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* ── HEADER ── */}
      <div className="mb-10">
        <p className="section-label mb-3">// CADERNO DE DESENVOLVIMENTO</p>
        <h1 className="text-5xl font-extrabold mb-3">
          <span className="neon-teal">KAÍ</span>
          <span style={{ color: '#e8e6f0' }}> na Unity</span>
        </h1>
        <p
          className="text-sm mb-6"
          style={{ color: '#7a7893', maxWidth: '500px' }}
        >
          Guia de mentor interativo para construir o jogo passo a passo. Marque
          as tarefas, faça anotações e acompanhe a linha do tempo.
          <strong style={{ color: '#00d4aa' }}>
            {' '}
            Suas marcações ficam salvas.
          </strong>
        </p>

        {/* global progress */}
        <div
          className="p-4 rounded-xl flex items-center gap-4"
          style={{ background: '#1a1828', border: '1px solid #2a2840' }}
        >
          <div className="flex-1">
            <div className="flex justify-between mb-2">
              <span className="mono text-xs" style={{ color: '#7a7893' }}>
                Progresso total do guia
              </span>
              <span
                className="mono text-xs font-bold"
                style={{ color: '#00d4aa' }}
              >
                {doneTasks}/{totalTasks} tarefas
              </span>
            </div>
            <div
              style={{
                height: '6px',
                background: '#2a2840',
                borderRadius: '3px',
              }}
            >
              <div
                style={{
                  width: `${globalPct}%`,
                  height: '6px',
                  background: 'linear-gradient(90deg, #00d4aa, #f5a623)',
                  borderRadius: '3px',
                  transition: 'width .5s',
                  boxShadow:
                    globalPct > 0 ? '0 0 8px rgba(0,212,170,0.5)' : 'none',
                }}
              />
            </div>
          </div>
          <span
            className="mono text-2xl font-bold"
            style={{ color: '#f5a623' }}
          >
            {globalPct}%
          </span>
        </div>
      </div>

      {/* ── TABS ── */}
      <div className="flex gap-2 mb-8">
        {[
          { id: 'guia', label: '📋 Guia de Mentor' },
          { id: 'timeline', label: '📍 Linha do Tempo' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="px-5 py-2.5 rounded-lg mono text-sm transition-all"
            style={{
              background:
                activeTab === tab.id ? 'rgba(0,212,170,0.12)' : '#1a1828',
              border:
                activeTab === tab.id
                  ? '1px solid rgba(0,212,170,0.4)'
                  : '1px solid #2a2840',
              color: activeTab === tab.id ? '#00d4aa' : '#7a7893',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ══ GUIA TAB ══════════════════════════════════════════════════════ */}
      {activeTab === 'guia' && (
        <div className="flex flex-col md:flex-row gap-6">
          {/* sidebar — módulos */}
          <div className="md:w-52 flex-shrink-0 space-y-2">
            {MODULES.map((m) => {
              const mDone = m.steps.reduce(
                (a, s, si) =>
                  a +
                  s.tasks.filter((_, ti) => checkState[getKey(m.id, si, ti)])
                    .length,
                0,
              );
              const mTotal = m.steps.reduce((a, s) => a + s.tasks.length, 0);
              const mPct = Math.round((mDone / mTotal) * 100);
              const isActive = activeModule === m.id;

              return (
                <button
                  key={m.id}
                  onClick={() => setActiveModule(m.id)}
                  className="w-full text-left p-3 rounded-xl transition-all"
                  style={{
                    background: isActive ? `${m.color}12` : '#1a1828',
                    border: isActive
                      ? `1px solid ${m.color}50`
                      : '1px solid #2a2840',
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span>{m.icon}</span>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: isActive ? m.color : '#e8e6f0' }}
                    >
                      {m.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      style={{
                        flex: 1,
                        height: '2px',
                        background: '#2a2840',
                        borderRadius: '1px',
                      }}
                    >
                      <div
                        style={{
                          width: `${mPct}%`,
                          height: '2px',
                          background: m.color,
                          borderRadius: '1px',
                        }}
                      />
                    </div>
                    <span className="mono text-xs" style={{ color: '#7a7893' }}>
                      {mPct}%
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* content */}
          <div className="flex-1 min-w-0 space-y-3">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{mod.icon}</span>
              <div>
                <h2 className="text-lg font-bold" style={{ color: mod.color }}>
                  {mod.label}
                </h2>
                <p className="text-xs" style={{ color: '#7a7893' }}>
                  {mod.sub}
                </p>
              </div>
            </div>
            {mod.steps.map((step, si) => (
              <StepCard
                key={si}
                step={step}
                moduleColor={mod.color}
                tasks={step.tasks.map(
                  (_, ti) => checkState[getKey(mod.id, si, ti)] || false,
                )}
                onToggle={(ti) => toggleTask(mod.id, si, ti)}
                note={notes[getNoteK(mod.id, si)] || ''}
                onNoteChange={(val) => setNote(mod.id, si, val)}
              />
            ))}
          </div>
        </div>
      )}

      {/* ══ TIMELINE TAB ══════════════════════════════════════════════════ */}
      {activeTab === 'timeline' && (
        <div className="max-w-2xl">
          <p className="section-label mb-6">
            // LINHA DO TEMPO DO PROJETO — clique para marcar como concluído
          </p>
          <div className="relative">
            {/* vertical line */}
            <div
              className="absolute left-7 top-4 bottom-4 w-0.5"
              style={{
                background:
                  'linear-gradient(to bottom, #f5a623, #00d4aa, #9d8cff, #ff6b6b)',
              }}
            />

            <div className="space-y-4">
              {timeline.map((ev, i) => (
                <div
                  key={ev.id}
                  className="flex items-start gap-5 cursor-pointer group"
                  onClick={() => toggleTimeline(ev.id)}
                >
                  {/* dot */}
                  <div
                    className="relative z-10 mt-1 w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all"
                    style={{
                      borderColor: ev.color,
                      background: ev.done ? ev.color : '#0f0e17',
                      boxShadow: ev.done ? `0 0 12px ${ev.color}80` : 'none',
                    }}
                  >
                    {ev.done ? (
                      <span
                        style={{
                          fontSize: '12px',
                          color: '#0f0e17',
                          fontWeight: 'bold',
                        }}
                      >
                        ✓
                      </span>
                    ) : (
                      <span style={{ fontSize: '10px', color: ev.color }}>
                        {i + 1}
                      </span>
                    )}
                  </div>

                  {/* card */}
                  <div
                    className="flex-1 p-4 rounded-xl transition-all"
                    style={{
                      background: ev.done ? `${ev.color}10` : '#1a1828',
                      border: `1px solid ${ev.done ? ev.color + '40' : '#2a2840'}`,
                    }}
                  >
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <p
                        className="font-semibold text-sm"
                        style={{ color: ev.done ? ev.color : '#e8e6f0' }}
                      >
                        {ev.label}
                      </p>
                      <span
                        className="mono text-xs px-2 py-0.5 rounded"
                        style={{
                          background: `${ev.color}15`,
                          color: ev.color,
                          border: `1px solid ${ev.color}30`,
                        }}
                      >
                        {ev.date}
                      </span>
                    </div>
                    {ev.done && (
                      <p className="text-xs mt-1" style={{ color: '#7a7893' }}>
                        ✓ Concluído
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* milestone summary */}
          <div
            className="mt-10 p-5 rounded-xl"
            style={{ background: '#1a1828', border: '1px solid #2a2840' }}
          >
            <p className="section-label mb-3">// RESUMO DOS MARCOS</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                {
                  label: 'Concluídos',
                  val: timeline.filter((e) => e.done).length,
                  color: '#00d4aa',
                },
                {
                  label: 'Pendentes',
                  val: timeline.filter((e) => !e.done).length,
                  color: '#f5a623',
                },
                { label: 'Total', val: timeline.length, color: '#9d8cff' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold" style={{ color: s.color }}>
                    {s.val}
                  </p>
                  <p className="mono text-xs mt-1" style={{ color: '#7a7893' }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mt-12">
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
