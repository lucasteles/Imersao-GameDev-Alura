import { InformaçõesSpriteSheet, Ponto } from './lib/util'
import { AnimacaoSprite } from './lib/animacaoSprite'

export class Personagem {

  anim: AnimacaoSprite
  forçaPulo = 0
  gravidade = 3

  posicaoInicial: Ponto = { x: 0, y: 0 }

  constructor(imagem: P5.Image) {


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

    if (this.anim.y > this.posicaoInicial.y)
      this.anim.y = this.posicaoInicial.y
  }

  draw() { this.anim.draw() }

  pula() {
    this.forçaPulo = -30
  }

  update() {
    this.anim.update()
    this.aplicaGravidade()
  }
}