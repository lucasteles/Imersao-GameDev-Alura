import { AnimacaoSprite } from './animacaoSprite'
import { DadosInimigo } from './inimigos'

export class Inimigo extends AnimacaoSprite {
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

  update() {
    super.update()
    this.x -= this.dadosInimigo.velocidade

    if (this.x < -this.tamanhoNaTela.width - (this.dadosInimigo.delay ?? 0))
      this.x = p5.width
  }


}