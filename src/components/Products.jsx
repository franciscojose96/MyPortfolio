import { projects } from '../data/projects.js'
import ProductCard from './ProductCard.jsx'

export default function Products() {
  return (
    <section id="produtos" className="section">
      <div className="container">
        <header className="section-head">
          <h2>Produtos que estou construindo</h2>
          <p>
            Um em produção, um a caminho do lançamento, um em desenvolvimento. Em todos, participo da
            construção, da evolução e da chegada ao cliente.
          </p>
        </header>
        <div className="product-list">
          {projects.map((p) => (
            <ProductCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
