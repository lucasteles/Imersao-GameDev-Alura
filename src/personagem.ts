import { InformaçõesSpriteSheet, Ponto, Retangulo } from './lib/util'
import { AnimacaoSprite } from './lib/animacaoSprite'
import { Inimigo } from './inimigo'

enum EstadoPersonagem {
  Correndo,
  Pulo,
  PuloDuplo
}

export class Personagem {

  anim: AnimacaoSprite
  forçaPulo = 0
  gravidade = 3

  posicaoInicial: Ponto = { x: 0, y: 0 }
  estado: EstadoPersonagem = EstadoPersonagem.Correndo

  constructor(imagem: P5.Image, private readonly somPulo: P5.SoundFile) {
    this.anim = this.criarPersonagem(imagem)
  }

  private criarPersonagem(imagem: P5.Image) {

    const numeroDeLinhasEColunas = 4
    const tamanhoNaTela = { width: 110, height: 135 }
    const tamanhoSprite = { width: 220, height: 270 }

    const spriteInfo = <InformaçõesSpriteSheet>{
      numeroColunas: numeroDeLinhasEColunas,
      numeroLinhas: numeroDeLinhasEColunas,
      frame: tamanhoSprite,
      imagem: imagem,
    }

    this.posicaoInicial = {
      x: 0,
      y: p5.height - tamanhoNaTela.height,
    }

    return new AnimacaoSprite(spriteInfo, tamanhoNaTela, this.posicaoInicial)
  }

  aplicaGravidade() {
    this.anim.y += this.forçaPulo
    this.forçaPulo += this.gravidade
    this.checaChão()
  }

  checaChão() {
    if (this.anim.y > this.posicaoInicial.y) {
      this.anim.y = this.posicaoInicial.y
      this.estado = EstadoPersonagem.Correndo
    }
  }

  draw() { this.anim.draw() }

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

  colidiu(inimigo: Inimigo) {
    const eu = this.anim.retangulo
    const ele = inimigo.anim.retangulo
    const precisao = .7

    return p5.collideRectRect(
      eu.x, eu.y, eu.width * precisao, eu.height * precisao,
      ele.x, ele.y, ele.width, ele.height
    )

  }

  update() {
    this.anim.update()
    this.aplicaGravidade()
  }
}