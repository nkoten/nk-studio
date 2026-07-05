// ============================================================
// NKoten Quest Log — dados bilíngues (PT/EN) dos checklists
// ============================================================

export const STRINGS = {
  appTitle: { pt: 'NKOTEN QUEST LOG', en: 'NKOTEN QUEST LOG' },
  appSubtitle: {
    pt: 'Checklist de publicação de apps & jogos',
    en: 'App & game publishing checklist',
  },
  level: { pt: 'NÍVEL', en: 'LEVEL' },
  overallProgress: { pt: 'Progresso geral', en: 'Overall progress' },
  navHome: { pt: 'Início', en: 'Home' },
  navAppStores: { pt: 'Lojas de Apps', en: 'App Stores' },
  navGameStores: { pt: 'Lojas de Jogos', en: 'Game Stores' },
  navMedia: { pt: 'Mídia & Marketing', en: 'Media & Marketing' },
  navDevApps: { pt: 'Checklist Técnico: Apps', en: 'Dev Checklist: Apps' },
  navDevGames: { pt: 'Checklist Técnico: Jogos', en: 'Dev Checklist: Games' },
  resetBtn: { pt: 'Zerar progresso', en: 'Reset progress' },
  resetConfirm: {
    pt: 'Tem certeza? Isso apaga todas as caixinhas marcadas.',
    en: 'Are you sure? This clears every checked box.',
  },
  itemsChecked: { pt: 'itens concluídos', en: 'items done' },
  homeIntro: {
    pt: 'Abra esta página ao lado do seu editor enquanto desenvolve. Marque o que já está pronto em cada projeto — o progresso fica salvo no seu navegador.',
    en: 'Keep this open next to your editor while you build. Check off what is already done on each project — progress is saved in your browser.',
  },
  storageWarning: {
    pt: '⚠ Armazenamento local: se esta página estiver rodando dentro de um painel/preview de terceiros (iframe sandboxed), o navegador pode bloquear o salvamento. Abra o arquivo index.html direto no seu navegador (ou via servidor local) para o progresso persistir de verdade.',
    en: '⚠ Local storage: if this page is running inside a third-party preview panel (sandboxed iframe), the browser may block saving. Open index.html directly in your browser (or via a local server) for progress to actually persist.',
  },
  free: { pt: 'GRÁTIS', en: 'FREE' },
  paid: { pt: 'PAGO', en: 'PAID' },
  freemium: { pt: 'FREEMIUM', en: 'FREEMIUM' },
  toolsLabel: { pt: 'Ferramentas sugeridas', en: 'Suggested tools' },
};

// Categorias usadas dentro de cada loja/plataforma
export const CATEGORY_LABELS = {
  account: { pt: '🔑 Conta & Legal', en: '🔑 Account & Legal' },
  technical: { pt: '⚙️ Build & Técnico', en: '⚙️ Build & Technical' },
  listing: { pt: '📝 Ficha da Loja', en: '📝 Store Listing' },
  media: { pt: '🎨 Mídia Obrigatória', en: '🎨 Required Media' },
  postlaunch: { pt: '🚀 Pós-publicação', en: '🚀 Post-launch' },
};

function mk(id, category, pt, en, detailPt, detailEn) {
  return { id, category, pt, en, detailPt, detailEn };
}

