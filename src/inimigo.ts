import { InformaçõesSpriteSheet } from './util'
import { AnimacaoSprite } from './animacaoSprite'

export class Inimigo {

  personagem: AnimacaoSprite

  constructor(imagem: P5.Image) {
    this.personagem = this.criarPersonagem(imagem)
  }

  private criarPersonagem(imagem: P5.Image) {

    const tamanhoNaTela = { width: 52, height: 52 }
    const tamanhoSprite = { width: 104, height: 104 }

    const spriteInfo =  <InformaçõesSpriteSheet>{
      numeroColunas: 4,
      numeroLinhas: 7,
      frame: tamanhoSprite,
      imagem: imagem,
    }

    return new AnimacaoSprite(spriteInfo, tamanhoNaTela)
  }

  draw() { this.personagem.draw() }
  update() { this.personagem.update() }
}