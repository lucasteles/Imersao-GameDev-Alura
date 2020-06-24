import { Cenario } from './cenario'
import { Personagem } from './personagem'

let imagemCenario: P5.Image
let imagemPersonagem: P5.Image

let cenario: Cenario
let personagem: Personagem

export function preload() {
  imagemCenario = p5.loadImage('imagens/cenario/floresta.png')
  imagemPersonagem = p5.loadImage('imagens/personagem/correndo.png')
}

export function setup() {
  p5.createCanvas(p5.windowWidth, p5.windowHeight)

  cenario = new Cenario(imagemCenario, 5)
  personagem = new Personagem(imagemPersonagem)
}

export function draw() {
  cenario.draw()
  cenario.update()

  personagem.draw()
} 
