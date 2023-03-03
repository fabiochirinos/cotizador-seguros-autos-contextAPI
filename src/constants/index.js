export const marcas = [
  { id: 1, nombre: 'Europeo' },
  { id: 2, nombre: 'Americano' },
  { id: 3, nombre: 'Asiático' }
]

const yearMax = new Date().getFullYear()

export const years = Array.from(
  new Array(20),
  (valor, index) => yearMax - index
)

export const planes = [
  { id: 1, nombre: 'Básico' },
  { id: 2, nombre: 'Completo' }
]