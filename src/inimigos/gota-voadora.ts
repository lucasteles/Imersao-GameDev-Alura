import { InformaçõesSpriteSheet, ponto, Retangulo } from '../lib/util'
import { DadosInimigo } from './'

const tamanhoNaTela = { width: 100, height: 100 }
const tamanhoSprite = { width: 200, height: 150 }

const getSpriteInfo = (imagem: P5.Image) => <InformaçõesSpriteSheet>{
  numeroColunas: 3,
  numeroLinhas: 6,
  frame: tamanhoSprite,
  imagem: imagem,
  quadrosEmBranco: 2,
}
const posicaoInicial = () => ponto(
  p5.width + 300,  200
)

const colisor: Retangulo = {
  x: 5, y: 30, height: 50, width: 80
}

export const gotaVoadora: DadosInimigo = {
  tamanhoNaTela,
  tamanhoSprite,
  getSpriteInfo,
  posicaoInicial,
  colisor,
  delay: 300,
  debug: false,
}

