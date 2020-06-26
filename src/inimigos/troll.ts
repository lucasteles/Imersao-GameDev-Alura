import { InformaçõesSpriteSheet, ponto, Retangulo } from '../lib/util'
import { DadosInimigo } from '.'

const tamanhoNaTela = { width: 200, height: 200 }
const tamanhoSprite = { width: 400, height: 400 }

const getSpriteInfo = (imagem: P5.Image) => <InformaçõesSpriteSheet>{
  numeroColunas: 5,
  numeroLinhas: 6,
  frame: tamanhoSprite,
  imagem: imagem,
  quadrosEmBranco: 2,
}
const posicaoInicial = () => ponto(
  p5.width, 0
)

const colisor: Retangulo = {
  x: 80, y: 50, height: 110, width: 90
}

export const troll: DadosInimigo = {
  debug: false,
  tamanhoNaTela,
  tamanhoSprite,
  getSpriteInfo,
  posicaoInicial,
  colisor,
  delay: 1000,
}
