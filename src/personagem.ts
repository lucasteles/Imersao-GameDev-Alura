import { Ponto } from './types'
import { range, xprod } from 'ramda'

export class Personagem {

  frames: readonly Ponto[]
  frameAtual = 1

  tamanhoNaTela = { width: 110, height: 135 }
  tamanhoSprite = { width: 220, height: 270 }

  constructor(private readonly imagem: P5.Image) {
      this.frames = this.calcularPontos()

  }

  calcularPontos(): readonly Ponto[] {

      const numeroDeLinhasEColunas = 4
      const linhas = range(0, numeroDeLinhasEColunas)
                      .map(i => i * this.tamanhoSprite.width)

      const colunas = range(0, numeroDeLinhasEColunas)
                      .map((_, i) => i * this.tamanhoSprite.height)

      const pontosCalculados = xprod( linhas, colunas)
        .map(par => <Ponto>{ x : par[0], y : par[1] })

      return pontosCalculados
  }
  
  update() {
    
    this.frameAtual++
    if (this.frameAtual >= this.frames.length)
      this.frameAtual = 0

  }

  draw() {

    const posicaoDoFrame = this.frames[this.frameAtual]

    const posicao: Ponto = {
      x: 0, 
      y: p5.height - this.tamanhoNaTela.height,
    }

    p5.image(
      this.imagem,
      posicao.x, posicao.y,
      this.tamanhoNaTela.width,this.tamanhoNaTela.height,
      posicaoDoFrame.x, posicaoDoFrame.y,
      this.tamanhoSprite.width, this.tamanhoSprite.height)
  }
}