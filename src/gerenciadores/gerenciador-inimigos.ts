import { Inimigo } from '../inimigo'
import { AssetsDoJogo } from '../preload'

import { gotinha } from '../inimigos/gotinha'
import { gotaVoadora } from '../inimigos/gota-voadora'
import { troll } from '../inimigos/troll'

export class GerenciadorInimigos {

  #inimigos: Inimigo[]
  #indiceInimigoAtual = 0

  constructor(assets: AssetsDoJogo) {
    const inimigo = new Inimigo(assets.imagemInimigo, gotinha)
    const inimigoGrande = new Inimigo(assets.imagemInimigoGrande, troll)
    const inimigoVoador = new Inimigo(assets.imagemVoador, gotaVoadora)
    this.#inimigos = [inimigo, inimigoGrande, inimigoVoador]
  }

  get inimigoAtual() {
    return this.#inimigos[this.#indiceInimigoAtual]
  }

  update() {
    this.inimigoAtual.update()

    if (this.inimigoAtual.estaForaDaTela()) {
      this.proximoInimigo()
      this.inimigoAtual.reposicionar()
      this.inimigoAtual.velocidade = Math.floor(p5.random(8, 15))
    }

  }

  private proximoInimigo() {
    this.#indiceInimigoAtual = Math.floor(p5.random(0, this.#inimigos.length))
  }

  draw() {
    this.inimigoAtual.draw()
  }

}