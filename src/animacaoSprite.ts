import { Ponto, InformaçõesSpriteSheet, Mensuravel, Retangulo, ponto } from '~/lib/types'
import { getDebugState } from '~/lib/config'
import { range } from 'remeda'

export class AnimacaoSprite {

  readonly #frames: readonly Ponto[]
  #frameAtual = 0

  debug?: boolean
  posicaoInicial: Ponto
  posicao: Ponto
  colisorBase: Retangulo
  exibe = true

  constructor(
    readonly spriteInfo: InformaçõesSpriteSheet,
    readonly tamanhoNaTela: Mensuravel,
    posicao: Ponto,
    colisor?: Retangulo,
  ) {
    this.posicao = ponto(posicao.x, p.height - tamanhoNaTela.height - posicao.y)
    this.posicaoInicial = ponto(this.posicao.x, this.posicao.y)
    this.#frames = calcularPontos(spriteInfo)
    this.colisorBase = this.ajustarColisor(colisor)
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
    this.#frameAtual = ++this.#frameAtual % this.#frames.length
  }

  draw() {
    if (!this.exibe)
      return

    const posicaoDoFrame = this.#frames[this.#frameAtual]
    p.image(
      this.spriteInfo.imagem,
      this.posicao.x, this.posicao.y,
      this.tamanhoNaTela.width, this.tamanhoNaTela.height,
      posicaoDoFrame.x, posicaoDoFrame.y,
      this.spriteInfo.frame.width, this.spriteInfo.frame.height)

    if (this.debug || getDebugState()) {
      p.push()
      p.fill(255, 0, 0, 90)

      const colisor = this.colisor
      p.rect(
        colisor.x, colisor.y,
        colisor.width, colisor.height)

      p.fill('white')
      p.text(`x:${colisor.x} y:${colisor.y}\nw:${colisor.width} h:${colisor.height}`,
        colisor.x, colisor.y)

      p.pop()
    }
  }
}


function calcularPontos({
  numeroColunas, numeroLinhas, quadrosEmBranco, frame: { width, height }
}: InformaçõesSpriteSheet): readonly Ponto[] {

  const colunas = range(0, numeroColunas)
    .map(i => i * width)

  const linhas = range(0, numeroLinhas)
    .map(i => i * height)

  const pontosCalculados =
    linhas.flatMap(y => colunas.map(x => ({ x, y })))

  return pontosCalculados
    .slice(0, pontosCalculados.length - (quadrosEmBranco || 0))
}
