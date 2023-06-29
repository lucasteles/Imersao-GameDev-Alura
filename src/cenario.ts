export class Cenario {

  #image1X = 0
  #image2X = p.width

  constructor(
    private readonly imagem: P5.Image,
    private readonly velocidade: number) { }

  update() {
    this.#image1X -= this.velocidade
    this.#image2X -= this.velocidade

    if (this.#image1X < -p.width)
      this.#image1X = p.width

    if (this.#image2X < -p.width)
      this.#image2X = p.width
  }

  draw() {
    p.image(this.imagem, this.#image1X, 0, p.width, p.height)
    p.image(this.imagem, this.#image2X, 0, p.width, p.height)
  }

}
