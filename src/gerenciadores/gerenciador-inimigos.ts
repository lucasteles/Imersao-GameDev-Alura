import { Inimigo } from '~/inimigo'
import { AssetsDoJogo } from '~/lib/preload'
import { gotinha } from '~/inimigos/gotinha'
import { gotaVoadora } from '~/inimigos/gota-voadora'
import { troll } from '~/inimigos/troll'

export enum Dificuldade {
  FACIL, MEDIO, DIFICIL
}

export class GerenciadorInimigos {

  #tiposInimigos: (() => Inimigo)[]
  #inimigos: Inimigo[] = []

  dificudade = Dificuldade.FACIL

  constructor(assets: AssetsDoJogo) {
    const inimigo = () => new Inimigo(assets.imagemInimigo, gotinha)
    const inimigoGrande = () => new Inimigo(assets.imagemInimigoGrande, troll)
    const inimigoVoador = () => new Inimigo(assets.imagemVoador, gotaVoadora)
    this.#tiposInimigos = [inimigo, inimigoGrande, inimigoVoador]
    this.adicionarInimigo()
  }

  get inimigos(): readonly Inimigo[] {
    return this.#inimigos
  }

  update() {
    for (const inimigo of this.#inimigos)
      this.moverInimigo(inimigo)
  }

  moverInimigo(inimigoAtual: Inimigo) {
    inimigoAtual.update()

    this.verificaSeAdiocionaInimigo(inimigoAtual)

    if (inimigoAtual.estaForaDaTela())
      this.destruir(inimigoAtual)

  }

  private verificaSeAdiocionaInimigo(inimigoAtual: Inimigo) {
    if (inimigoAtual.noMeioDaTela()
      && (
        (this.dificudade === Dificuldade.MEDIO && this.#inimigos.length < 2)
        || (this.dificudade === Dificuldade.DIFICIL && this.#inimigos.length < 3)
      )) {
      this.adicionarInimigo()
    }
  }

  private adicionarInimigo() {
    const novoInimigo = this.obterInimigoRandom()
    novoInimigo.reposicionar()
    novoInimigo.velocidade = Math.floor(p.random(10, 30))
    this.#inimigos.push(novoInimigo)
  }

  private obterInimigoRandom() {
    return this.#tiposInimigos[
      Math.floor(p.random(0, this.#tiposInimigos.length))
    ]()
  }

  draw() {
    for (const inimigo of this.#inimigos)
      inimigo.draw()
  }

  destruir(inimigo: Inimigo) {
    this.#inimigos = this.#inimigos.filter(i => i !== inimigo)
    this.adicionarInimigo()
  }

  resetar() {
    this.#inimigos = []
    this.adicionarInimigo()
  }

}
