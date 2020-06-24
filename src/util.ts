import { range, xprod } from 'ramda'

export interface Ponto {
  x: number
  y: number
}

export interface ComTamanho {
  width: number
  height: number
}

export type Retangulo = Ponto & ComTamanho

export function ponto(x: number, y: number) {
  return <Ponto>{ x, y }
}

export interface InformaçõesSpriteSheet {
  numeroLinhas: number
  numeroColunas: number
  frame: ComTamanho
  imagem: P5.Image
}

export function calcularPontos({ 
  numeroColunas, numeroLinhas, frame: { width, height} 
}: InformaçõesSpriteSheet): readonly Ponto[] {

  const colunas = range(0, numeroColunas)
    .map(i => i * width)

  const linhas = range(0, numeroLinhas)
    .map(i => i * height)

  const pontosCalculados = xprod(linhas, colunas)
    .map(([y, x]) => <Ponto>{ x, y })

  return pontosCalculados
}
