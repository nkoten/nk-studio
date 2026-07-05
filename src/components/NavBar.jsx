import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Hub' },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/caderno', label: 'Caderno' },
  { to: '/viral', label: 'Viral' },
  { to: '/checklists', label: 'Checks' },
  { to: '/stack', label: 'Stack' },
  { to: '/sobre', label: 'Sobre' },
];

export default function NavBar() {
  const location = useLocation();
  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        background: 'rgba(15,14,23,0.95)',
        borderColor: '#2a2840',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <span className="neon-amber mono text-sm font-bold">NK.DEV</span>
          <span style={{ color: '#2a2840' }}>|</span>
          <span
            className="mono text-xs hidden sm:block"
            style={{ color: '#7a7893' }}
          >
            STUDIO_HUB_2026
          </span>
        </div>
        <div className="flex flex-wrap gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-1.5 rounded text-xs transition-all duration-200 mono"
              style={{
                color: location.pathname === l.to ? '#f5a623' : '#7a7893',
                background:
                  location.pathname === l.to
                    ? 'rgba(245,166,35,0.1)'
                    : 'transparent',
                border:
                  location.pathname === l.to
                    ? '1px solid rgba(245,166,35,0.3)'
                    : '1px solid transparent',
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
