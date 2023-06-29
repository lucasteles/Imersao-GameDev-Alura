import { InformaçõesSpriteSheet, ponto, Retangulo } from '~/lib/types'
import { AnimacaoSprite } from '~/animacaoSprite'
import { ALTURA_MINIMA } from '~/lib/config'

const numeroDeLinhasEColunas = 4
const tamanhoNaTela = { width: 110, height: 135 }
const tamanhoSprite = { width: 220, height: 270 }

const spriteInfo = (imagem: P5.Image) => <InformaçõesSpriteSheet>{
  numeroColunas: numeroDeLinhasEColunas,
  numeroLinhas: numeroDeLinhasEColunas,
  frame: tamanhoSprite,
  imagem: imagem,
}

const colisor: Retangulo = {
  x: 30, y: 20,
  width: 50, height: 110
}

const posicaoInicial = () => ponto(110, ALTURA_MINIMA)

enum EstadoPersonagem {
  Correndo,
  Pulo,
  PuloDuplo
}

export class Personagem extends AnimacaoSprite {

  #velocidadePulo = 0
  #gravidade = 6
  #estado: EstadoPersonagem = EstadoPersonagem.Correndo
  #forçaPulo = -50
  #contropeDePisca = 0

  invencivel = false

  constructor(imagem: P5.Image, private readonly somPulo: P5.SoundFile) {
    super(spriteInfo(imagem), tamanhoNaTela, posicaoInicial(), colisor)
  }

  aplicaGravidade() {
    this.y += this.#velocidadePulo
    this.#velocidadePulo += this.#gravidade
    this.checaChão()
  }

  checaChão() {
    if (this.y > this.posicaoInicial.y) {
      this.y = this.posicaoInicial.y
      this.#estado = EstadoPersonagem.Correndo
    }
  }

  pula() {
    switch (this.#estado) {
      case EstadoPersonagem.Correndo:
        this.#estado = EstadoPersonagem.Pulo
        break
      case EstadoPersonagem.Pulo:
        this.#estado = EstadoPersonagem.PuloDuplo
        break
      case EstadoPersonagem.PuloDuplo:
        return
    }

    this.somPulo.play()
    this.#velocidadePulo = this.#forçaPulo
  }

  colidiuComVarios(inimigos: readonly AnimacaoSprite[]) {
    for (const inimigo of inimigos)
      if (this.colidiu(inimigo))
        return true

    return false
  }

  colidiu(inimigo: AnimacaoSprite) {
    if (this.invencivel) return false

    const eu = this.colisor
    const ele = inimigo.colisor

    return p.collideRectRect(
      eu.x, eu.y, eu.width, eu.height,
      ele.x, ele.y, ele.width, ele.height
    )

  }

  ficaInvencivel() {
    this.invencivel = true
    this.#contropeDePisca = 0
    setTimeout(() => {
      this.invencivel = false
      this.exibe = true
    }, 1000)
  }

  controlaPisca() {
    if (!this.invencivel) return

    this.#contropeDePisca++
    if (this.#contropeDePisca % 2 === 0)
      this.exibe = !this.exibe
  }

  update() {
    this.aplicaGravidade()
    this.controlaPisca()

    super.update()
  }

}
