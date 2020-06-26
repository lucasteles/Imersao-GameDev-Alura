import { Inimigo } from './inimigo'
import { AssetsDoJogo } from './preload'

import { gotinha } from './inimigos/gotinha'
import { gotaVoadora } from './inimigos/gota-voadora'
import { troll } from './inimigos/troll'

export class GenerenciadorInimigos {

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
    }

  }

  private proximoInimigo() {
    this.#indiceInimigoAtual = ++this.#indiceInimigoAtual % this.#inimigos.length
  }

  draw() {
    this.inimigoAtual.draw()
  }

}