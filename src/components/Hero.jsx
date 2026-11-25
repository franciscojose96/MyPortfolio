import { motion } from 'motion/react'
import { profile } from '../data/profile.js'
import { projects } from '../data/projects.js'
import { stageLabel } from '../data/stages.js'
import { heroContainer, rise, hoverLift } from '../motion.js'

export default function Hero() {
  return (
    <motion.section id="inicio" className="hero" variants={heroContainer} initial="hidden" animate="show">
      <div className="container hero-grid">
        <div className="hero-text">
          <motion.p className="hero-name" variants={rise}>
            {profile.nickname}
            <span> · {profile.name}</span>
          </motion.p>
          <motion.h1 variants={rise}>{profile.headline}</motion.h1>
          <motion.p className="hero-intro" variants={rise}>
            {profile.intro}
          </motion.p>
          <motion.div className="hero-actions" variants={rise}>
            <a className="btn btn-primary" href="#produtos">
              Conhecer os produtos
            </a>
            <a className="btn btn-ghost" href="#contato">
              Falar comigo
            </a>
          </motion.div>
        </div>

        <motion.img
          className="hero-photo"
          variants={{
            hidden: { opacity: 0, scale: 0.92 },
            show: { opacity: 1, scale: 1, transition: rise.show.transition },
          }}
          src={profile.photo}
          alt={`Foto de ${profile.nickname}`}
          width="320"
          height="320"
        />
      </div>

      <div className="container">
        <motion.ul className="hero-products" variants={heroContainer} aria-label="Produtos">
          {projects.map((p) => (
            <motion.li key={p.id} style={{ '--accent': p.accent }} variants={rise}>
              <motion.a href={`#${p.id}`} {...hoverLift}>
                <span className="hp-name">{p.name}</span>
                <span className="hp-segment">{p.segment}</span>
                <span className={`stage-pill stage-${p.stage}`}>{stageLabel(p.stage)}</span>
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  )
}
