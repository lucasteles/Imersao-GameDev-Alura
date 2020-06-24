

export class Cenario {

  private image1X = 0
  private image2X = p5.width

  constructor(
    private readonly imagem: P5.Image, 
    private readonly velocidade: number) { }

  update() {
    this.image1X -= this.velocidade
    this.image2X -= this.velocidade

    if (this.image1X < -p5.width)
      this.image1X = p5.width

    if (this.image2X < -p5.width)
      this.image2X = p5.width
  }

  draw() {
    p5.image(this.imagem, this.image1X, 0, p5.width, p5.height)
    p5.image(this.imagem, this.image2X, 0, p5.width, p5.height)
  }

}