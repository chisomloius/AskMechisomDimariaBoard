import { useState } from 'react'
import { profile, stats, roles, interviewQA, salaryInfo, projects } from './data'
import './App.css'

/* ---------- Copy button ---------- */
function CopyButton({ text, label = 'Copy', compact = false }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <button
      className={`copy-btn ${compact ? 'compact' : ''} ${copied ? 'copied' : ''}`}
      onClick={handleCopy}
    >
      {copied ? '✓ Copied' : label}
    </button>
  )
}

/* ---------- Nav ---------- */
function Nav() {
  return (
    <nav className="nav">
      <a href="#top" className="nav-brand">
        {profile.name.split(' ')[0]}<span>.</span>
      </a>
      <div className="nav-links">
        <a href="#roles">Roles</a>
        <a href="#interview">Interview</a>
        <a href="#salary">Salary</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <header id="top" className="hero">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="hero-inner">
        <div className="pill-row">
          <span className="pill">
            <span className="dot" /> Available for senior roles
          </span>
          <span className="pill">📍 {profile.location}</span>
        </div>

        <h1 className="hero-title">
          Hi, I’m <span className="gradient-text">{profile.name}</span>
        </h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-tagline">{profile.tagline}</p>

        <div className="hero-ctas">
          <a href="#roles" className="btn btn-primary">View role summaries</a>
          <a href="#interview" className="btn btn-ghost">Interview answers</a>
          <a href={profile.resumeUrl} className="btn btn-ghost" target="_blank" rel="noreferrer">
            Resume ↗
          </a>
        </div>

        <div className="hero-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span>·</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <span>·</span>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </header>
  )
}

/* ---------- Stats ---------- */
function Stats() {
  return (
    <section className="stats">
      {stats.map((s) => (
        <div key={s.label} className="stat">
          <div className="stat-value">{s.value}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </section>
  )
}

/* ---------- Section header ---------- */
function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </div>
  )
}

/* ---------- Roles ---------- */
function Roles() {
  return (
    <section id="roles" className="section">
      <SectionHeader
        eyebrow="Role Summaries"
        title="Copy a tailored summary"
        subtitle="Five ready-to-paste paragraphs — one per role. Click any card’s copy button."
      />
      <div className="roles-grid">
        {roles.map((r) => (
          <article key={r.title} className="glass card role-card">
            <div className="role-header">
              <h3>{r.title}</h3>
              <CopyButton text={r.summary} label="Copy" compact />
            </div>
            <p className="role-summary">{r.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ---------- Interview ---------- */
function Interview() {
  const [openIdx, setOpenIdx] = useState(0)

  const full = interviewQA
    .map((qa, i) => `Q${i + 1}. ${qa.q}\nA: ${qa.a}`)
    .join('\n\n')

  return (
    <section id="interview" className="section">
      <div className="section-header-row">
        <SectionHeader
          eyebrow="Interview Prep"
          title="Copy-ready answers"
          subtitle="Common questions with tailored answers. Expand to read, copy in one click."
        />
        <CopyButton text={full} label="Copy all answers" />
      </div>

      <div className="qa-list">
        {interviewQA.map((qa, i) => {
          const isOpen = openIdx === i
          return (
            <div key={qa.q} className={`glass qa-item ${isOpen ? 'open' : ''}`}>
              <button
                className="qa-question"
                onClick={() => setOpenIdx(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span className="qa-q">{qa.q}</span>
                <span className={`qa-chevron ${isOpen ? 'rot' : ''}`}>▾</span>
              </button>
              <div className="qa-answer">
                <div className="qa-answer-inner">
                  <p>{qa.a}</p>
                  <CopyButton text={qa.a} label="Copy answer" compact />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

/* ---------- Salary & Location ---------- */
function SalaryLocation() {
  return (
    <section id="salary" className="section">
      <SectionHeader
        eyebrow="Logistics"
        title="Salary & location"
        subtitle="Numbers and preferences recruiters actually ask for."
      />

      <div className="info-grid">
        <div className="glass card info-card span-2">
          <p className="info-label">Target salary range</p>
          <p className="info-value gradient-text">{salaryInfo.target}</p>
          <p className="info-note">{salaryInfo.note}</p>

          <div className="salary-bar">
            <div className="salary-track" />
            <div className="salary-marker pos-0"><span>$50k</span></div>
            <div className="salary-marker pos-50"><span>$100k</span></div>
            <div className="salary-marker pos-100"><span>$150k</span></div>
          </div>
        </div>

        <div className="glass card info-card">
          <p className="info-label">Location</p>
          <p className="info-value">📍 {salaryInfo.location}</p>
        </div>

        <div className="glass card info-card">
          <p className="info-label">Availability</p>
          <p className="info-value">{salaryInfo.availability}</p>
        </div>

        <div className="glass card info-card span-2">
          <p className="info-label">Work authorization</p>
          <p className="info-value">{salaryInfo.workAuth}</p>
        </div>
      </div>
    </section>
  )
}

/* ---------- Projects ---------- */
function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeader
        eyebrow="Selected Work"
        title="Projects & impact"
        subtitle="A snapshot of platforms, migrations, and products I’ve shipped."
      />

      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.title} className="glass card project-card">
            <div className="project-top">
              <h3>{p.title}</h3>
              <span className="role-tag">{p.role}</span>
            </div>
            <p className="project-summary">{p.summary}</p>
            <ul className="project-bullets">
              {p.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="chips">
              {p.stack.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ---------- Contact / footer ---------- */
function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="glass card contact-card">
        <h2>Let’s talk</h2>
        <p>Open to senior roles in data, software, cloud, and BI. Reach out any time.</p>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">{profile.email}</a>
          <a href={profile.linkedin} className="btn btn-ghost" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={profile.github} className="btn btn-ghost" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>
      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </section>
  )
}

/* ---------- App ---------- */
export default function App() {
  return (
    <>
      <Nav />
      <main className="page">
        <Hero />
        <Stats />
        <Roles />
        <Interview />
        <SalaryLocation />
        <Projects />
        <Contact />
      </main>
    </>
  )
}