import { InformaçõesSpriteSheet, Ponto, Mensuravel, Retangulo } from '../lib/util'

export interface DadosInimigo {
  tamanhoNaTela: Mensuravel
  tamanhoSprite: Mensuravel
  getSpriteInfo(imagem: P5.Image): InformaçõesSpriteSheet
  posicaoInicial(): Ponto
  velocidade: number
  colisor?: Retangulo
  debug?: boolean
  delay?: number
}