export interface Ponto {
  x: number
  y: number
}

export function ponto(x: number, y: number) {
  return <Ponto>{ x, y }
}