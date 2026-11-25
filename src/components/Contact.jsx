import { useState } from 'react'
import { profile } from '../data/profile.js'

export default function Contact() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const text = `Olá, Franzé! Me chamo ${name.trim()}. ${message.trim()}`
    const url = `https://wa.me/${profile.contact.whatsapp}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener')
  }

  return (
    <section id="contato" className="section">
      <div className="container contact">
        <div className="contact-text">
          <h2>Vamos conversar</h2>
          <p>
            Para oportunidades, parcerias ou para conhecer o Meza Digital, o Medflux ou o MoveHub. A
            mensagem abre direto no meu WhatsApp.
          </p>
          <a className="contact-github" href={profile.contact.github} target="_blank" rel="noreferrer">
            GitHub: franciscojose96
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Seu nome
            <input value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" />
          </label>
          <label>
            Mensagem
            <textarea rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required />
          </label>
          <button className="btn btn-primary" type="submit">
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}
