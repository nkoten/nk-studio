import React, { useState, useEffect, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import {
  STRINGS,
  CATEGORY_LABELS,
  GOOGLE_PLAY,
  APP_STORE,
  OTHER_APP_STORES,
  STEAM,
  OTHER_GAME_STORES,
  MEDIA_TOOLS,
  DEV_APPS,
  DEV_GAMES,
} from './data.js';

const STORAGE_KEY = 'nkoten_quest_log_v1';

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { checked: {}, lang: 'pt', theme: 'dark' };
    const parsed = JSON.parse(raw);
    return { checked: {}, lang: 'pt', theme: 'dark', ...parsed };
  } catch (e) {
    return { checked: {}, lang: 'pt', theme: 'dark' };
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch (e) {
    return false;
  }
}

// ---------------------------------------------------------------
// Pequenos componentes reutilizáveis
// ---------------------------------------------------------------

function T({ dict, lang }) {
  return dict[lang] ?? dict.en ?? '';
}

function PixelBar({ pct, gold }) {
  return (
    <div className="pixel-bar-track">
      <div
        className={'pixel-bar-fill' + (gold ? ' gold' : '')}
        style={{ width: pct + '%' }}
      />
    </div>
  );
}

function TagBadge({ tag, lang }) {
  const labelKey =
    tag === 'free' ? 'free' : tag === 'paid' ? 'paid' : 'freemium';
  const colors = {
    free: 'var(--cyan)',
    paid: 'var(--magenta)',
    freemium: 'var(--gold)',
  };
  return (
    <span
      className="font-pixel"
      style={{
        fontSize: '8px',
        padding: '3px 6px',
        border: '2px solid var(--border)',
        color: colors[tag] || colors.freemium,
        whiteSpace: 'nowrap',
      }}
    >
      {STRINGS[labelKey][lang]}
    </span>
  );
}

function ChecklistItem({ item, lang, checked, onToggle }) {
  const isChecked = !!checked;
  return (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'flex-start',
        padding: '10px 4px',
        borderBottom: '2px dashed var(--border)',
        opacity: isChecked ? 0.65 : 1,
      }}
    >
      <div
        className={'pixel-checkbox' + (isChecked ? ' checked' : '')}
        onClick={() => onToggle(item.id)}
        role="checkbox"
        aria-checked={isChecked}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onToggle(item.id);
        }}
      >
        {isChecked ? '✓' : ''}
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontWeight: 600,
            textDecoration: isChecked ? 'line-through' : 'none',
          }}
        >
          {item[lang] ?? item.en}
        </div>
        {(item.detailPt || item.detailEn) && (
          <div
            style={{
              fontSize: '13px',
              color: 'var(--ink-dim)',
              marginTop: '4px',
            }}
          >
            {lang === 'pt' ? item.detailPt : item.detailEn}
          </div>
        )}
      </div>
    </div>
  );
}

