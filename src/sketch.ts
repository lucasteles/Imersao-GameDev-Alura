import { Cenario } from './cenario'
import { Personagem } from './personagem'
import { Inimigo } from './inimigo'
import { getAssets } from './preload'

import { gotinha } from './inimigos/gotinha'
import { gotaVoadora } from './inimigos/gota-voadora'
import { troll } from './inimigos/troll'
import { Pontuação } from './pontuacao'

let cenario: Cenario
let personagem: Personagem
let inimigos: Inimigo[]
let pontuacao: Pontuação
let gameOver: P5.Image

export function setup() {
  const assets = getAssets()
  p5.createCanvas(p5.windowWidth, p5.windowHeight)

  cenario = new Cenario(assets.imagemCenario, 5)
  personagem = new Personagem(assets.imagemPersonagem, assets.somPulo)
  pontuacao = new Pontuação()

  gameOver = assets.imagemGameOver
  const inimigo = new Inimigo(assets.imagemInimigo, gotinha)
  const inimigoGrande = new Inimigo(assets.imagemInimigoGrande, troll)
  const inimigoVoador = new Inimigo(assets.imagemVoador, gotaVoadora)
  inimigos = [inimigo, inimigoGrande, inimigoVoador]

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

  pontuacao.draw()
  pontuacao.adicionarPonto()

  personagem.draw()
  personagem.update()

  for (const inimigo of inimigos) {

    inimigo.draw()
    inimigo.update()
    if (personagem.colidiu(inimigo))
    {
      p5.image(gameOver, 
        p5.width / 2 - gameOver.width / 2, 
        p5.height / 2 - gameOver.height / 2)
      p5.noLoop()
    }
  }

} 
