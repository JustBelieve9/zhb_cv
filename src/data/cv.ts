// Единственный источник фактов о Константине.
// Всё содержимое перенесено из статического CV (cv/index.html), RU и EN —
// оригинальные строки, ничего не переведено заново и не выдумано.

export type Locale = 'ru' | 'en'

export interface L {
  ru: string
  en: string
}

export const identity = {
  name: { ru: 'Родин Константин', en: 'Konstantin Rodin' },
  role: { ru: 'Senior 3D Motion Designer', en: 'Senior 3D Motion Designer' },
  roleTag: { ru: 'креативы для мобильных игр', en: 'mobile game ad creatives' },
  intro: {
    ru: 'Собираю рекламный ролик целиком и в одиночку: локация, персонажи, физика, рендер, композ, UI и звук. Под это же пишу свои инструменты: аддоны для Blender и автономных агентов.',
    en: 'I build an ad creative end to end, on my own: environment, characters, physics, render, comp, in-frame UI and sound. I also write the tooling for it: Blender addons and autonomous agents.',
  },
} satisfies Record<string, L>

export const location = {
  ru: 'Россия / Вьетнам · удалённо',
  en: 'Russia / Vietnam · remote',
} satisfies L

export const contacts = [
  { kind: 'email', label: 'i@zhustbie.ru', href: 'mailto:i@zhustbie.ru' },
  { kind: 'phone', label: '+7 922 036-52-99', href: 'tel:+79220365299' },
  { kind: 'telegram', label: 't.me/zhustbie', href: 'https://t.me/zhustbie' },
  { kind: 'telegram', label: 't.me/zhustbieblender', href: 'https://t.me/zhustbieblender' },
] as const

export const stats: Array<{ n: L; l: L }> = [
  {
    n: { ru: '4 года', en: '4 years' },
    l: { ru: 'в креативах для мобильных игр', en: 'in mobile game ad creatives' },
  },
  {
    n: { ru: 'Весь ролик', en: 'End to end' },
    l: { ru: 'от сборки сцены до звука', en: 'from scene build to sound' },
  },
  {
    n: { ru: 'Senior', en: 'Senior' },
    l: { ru: 'уровень в AppQuantum, менторство', en: 'level at AppQuantum, mentoring' },
  },
  {
    n: { ru: 'Свои аддоны', en: 'Own tooling' },
    l: { ru: 'Python, MCP, генерация ассетов', en: 'Python, MCP, AI asset generation' },
  },
]

export const portfolioLinks: Array<{ id: string; title: L; desc: L; cta: L; href: string }> = [
  {
    id: 'showreel',
    title: { ru: 'Шоурил', en: 'Showreel' },
    desc: { ru: 'Креативы для мобильных игр одним роликом', en: 'Mobile game ad creatives in one reel' },
    cta: { ru: 'Смотреть на YouTube', en: 'Watch on YouTube' },
    href: 'https://youtube.com/shorts/SiLq6lMpyZw',
  },
  {
    id: 'creatives',
    title: { ru: 'Ролики по отдельности', en: 'Individual creatives' },
    desc: { ru: 'Все работы из рила полными версиями', en: 'Every shot from the reel at full length' },
    cta: { ru: 'Открыть папку', en: 'Open the folder' },
    href: 'https://drive.google.com/drive/folders/1ompWpY8P0w0VcyCHx4pkRHE7vA1CYTzW',
  },
  {
    id: 'blender',
    title: { ru: 'Канал про Blender', en: 'Blender channel' },
    desc: { ru: 'Разборы Geometry Nodes и пайплайна', en: 'Geometry Nodes and pipeline breakdowns' },
    cta: { ru: 'Открыть канал', en: 'Open the channel' },
    href: 'https://t.me/zhustbieblender',
  },
]

export const toolGroups: Array<{ title: L; items: Array<{ label: L; key?: boolean }> }> = [
  {
    title: { ru: 'Blender, основной', en: 'Blender, main' },
    items: [
      { label: { ru: 'Анимация', en: 'Animation' }, key: true },
      { label: { ru: 'Физика и симуляции', en: 'Physics & sims' }, key: true },
      { label: { ru: 'Шейдинг и свет', en: 'Shading & light' } },
      { label: { ru: 'Моделинг', en: 'Modelling' } },
      { label: { ru: 'Geometry Nodes', en: 'Geometry Nodes' } },
      { label: { ru: 'Cycles / EEVEE', en: 'Cycles / EEVEE' } },
      { label: { ru: 'Python API', en: 'Python API' } },
    ],
  },
  {
    title: { ru: 'Постпрод и графика', en: 'Post & graphics' },
    items: [
      { label: { ru: 'After Effects', en: 'After Effects' }, key: true },
      { label: { ru: 'DaVinci Resolve', en: 'DaVinci Resolve' } },
      { label: { ru: 'Photoshop', en: 'Photoshop' } },
      { label: { ru: 'Саунд-дизайн', en: 'Sound design' } },
    ],
  },
  {
    title: { ru: 'Автоматизация', en: 'Automation' },
    items: [
      { label: { ru: 'Аддоны на Python', en: 'Python addons' }, key: true },
      { label: { ru: 'MCP', en: 'MCP' } },
      { label: { ru: 'Генерация ассетов', en: 'AI asset generation' } },
      { label: { ru: 'Unreal Engine', en: 'Unreal Engine' } },
    ],
  },
]

