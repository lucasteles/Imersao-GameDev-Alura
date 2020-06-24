
let imagemCenario: P5.Image

export function preload() {

  imagemCenario = p5.loadImage('imagens/cenario/floresta.png')
}

export function setup() {

}

export function draw() {
  p5.background(imagemCenario)
} 