// ------------------------------------------------------------
// LOJAS DE APPS
// ------------------------------------------------------------
export const GOOGLE_PLAY = [
  mk(
    'gp1',
    'account',
    'Criar conta Google Play Console',
    'Create Google Play Console account',
    'Taxa única de US$25 (não recorrente). Não é por app, é por conta.',
    'One-time US$25 fee (not recurring). Per account, not per app.',
  ),
  mk(
    'gp2',
    'account',
    'Concluir verificação de identidade',
    'Complete identity verification',
    'Documento de identidade oficial obrigatório. Leva até 2 dias úteis.',
    'Government-issued ID required. Takes up to 2 business days.',
  ),
  mk(
    'gp3',
    'account',
    'Escolher tipo de conta: Pessoal ou Organização',
    'Choose account type: Personal or Organization',
    'Conta Organização exige D-U-N-S number, mas fica isenta da exigência de teste fechado com testadores.',
    'Organization accounts need a D-U-N-S number, but are exempt from the closed-testing tester requirement.',
  ),
  mk(
    'gp4',
    'account',
    'Configurar perfil de pagamentos',
    'Set up payments profile',
    'Necessário só se for vender apps pagos ou compras no app (IAP).',
    'Only needed if selling paid apps or in-app purchases.',
  ),
  mk(
    'gp5',
    'account',
    'Rodar teste fechado com 12+ testadores por 14 dias',
    'Run closed testing with 12+ testers for 14 days',
    'Obrigatório para contas pessoais criadas após 13/nov/2023. Precisa ser 14 dias consecutivos, sem cair abaixo de 12 testadores ativos.',
    'Mandatory for personal accounts created after Nov 13, 2023. Must be 14 consecutive days without dropping below 12 active testers.',
  ),
  mk(
    'gp6',
    'account',
    'Responder ao questionário de acesso à produção',
    'Answer the production access questionnaire',
    'Pergunta sobre o feedback recebido e mudanças feitas durante o teste fechado — respostas vagas causam rejeição.',
    'Asks about feedback received and changes made during closed testing — vague answers get rejected.',
  ),
  mk(
    'gp7',
    'technical',
    'Gerar Android App Bundle (.aab)',
    'Generate Android App Bundle (.aab)',
    'A Play Store exige .aab, não aceita mais .apk direto para publicação nova.',
    'Play Store requires .aab, no longer accepts direct .apk for new publishing.',
  ),
  mk(
    'gp8',
    'technical',
    'Configurar Play App Signing',
    'Configure Play App Signing',
    'Deixa o Google gerenciar a chave de assinatura do app com segurança.',
    'Lets Google securely manage the app signing key.',
  ),
  mk(
    'gp9',
    'technical',
    'Mirar Target API level atual',
    'Target the current API level',
    'A partir de 31/ago/2026, novos apps precisam mirar Android 16 (API 36) ou superior.',
    'As of Aug 31, 2026, new apps must target Android 16 (API 36) or higher.',
  ),
  mk(
    'gp10',
    'technical',
    'Preencher a seção "Data safety"',
    'Fill out the "Data safety" section',
    'Declarar quais dados o app coleta, como usa e se compartilha com terceiros.',
    'Declare what data the app collects, how it is used and whether it is shared.',
  ),
  mk(
    'gp11',
    'technical',
    'Preencher questionário de classificação de conteúdo (IARC)',
    'Complete the content rating questionnaire (IARC)',
    'Gera a faixa etária automaticamente com base nas respostas.',
    'Automatically generates an age rating based on your answers.',
  ),
  mk(
    'gp12',
    'listing',
    'Título do app (até 30 caracteres)',
    'App title (up to 30 characters)',
  ),
  mk(
    'gp13',
    'listing',
    'Descrição curta (até 80 caracteres)',
    'Short description (up to 80 characters)',
  ),
  mk(
    'gp14',
    'listing',
    'Descrição completa (até 4000 caracteres)',
    'Full description (up to 4000 characters)',
  ),
  mk(
    'gp15',
    'listing',
    'URL da Política de Privacidade',
    'Privacy Policy URL',
    'Obrigatório, mesmo para apps grátis sem conta de usuário.',
    'Mandatory, even for free apps with no user accounts.',
  ),
  mk(
    'gp16',
    'media',
    'Ícone 512x512px (PNG 32-bit)',
    'Icon 512x512px (32-bit PNG)',
  ),
  mk(
    'gp17',
    'media',
    'Imagem de destaque (feature graphic) 1024x500px',
    'Feature graphic 1024x500px',
  ),
  mk(
    'gp18',
    'media',
    'Capturas de tela (mín. 2, ideal 4-8)',
    'Screenshots (min. 2, ideally 4-8)',
    'Separadas por tipo de dispositivo: telefone, tablet 7" e tablet 10" se aplicável.',
    'Separated by device type: phone, 7" tablet and 10" tablet where applicable.',
  ),
  mk(
    'gp19',
    'media',
    'Vídeo promocional (link do YouTube)',
    'Promo video (YouTube link)',
    'Opcional, mas aumenta bastante a taxa de conversão da ficha.',
    'Optional, but significantly boosts listing conversion rate.',
  ),
  mk(
    'gp20',
    'postlaunch',
    'Monitorar crashes e ANRs no Play Console',
    'Monitor crashes and ANRs in Play Console',
  ),
  mk(
    'gp21',
    'postlaunch',
    'Responder avaliações de usuários',
    'Reply to user reviews',
  ),
];

