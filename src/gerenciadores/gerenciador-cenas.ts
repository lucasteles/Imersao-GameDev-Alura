import { AssetsDoJogo } from '~/lib/preload'
import { JogoCena } from '~/cenas/jogo'
import { InicioCena } from '~/cenas/inicio'

const obterCenas = (assets: AssetsDoJogo, gerenciador: GerenciadorCenas) => ({
  jogo: new JogoCena(assets),
  inicio: new InicioCena(assets, gerenciador),
})


type CenasDisponiveis = ReturnType<typeof obterCenas>
export type NomeCena = keyof CenasDisponiveis

export class GerenciadorCenas {
  #cenas: CenasDisponiveis
  #nomeCena: NomeCena

  constructor(assets: AssetsDoJogo, cena: NomeCena) {
    this.#cenas = obterCenas(assets, this)
    this.#nomeCena = cena
    this.alterarCena = this.alterarCena.bind(this)

    this.setupDasCenas()

  }

  get cenaAtual() {
    return this.#cenas[this.#nomeCena]
  }

  setupDasCenas() {
    for (const key in this.#cenas)
      this.#cenas[key as NomeCena].setup()
  }

  alterarCena(cena: NomeCena): void {
    this.#nomeCena = cena
  }

  draw() {
    this.cenaAtual.draw()
  }
}
