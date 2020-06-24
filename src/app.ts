import { Cenario } from './cenario'
import { Personagem } from './personagem'
import { Inimigo } from './inimigo'

let imagemCenario: P5.Image
let imagemPersonagem: P5.Image
let imagemGotinha: P5.Image
let musica: P5.SoundFile

let cenario: Cenario
let personagem: Personagem
let gotinha: Inimigo


export function preload() {
  imagemCenario = p5.loadImage('imagens/cenario/floresta.png')
  imagemPersonagem = p5.loadImage('imagens/personagem/correndo.png')
  imagemGotinha = p5.loadImage('imagens/inimigos/gotinha.png')
  musica = p5.loadSound('sons/trilha_jogo.mp3')
}

export function setup() {
  p5.createCanvas(p5.windowWidth, p5.windowHeight)
  p5.frameRate(40)

  cenario = new Cenario(imagemCenario, 5)
  personagem = new Personagem(imagemPersonagem)
  gotinha = new Inimigo(imagemGotinha)
  musica.loop()
  musica.setVolume(.1)
}

export function draw() {
  cenario.draw()
  cenario.update()

  personagem.draw()
  personagem.update()

  gotinha.draw()
  gotinha.update()
} 