export const APP_STORE = [
  mk(
    'as1',
    'account',
    'Inscrever-se no Apple Developer Program',
    'Enroll in the Apple Developer Program',
    'Taxa ANUAL de US$99 (diferente do Google, precisa renovar todo ano).',
    'ANNUAL fee of US$99 (unlike Google, must renew every year).',
  ),
  mk(
    'as2',
    'account',
    'Escolher conta Individual ou Organização',
    'Choose Individual or Organization account',
    'Conta Organização exige D-U-N-S number.',
    'Organization accounts require a D-U-N-S number.',
  ),
  mk(
    'as3',
    'account',
    'Concluir verificação de identidade',
    'Complete identity verification',
  ),
  mk(
    'as4',
    'technical',
    'Ter acesso a um Mac (ou CI na nuvem)',
    'Have access to a Mac (or cloud CI)',
    'Build e envio final passam por Xcode/Transporter, que só rodam em macOS. Serviços como Codemagic ou GitHub Actions com runner macOS resolvem sem comprar um Mac.',
    'Final build and submission go through Xcode/Transporter, macOS-only. Services like Codemagic or GitHub Actions with a macOS runner solve this without buying a Mac.',
  ),
  mk(
    'as5',
    'technical',
    'Configurar certificados e provisioning profiles',
    'Configure certificates and provisioning profiles',
    'Feito no portal do Apple Developer, vinculado ao App ID do app.',
    "Done in the Apple Developer portal, tied to the app's App ID.",
  ),
  mk(
    'as6',
    'technical',
    'Criar o app no App Store Connect',
    'Create the app in App Store Connect',
  ),
  mk(
    'as7',
    'technical',
    'Preencher o "App Privacy" (nutrition label)',
    'Fill out "App Privacy" (nutrition label)',
    'Declaração detalhada de coleta de dados por categoria, exibida na ficha da loja.',
    'Detailed data-collection declaration by category, shown on the store listing.',
  ),
  mk(
    'as8',
    'technical',
    'Revisar conformidade com as Human Interface Guidelines',
    'Review compliance with Human Interface Guidelines',
  ),
  mk(
    'as9',
    'listing',
    'Nome do app (até 30 caracteres)',
    'App name (up to 30 characters)',
  ),
  mk(
    'as10',
    'listing',
    'Subtítulo (até 30 caracteres)',
    'Subtitle (up to 30 characters)',
  ),
  mk(
    'as11',
    'listing',
    'Descrição (até 4000 caracteres)',
    'Description (up to 4000 characters)',
  ),
  mk(
    'as12',
    'listing',
    'Palavras-chave (até 100 caracteres, separadas por vírgula)',
    'Keywords (up to 100 characters, comma-separated)',
  ),
  mk('as13', 'listing', 'URL de Política de Privacidade', 'Privacy Policy URL'),
  mk(
    'as14',
    'listing',
    'URL de suporte',
    'Support URL',
    'Apple exige um link de suporte funcional, não aceita só e-mail solto no texto.',
    'Apple requires a working support link, not just a bare email in the text.',
  ),
  mk('as15', 'media', 'Ícone 1024x1024px', 'Icon 1024x1024px'),
  mk(
    'as16',
    'media',
    'Capturas de tela por tamanho de dispositivo',
    'Screenshots per device size',
    'iPhone 6.9", iPhone 6.5" e iPad (se universal) — tamanhos exatos mudam com frequência, conferir no App Store Connect.',
    'iPhone 6.9", iPhone 6.5" and iPad (if universal) — exact sizes change often, double-check in App Store Connect.',
  ),
  mk(
    'as17',
    'media',
    'Vídeo de preview (opcional)',
    'App preview video (optional)',
  ),
  mk(
    'as18',
    'postlaunch',
    'Passar pela App Review (revisão humana)',
    'Pass App Review (human review)',
    'Geralmente 1-3 dias. Atenção especial à guideline 4.2 "Minimum Functionality" para apps simples.',
    'Usually 1-3 days. Pay special attention to guideline 4.2 "Minimum Functionality" for simple apps.',
  ),
];

