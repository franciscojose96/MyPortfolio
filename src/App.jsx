import { MotionConfig } from 'motion/react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Products from './components/Products.jsx'
import About from './components/About.jsx'
import AiFocus from './components/AiFocus.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import EarlierWork from './components/EarlierWork.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    // reducedMotion="user": respeita a preferência "reduzir movimento" do sistema
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Nav />
      <main id="conteudo">
        <Hero />
        <Products />
        <About />
        <AiFocus />
        <Experience />
        <Skills />
        <EarlierWork />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <span>Franzé · Francisco José Rodrigues Lins</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </footer>
    </MotionConfig>
  )
}
