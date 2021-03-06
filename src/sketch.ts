import { getAssets } from './preload'
import { toggleDebugState, setDebugState } from './lib/config'
import { GerenciadorCenas } from './gerenciadores/gerenciador-cenas'

let gerenciadorDeCenas: GerenciadorCenas

export function setup() {
  const assets = getAssets()
  p5.createCanvas(p5.windowWidth, p5.windowHeight)
  setDebugState(true)
  p5.frameRate(40)

  gerenciadorDeCenas = new GerenciadorCenas(assets, 'inicio')
}

export function keyPressed() {
  if (p5.key === ' ')
    toggleDebugState()

  gerenciadorDeCenas.cenaAtual.keyPressed()
}

export function draw() {
  gerenciadorDeCenas.cenaAtual.draw()
} 