export const OTHER_APP_STORES = [
  mk(
    'oa1',
    'account',
    'Amazon Appstore',
    'Amazon Appstore',
    'Conta grátis, aceita APK direto, processo de aprovação mais simples que Google/Apple.',
    'Free account, accepts direct APK, simpler approval process than Google/Apple.',
  ),
  mk(
    'oa2',
    'account',
    'Samsung Galaxy Store',
    'Samsung Galaxy Store',
    'Conta de desenvolvedor grátis. Bom canal extra de descoberta sem custo.',
    'Free developer account. Good extra discovery channel at no cost.',
  ),
  mk(
    'oa3',
    'account',
    'Huawei AppGallery',
    'Huawei AppGallery',
    'Importante para dispositivos Huawei sem serviços do Google (GMS).',
    'Important for Huawei devices without Google services (GMS).',
  ),
  mk(
    'oa4',
    'account',
    'F-Droid',
    'F-Droid',
    'Exclusivo para apps de código aberto — só faz sentido depois que o Bennu (ou outro projeto) for aberto ao público. Build reprodutível exigido.',
    'Open-source apps only — only makes sense once the project is made public. Reproducible build required.',
  ),
  mk(
    'oa5',
    'account',
    'Microsoft Store (Windows)',
    'Microsoft Store (Windows)',
    'Aceita apps Android empacotados via MSIX ou como PWA.',
    'Accepts Android apps packaged via MSIX or as a PWA.',
  ),
];

// ------------------------------------------------------------
// LOJAS DE JOGOS
// ------------------------------------------------------------
export const STEAM = [
  mk(
    'st1',
    'account',
    'Criar conta Steamworks',
    'Create a Steamworks account',
    'Taxa única de US$100 por jogo, recuperável contra as primeiras vendas do próprio jogo.',
    "One-time US$100 fee per game, recoupable against that game's first sales.",
  ),
  mk(
    'st2',
    'account',
    'Preencher formulário fiscal (ex.: W-8BEN para não-americanos)',
    'File tax forms (e.g. W-8BEN for non-US devs)',
  ),
  mk(
    'st3',
    'technical',
    'Integrar Steamworks SDK',
    'Integrate the Steamworks SDK',
    'Achievements, cloud saves e overlay do Steam passam por aqui.',
    'Achievements, cloud saves and the Steam overlay all go through this.',
  ),
  mk(
    'st4',
    'technical',
    'Build funcional para Windows',
    'Working Windows build',
    'Mínimo exigido. Mac e Linux são opcionais, mas ampliam alcance.',
    'Minimum required. Mac and Linux are optional but widen your reach.',
  ),
  mk(
    'st5',
    'technical',
    'Testar compatibilidade com Steam Deck',
    'Test Steam Deck compatibility',
    'Opcional, mas o selo "Deck Verified" ajuda bastante na visibilidade.',
    'Optional, but the "Deck Verified" badge helps a lot with visibility.',
  ),
  mk(
    'st6',
    'listing',
    'Capsules (header, small, main) em todos os tamanhos',
    'Capsules (header, small, main) in all sizes',
  ),
  mk(
    'st7',
    'listing',
    'Descrição curta e descrição longa da loja',
    'Short and long store description',
  ),
  mk(
    'st8',
    'listing',
    'Tags e categorias definidas',
    'Tags and categories set',
  ),
  mk(
    'st9',
    'media',
    'Trailer de no mínimo 30 segundos',
    'Trailer at least 30 seconds long',
  ),
  mk('st10', 'media', 'Mínimo de 5 capturas de tela', 'At least 5 screenshots'),
  mk(
    'st11',
    'postlaunch',
    'Página "Coming Soon" publicada com antecedência',
    'Publish a "Coming Soon" page in advance',
    'Recomendado pelo menos 2 semanas antes do lançamento, pra construir a lista de desejos (wishlist).',
    'Recommended at least 2 weeks before launch, to build up wishlists.',
  ),
  mk(
    'st12',
    'postlaunch',
    'Passar pela revisão do Steam',
    'Pass Steam review',
    'Costuma levar alguns dias úteis.',
    'Usually takes a few business days.',
  ),
];