export const pipeline: Array<{ num: string; title: L; desc: L }> = [
  {
    num: '01',
    title: { ru: 'Локация и сцена', en: 'Environment' },
    desc: {
      ru: 'Окружение, свет, композиция кадра под хук',
      en: 'Environment, lighting, framing built around the hook',
    },
  },
  {
    num: '02',
    title: { ru: 'Персонажи', en: 'Characters' },
    desc: {
      ru: 'Анимация и характер движения',
      en: 'Animation with character, not just movement',
    },
  },
  {
    num: '03',
    title: { ru: 'Физика и симуляции', en: 'Physics & sims' },
    desc: {
      ru: 'Разрушения, ткань, частицы, тяжёлые сцены',
      en: 'Destruction, cloth, particles, heavy scenes',
    },
  },
  {
    num: '04',
    title: { ru: 'Рендер', en: 'Render' },
    desc: {
      ru: 'Cycles и EEVEE, оптимизация сцены под сроки',
      en: 'Cycles and EEVEE, scenes optimised for the deadline',
    },
  },
  {
    num: '05',
    title: { ru: 'Постпродакшн', en: 'Post-production' },
    desc: {
      ru: 'Композ в After Effects, монтаж, версии под площадки',
      en: 'Compositing in After Effects, edit, per-network versions',
    },
  },
  {
    num: '06',
    title: { ru: 'UI в кадре', en: 'In-frame UI' },
    desc: {
      ru: 'Интерфейс и элементы игры рисую сам',
      en: 'I design the game interface elements myself',
    },
  },
  {
    num: '07',
    title: { ru: 'Саунд-дизайн', en: 'Sound design' },
    desc: {
      ru: 'Звук собираю под монтаж',
      en: 'Sound built to fit the edit',
    },
  },
  {
    num: '08',
    title: { ru: 'Ассеты через нейросети', en: 'AI-generated assets' },
    desc: {
      ru: 'Генерация 3D и изображений вместо ручного моделинга',
      en: 'Generated 3D and imagery instead of modelling by hand',
    },
  },
]

export const experience: Array<{ company: string; period: L; role: L; bullets: L[] }> = [
  {
    company: 'AppQuantum',
    period: { ru: 'дек 2024 → фев 2026', en: 'Dec 2024 → Feb 2026' },
    role: { ru: 'Senior 3D Motion Designer', en: 'Senior 3D Motion Designer' },
    bullets: [
      {
        ru: 'Делал 3D-креативы для проектов студии целиком: от разбора механики и сборки сцены до рендера, композа и звука.',
        en: "Produced the studio's 3D ad creatives end to end: from unpacking the mechanic and building the scene through to render, compositing and sound.",
      },
      {
        ru: 'Разрабатывал и оптимизировал игровые механики для роликов: сложные симуляции и большие объёмы физики, которых не бывает в шаблонных креативах.',
        en: "Designed and optimised the game mechanics shown in creatives: complex simulations and heavy physics you don't get from templated ads.",
      },
      {
        ru: 'Снимал обучающие видео-гайды по пайплайну и вёл менторство дизайнеров команды.',
        en: 'Recorded pipeline video guides and mentored designers on the team.',
      },
      {
        ru: 'Собирал инструменты под задачи команды: аддоны для Blender, которые убирают ручную рутину из сборки сцен и рендера.',
        en: "Built tooling for the team's workflow: Blender addons that take the manual grind out of scene assembly and rendering.",
      },
    ],
  },
  {
    company: 'Creomancer',
    period: { ru: 'апр 2022 → ноя 2024', en: 'Apr 2022 → Nov 2024' },
    role: { ru: '3D Motion Designer, фриланс', en: '3D Motion Designer, freelance' },
    bullets: [
      {
        ru: 'Делал 3D-креативы для мобильных игр на аутсорсе. В одиночку от брифа до сдачи, без арт-директора над задачей и без готового пайплайна.',
        en: 'Made 3D creatives for mobile games as an outsourcer. Solo from brief to delivery, with no art director over the task and no pipeline handed to me.',
      },
      {
        ru: 'Работал в разных жанрах и с разными заказчиками, у каждого свой стиль и темп сдачи. Здесь сложился нынешний подход: переиспользуемые сцены и первые скрипты вместо ручной работы.',
        en: 'Worked across genres and clients, each with its own style and delivery pace. This is where my current approach took shape: reusable scenes and first scripts instead of manual work.',
      },
    ],
  },
]

