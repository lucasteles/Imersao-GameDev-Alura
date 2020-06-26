import { Cenario } from './cenario'
import { Personagem } from './personagem'
import { getAssets } from './preload'

import { Pontuação } from './pontuacao'
import { toggleDebugState, setDebugState } from './lib/config'
import { GenerenciadorInimigos } from './gerenciador-inimigos'

let gerenciadorInimigos: GenerenciadorInimigos
let cenario: Cenario
let personagem: Personagem
let pontuacao: Pontuação
let gameOver: P5.Image

const exibeGameOver = () =>
  p5.image(gameOver, p5.width / 2 - gameOver.width / 2, p5.height / 2 - gameOver.height / 2)

export function setup() {
  const assets = getAssets()
  p5.createCanvas(p5.windowWidth, p5.windowHeight)

  cenario = new Cenario(assets.imagemCenario, 5)

  personagem = new Personagem(assets.imagemPersonagem, assets.somPulo)
  pontuacao = new Pontuação()
  gerenciadorInimigos = new GenerenciadorInimigos(assets)
  gameOver = assets.imagemGameOver

  setDebugState(true)
  p5.frameRate(40)
  assets.musica.loop()
  assets.musica.setVolume(.1)
}

export function keyPressed() {
  if (p5.key === 'Control')
    toggleDebugState()

  if (p5.key === 'ArrowUp')
    personagem.pula()
}

export function draw() {
  cenario.draw()
  cenario.update()
  pontuacao.draw()
  pontuacao.adicionarPonto()

  gerenciadorInimigos.update()
  gerenciadorInimigos.draw()

  if (personagem.colidiu(gerenciadorInimigos.inimigoAtual)) {
    exibeGameOver()
    p5.noLoop()
  }

  personagem.draw()
  personagem.update()
} 
