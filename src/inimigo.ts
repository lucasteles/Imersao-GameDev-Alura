import { AnimacaoSprite } from './animacaoSprite'
import { DadosInimigo } from './inimigos'

export class Inimigo extends AnimacaoSprite {

  velocidade = 10

  constructor(
    imagem: P5.Image,
    private readonly dadosInimigo: DadosInimigo) {
    super(
      dadosInimigo.getSpriteInfo(imagem),
      dadosInimigo.tamanhoNaTela,
      dadosInimigo.posicaoInicial(),
      dadosInimigo.colisor)

    this.x += dadosInimigo.delay ?? 0
  }

  reposicionar() {
    this.posicao = this.posicaoInicial
  }

  update() {
    super.update()
    this.x -= this.velocidade
  }

  estaForaDaTela() {
    return (this.x < -this.tamanhoNaTela.width - (this.dadosInimigo.delay ?? 0))
  }


}