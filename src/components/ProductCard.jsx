import { motion } from 'motion/react'
import StageTrack from './StageTrack.jsx'
import { inView } from '../motion.js'

export default function ProductCard({ project }) {
  const { id, name, segment, tagline, description, highlights, role, accent, image, url, stage, stageNote } =
    project

  return (
    <motion.article id={id} className="product" style={{ '--accent': accent }} {...inView}>
      <div className="product-main">
        <p className="product-segment">{segment}</p>
        <h3 className="product-name">{name}</h3>
        <p className="product-tagline">{tagline}</p>
        <p className="product-desc">{description}</p>
        <StageTrack stage={stage} note={stageNote} />
        {url && (
          <a className="product-link" href={url} target="_blank" rel="noreferrer">
            Visitar o site do {name}
          </a>
        )}
      </div>

      <div className="product-side">
        {image && <img className="product-image" src={image} alt={`Tela do ${name}`} loading="lazy" />}
        <div className="product-block">
          <h4>O produto</h4>
          <ul>
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
        <div className="product-block">
          <h4>Minha participação</h4>
          <ul>
            {role.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  )
}
