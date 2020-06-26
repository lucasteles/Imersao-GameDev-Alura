import { InformaçõesSpriteSheet, ponto } from '../lib/util'
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
  p5.width * 2,  200
)

export const gotaVoadora: DadosInimigo = {
  tamanhoNaTela,
  tamanhoSprite,
  getSpriteInfo,
  posicaoInicial,
  velocidade: 10,
  delay: 1500,
  debug: false,
}

