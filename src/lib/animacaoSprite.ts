import { Ponto, calcularPontos, InformaçõesSpriteSheet, Mensuravel, Retangulo } from './util'

export class AnimacaoSprite {

  private readonly frames: readonly Ponto[]
  private frameAtual = 0
  debug = false

  posicao: Ponto

  constructor(
    readonly spriteInfo: InformaçõesSpriteSheet,
    readonly tamanhoNaTela: Mensuravel,
    posicao?: Ponto
  ) {
    this.posicao = <Ponto>{ ...posicao } ?? { x: 0, y: 0 }
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
      p5.text(`x:${this.x} y:${this.y}\nw:${this.spriteInfo.frame.width} h:${this.spriteInfo.frame.height}`, this.x, this.y)

      p5.pop()
    }
  }


}