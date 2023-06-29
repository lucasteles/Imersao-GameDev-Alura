import { AnimacaoSprite } from '~/animacaoSprite'
import { DadosInimigo } from '~/inimigos'

export class Inimigo extends AnimacaoSprite {
  velocidade = 10

  constructor(
    imagem: P5.Image,
    dadosInimigo: DadosInimigo) {
    super(
      dadosInimigo.getSpriteInfo(imagem),
      dadosInimigo.tamanhoNaTela,
      dadosInimigo.posicaoInicial(),
      dadosInimigo.colisor)
  }

  reposicionar() {
    this.posicao = { ...this.posicaoInicial }
  }

  update() {
    super.update()
    this.x -= this.velocidade
  }

  estaForaDaTela() {
    return (this.x < -this.tamanhoNaTela.width)
  }

  noMeioDaTela() {
    return (this.x < -this.tamanhoNaTela.width / 2)
  }

}
