import { Ponto, calcularPontos, InformaçõesSpriteSheet, ComTamanho } from './util'

export class AnimacaoSprite {

  frames: readonly Ponto[]
  frameAtual = 0

  readonly posicao: Ponto

  constructor(
    private readonly spriteInfo: InformaçõesSpriteSheet,
    private readonly tamanhoNaTela: ComTamanho,
    posicao?: Ponto
  ) {
    this.posicao = posicao ?? { x: 0, y: 0 }
    this.frames = calcularPontos(spriteInfo)
  }

  update() {
    this.frameAtual = ++this.frameAtual % this.frames.length
  }

  draw() {
    const posicaoDoFrame = this.frames[this.frameAtual]
    p5.image(
      this.spriteInfo.imagem,
      this.posicao.x, this.posicao.y,
      this.tamanhoNaTela.width, this.tamanhoNaTela.height,
      posicaoDoFrame.x, posicaoDoFrame.y,
      this.spriteInfo.frame.width, this.spriteInfo.frame.height)
  }
}