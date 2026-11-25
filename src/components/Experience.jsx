import { experience } from '../data/experience.js'

export default function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="container">
        <header className="section-head">
          <h2>Experiência</h2>
          <p>Onde aplico análise de sistemas, integrações e implantação no dia a dia.</p>
        </header>
        <div className="exp-list">
          {experience.map((e) => (
            <article key={e.company} className="exp">
              <div className="exp-head">
                <h3>{e.company}</h3>
                {e.current && <span className="exp-current">Atual</span>}
              </div>
              <p className="exp-role">{e.role}</p>
              <p className="exp-summary">{e.summary}</p>
              <ul>
                {e.activities.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
