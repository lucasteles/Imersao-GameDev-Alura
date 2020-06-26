import { Ponto, calcularPontos, InformaçõesSpriteSheet, Mensuravel, Retangulo, ponto } from './util'
import { ALTURA_MINIMA } from './config'

export class AnimacaoSprite {

  private readonly frames: readonly Ponto[]
  private frameAtual = 0

  debug = false
  posicao: Ponto
  posicaoInicial: Ponto

  constructor(
    readonly spriteInfo: InformaçõesSpriteSheet,
    readonly tamanhoNaTela: Mensuravel,
    posicao: Ponto
  ) {
    this.posicao = ponto(posicao.x, p5.height - tamanhoNaTela.height - posicao.y)
    this.posicaoInicial = ponto(this.posicao.x, this.posicao.y)
    this.frames = calcularPontos(spriteInfo)
  }

  get x() { return this.posicao.x }
  set x(v) { this.posicao.x = v }
  get y() { return this.posicao.y }
  set y(v) { this.posicao.y = v }

  get retangulo() {
    return <Retangulo>{
      ...this.posicao,
      ...this.tamanhoNaTela
    }
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

    if (this.debug) {
      p5.push()
      p5.fill(255, 0, 0, 90)

      p5.rect(
        this.posicao.x, this.posicao.y,
        this.tamanhoNaTela.width, this.tamanhoNaTela.height)

      p5.fill('white')
      p5.text(`x:${this.x} y:${this.y}\nw:${this.tamanhoNaTela.width} h:${this.tamanhoNaTela.height}`, this.x, this.y)

      p5.pop()
    }
  }


}