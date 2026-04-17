import Icon from "@/components/ui/icon";

interface SlideBase { id: number; type: string; label: string; title: string; }
interface CoverSlideData extends SlideBase { meta: string[]; }
interface TextSlideData extends SlideBase { bullets: string[]; }
type AccentSlideData = SlideBase;
interface CardsSlideData extends SlideBase { intro?: string; cards: { icon: string; label: string; desc: string }[]; }
interface ColData { heading: string; icon: string; items: string[]; }
interface TwoColSlideData extends SlideBase { left: ColData; right: ColData; }
interface StatItem { value: string; label: string; }
interface StatsSlideData extends SlideBase { stats: StatItem[]; }
interface FinalSlideData extends SlideBase { meta: string[]; }
type AnySlide = CoverSlideData | TextSlideData | AccentSlideData | CardsSlideData | TwoColSlideData | StatsSlideData | FinalSlideData;

const slides = [
  {
    id: 1,
    type: "cover",
    label: "Исследовательский проект",
    title: "Как сахар влияет на организм человека",
    meta: [
      "Автор: Бородин Руслан Сергеевич, ученик 10-Б класса",
      "Руководитель: Зубова Ольга Анатольевна",
    ],
  },
  {
    id: 2,
    type: "text",
    label: "Введение",
    title: "Проблема современного питания",
    bullets: [
      "В современном мире потребление сахара значительно возросло",
      "Сахар содержится не только в сладостях, но и во многих повседневных продуктах",
      "Чрезмерное употребление сахара негативно влияет на здоровье человека, вызывая различные заболевания и ухудшение самочувствия",
    ],
  },
  {
    id: 3,
    type: "accent",
    label: "Цель работы",
    title: "Изучить влияние сахара на организм человека, а также проанализировать его воздействие на физическое и психологическое состояние.",
  },
  {
    id: 4,
    type: "accent",
    label: "Гипотеза",
    title: "Существует прямая связь между избыточным потреблением сахара и ухудшением самочувствия человека, включая усталость, перепады настроения и проблемы со здоровьем.",
  },
  {
    id: 5,
    type: "text",
    label: "Задачи",
    title: "Задачи исследования",
    bullets: [
      "Изучить виды сахаров и их особенности",
      "Рассмотреть процесс метаболизма сахара",
      "Определить влияние сахара на организм",
      "Провести анкетирование среди учащихся",
      "Проанализировать полученные результаты",
    ],
  },
  {
    id: 6,
    type: "cards",
    label: "Теория",
    title: "Что такое сахар",
    intro: "Сахар — это углевод, который является важным источником энергии для организма.",
    cards: [
      { icon: "Grape", label: "Глюкоза", desc: "Основной источник энергии для клеток и мозга" },
      { icon: "Apple", label: "Фруктоза", desc: "Содержится во фруктах, перерабатывается печенью" },
      { icon: "Cookie", label: "Сахароза", desc: "Столовый сахар — соединение глюкозы и фруктозы" },
    ],
  },
  {
    id: 7,
    type: "text",
    label: "Биохимия",
    title: "Метаболизм сахара",
    bullets: [
      "После употребления сахара уровень глюкозы в крови повышается",
      "Организм вырабатывает инсулин, который помогает клеткам усваивать глюкозу",
      "При избытке сахара возникает нагрузка на организм и возможны нарушения обмена веществ",
    ],
  },
  {
    id: 8,
    type: "twocol",
    label: "Влияние",
    title: "Влияние сахара на организм",
    left: {
      heading: "Положительное",
      icon: "ThumbsUp",
      color: "sage",
      items: ["Основной источник энергии для клеток", "Питание для мозга и нервной системы"],
    },
    right: {
      heading: "Отрицательное",
      icon: "ThumbsDown",
      color: "terracotta",
      items: ["Риск ожирения", "Развитие диабета 2 типа", "Ухудшение состояния кожи", "Быстрая утомляемость"],
    },
  },
  {
    id: 9,
    type: "text",
    label: "Нейронаука",
    title: "Влияние на мозг",
    bullets: [
      "Сахар влияет на работу мозга через дофаминовую систему вознаграждения",
      "Частое употребление сладкого может вызывать привыкание, схожее с зависимостью",
      "Со временем человеку требуется больше сахара для получения удовольствия",
    ],
  },
  {
    id: 10,
    type: "text",
    label: "Исследование",
    title: "Методология анкетирования",
    bullets: [
      "В опросе приняли участие 22 человека",
      "Возраст участников: 16–17 лет",
      "Цель — определить уровень потребления сахара и его влияние на самочувствие",
    ],
  },
  {
    id: 11,
    type: "stats",
    label: "Результаты",
    title: "Данные анкетирования",
    stats: [
      { value: "65%", label: "употребляют сладкое ежедневно" },
      { value: "80%", label: "испытывают усталость после еды" },
      { value: "45%", label: "не знают о скрытых источниках сахара" },
      { value: "75%", label: "трудно отказаться от сладкого" },
    ],
  },
  {
    id: 12,
    type: "text",
    label: "Вывод",
    title: "Заключение",
    bullets: [
      "Результаты исследования подтверждают гипотезу",
      "Избыточное потребление сахара действительно влияет на самочувствие и здоровье человека",
      "Важно контролировать рацион и уменьшать количество сахара в повседневной жизни",
    ],
  },
  {
    id: 13,
    type: "final",
    label: "Конец",
    title: "Спасибо за внимание!",
    meta: [
      "Бородин Руслан Сергеевич, 10-Б класс",
      "Руководитель: Зубова Ольга Анатольевна",
    ],
  },
];

