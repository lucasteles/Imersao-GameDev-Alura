import { Ponto, calcularPontos, InformaçõesSpriteSheet, ComTamanho } from './util'

export class AnimacaoSprite {

  private readonly frames: readonly Ponto[]
  private frameAtual = 0

  posicao: Ponto

  constructor(
    readonly spriteInfo: InformaçõesSpriteSheet,
    readonly tamanhoNaTela: ComTamanho,
    posicao?: Ponto
  ) {
    this.posicao = <Ponto>{ ...posicao }  ?? { x: 0, y: 0 }
    this.frames = calcularPontos(spriteInfo)
  }

  get x() { return this.posicao.x }
  set x(v) { this.posicao.x = v }
  get y() { return this.posicao.y }
  set y(v) { this.posicao.y = v }

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