import { profile } from '../data/profile.js'

export default function AiFocus() {
  const { title, text, uses } = profile.ai
  return (
    <section id="ia" className="section">
      <div className="container">
        <div className="ai-band">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <ul>
            {uses.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