function SlideWrapper({ id, children }: { id: number; children: React.ReactNode }) {
  return (
    <div className="slide-page">
      {children}
      <div className="slide-number">{id} / {slides.length}</div>
    </div>
  );
}

function CoverSlide({ slide }: { slide: typeof slides[0] & { type: "cover" } }) {
  return (
    <SlideWrapper id={slide.id}>
      <div className="slide-cover">
        <div className="slide-cover-inner">
          <div className="slide-badge">{slide.label}</div>
          <h1 className="slide-cover-title">{slide.title}</h1>
          <div className="slide-cover-divider" />
          <div className="slide-cover-meta">
            {slide.meta.map((line, i) => <p key={i}>{line}</p>)}
          </div>
        </div>
        <div className="slide-cover-deco">2026</div>
      </div>
    </SlideWrapper>
  );
}

function TextSlide({ slide }: { slide: TextSlideData }) {
  return (
    <SlideWrapper id={slide.id}>
      <div className="slide-content">
        <div className="slide-badge">{slide.label}</div>
        <h2 className="slide-title">{slide.title}</h2>
        <ul className="slide-bullets">
          {slide.bullets.map((b: string, i: number) => (
            <li key={i}>
              <span className="slide-bullet-dot" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </SlideWrapper>
  );
}

function AccentSlide({ slide }: { slide: AccentSlideData }) {
  return (
    <SlideWrapper id={slide.id}>
      <div className="slide-accent">
        <div className="slide-badge slide-badge-light">{slide.label}</div>
        <p className="slide-accent-text">{slide.title}</p>
      </div>
    </SlideWrapper>
  );
}

function CardsSlide({ slide }: { slide: CardsSlideData }) {
  return (
    <SlideWrapper id={slide.id}>
      <div className="slide-content">
        <div className="slide-badge">{slide.label}</div>
        <h2 className="slide-title">{slide.title}</h2>
        {slide.intro && <p className="slide-intro">{slide.intro}</p>}
        <div className="slide-cards">
          {slide.cards.map((c, i) => (
            <div key={i} className="slide-card">
              <div className="slide-card-icon">
                <Icon name={c.icon} size={22} fallback="CircleAlert" />
              </div>
              <h3 className="slide-card-title">{c.label}</h3>
              <p className="slide-card-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

function TwoColSlide({ slide }: { slide: TwoColSlideData }) {
  return (
    <SlideWrapper id={slide.id}>
      <div className="slide-content">
        <div className="slide-badge">{slide.label}</div>
        <h2 className="slide-title">{slide.title}</h2>
        <div className="slide-twocol">
          <div className="slide-col slide-col-green">
            <div className="slide-col-header">
              <Icon name={slide.left.icon} size={18} fallback="CircleAlert" />
              <span>{slide.left.heading}</span>
            </div>
            <ul>
              {slide.left.items.map((item: string, i: number) => (
                <li key={i}><span className="slide-bullet-dot slide-bullet-green" />{item}</li>
              ))}
            </ul>
          </div>
          <div className="slide-col slide-col-red">
            <div className="slide-col-header">
              <Icon name={slide.right.icon} size={18} fallback="CircleAlert" />
              <span>{slide.right.heading}</span>
            </div>
            <ul>
              {slide.right.items.map((item: string, i: number) => (
                <li key={i}><span className="slide-bullet-dot slide-bullet-red" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}

function StatsSlide({ slide }: { slide: StatsSlideData }) {
  return (
    <SlideWrapper id={slide.id}>
      <div className="slide-content">
        <div className="slide-badge">{slide.label}</div>
        <h2 className="slide-title">{slide.title}</h2>
        <div className="slide-stats">
          {slide.stats.map((s, i) => (
            <div key={i} className={`slide-stat ${i === 1 ? "slide-stat-accent" : ""}`}>
              <span className="slide-stat-value">{s.value}</span>
              <span className="slide-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

function FinalSlide({ slide }: { slide: FinalSlideData }) {
  return (
    <SlideWrapper id={slide.id}>
      <div className="slide-final">
        <div className="slide-final-deco">S</div>
        <div className="slide-final-inner">
          <h2 className="slide-final-title">{slide.title}</h2>
          <div className="slide-cover-divider" />
          <div className="slide-cover-meta">
            {slide.meta.map((line: string, i: number) => <p key={i}>{line}</p>)}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}

export default function Presentation() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=PT+Sans:wght@400;700&display=swap');

        :root {
          --bg: hsl(45, 20%, 95%);
          --fg: hsl(30, 15%, 15%);
          --card: hsl(45, 15%, 98%);
          --muted: hsl(30, 8%, 45%);
          --border: hsl(45, 15%, 82%);
          --sage: hsl(140, 25%, 50%);
          --sage-light: hsl(140, 25%, 93%);
          --terracotta: hsl(25, 45%, 55%);
          --terracotta-light: hsl(25, 45%, 93%);
          --amber: hsl(40, 50%, 60%);
          --primary: hsl(30, 12%, 22%);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body { background: #d0ccc5; }

        .print-wrapper {
          font-family: 'PT Sans', sans-serif;
          color: var(--fg);
        }

        /* SLIDE PAGE */
        .slide-page {
          width: 297mm;
          height: 210mm;
          background: var(--bg);
          position: relative;
          overflow: hidden;
          margin: 0 auto 16px;
          display: flex;
          flex-direction: column;
          page-break-after: always;
          break-after: page;
        }

        .slide-number {
          position: absolute;
          bottom: 12mm;
          right: 14mm;
          font-size: 9px;
          color: var(--muted);
          letter-spacing: 0.05em;
        }

        /* COVER */
        .slide-cover {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 18mm 20mm;
          position: relative;
        }
        .slide-cover-inner { max-width: 180mm; }
        .slide-cover-title {
          font-family: 'Lora', serif;
          font-size: 38px;
          line-height: 1.15;
          font-weight: 600;
          color: var(--fg);
          margin: 12px 0 20px;
        }
        .slide-cover-divider {
          width: 48px;
          height: 2px;
          background: var(--sage);
          margin-bottom: 16px;
        }
        .slide-cover-meta p {
          font-size: 12px;
          color: var(--muted);
          line-height: 1.8;
        }
        .slide-cover-deco {
          position: absolute;
          right: 14mm;
          bottom: 20mm;
          font-family: 'Lora', serif;
          font-size: 120px;
          color: var(--border);
          line-height: 1;
          user-select: none;
          opacity: 0.6;
        }

        /* BADGE */
        .slide-badge {
          display: inline-flex;
          align-items: center;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--sage);
          background: var(--sage-light);
          border-radius: 100px;
          padding: 4px 10px;
          margin-bottom: 14px;
        }
        .slide-badge-light {
          color: hsl(45, 15%, 75%);
          background: transparent;
          border: 1px solid hsl(45, 15%, 75%);
        }

        /* GENERIC CONTENT */
        .slide-content {
          flex: 1;
          padding: 14mm 18mm;
          display: flex;
          flex-direction: column;
        }
        .slide-title {
          font-family: 'Lora', serif;
          font-size: 28px;
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: 18px;
          color: var(--fg);
        }
        .slide-intro {
          font-size: 12px;
          color: var(--muted);
          margin-bottom: 16px;
          line-height: 1.6;
        }

        /* BULLETS */
        .slide-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
          justify-content: center;
        }
        .slide-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          line-height: 1.55;
          color: var(--fg);
        }
        .slide-bullet-dot {
          flex-shrink: 0;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--sage);
          margin-top: 5px;
        }
        .slide-bullet-green { background: var(--sage); }
        .slide-bullet-red { background: var(--terracotta); }

        /* ACCENT SLIDE */
        .slide-accent {
          flex: 1;
          background: var(--primary);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 18mm 24mm;
          text-align: center;
        }
        .slide-accent-text {
          font-family: 'Lora', serif;
          font-size: 22px;
          font-style: italic;
          line-height: 1.5;
          color: hsl(45, 20%, 92%);
          max-width: 220mm;
        }

        /* CARDS */
        .slide-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          flex: 1;
          align-items: stretch;
        }
        .slide-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .slide-card-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--sage-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--sage);
        }
        .slide-card-title {
          font-family: 'Lora', serif;
          font-size: 14px;
          font-weight: 600;
          color: var(--fg);
        }
        .slide-card-desc {
          font-size: 11px;
          color: var(--muted);
          line-height: 1.55;
        }

        /* TWO COLUMNS */
        .slide-twocol {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          flex: 1;
        }
        .slide-col {
          border-radius: 10px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .slide-col-green { background: var(--sage-light); border: 1px solid hsl(140, 25%, 80%); }
        .slide-col-red { background: var(--terracotta-light); border: 1px solid hsl(25, 45%, 80%); }
        .slide-col-header {
          display: flex;
          align-items: center;
          gap: 7px;
          font-weight: 700;
          font-size: 12px;
          color: var(--fg);
          margin-bottom: 4px;
        }
        .slide-col ul { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .slide-col li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12px;
          line-height: 1.5;
          color: var(--fg);
        }

        /* STATS */
        .slide-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          flex: 1;
          align-items: stretch;
        }
        .slide-stat {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 8px;
        }
        .slide-stat-accent {
          background: var(--primary);
          border-color: var(--primary);
        }
        .slide-stat-value {
          font-family: 'Lora', serif;
          font-size: 42px;
          font-weight: 600;
          line-height: 1;
          color: var(--sage);
        }
        .slide-stat-accent .slide-stat-value { color: hsl(140, 25%, 70%); }
        .slide-stat-label {
          font-size: 11px;
          line-height: 1.45;
          color: var(--muted);
        }
        .slide-stat-accent .slide-stat-label { color: hsl(45, 20%, 75%); }

        /* FINAL */
        .slide-final {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .slide-final-deco {
          position: absolute;
          font-family: 'Lora', serif;
          font-size: 280px;
          color: var(--border);
          opacity: 0.45;
          user-select: none;
          line-height: 1;
          right: -10mm;
          bottom: -20mm;
        }
        .slide-final-inner {
          text-align: center;
          position: relative;
          z-index: 1;
        }
        .slide-cover-divider { margin: 0 auto 16px; }
        .slide-final-title {
          font-family: 'Lora', serif;
          font-size: 36px;
          font-weight: 600;
          color: var(--fg);
          margin-bottom: 20px;
        }

        /* PRINT */
        .print-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 100;
          background: var(--primary, #2d2520);
          color: #f5f2ed;
          border: none;
          padding: 12px 24px;
          border-radius: 100px;
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }
        .print-btn:hover { opacity: 0.9; }

        @media print {
          body { background: white; }
          .print-btn { display: none; }
          .slide-page {
            margin: 0;
            width: 297mm;
            height: 210mm;
          }
          @page {
            size: A4 landscape;
            margin: 0;
          }
        }
      `}</style>

      <button className="print-btn" onClick={() => window.print()}>
        <Icon name="Printer" size={16} />
        Сохранить PDF
      </button>

      <div className="print-wrapper">
        {slides.map((slide) => {
          if (slide.type === "cover") return <CoverSlide key={slide.id} slide={slide as CoverSlideData} />;
          if (slide.type === "accent") return <AccentSlide key={slide.id} slide={slide} />;
          if (slide.type === "cards") return <CardsSlide key={slide.id} slide={slide} />;
          if (slide.type === "twocol") return <TwoColSlide key={slide.id} slide={slide} />;
          if (slide.type === "stats") return <StatsSlide key={slide.id} slide={slide} />;
          if (slide.type === "final") return <FinalSlide key={slide.id} slide={slide} />;
          return <TextSlide key={slide.id} slide={slide} />;
        })}
      </div>
    </>
  );
}