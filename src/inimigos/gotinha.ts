import { InformaçõesSpriteSheet, ponto } from '../lib/util'
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


export const gotinha: DadosInimigo = {
  tamanhoNaTela,
  tamanhoSprite,
  getSpriteInfo,
  posicaoInicial,
  delay: 200,
  velocidade: 8,
  debug: false,
}
