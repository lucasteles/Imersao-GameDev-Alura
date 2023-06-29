
export interface Ponto { x: number; y: number }
export interface Desenhavel { draw(): void }
export interface Mensuravel {
  width: number
  height: number
}
export type Retangulo = Ponto & Mensuravel
export type Cena = Desenhavel & { setup(): void }

export function ponto(x: number, y: number) {
  return p.createVector(x, y)
}

export interface InformaçõesSpriteSheet {
  numeroLinhas: number
  numeroColunas: number
  frame: Mensuravel
  imagem: P5.Image
  quadrosEmBranco?: number
}
