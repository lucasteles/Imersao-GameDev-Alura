import { Cena } from '../lib/types'
import { AssetsDoJogo } from '../preload'
import { GerenciadorCenas } from '../gerenciadores/gerenciador-cenas'

export class InicioCena implements Cena {

  constructor(
    private assets: AssetsDoJogo,
    private gerenciadorDeCenas: GerenciadorCenas
  ) { }

  draw() {
    p5.image(this.assets.telaInicial, 0, 0)
  }

  keyPressed() {
    if (p5.key === 'Enter')
      this.gerenciadorDeCenas.alterarCena('jogo')
  }
}