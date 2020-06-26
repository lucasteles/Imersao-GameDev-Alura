import { InformaçõesSpriteSheet, Ponto, Mensuravel } from '../lib/util'

export interface DadosInimigo {
  tamanhoNaTela: Mensuravel
  tamanhoSprite: Mensuravel
  getSpriteInfo(imagem: P5.Image): InformaçõesSpriteSheet
  posicaoInicial(): Ponto
  velocidade: number
  debug?: boolean
  delay?: number
}