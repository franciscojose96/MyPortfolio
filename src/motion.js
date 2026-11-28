// Padrões de animação compartilhados (Motion — motion.dev).
// Um único estilo de movimento em todo o site: spring suave, só transform + opacity.

export const spring = { type: 'spring', visualDuration: 0.6, bounce: 0.15 }

// Entrada do hero: filhos aparecem em sequência.
export const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}

export const rise = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: spring },
}

// Blocos que entram ao rolar a página (uma vez só).
export const inView = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  // 'some': anima assim que qualquer parte aparece. No celular os cards são
  // muito altos e um percentual fixo podia nunca ser atingido (card invisível).
  viewport: { once: true, amount: 'some', margin: '0px 0px -10% 0px' },
  transition: spring,
}

export const hoverLift = { whileHover: { y: -3 }, transition: spring }