export const OTHER_GAME_STORES = [
  mk(
    'og1',
    'account',
    'itch.io',
    'itch.io',
    'Grátis, sem aprovação prévia. Ótimo para protótipos e devlogs. Você escolhe a taxa (inclusive 0%).',
    'Free, no prior approval. Great for prototypes and devlogs. You choose the fee (including 0%).',
  ),
  mk(
    'og2',
    'account',
    'Epic Games Store',
    'Epic Games Store',
    'Corte de apenas 12% (bem menor que os 30% padrão). Exige aplicação e aprovação da Epic.',
    "Only a 12% cut (much lower than the standard 30%). Requires application and Epic's approval.",
  ),
  mk(
    'og3',
    'account',
    'GOG (DRM-free)',
    'GOG (DRM-free)',
    'Curadoria manual da CD Projekt, processo de aplicação próprio.',
    'Manually curated by CD Projekt, has its own application process.',
  ),
  mk(
    'og4',
    'account',
    'Consoles (Xbox ID@Xbox, PlayStation Partners, Nintendo)',
    'Consoles (Xbox ID@Xbox, PlayStation Partners, Nintendo)',
    'Exigem empresa registrada (CNPJ), aprovação de dev kit e processo bem mais burocrático — indicado para fases mais maduras do estúdio.',
    'Require a registered company, dev-kit approval and a much more bureaucratic process — better suited to a more mature stage of the studio.',
  ),
];

