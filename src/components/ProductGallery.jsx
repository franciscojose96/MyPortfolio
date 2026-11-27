import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/core'

// Carrossel com as telas reais do produto (Splide — splidejs.com).
// Cada imagem pode ter device: 'phone' para aparecer numa moldura de celular.
// Clicar numa imagem abre o arquivo em tamanho real em outra aba.
export default function ProductGallery({ images, name }) {
  if (!images?.length) return null

  const options = {
    type: images.length > 2 ? 'loop' : 'slide',
    perPage: 2,
    perMove: 1,
    gap: '1rem',
    height: '300px',
    arrows: images.length > 2,
    pagination: images.length > 2,
    breakpoints: {
      760: { perPage: 1, height: '260px', arrows: images.length > 1, pagination: images.length > 1 },
    },
    i18n: {
      prev: 'Imagem anterior',
      next: 'Próxima imagem',
      slideX: 'Ir para a imagem %s',
      pageX: 'Ir para a página %s',
      carousel: 'carrossel',
      slide: 'imagem',
      select: 'Selecione uma imagem',
      slideLabel: '%s de %s',
    },
  }

  return (
    <div className="gallery">
      <Splide options={options} aria-label={`Telas do ${name}`}>
        {images.map((img) => (
          <SplideSlide key={img.src}>
            <a
              className={`shot ${img.device === 'phone' ? 'shot-phone' : 'shot-desktop'}`}
              href={img.src}
              target="_blank"
              rel="noreferrer"
              title="Abrir em tamanho real"
            >
              <img src={img.src} alt={img.alt || `Tela do ${name}`} loading="lazy" />
            </a>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}
