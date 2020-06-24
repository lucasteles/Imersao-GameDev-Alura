import { Cenario } from './cenario'
import { Personagem } from './personagem'
import { Inimigo } from './inimigo'
import { getAssets } from './lib/preload'

let cenario: Cenario
let personagem: Personagem
let gotinha: Inimigo

export function setup() {
  const assets = getAssets()
  p5.createCanvas(p5.windowWidth, p5.windowHeight)

  cenario = new Cenario(assets.imagemCenario, 5)
  personagem = new Personagem(assets.imagemPersonagem)
  gotinha = new Inimigo(assets.imagemGotinha)

  p5.frameRate(40)
  assets.musica.loop()
  assets.musica.setVolume(.1)
}

export function keyPressed() {
  if (p5.key === 'ArrowUp')
    personagem.pula()
}

export function draw() {
  cenario.draw()
  cenario.update()

  personagem.draw()
  personagem.update()

  gotinha.draw()
  gotinha.update()
} 