// ------------------------------------------------------------
// MÍDIA & MARKETING
// ------------------------------------------------------------
export const MEDIA_TOOLS = [
  {
    group: {
      pt: '📸 Capturas de tela / mockups',
      en: '📸 Screenshots / mockups',
    },
    items: [
      {
        pt: 'Figma — molduras de dispositivo, layout de ficha de loja',
        en: 'Figma — device frames, store listing layout',
        tag: 'freemium',
      },
      {
        pt: 'GIMP — edição de imagem grátis',
        en: 'GIMP — free image editing',
        tag: 'free',
      },
      {
        pt: 'MockuPhone — moldura de device online rápida',
        en: 'MockuPhone — quick online device framing',
        tag: 'free',
      },
      {
        pt: 'Placeit / Shotbot — templates prontos de ficha de loja',
        en: 'Placeit / Shotbot — ready-made store listing templates',
        tag: 'paid',
      },
    ],
  },
  {
    group: {
      pt: '🎬 Vídeo (trailers, gameplay, anúncio)',
      en: '🎬 Video (trailers, gameplay, announcements)',
    },
    items: [
      {
        pt: 'OBS Studio — gravação de tela e gameplay',
        en: 'OBS Studio — screen and gameplay recording',
        tag: 'free',
      },
      {
        pt: 'DaVinci Resolve — edição de vídeo profissional',
        en: 'DaVinci Resolve — professional video editing',
        tag: 'free',
      },
      {
        pt: 'Shotcut — editor de vídeo simples e leve',
        en: 'Shotcut — simple, lightweight video editor',
        tag: 'free',
      },
      {
        pt: 'Blender — cenas 3D e motion graphics',
        en: 'Blender — 3D scenes and motion graphics',
        tag: 'free',
      },
      {
        pt: 'Adobe Premiere Pro / Camtasia',
        en: 'Adobe Premiere Pro / Camtasia',
        tag: 'paid',
      },
    ],
  },
  {
    group: { pt: '🔊 Áudio', en: '🔊 Audio' },
    items: [
      {
        pt: 'Audacity — edição de áudio',
        en: 'Audacity — audio editing',
        tag: 'free',
      },
      {
        pt: 'LMMS — produção musical',
        en: 'LMMS — music production',
        tag: 'free',
      },
      {
        pt: 'Epidemic Sound / Artlist — trilhas licenciadas',
        en: 'Epidemic Sound / Artlist — licensed tracks',
        tag: 'paid',
      },
    ],
  },
  {
    group: { pt: '📺 Canal no YouTube', en: '📺 YouTube channel' },
    items: [
      {
        pt: 'Criar canal dedicado à NKoten Studio (separado da pessoa física)',
        en: 'Create a channel dedicated to NKoten Studio (separate from your personal one)',
        tag: 'free',
      },
      {
        pt: 'Banner e logo consistentes com a identidade visual do projeto',
        en: "Banner and logo consistent with the project's visual identity",
        tag: 'free',
      },
      {
        pt: 'Estrutura sugerida: devlogs → trailer de anúncio → trailer de lançamento → gameplay/tutoriais',
        en: 'Suggested structure: devlogs → announcement trailer → launch trailer → gameplay/tutorials',
        tag: 'free',
      },
      {
        pt: 'Canva — miniaturas (thumbnails) rápidas',
        en: 'Canva — quick thumbnails',
        tag: 'freemium',
      },
      {
        pt: 'Photoshop — miniaturas com mais controle',
        en: 'Photoshop — thumbnails with more control',
        tag: 'paid',
      },
    ],
  },
  {
    group: { pt: '🔎 ASO / SEO de loja', en: '🔎 ASO / store SEO' },
    items: [
      {
        pt: 'App Radar — pesquisa de palavra-chave (freemium)',
        en: 'App Radar — keyword research (freemium)',
        tag: 'freemium',
      },
      {
        pt: 'AppTweak / MobileAction / TheTool — ASO profissional',
        en: 'AppTweak / MobileAction / TheTool — professional ASO',
        tag: 'paid',
      },
      {
        pt: 'DeepL — tradução de ficha de loja para outros mercados',
        en: 'DeepL — translating the store listing for other markets',
        tag: 'freemium',
      },
    ],
  },
  {
    group: { pt: '🌐 Site do desenvolvedor', en: '🌐 Developer website' },
    items: [
      {
        pt: 'GitHub Pages / Vercel / Netlify — hospedagem estática grátis',
        en: 'GitHub Pages / Vercel / Netlify — free static hosting',
        tag: 'free',
      },
      {
        pt: 'Carrd — site simples no-code, pago barato',
        en: 'Carrd — simple no-code site, cheap paid plan',
        tag: 'paid',
      },
      {
        pt: 'Deve conter no mínimo: apresentação do estúdio, lista de apps/jogos, política de privacidade, contato/suporte',
        en: 'Must contain at minimum: studio intro, app/game list, privacy policy, contact/support',
        tag: 'free',
      },
    ],
  },
  {
    group: { pt: '📄 Documentação legal', en: '📄 Legal documentation' },
    items: [
      {
        pt: 'Termly / FreePrivacyPolicy — gerador de política de privacidade grátis',
        en: 'Termly / FreePrivacyPolicy — free privacy policy generator',
        tag: 'freemium',
      },
      {
        pt: 'iubenda — recomendado se mirar UE (GDPR) e Brasil (LGPD)',
        en: 'iubenda — recommended if targeting the EU (GDPR) and Brazil (LGPD)',
        tag: 'paid',
      },
    ],
  },
];

