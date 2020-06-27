import { Retangulo } from './lib/types'

export class Vida {

  tamanho: Retangulo
  invencivel = false
  #vidas: number

  constructor(
    private imagem: P5.Image,
    private total: number,
    private inicial: number,
  ) {
    this.tamanho = <Retangulo>{
      x: 20, y: 20,
      width: 40, height: 40
    }
    this.#vidas = inicial
  }

  draw() {
    for (let i = 0; i < this.#vidas; i++) {
      p5.image(this.imagem,
        this.tamanho.x + ((this.tamanho.width + 10) * i),
        this.tamanho.y,
        this.tamanho.width,
        this.tamanho.height)
    }
  }

  ganhaVida() {
    console.log('VIIIIDA')
    if (this.#vidas < this.total)
      this.#vidas++
  }

  perdeVida() {
    if (this.#vidas > 0)
      this.#vidas--
  }

  morreu() {
    return this.#vidas === 0
  }

  resetar() {
    this.#vidas = this.inicial
  }

}