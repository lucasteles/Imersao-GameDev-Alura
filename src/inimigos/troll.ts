import { InformaçõesSpriteSheet, ponto } from '../lib/util'
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
  p5.width * 2, 0
)

export const troll: DadosInimigo = {
  debug:false,
  tamanhoNaTela,
  tamanhoSprite,
  getSpriteInfo,
  posicaoInicial,
  velocidade: 6,
  delay: 2500,
}