// ------------------------------------------------------------
// CHECKLIST TÉCNICO — APPS
// ------------------------------------------------------------
export const DEV_APPS = [
  mk(
    'da1',
    'account',
    'Tela de Política de Privacidade dentro do app',
    'In-app Privacy Policy screen',
    'Não basta o link na loja — precisa ser acessível de dentro do próprio app.',
    'The store link alone is not enough — it must be reachable from inside the app itself.',
  ),
  mk(
    'da2',
    'account',
    'Tela de Termos de Uso (se aplicável)',
    'Terms of Use screen (if applicable)',
  ),
  mk(
    'da3',
    'account',
    'Fluxo de exclusão de conta e dados',
    'Account and data deletion flow',
    'Obrigatório pela Play Store se o app permite criar conta de usuário.',
    'Required by the Play Store if the app allows creating a user account.',
  ),
  mk(
    'da4',
    'technical',
    'Permissões solicitadas "just-in-time"',
    '"Just-in-time" permission requests',
    'Pedir câmera/localização/etc no momento do uso, explicando o motivo — não tudo de uma vez na abertura.',
    'Ask for camera/location/etc at the moment of use, explaining why — not all at once on launch.',
  ),
  mk(
    'da5',
    'technical',
    'Tela de onboarding/tutorial inicial',
    'Initial onboarding/tutorial screen',
  ),
  mk(
    'da6',
    'technical',
    'Tratamento de erros e estados vazios',
    'Error handling and empty states',
  ),
  mk(
    'da7',
    'technical',
    'Suporte a modo claro e escuro',
    'Light and dark mode support',
  ),
  mk(
    'da8',
    'technical',
    'Testado em pelo menos um device real',
    'Tested on at least one real device',
    'Emulador não substitui teste em hardware real, principalmente em aparelhos de entrada.',
    'Emulator testing is not a substitute for real hardware, especially entry-level devices.',
  ),
  mk(
    'da9',
    'technical',
    'Acessibilidade básica revisada',
    'Basic accessibility reviewed',
    'Contraste de texto, alvo de toque mínimo de 48dp, suporte a TalkBack/VoiceOver.',
    'Text contrast, minimum 48dp touch target, TalkBack/VoiceOver support.',
  ),
  mk(
    'da10',
    'technical',
    'Versionamento semântico e changelog prontos',
    'Semantic versioning and changelog ready',
  ),
  mk(
    'da11',
    'account',
    'Canal de suporte/contato visível',
    'Visible support/contact channel',
    'E-mail ou formulário de contato, exigido tanto pela Play Store quanto pela App Store.',
    'Email or contact form, required by both Play Store and App Store.',
  ),
];

// ------------------------------------------------------------
// CHECKLIST TÉCNICO — JOGOS
// ------------------------------------------------------------
export const DEV_GAMES = [
  mk(
    'dg1',
    'technical',
    'Sistema de save (local e, se possível, na nuvem)',
    'Save system (local and, if possible, cloud)',
    'Cloud save via Steamworks ou Google Play Games Services, dependendo da plataforma.',
    'Cloud save via Steamworks or Google Play Games Services, depending on the platform.',
  ),
  mk('dg2', 'technical', 'Tela de créditos', 'Credits screen'),
  mk(
    'dg3',
    'technical',
    'Suporte a controle (gamepad), se fizer sentido pro gênero',
    'Gamepad support, if it fits the genre',
  ),
  mk(
    'dg4',
    'technical',
    'Configurações de áudio e vídeo separadas',
    'Separate audio and video settings',
    'Volume de música, efeitos e voz independentes; resolução e modo janela/tela cheia.',
    'Independent music, sfx and voice volume; resolution and windowed/fullscreen mode.',
  ),
  mk(
    'dg5',
    'account',
    'Classificação indicativa de conteúdo preenchida',
    'Content rating filled out',
    'IARC para mobile; ESRB/PEGI para Steam e consoles.',
    'IARC for mobile; ESRB/PEGI for Steam and consoles.',
  ),
  mk(
    'dg6',
    'technical',
    'Localização mínima viável (ex.: PT + EN)',
    'Minimum viable localization (e.g. PT + EN)',
  ),
  mk(
    'dg7',
    'technical',
    'Onboarding de mecânicas sem quebrar o ritmo',
    'Mechanics onboarding that does not break pacing',
  ),
  mk(
    'dg8',
    'technical',
    'Testado no hardware alvo mínimo',
    'Tested on minimum target hardware',
    'No seu caso: Galaxy A06 se for mobile, ou specs mínimas definidas se for PC.',
    'In your case: Galaxy A06 if mobile, or defined minimum specs if PC.',
  ),
  mk(
    'dg9',
    'account',
    'Página "Coming Soon" ativa com antecedência (Steam)',
    'Active "Coming Soon" page in advance (Steam)',
  ),
  mk(
    'dg10',
    'media',
    'Trailer de anúncio pronto antes de abrir a ficha da loja',
    'Announcement trailer ready before the store page goes live',
  ),
];
