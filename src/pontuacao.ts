
export class Pontuação {

  #pontos = 0
  tamanho = 50

  draw() {
    p5.push()
    p5.textSize(this.tamanho)
    p5.textAlign(p5.RIGHT)
    p5.fill('white')
    p5.text(this.pontos, p5.width - 30, 50)

    p5.pop()
  }

  get pontos() {
    return Math.floor(this.#pontos)
  }

  adicionarPonto() {
    this.#pontos += .2
  }

}