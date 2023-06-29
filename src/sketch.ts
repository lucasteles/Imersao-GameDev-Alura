import { getAssets } from '~/lib/preload'
import { toggleDebugState, setDebugState } from '~/lib/config'
import { GerenciadorCenas } from '~/gerenciadores/gerenciador-cenas'

let gerenciadorDeCenas: GerenciadorCenas | undefined

export function setup() {
  const assets = getAssets()
  p.createCanvas(p.windowWidth, p.windowHeight)
  setDebugState(true)
  p.frameRate(40)
  gerenciadorDeCenas = new GerenciadorCenas(assets, 'inicio')
}

export function keyPressed() {
  if (p.key === ' ')
    toggleDebugState()

  gerenciadorDeCenas?.cenaAtual.keyPressed()
}

export function draw() {
  gerenciadorDeCenas?.cenaAtual.draw()
}
