import { InformaçõesSpriteSheet } from './util'
import { AnimacaoSprite } from './lib/animacaoSprite'

export class Personagem {

  personagem: AnimacaoSprite

  constructor(imagem: P5.Image) {
    this.personagem = this.criarPersonagem(imagem)
  }

  private criarPersonagem(imagem: P5.Image) {

    const numeroDeLinhasEColunas = 4
    const tamanhoNaTela = { width: 110, height: 135 }
    const tamanhoSprite = { width: 220, height: 270 }

    const spriteInfo =  <InformaçõesSpriteSheet>{
      numeroColunas: numeroDeLinhasEColunas,
      numeroLinhas: numeroDeLinhasEColunas,
      frame: tamanhoSprite,
      imagem: imagem,
    }

    const posicao = {
      x: 0,
      y: p5.height - tamanhoNaTela.height,
    }

    return new AnimacaoSprite(spriteInfo, tamanhoNaTela, posicao)
  }

  draw() { this.personagem.draw() }
  update() { this.personagem.update() }
}