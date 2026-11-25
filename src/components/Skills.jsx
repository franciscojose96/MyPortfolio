import { skills } from '../data/skills.js'

export default function Skills() {
  return (
    <section id="conhecimentos" className="section">
      <div className="container">
        <header className="section-head">
          <h2>Conhecimentos</h2>
        </header>
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.group} className="skill-group">
              <h3>{s.group}</h3>
              <ul>
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
