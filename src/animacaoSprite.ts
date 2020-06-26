import { Ponto, calcularPontos, InformaçõesSpriteSheet, Mensuravel, Retangulo, ponto } from './lib/util'
import { DEBUG } from './lib/config'

export class AnimacaoSprite {

  private readonly frames: readonly Ponto[]
  private frameAtual = 0

  debug = DEBUG
  posicaoInicial: Ponto
  posicao: Ponto
  colisorBase: Retangulo

  constructor(
    readonly spriteInfo: InformaçõesSpriteSheet,
    readonly tamanhoNaTela: Mensuravel,
    posicao: Ponto,
    colisor?: Retangulo,
  ) {
    this.posicao = ponto(posicao.x, p5.height - tamanhoNaTela.height - posicao.y)
    this.posicaoInicial = ponto(this.posicao.x, this.posicao.y)
    this.frames = calcularPontos(spriteInfo)
    this.colisorBase = this.ajustarColisor(colisor)


    console.log(this.colisorBase)
  }

  get x() { return this.posicao.x }
  set x(v) { this.posicao.x = v }
  get y() { return this.posicao.y }
  set y(v) { this.posicao.y = v }

  ajustarColisor(colisor?: Retangulo): Retangulo {
    if (!colisor)
      return <Retangulo>{ x: 0, y: 0, ...this.tamanhoNaTela }

    return colisor
  }

  get colisor() {
    return <Retangulo>
      {
        x: this.x + this.colisorBase.x,
        y: this.y + this.colisorBase.y,
        width: this.colisorBase.width,
        height: this.colisorBase.height,
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

      const colisor = this.colisor
      p5.rect(
        colisor.x, colisor.y,
        colisor.width, colisor.height)

      p5.fill('white')
      p5.text(`x:${colisor.x} y:${colisor.y}\nw:${colisor.width} h:${colisor.height}`,
        colisor.x, colisor.y)

      p5.pop()
    }
  }


}