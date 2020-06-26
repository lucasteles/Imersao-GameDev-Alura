import { InformaçõesSpriteSheet, ponto } from './lib/util'
import { AnimacaoSprite } from './lib/animacaoSprite'
import { Inimigo } from './inimigo'
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

const posicaoInicial = () => ponto(0, ALTURA_MINIMA)

enum EstadoPersonagem {
  Correndo,
  Pulo,
  PuloDuplo
}

export class Personagem extends AnimacaoSprite {

  forçaPulo = 0
  gravidade = 3

  estado: EstadoPersonagem = EstadoPersonagem.Correndo

  constructor(imagem: P5.Image, private readonly somPulo: P5.SoundFile) {
    super(spriteInfo(imagem), tamanhoNaTela, posicaoInicial())
  }

  aplicaGravidade() {
    this.y += this.forçaPulo
    this.forçaPulo += this.gravidade
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
    this.forçaPulo = -30
  }

  colidiu(inimigo: AnimacaoSprite) {
    const eu = this.retangulo
    const ele = inimigo.retangulo
    const precisao = .7

    return p5.collideRectRect(
      eu.x, eu.y, eu.width * precisao, eu.height * precisao,
      ele.x, ele.y, ele.width, ele.height
    )

  }

  update() {
    this.aplicaGravidade()
    super.update()
  }
}