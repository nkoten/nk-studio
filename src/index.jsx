// index.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import Roadmap from './pages/Roadmap.jsx';
import Caderno from './pages/Caderno.jsx';
import Checks from './pages/Checks.jsx';
import { Viral, Stack, Sobre } from './pages/OtherPages.jsx';

function App() {
  return (
    <HashRouter>
      <div
        className="min-h-screen grid-pattern"
        style={{ background: '#0f0e17' }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/caderno" element={<Caderno />} />
          <Route path="/viral" element={<Viral />} />
          <Route path="/checklists" element={<Checks />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <footer
          className="text-center py-8 mono text-xs"
          style={{ color: '#2a2840', borderTop: '1px solid #2a2840' }}
        >
          NK.DEV STUDIO © 2026 — construído com dedicação
        </footer>
      </div>
    </HashRouter>
  );
}

createRoot(document.getElementById('app_root')).render(<App />);
