import { profile } from '../data/profile.js'

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container about">
        <h2>Sobre mim</h2>
        <div className="about-text">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
