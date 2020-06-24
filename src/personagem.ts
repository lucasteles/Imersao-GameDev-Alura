
export class Personagem {

  constructor(private readonly imagem: P5.Image) { }

  draw() {
    const personagem = { width: 110, height: 135 }
    p5.image(
      this.imagem,
      0, p5.height - personagem.height,
      personagem.width, personagem.height,
      0, 0, 220, 270)
  }
}