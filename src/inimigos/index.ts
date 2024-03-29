import { InformaçõesSpriteSheet, Ponto, Mensuravel, Retangulo } from '~/lib/types'

export interface DadosInimigo {
  tamanhoNaTela: Mensuravel
  tamanhoSprite: Mensuravel
  getSpriteInfo(imagem: P5.Image): InformaçõesSpriteSheet
  posicaoInicial(): Ponto
  colisor?: Retangulo
  debug?: boolean
}
