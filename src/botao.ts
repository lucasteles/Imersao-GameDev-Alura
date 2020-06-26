import { Ponto } from "./lib/types";

export class Botao {
  #htmlBotao: P5.Element

  constructor(
    texto: string,
    private readonly poisicao: Ponto, 
    callback: VoidFunction) {
    this.#htmlBotao = p5.createButton(texto)
    this.#htmlBotao.addClass('botao-tela-inicial')
    const acaoBotao = () => {
      callback()
      this.#htmlBotao.remove()
    }
    this.#htmlBotao.mousePressed(acaoBotao)
  }

  draw() {
    this.#htmlBotao.position(this.poisicao.x, this.poisicao.y)
  }

}