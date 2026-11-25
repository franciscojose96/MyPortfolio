import { motion } from 'motion/react'
import { stages, stageIndex } from '../data/stages.js'
import { spring } from '../motion.js'

// Régua com os estágios do produto. Ao entrar na tela, a linha
// "anda" até o estágio atual (animação via scaleX, sem mexer no layout).
export default function StageTrack({ stage, note }) {
  const current = stageIndex(stage)

  return (
    <motion.div className="stage-track" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}>
      <ol>
        {stages.map((s, i) => (
          <li
            key={s.key}
            className={i < current ? 'is-done' : i === current ? 'is-current' : ''}
            aria-current={i === current ? 'step' : undefined}
          >
            {i < stages.length - 1 && (
              <span className="st-line" aria-hidden="true">
                {i < current && (
                  <motion.span
                    className="st-fill"
                    variants={{
                      hidden: { scaleX: 0 },
                      show: { scaleX: 1, transition: { ...spring, delay: 0.2 + i * 0.35 } },
                    }}
                  />
                )}
              </span>
            )}
            <span className="st-dot" aria-hidden="true" />
            <span className="st-label">{s.label}</span>
          </li>
        ))}
      </ol>
      {note && <p className="stage-note">{note}</p>}
    </motion.div>
  )
}
