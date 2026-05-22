/* global React, COPY */
const { useState, useEffect, useRef } = React;

/* =====================================================
   Brand + small atoms
   ===================================================== */

function BrandMark({ size = 32 }) {
  return (
    <img src="assets/logo-mark.png" alt="" role="presentation" width={size} height={size} style={{ width: size, height: size, objectFit: "contain" }} />
  );
}

function Arrow({ kind = "right" }) {
  if (kind === "ne") {
    return (
      <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
        <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
      <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* =====================================================
   Nav
   ===================================================== */

function Nav({ lang, setLang, active, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={"nav " + (scrolled ? "scrolled" : "")}>
      <div className="wrap nav-inner">
        <a href="#home" className="nav-brand" onClick={() => setOpen(false)}>
          <BrandMark size={44} />
          <span className="word">
            <b>{COPY.brand[lang].name}</b>
            <small>{COPY.brand[lang].suffix}</small>
          </span>
        </a>

        <div className="nav-links">
          {COPY.nav[lang].map((n) => (
            <a key={n.id} href={"#" + n.id} className={active === n.id ? "active" : ""}>
              {n.label}
            </a>
          ))}
        </div>

        <div className="nav-cta">
          <div className="lang-pill" role="group" aria-label="Language">
            <button aria-label="ภาษาไทย" aria-pressed={lang === "th"} className={lang === "th" ? "on" : ""} onClick={() => setLang("th")}>TH</button>
            <button aria-label="English" aria-pressed={lang === "en"} className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
          </div>
          <a href="#contact" className="btn btn-primary nav-cta-btn" style={{ height: 40, padding: "0 18px", fontSize: 14 }}>
            <span>{t.cta.contact}</span>
          </a>
          <button className="nav-burger" aria-label="Menu" aria-expanded={open} aria-controls="nav-mobile-menu" onClick={() => setOpen(o => !o)}>
            {open ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        <div id="nav-mobile-menu" className={"nav-mobile" + (open ? " open" : "")}>
          {COPY.nav[lang].map((n) => (
            <a key={n.id} href={"#" + n.id} className={active === n.id ? "active" : ""} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ marginTop: 8, justifyContent: "center" }} onClick={() => setOpen(false)}>
            <span>{t.cta.contact}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

/* =====================================================
   Hero
   ===================================================== */

function Hero({ t, lang }) {
  return (
    <section id="home" className="hero" data-screen-label="01 Home">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1 className="h-display">
            {t.hero.headline_pre}
            <span className="grad-text">{t.hero.headline_grad}</span>
            {t.hero.headline_post}
          </h1>
          <p className="lead">{t.hero.sub}</p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary"><span>{t.cta.primary}</span><Arrow /></a>
            <a href="#cases" className="btn btn-ghost">{t.cta.secondary}<Arrow kind="ne" /></a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="num grad">{t.hero.stat1.num}</div>
              <div className="lbl">{t.hero.stat1.label}</div>
            </div>
            <div>
              <div className="num">{t.hero.stat2.num}</div>
              <div className="lbl">{t.hero.stat2.label}</div>
            </div>
            <div>
              <div className="num">{t.hero.stat3.num}</div>
              <div className="lbl">{t.hero.stat3.label}</div>
            </div>
          </div>
        </div>

        <HeroVisual lang={lang} />
      </div>
    </section>
  );
}

function HeroVisual({ lang }) {
  const labels = lang === "th"
    ? { project: "โครงการ Q2 2026", metric: "ผลตอบแทนการลงทุน", status: "ดำเนินการ" }
    : { project: "Q2 2026 Engagement", metric: "Return on investment", status: "Live" };

  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="panel">
        <div className="row"><span>{labels.project}</span><b>TX-2026-031</b></div>
        <div className="row"><span>{labels.metric}</span><b className="up">+34.2%</b></div>
        <div className="row"><span>Lead time</span><b className="up">−41%</b></div>
        <div className="row"><span>Adoption</span><b>92 / 120</b></div>
      </div>

      <svg className="chart" viewBox="0 0 360 140" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineG" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F62D7D" />
            <stop offset="100%" stopColor="#FFC166" />
          </linearGradient>
          <linearGradient id="areaG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F62D7D" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#F62D7D" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map(i => (
          <line key={i} x1="0" x2="360" y1={20 + i * 32} y2={20 + i * 32} stroke="rgba(255,255,255,0.08)" />
        ))}
        <path d="M0,110 L40,98 L80,104 L120,82 L160,88 L200,62 L240,48 L280,42 L320,28 L360,18 L360,140 L0,140 Z" fill="url(#areaG)" />
        <path d="M0,110 L40,98 L80,104 L120,82 L160,88 L200,62 L240,48 L280,42 L320,28 L360,18" stroke="url(#lineG)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {[
          { x: 40, y: 98 }, { x: 120, y: 82 }, { x: 200, y: 62 }, { x: 280, y: 42 }, { x: 360, y: 18 },
        ].map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="3" fill="white" stroke="#F62D7D" strokeWidth="1.5" />
        ))}
      </svg>

      <div className="badge">
        <span><span className="dot"></span>{labels.status}</span>
        <span>DGT-OS · v2.4</span>
      </div>
    </div>
  );
}

