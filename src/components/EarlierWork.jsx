import { earlierWork } from '../data/projects.js'

export default function EarlierWork() {
  if (!earlierWork.length) return null
  return (
    <section id="anteriores" className="section section-tight">
      <div className="container">
        <header className="section-head">
          <h2>Trabalhos anteriores</h2>
        </header>
        <div className="earlier-list">
          {earlierWork.map((w) => (
            <article key={w.title} className="earlier">
              {w.image && <img src={w.image} alt={`Tela do ${w.title}`} loading="lazy" />}
              <div>
                <h3>{w.title}</h3>
                <p>{w.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
