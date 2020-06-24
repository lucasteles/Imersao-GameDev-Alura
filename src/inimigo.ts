import { InformaçõesSpriteSheet } from './lib/util'
import { AnimacaoSprite } from './lib/animacaoSprite'

export class Inimigo {

  anim: AnimacaoSprite
  velocidade = 8

  constructor(imagem: P5.Image) {
    this.anim = this.criarPersonagem(imagem)

    this.anim.posicao = {
        x: p5.width, y: p5.height - this.anim.tamanhoNaTela.height
    } 
  }

  private criarPersonagem(imagem: P5.Image) {

    const tamanhoNaTela = { width: 52, height: 52 }
    const tamanhoSprite = { width: 104, height: 104 }

    const spriteInfo = <InformaçõesSpriteSheet>{
      numeroColunas: 4,
      numeroLinhas: 7,
      frame: tamanhoSprite,
      imagem: imagem,
    }

    return new AnimacaoSprite(spriteInfo, tamanhoNaTela)
  }

  draw() { this.anim.draw() }

  update() {
    this.anim.update()
    this.anim.x -= this.velocidade

    if (this.anim.x < -this.anim.tamanhoNaTela.width)
      this.anim.x = p5.width
  }


}