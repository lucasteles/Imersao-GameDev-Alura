
let imagemCenario: P5.Image

export function preload() {

  imagemCenario = p5.loadImage('imagens/cenario/floresta.png')
}

export function setup() {
  p5.createCanvas(p5.windowWidth, p5.windowHeight)
  p5.background(imagemCenario)
}

export function draw() {
} 