/* =====================================================
   Trusted
   ===================================================== */

function Trusted({ t }) {
  return (
    <div className="trusted">
      <div className="wrap">
        <div className="label">{t.trusted.label}</div>
        <div className="logos">
          {COPY.trusted.logos.map(name => <div key={name}>{name}</div>)}
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   About
   ===================================================== */

function About({ t }) {
  return (
    <section id="about" className="block" data-screen-label="02 About">
      <div className="wrap">
        <div className="about-grid">
          <div className="copy">
            <span className="eyebrow">{t.about.eyebrow}</span>
            <h2 className="h-section" style={{ marginTop: 20 }}>{t.about.title}</h2>
            <div className="body">
              <p>{t.about.lead}</p>
              <p>{t.about.body}</p>
            </div>
          </div>
          <div className="values">
            {t.about.values.map(v => (
              <div key={v.k}>
                <div className="num">{v.k}</div>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   Expertise
   ===================================================== */

function Expertise({ t }) {
  return (
    <section id="expertise" className="block" style={{ background: "var(--paper-2)" }} data-screen-label="03 Expertise">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">{t.expertise.eyebrow}</span>
          </div>
          <div className="right">
            <h2 className="h-section">{t.expertise.title}</h2>
          </div>
        </div>
        <div className="expertise-grid">
          {t.expertise.areas.map(a => (
            <div className="expertise-card" key={a.n}>
              <div className="n">{a.n}</div>
              <h3>{a.t}</h3>
              <p>{a.d}</p>
              <div className="tags">
                {a.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   Product
   ===================================================== */

function Product({ t }) {
  return (
    <section id="product" className="product-section block" data-screen-label="04 Product">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">{t.product.eyebrow}</span>
          </div>
          <div className="right">
            <h2 className="h-section" style={{ color: "white" }}>{t.product.title}</h2>
            <p className="lead" style={{ marginTop: 20 }}>{t.product.sub}</p>
          </div>
        </div>
        <div className="product-grid">
          {t.product.items.map(p => (
            <div className="product-card" key={p.name}>
              <span className="tag">{p.tag}</span>
              <h3>{p.name}</h3>
              <p className="tagline">{p.tagline}</p>
              <p className="desc">{p.desc}</p>
              <ul>
                {p.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   Cases
   ===================================================== */

function Cases({ t }) {
  return (
    <section id="cases" className="block" data-screen-label="05 Cases">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">{t.cases.eyebrow}</span>
          </div>
          <div className="right">
            <h2 className="h-section">{t.cases.title}</h2>
          </div>
        </div>
        <div className="cases-list">
          {t.cases.items.map(c => (
            <div className="case-card" key={c.client}>
              <div className="meta">
                <div className="industry">{c.industry}</div>
                <div className="client">{c.client}</div>
              </div>
              <div className="body">
                <h3>{c.headline}</h3>
                <p>{c.body}</p>
              </div>
              <div className="metrics">
                {c.metrics.map((m, i) => (
                  <div className="m" key={i}>
                    <div className="k">{m.k}</div>
                    <div className="v">{m.v}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   Team
   ===================================================== */

function Team({ t, lang }) {
  return (
    <section id="team" className="block" style={{ background: "var(--paper-2)" }} data-screen-label="06 Team">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">{t.team.eyebrow}</span>
          </div>
          <div className="right">
            <h2 className="h-section">{t.team.title}</h2>
            {t.team.lead ? <p className="section-lead">{t.team.lead}</p> : null}
          </div>
        </div>
        <div className="consultants-grid">
          {t.team.members.map((m, i) => (
            <article className="consultant-card" key={m.role}>
              <div className="consultant-index">{String(i + 1).padStart(2, "0")}</div>
              <div className="consultant-head">
                <h3 className="consultant-role">{m.role}</h3>
                <p className="consultant-tagline">"{m.tagline}"</p>
                <div className="consultant-label">{lang === "th" ? "ความเชี่ยวชาญและโครงการ" : "Expertise & Projects"}</div>
              </div>
              <ul className="consultant-list">
                {m.bullets.map((bl, j) => (
                  <li key={j}>
                    <span className="bh">{bl.h}</span>
                    <span className="bb"> — {bl.b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   Contact
   ===================================================== */

function Contact({ t, lang }) {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  const L = t.contact.labels;

  return (
    <section id="contact" className="block" data-screen-label="07 Contact">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">{t.contact.eyebrow}</span>
          </div>
          <div className="right">
            <h2 className="h-section">{t.contact.title}</h2>
            <p className="lead" style={{ marginTop: 20 }}>{t.contact.sub}</p>
          </div>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="item">
              <div className="lbl">{lang === "th" ? "ที่อยู่" : "Address"}</div>
              <div className="val">{t.contact.info.address}</div>
            </div>
            <div className="item">
              <div className="lbl">{lang === "th" ? "โทรศัพท์" : "Phone"}</div>
              <div className="val">{t.contact.info.phone}</div>
            </div>
            <div className="item email">
              <div className="lbl">{lang === "th" ? "อีเมล" : "Email"}</div>
              <div className="val">{t.contact.info.email}</div>
            </div>
            <div className="item">
              <div className="lbl">{lang === "th" ? "เวลาทำการ" : "Hours"}</div>
              <div className="val">{t.contact.info.hours}</div>
            </div>
          </div>

          <form className="contact-form" onSubmit={submit} noValidate>
            <div className="row">
              <div>
                <label htmlFor="contact-name">{L.name}</label>
                <input id="contact-name" type="text" required aria-required="true" placeholder={lang === "th" ? "เช่น สมชาย ใจดี" : "e.g. Anuwat Boonmee"} />
              </div>
              <div>
                <label htmlFor="contact-company">{L.company}</label>
                <input id="contact-company" type="text" placeholder={lang === "th" ? "บริษัท…" : "Company name"} />
              </div>
            </div>
            <div className="row">
              <div>
                <label htmlFor="contact-email">{L.email}</label>
                <input id="contact-email" type="email" required aria-required="true" placeholder="you@company.co.th" />
              </div>
              <div>
                <label htmlFor="contact-phone">{L.phone}</label>
                <input id="contact-phone" type="tel" placeholder="+66 …" />
              </div>
            </div>
            <div className="row full">
              <div>
                <label htmlFor="contact-topic">{L.topic}</label>
                <select id="contact-topic" defaultValue="">
                  <option value="" disabled>{lang === "th" ? "เลือกหัวข้อ" : "Select a topic"}</option>
                  {t.contact.topics.map(top => <option key={top}>{top}</option>)}
                </select>
              </div>
            </div>
            <div className="row full">
              <div>
                <label htmlFor="contact-message">{L.message}</label>
                <textarea id="contact-message" placeholder={lang === "th" ? "เล่าให้เราฟังเกี่ยวกับโครงการของคุณ…" : "Tell us about your project…"}></textarea>
              </div>
            </div>
            <div className="submit-row">
              <button type="submit" className="btn btn-grad"><span>{L.submit}</span><Arrow /></button>
              {sent && <span className="sent success">✓ {lang === "th" ? "ส่งข้อความเรียบร้อย — เราจะติดต่อกลับใน 1 วันทำการ" : "Message sent — we'll respond within 1 business day"}</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   Footer
   ===================================================== */

function Footer({ t, lang }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <BrandMark size={48} />
            <div className="name">{COPY.brand[lang].name} {COPY.brand[lang].suffix}</div>
            <div className="tag">{t.footer.tagline}</div>
          </div>
          {t.footer.cols.map(col => (
            <div className="footer-col" key={col.h}>
              <h3>{col.h}</h3>
              <ul>
                {col.links.map(l => <li key={l}><a href="#">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <div>{t.footer.legal}</div>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <a href="accessibility.html" style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: 3 }}>
              {lang === "th" ? "นโยบายการเข้าถึง" : "Accessibility"}
            </a>
            <span>BANGKOK · TH</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =====================================================
   Active section observer (for nav highlight)
   ===================================================== */

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const ids = ["home", "about", "expertise", "product", "cases", "contact"];
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.25, 0.5] });
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);
  return active;
}

/* =====================================================
   App
   ===================================================== */

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "language": "auto"
}/*EDITMODE-END*/;

function detectLang() {
  if (typeof navigator !== "undefined") {
    const l = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    if (l.startsWith("th")) return "th";
  }
  return "en";
}

function App() {
  const tweaks = (window.useTweaks || (() => [DEFAULTS, () => {}]))(DEFAULTS);
  const [tw, setTweak] = tweaks;

  const initialLang = tw.language === "auto" ? detectLang() : tw.language;
  const [lang, setLangState] = useState(initialLang);

  const setLang = (l) => {
    setLangState(l);
    setTweak("language", l);
  };

  useEffect(() => {
    if (tw.language && tw.language !== "auto" && tw.language !== lang) {
      setLangState(tw.language);
    }
  }, [tw.language]);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    document.body.setAttribute("lang", lang);
    document.title = lang === "th"
      ? "ดิจิทัลทรานฟอร์ม — ที่ปรึกษาดิจิทัลทรานส์ฟอร์เมชัน"
      : "Digitaltransform — Digital transformation for Thai businesses";
  }, [lang]);

  const t = {
    nav: COPY.nav[lang],
    cta: COPY.cta[lang],
    hero: COPY.hero[lang],
    trusted: { label: COPY.trusted[lang].label },
    about: COPY.about[lang],
    expertise: COPY.expertise[lang],
    product: COPY.product[lang],
    cases: COPY.cases[lang],
    team: COPY.team[lang],
    contact: COPY.contact[lang],
    footer: COPY.footer[lang],
  };

  const active = useActiveSection();
  const TweaksPanel = window.TweaksPanel;
  const TweakSection = window.TweakSection;
  const TweakRadio = window.TweakRadio;

  return (
    <>
      <a className="skip-link" href="#main-content">
        {lang === "th" ? "ข้ามไปยังเนื้อหาหลัก" : "Skip to main content"}
      </a>
      <Nav lang={lang} setLang={setLang} active={active} t={t} />
      <main id="main-content">
        <Hero t={t} lang={lang} />
        <Trusted t={t} />
        <About t={t} />
        <Expertise t={t} />
        <Product t={t} />
        <Cases t={t} />
        <Team t={t} lang={lang} />
        <Contact t={t} lang={lang} />
      </main>
      <Footer t={t} lang={lang} />

      {TweaksPanel && (
        <TweaksPanel title="Tweaks">
          <TweakSection label="Language">
            <TweakRadio
              value={lang}
              onChange={(v) => setLang(v)}
              options={[
                { value: "th", label: "ไทย" },
                { value: "en", label: "English" },
              ]}
            />
          </TweakSection>
        </TweaksPanel>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