export const automation: Array<L> = [
  {
    ru: 'Пишу аддоны для Blender на Python: повторяющиеся операции, сборка сцен и батч-рендер уходят в одну кнопку.',
    en: 'I write Blender addons in Python: repetitive operations, scene assembly and batch rendering collapse into one button.',
  },
  {
    ru: 'Подключаю MCP и собираю автономные инструменты, которые делают часть работы сами.',
    en: 'I wire up MCP and build autonomous tools that do part of the work themselves.',
  },
  {
    ru: 'Генерирую ассеты нейросетями, 3D и изображения, там где это быстрее ручного моделинга. Аддонами пользовалась команда на проекте.',
    en: 'I generate assets with AI, both 3D and imagery, wherever it beats modelling by hand. The team used my addons on the project.',
  },
]

export const workflow: Array<L> = [
  {
    ru: 'Умею объяснять: вёл менторство и записывал гайды, по которым потом работали другие.',
    en: 'I can explain things: I mentored designers and recorded the guides others then worked from.',
  },
  {
    ru: 'Работаю автономно. Два с половиной года фриланса, где сроки и решения были только на мне.',
    en: 'I work autonomously. Two and a half years freelance, where deadlines and decisions were mine alone.',
  },
  {
    ru: 'Узкое место в пайплайне нахожу сам и закрываю инструментом. Новое осваиваю на ходу: Unreal, нейросети и MCP пришли в работу именно так.',
    en: 'I find the pipeline bottleneck myself and close it with a tool. New things I pick up on the job: Unreal, AI tooling and MCP all arrived that way.',
  },
  {
    ru: 'Спокойно отношусь к правкам, потому что креатив живёт итерациями.',
    en: "Revisions don't bother me, because creatives live by iteration.",
  },
]

export const details: Array<{ term: L; def: L }> = [
  { term: { ru: 'Где я', en: 'Based in' }, def: { ru: 'Россия / Вьетнам', en: 'Russia / Vietnam' } },
  { term: { ru: 'Формат', en: 'Format' }, def: { ru: 'Удалённо, гибкий график', en: 'Remote, flexible hours' } },
  { term: { ru: 'Переезд', en: 'Relocation' }, def: { ru: 'Возможен', en: 'Open to it' } },
  { term: { ru: 'Английский', en: 'English' }, def: { ru: 'B1', en: 'B1' } },
  { term: { ru: 'Год рождения', en: 'Born' }, def: { ru: '2001', en: '2001' } },
]

export const headings = {
  portfolio: { ru: 'Портфолио', en: 'Portfolio' },
  tools: { ru: 'Инструменты', en: 'Tools' },
  pipeline: { ru: 'Что закрываю в одном ролике', en: 'What one creative involves for me' },
  experience: { ru: 'Опыт работы', en: 'Experience' },
  automation: { ru: 'Автоматизация и нейросети', en: 'Automation & AI' },
  workflow: { ru: 'Как я работаю', en: 'How I work' },
  details: { ru: 'О себе', en: 'Details' },
} satisfies Record<string, L>

export const cvFootNote = {
  ru: 'Страница печатается в A4 без правок: Cmd+P, «Сохранить как PDF». Фон отключать не нужно.',
  en: 'The page prints to A4 as is: Cmd+P, Save as PDF. No need to disable backgrounds.',
} satisfies L

// Строки интерфейса, которых не было в статическом CV.
// Факты в них не сообщаются, поэтому переводы новые, но нейтральные.
export const ui = {
  titles: {
    ru: 'Родин Константин · Senior 3D Motion Designer',
    en: 'Konstantin Rodin · Senior 3D Motion Designer',
  },
  skip: { ru: 'К содержанию', en: 'Skip to content' },
  lang: { ru: 'Язык', en: 'Language' },
  download: { ru: 'Скачать PDF', en: 'Download PDF' },
  heroOver: { ru: 'Портфолио · 3D motion', en: 'Portfolio · 3D motion' },
  telegram: { ru: 'Telegram', en: 'Telegram' },
} satisfies Record<string, unknown>
