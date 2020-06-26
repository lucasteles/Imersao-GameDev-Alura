import { InformaçõesSpriteSheet, ponto, Retangulo } from '../lib/util'
import { ALTURA_MINIMA } from '../lib/config'
import { DadosInimigo } from './'

const tamanhoNaTela = { width: 52, height: 52 }
const tamanhoSprite = { width: 104, height: 104 }

const getSpriteInfo = (imagem: P5.Image) => <InformaçõesSpriteSheet>{
  numeroColunas: 4,
  numeroLinhas: 7,
  frame: tamanhoSprite,
  imagem: imagem,
}
const posicaoInicial = () => ponto(
  p5.width, ALTURA_MINIMA
)

const colisor: Retangulo = {
  x: 5, y: 5, height: 40, width: 40
}

export const gotinha: DadosInimigo = {
  tamanhoNaTela,
  tamanhoSprite,
  getSpriteInfo,
  posicaoInicial,
  colisor,
  debug: false,
}
