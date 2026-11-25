// Estágios de um produto, na ordem em que acontecem.
// O componente StageTrack usa essa ordem para desenhar a régua de progresso.
export const stages = [
  { key: 'development', label: 'Em desenvolvimento' },
  { key: 'launch', label: 'Preparação para lançamento' },
  { key: 'production', label: 'Em produção' },
]

export const stageIndex = (key) => stages.findIndex((s) => s.key === key)
export const stageLabel = (key) => stages.find((s) => s.key === key)?.label ?? key
