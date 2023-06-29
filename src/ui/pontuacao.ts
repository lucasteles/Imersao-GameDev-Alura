export class Pontuação {

  #pontos = 0
  tamanho = 50

  draw() {
    p.push()
    p.textSize(this.tamanho)
    p.textAlign(p.RIGHT)
    p.fill('white')
    p.text(this.pontos, p.width - 30, 50)

    p.pop()
  }

  get pontos() {
    return Math.floor(this.#pontos)
  }

  adicionarPonto() {
    this.#pontos += .2
  }

}
