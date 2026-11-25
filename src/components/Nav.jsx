import { useState } from 'react'

const links = [
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#conhecimentos', label: 'Conhecimentos' },
  { href: '#contato', label: 'Contato' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="nav-brand" href="#inicio" onClick={() => setOpen(false)}>
          Franzé
        </a>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Fechar' : 'Menu'}
        </button>
        <nav id="nav-menu" className={`nav-menu ${open ? 'is-open' : ''}`} aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
