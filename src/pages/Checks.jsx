import { Link } from 'react-router-dom';

export default function Checks() {
  const Neon = ({ children }) => <span className="neon-amber">{children}</span>;
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="section-label mb-4">// MANIFESTO</p>
      <h1 className="text-5xl font-extrabold mb-8">
        <Neon>Checklists</Neon>
        <br />
        para o desenvolvimento de apps e jogos
      </h1>

      <p>
        <a href="/src/pages/checklists/index.html">lojas</a>
      </p>

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
