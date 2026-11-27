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
 *              As imagens aparecem num carrossel. Para prints de celular, use
 *              device: 'phone' para mostrar a tela numa moldura de celular:
 *                { src: './img/produtos/movehub-app.png', alt: '...', device: 'phone' }
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
      'Cardápio digital com pedidos enviados direto para o WhatsApp do restaurante',
      'Página de links para a bio do Instagram, com a identidade visual da marca',
    ],
    role: [
      'Sócio da empresa',
      'Desenvolvimento e construção do produto',
      'Visão de produto e priorização de melhorias',
      'Relacionamento com clientes e implantação',
    ],
    accent: '#f59e3b',
    url: 'https://mezadigital.com.br',
    images: [
      { src: './img/produtos/meza-produtos.png', alt: 'Gestão de produtos do cardápio no Meza Digital' },
      { src: './img/produtos/meza-categorias.png', alt: 'Organização das categorias do cardápio no Meza Digital' },
      { src: './img/produtos/meza-resumo.png', alt: 'Resumo de visitas ao cardápio e pedidos enviados ao WhatsApp' },
      { src: './img/produtos/meza-pagina-de-links.png', alt: 'Página de links para a bio do Instagram no Meza Digital' },
      { src: './img/produtos/meza-identidade-visual.png', alt: 'Configuração de logo, capa e cores do cardápio' },
      { src: './img/produtos/meza-configuracoes.png', alt: 'Configuração do WhatsApp que recebe os pedidos' },
    ],
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
      'Carteira de alunos com metas, treino atual e adesão mensal',
      'Montagem de treinos e agenda dos próximos acompanhamentos',
      'Evolução de cargas, recordes e marcos de consistência',
      'Versão web e celular, pensada para o personal e para o aluno',
    ],
    role: [
      'Concepção e visão de produto',
      'Desenvolvimento da plataforma',
      'Definição da experiência do personal e do aluno',
    ],
    accent: '#a78bfa',
    url: 'https://movehub.com',
    images: [
      { src: './img/produtos/movehub-visao-geral.png', alt: 'Visão geral do personal no MoveHub' },
      { src: './img/produtos/movehub-celular-visao-geral.png', alt: 'Visão geral do MoveHub no celular', device: 'phone' },
      { src: './img/produtos/movehub-alunos.png', alt: 'Carteira de alunos com metas e adesão' },
      { src: './img/produtos/movehub-celular-agenda.png', alt: 'Agenda do dia e adesão dos alunos no celular', device: 'phone' },
      { src: './img/produtos/movehub-evolucao.png', alt: 'Evolução de cargas e recordes dos alunos' },
      { src: './img/produtos/movehub-celular-treinos.png', alt: 'Treinos com conclusão média no celular', device: 'phone' },
      { src: './img/produtos/movehub-login.png', alt: 'Tela de acesso do MoveHub' },
      { src: './img/produtos/movehub-celular-login.png', alt: 'Tela de acesso do MoveHub no celular', device: 'phone' },
    ],
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
