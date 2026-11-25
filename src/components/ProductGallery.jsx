import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

// Galeria de capturas reais do produto: imagem em destaque + miniaturas.
// Clicar na imagem grande abre o arquivo em tamanho real em outra aba.
export default function ProductGallery({ images, name }) {
  const [active, setActive] = useState(0)
  if (!images?.length) return null
  const current = images[active]

  return (
    <div className="gallery">
      <a className="gallery-main" href={current.src} target="_blank" rel="noreferrer" title="Abrir em tamanho real">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={current.src}
            src={current.src}
            alt={current.alt || `Tela do ${name}`}
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        </AnimatePresence>
      </a>

      {images.length > 1 && (
        <ul className="gallery-thumbs" aria-label={`Telas do ${name}`}>
          {images.map((img, i) => (
            <li key={img.src}>
              <button
                type="button"
                className={i === active ? 'is-active' : ''}
                aria-pressed={i === active}
                aria-label={img.alt || `Tela ${i + 1} do ${name}`}
                onClick={() => setActive(i)}
              >
                <img src={img.src} alt="" loading="lazy" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
