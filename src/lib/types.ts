export type Ponto = { x: number; y: number }
export interface Mensuravel {
  width: number
  height: number
}
export type Retangulo = Ponto & Mensuravel

export interface Desenhavel { draw(): void }
export interface TrataKeypress { draw(): void }
export type Cena  = Desenhavel & TrataKeypress

export function ponto(x: number, y: number) {
  return p5.createVector(x, y)
}

export interface InformaçõesSpriteSheet {
  numeroLinhas: number
  numeroColunas: number
  frame: Mensuravel
  imagem: P5.Image
  quadrosEmBranco?: number
}
