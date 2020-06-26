import { InformaçõesSpriteSheet, ponto, Retangulo } from './lib/util'
import { AnimacaoSprite } from './animacaoSprite'
import { ALTURA_MINIMA } from './lib/config'

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

const posicaoInicial = () => ponto(0, ALTURA_MINIMA)

enum EstadoPersonagem {
  Correndo,
  Pulo,
  PuloDuplo
}

export class Personagem extends AnimacaoSprite {

  velocidadePulo = 0
  gravidade = 6

  estado: EstadoPersonagem = EstadoPersonagem.Correndo
  forçaPulo = -50

  constructor(imagem: P5.Image, private readonly somPulo: P5.SoundFile) {
    super(spriteInfo(imagem), tamanhoNaTela, posicaoInicial(), colisor)
  }

  aplicaGravidade() {
    this.y += this.velocidadePulo
    this.velocidadePulo += this.gravidade
    this.checaChão()
  }

  checaChão() {
    if (this.y > this.posicaoInicial.y) {
      this.y = this.posicaoInicial.y
      this.estado = EstadoPersonagem.Correndo
    }
  }

  pula() {

    switch (this.estado) {
      case EstadoPersonagem.Correndo:
        this.estado = EstadoPersonagem.Pulo
        break
      case EstadoPersonagem.Pulo:
        this.estado = EstadoPersonagem.PuloDuplo
        break
      case EstadoPersonagem.PuloDuplo:
        return
    }

    this.somPulo.play()
    this.velocidadePulo = this.forçaPulo
  }

  colidiu(inimigo: AnimacaoSprite) {
    const eu = this.colisor
    const ele = inimigo.colisor

    return p5.collideRectRect(
      eu.x, eu.y, eu.width, eu.height,
      ele.x, ele.y, ele.width, ele.height
    )

  }

  update() {
    this.aplicaGravidade()
    super.update()
  }
}