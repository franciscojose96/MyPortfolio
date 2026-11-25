import { motion } from 'motion/react'
import StageTrack from './StageTrack.jsx'
import ProductGallery from './ProductGallery.jsx'
import { inView } from '../motion.js'

export default function ProductCard({ project }) {
  const { id, name, segment, tagline, description, highlights, role, accent, images, url, stage, stageNote } =
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
          <a className="btn product-cta" href={url} target="_blank" rel="noreferrer">
            Conhecer o {name}
          </a>
        )}
      </div>

      <div className="product-side">
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

      <ProductGallery images={images} name={name} />
    </motion.article>
  )
}
