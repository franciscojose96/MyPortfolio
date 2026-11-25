/**
 * PRODUTOS EM DESTAQUE
 * --------------------------------------------------------------
 * Para adicionar um novo produto, copie um dos objetos abaixo e
 * ajuste os campos. A ordem do array é a ordem de exibição.
 *
 * Campos:
 *  id          identificador único, sem espaços (usado na URL #id)
 *  name        nome do produto
 *  stage       'production' | 'launch' | 'development'  (veja stages.js)
 *  stageNote   detalhe curto do estágio (ex.: "Lançamento previsto para 2026")
 *  segment     mercado / público do produto
 *  tagline     uma frase que resume o produto
 *  description parágrafo curto explicando o produto
 *  highlights  lista de pontos verdadeiros sobre o produto (sem inventar recursos)
 *  role        lista do que você faz no produto
 *  accent      cor de destaque do produto (hex)
 *  url         (opcional) link da landing page do produto. Vazio = botão não aparece.
 *  images      (opcional) capturas reais do sistema. Coloque os arquivos em
 *              public/img/produtos/ e liste assim:
 *                images: [
 *                  { src: './img/produtos/medflux-agenda.png', alt: 'Agenda de exames do MedFlux' },
 *                ]
 *              A primeira imagem aparece em destaque; as demais viram miniaturas.
 */
export const projects = [
  {
    id: 'meza-digital',
    name: 'Meza Digital',
    stage: 'production',
    stageNote: 'Com clientes usando a plataforma',
    segment: 'Gestão para restaurantes',
    tagline: 'Gestão de restaurante com o delivery integrado à operação.',
    description:
      'Sistema de gestão para restaurantes, em produção e usado por clientes no dia a dia. Os pedidos das plataformas de delivery entram direto no sistema, junto com o resto da operação.',
    highlights: [
      'Produto comercial em operação, com clientes ativos',
      'Integração com iFood e 99',
      'Evolução contínua a partir do uso real dos clientes',
    ],
    role: [
      'Sócio da empresa',
      'Desenvolvimento e construção do produto',
      'Visão de produto e priorização de melhorias',
      'Relacionamento com clientes e implantação',
    ],
    accent: '#f59e3b',
    url: 'https://mezadigital.com.br',
    images: [],
  },
  {
    id: 'medflux',
    name: 'MedFlux',
    stage: 'launch',
    stageNote: 'Lançamento comercial previsto para 2026',
    segment: 'Saúde ocupacional',
    tagline: 'Agendamento e gestão de exames ocupacionais para clínicas e empresas.',
    description:
      'Plataforma para organizar agendamentos e a operação de exames ocupacionais. Nasceu do EMMA, sistema que desenvolvi no início da carreira, e foi reformulada a fundo, com a estrutura reconstruída, para virar um produto mais completo e pronto para o mercado.',
    highlights: [
      'Agendamento de exames por empresa ou pessoa física, com pagamento por PIX ou no balcão',
      'Fila de atendimento com retirada de senha normal e prioritária',
      'Dashboard com indicadores de atendimento, financeiro e desempenho, com exportação em PDF e Excel',
    ],
    role: [
      'Criação do produto, do EMMA ao MedFlux',
      'Reformulação da arquitetura e desenvolvimento',
      'Testes e homologação para o lançamento',
      'Implantação nos clientes',
    ],
    accent: '#2dd4bf',
    url: '', // ex.: 'https://www.seuproduto.com.br'
    images: [
      { src: './img/produtos/medflux-dashboard.png', alt: 'Dashboard do MedFlux com indicadores de atendimento e financeiro' },
      { src: './img/produtos/medflux-novo-agendamento.png', alt: 'Etapa de pagamento no novo agendamento do MedFlux' },
      { src: './img/produtos/medflux-totem-senhas.png', alt: 'Totem do MedFlux para retirada de senha normal ou prioritária' },
    ],
  },
  {
    id: 'movehub',
    name: 'MoveHub',
    stage: 'development',
    stageNote: 'Meta de lançamento: fevereiro de 2027',
    segment: 'Personal trainers e alunos',
    tagline: 'Personal trainer e aluno acompanhando o treino no mesmo lugar.',
    description:
      'Plataforma para personal trainers gerenciarem seus alunos, acompanharem os treinos e organizarem a rotina profissional. O aluno tem a sua própria experiência no mesmo ambiente.',
    highlights: [
      'Gestão de alunos para o personal trainer',
      'Acompanhamento de treinos',
      'Experiência pensada para o profissional e para o aluno',
    ],
    role: [
      'Concepção e visão de produto',
      'Desenvolvimento da plataforma',
      'Definição da experiência do personal e do aluno',
    ],
    accent: '#a78bfa',
    url: '', // ex.: 'https://www.seuproduto.com.br'
    images: [],
  },
]

/**
 * TRABALHOS ANTERIORES (lista compacta no fim da página)
 * Campos: title, description, image (opcional), year (opcional)
 */
export const earlierWork = [
  {
    title: 'EMMA',
    description:
      'Sistema de agendamento de exames ocupacionais com pagamentos e relatórios. Foi o ponto de partida do MedFlux.',
    image: './img/01.png',
  },
  {
    title: 'Site institucional Medeiros Supermercado',
    description: 'Lojas, ações, vagas de emprego, promoções e localização das unidades.',
    image: './img/03.jpeg',
  },
]
