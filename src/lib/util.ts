import { range, xprod } from 'ramda'

export type Ponto = P5.Vector

export interface Mensuravel {
  width: number
  height: number
}

export type Retangulo = P5.Vector & Mensuravel

export function ponto(x: number, y: number) {
  return p5.createVector(x, y)
}

export interface InformaçõesSpriteSheet {
  numeroLinhas: number
  numeroColunas: number
  frame: Mensuravel
  imagem: P5.Image
}

export function calcularPontos({
  numeroColunas, numeroLinhas, frame: { width, height }
}: InformaçõesSpriteSheet): readonly Ponto[] {

  const colunas = range(0, numeroColunas)
    .map(i => i * width)

  const linhas = range(0, numeroLinhas)
    .map(i => i * height)

  const pontosCalculados = xprod(linhas, colunas)
    .map(([y, x]) => <Ponto>{ x, y })

  return pontosCalculados
}