function StoreSection({
  title,
  subtitle,
  items,
  lang,
  checkedMap,
  onToggle,
  icon,
}) {
  const grouped = useMemo(() => {
    const map = {};
    items.forEach((it) => {
      const cat = it.category || 'listing';
      if (!map[cat]) map[cat] = [];
      map[cat].push(it);
    });
    return map;
  }, [items]);

  const total = items.length;
  const done = items.filter((it) => checkedMap[it.id]).length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  return (
    <div
      className="pixel-panel"
      style={{ padding: '20px', marginBottom: '28px' }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <div>
          <h2
            className="font-pixel"
            style={{ fontSize: '16px', margin: 0, color: 'var(--gold)' }}
          >
            {icon} {title}
          </h2>
          {subtitle && (
            <p
              style={{
                margin: '8px 0 0',
                color: 'var(--ink-dim)',
                fontSize: '14px',
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
        <div style={{ minWidth: '160px', textAlign: 'right' }}>
          <div
            className="font-term"
            style={{ fontSize: '20px', color: 'var(--cyan)' }}
          >
            {done}/{total}
          </div>
          <PixelBar pct={pct} />
        </div>
      </div>

      {Object.keys(grouped).map((catKey) => (
        <div key={catKey} style={{ marginTop: '18px' }}>
          <div
            className="font-pixel"
            style={{
              fontSize: '11px',
              color: 'var(--blue)',
              marginBottom: '6px',
            }}
          >
            {CATEGORY_LABELS[catKey] ? CATEGORY_LABELS[catKey][lang] : catKey}
          </div>
          {grouped[catKey].map((it) => (
            <ChecklistItem
              key={it.id}
              item={it}
              lang={lang}
              checked={checkedMap[it.id]}
              onToggle={onToggle}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function ToolsSection({ lang }) {
  return (
    <div>
      {MEDIA_TOOLS.map((group, idx) => (
        <div
          key={idx}
          className="pixel-panel"
          style={{ padding: '18px', marginBottom: '20px' }}
        >
          <h3
            className="font-pixel"
            style={{
              fontSize: '13px',
              color: 'var(--gold)',
              margin: '0 0 12px',
            }}
          >
            {group.group[lang]}
          </h3>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            {group.items.map((tool, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '10px',
                  borderBottom: '2px dashed var(--border)',
                  paddingBottom: '8px',
                }}
              >
                <span style={{ fontSize: '14px' }}>{tool[lang]}</span>
                <TagBadge tag={tool.tag} lang={lang} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------
// Páginas
// ---------------------------------------------------------------

function overallStats(allItems, checkedMap) {
  const total = allItems.length;
  const done = allItems.filter((it) => checkedMap[it.id]).length;
  return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
}

function HomePage({ lang, checkedMap, sectionsMeta }) {
  return (
    <div>
      <div
        className="pixel-panel"
        style={{ padding: '20px', marginBottom: '24px' }}
      >
        <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6 }}>
          {STRINGS.homeIntro[lang]}
        </p>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
        }}
      >
        {sectionsMeta.map((s) => {
          const { total, done, pct } = overallStats(s.items, checkedMap);
          return (
            <NavLink
              key={s.path}
              to={s.path}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                className="pixel-panel"
                style={{ padding: '16px', height: '100%' }}
              >
                <div
                  className="font-pixel"
                  style={{
                    fontSize: '11px',
                    color: 'var(--gold)',
                    marginBottom: '10px',
                  }}
                >
                  {s.icon} {s.label[lang]}
                </div>
                <div
                  className="font-term"
                  style={{
                    fontSize: '18px',
                    color: 'var(--cyan)',
                    marginBottom: '6px',
                  }}
                >
                  {done}/{total} — {pct}%
                </div>
                <PixelBar pct={pct} gold />
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------
// App raiz
// ---------------------------------------------------------------

function App() {
  const [state, setState] = useState(loadState);
  const [storageOk, setStorageOk] = useState(true);
  const lang = state.lang;
  const theme = state.theme;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const ok = saveState(state);
    setStorageOk(ok);
  }, [state]);

  const toggleItem = (id) => {
    setState((prev) => ({
      ...prev,
      checked: { ...prev.checked, [id]: !prev.checked[id] },
    }));
  };

  const setLang = (l) => setState((prev) => ({ ...prev, lang: l }));
  const setTheme = (t) => setState((prev) => ({ ...prev, theme: t }));

  const resetProgress = () => {
    if (window.confirm(STRINGS.resetConfirm[lang])) {
      setState((prev) => ({ ...prev, checked: {} }));
    }
  };

  const ALL_ITEMS = useMemo(
    () => [
      ...GOOGLE_PLAY,
      ...APP_STORE,
      ...OTHER_APP_STORES,
      ...STEAM,
      ...OTHER_GAME_STORES,
      ...DEV_APPS,
      ...DEV_GAMES,
    ],
    [],
  );

  const { total, done, pct } = overallStats(ALL_ITEMS, state.checked);
  const level = 1 + Math.floor(done / 8);

  const sectionsMeta = [
    {
      path: '/lojas-apps',
      icon: '🏪',
      label: STRINGS.navAppStores,
      items: [...GOOGLE_PLAY, ...APP_STORE, ...OTHER_APP_STORES],
    },
    {
      path: '/lojas-jogos',
      icon: '🎮',
      label: STRINGS.navGameStores,
      items: [...STEAM, ...OTHER_GAME_STORES],
    },
    {
      path: '/checklist-apps',
      icon: '📱',
      label: STRINGS.navDevApps,
      items: DEV_APPS,
    },
    {
      path: '/checklist-jogos',
      icon: '🕹️',
      label: STRINGS.navDevGames,
      items: DEV_GAMES,
    },
  ];

  const navItems = [
    { path: '/', label: STRINGS.navHome, icon: '🏠' },
    { path: '/lojas-apps', label: STRINGS.navAppStores, icon: '🏪' },
    { path: '/lojas-jogos', label: STRINGS.navGameStores, icon: '🎮' },
    { path: '/midia', label: STRINGS.navMedia, icon: '🎬' },
    { path: '/checklist-apps', label: STRINGS.navDevApps, icon: '📱' },
    { path: '/checklist-jogos', label: STRINGS.navDevGames, icon: '🕹️' },
  ];

  return (
    <HashRouter>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        {/* SIDEBAR */}
        <aside
          className="pixel-panel"
          style={{
            width: '260px',
            minWidth: '260px',
            margin: '16px',
            padding: '16px',
            height: 'fit-content',
            position: 'sticky',
            top: '16px',
          }}
        >
          <h1
            className="font-pixel"
            style={{ fontSize: '14px', color: 'var(--gold)', lineHeight: 1.6 }}
          >
            {STRINGS.appTitle[lang]}
          </h1>
          <p
            style={{
              fontSize: '12px',
              color: 'var(--ink-dim)',
              marginTop: '-6px',
            }}
          >
            {STRINGS.appSubtitle[lang]}
          </p>

          <div style={{ margin: '16px 0' }}>
            <div
              className="font-pixel"
              style={{ fontSize: '10px', color: 'var(--cyan)' }}
            >
              {STRINGS.level[lang]} {level}
            </div>
            <div style={{ margin: '6px 0' }}>
              <PixelBar pct={pct} gold />
            </div>
            <div
              className="font-term"
              style={{ fontSize: '16px', color: 'var(--ink-dim)' }}
            >
              {done}/{total} {STRINGS.itemsChecked[lang]} ({pct}%)
            </div>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {navItems.map((n) => (
              <NavLink
                key={n.path}
                to={n.path}
                end={n.path === '/'}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  fontFamily: 'var(--font-pixel)',
                  fontSize: '10px',
                  padding: '10px 8px',
                  color: isActive ? 'var(--shadow-col)' : 'var(--ink)',
                  background: isActive ? 'var(--gold)' : 'transparent',
                  border: '2px solid var(--border)',
                })}
              >
                {n.icon} {n.label[lang]}
              </NavLink>
            ))}
          </nav>

          <div
            style={{
              marginTop: '18px',
              display: 'flex',
              gap: '6px',
              flexWrap: 'wrap',
            }}
          >
            <button
              className={'pixel-btn' + (lang === 'pt' ? ' active' : '')}
              onClick={() => setLang('pt')}
            >
              PT-BR
            </button>
            <button
              className={'pixel-btn' + (lang === 'en' ? ' active' : '')}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
          <div
            style={{
              marginTop: '6px',
              display: 'flex',
              gap: '6px',
              flexWrap: 'wrap',
            }}
          >
            <button
              className={'pixel-btn' + (theme === 'dark' ? ' active' : '')}
              onClick={() => setTheme('dark')}
            >
              🌙
            </button>
            <button
              className={'pixel-btn' + (theme === 'light' ? ' active' : '')}
              onClick={() => setTheme('light')}
            >
              ☀️
            </button>
          </div>

          <button
            className="pixel-btn"
            style={{ marginTop: '16px', width: '100%', color: 'var(--red)' }}
            onClick={resetProgress}
          >
            🗑 {STRINGS.resetBtn[lang]}
          </button>

          {!storageOk && (
            <p
              style={{
                fontSize: '11px',
                color: 'var(--red)',
                marginTop: '12px',
                lineHeight: 1.5,
              }}
            >
              {STRINGS.storageWarning[lang]}
            </p>
          )}
        </aside>

        {/* CONTEÚDO */}
        <main
          style={{ flex: 1, padding: '16px 24px 40px 0', maxWidth: '900px' }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  lang={lang}
                  checkedMap={state.checked}
                  sectionsMeta={sectionsMeta}
                />
              }
            />
            <Route
              path="/lojas-apps"
              element={
                <div>
                  <StoreSection
                    icon="🤖"
                    title="Google Play"
                    lang={lang}
                    items={GOOGLE_PLAY}
                    checkedMap={state.checked}
                    onToggle={toggleItem}
                  />
                  <StoreSection
                    icon="🍎"
                    title="Apple App Store"
                    lang={lang}
                    items={APP_STORE}
                    checkedMap={state.checked}
                    onToggle={toggleItem}
                  />
                  <StoreSection
                    icon="🗂️"
                    title={
                      lang === 'pt'
                        ? 'Outras Lojas de Apps'
                        : 'Other App Stores'
                    }
                    lang={lang}
                    items={OTHER_APP_STORES}
                    checkedMap={state.checked}
                    onToggle={toggleItem}
                  />
                </div>
              }
            />
            <Route
              path="/lojas-jogos"
              element={
                <div>
                  <StoreSection
                    icon="🎮"
                    title="Steam"
                    lang={lang}
                    items={STEAM}
                    checkedMap={state.checked}
                    onToggle={toggleItem}
                  />
                  <StoreSection
                    icon="🗂️"
                    title={
                      lang === 'pt'
                        ? 'Outras Lojas de Jogos'
                        : 'Other Game Stores'
                    }
                    lang={lang}
                    items={OTHER_GAME_STORES}
                    checkedMap={state.checked}
                    onToggle={toggleItem}
                  />
                </div>
              }
            />
            <Route path="/midia" element={<ToolsSection lang={lang} />} />
            <Route
              path="/checklist-apps"
              element={
                <StoreSection
                  icon="📱"
                  title={STRINGS.navDevApps[lang]}
                  lang={lang}
                  items={DEV_APPS}
                  checkedMap={state.checked}
                  onToggle={toggleItem}
                />
              }
            />
            <Route
              path="/checklist-jogos"
              element={
                <StoreSection
                  icon="🕹️"
                  title={STRINGS.navDevGames[lang]}
                  lang={lang}
                  items={DEV_GAMES}
                  checkedMap={state.checked}
                  onToggle={toggleItem}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

createRoot(document.getElementById('app_root')).render(<App />);
