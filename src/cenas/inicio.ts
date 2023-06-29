import { Cena } from '~/lib/types'
import { AssetsDoJogo } from '~/lib/preload'
import { GerenciadorCenas } from '~/gerenciadores/gerenciador-cenas'
import { Botao } from '~/ui/botao'

export class InicioCena implements Cena {

  #botaoIniciar: Botao
  baseHeigt = p.height / 3
  constructor(
    private assets: AssetsDoJogo,
    private gerenciadorDeCenas: GerenciadorCenas
  ) {
    const posicaoBotao = { x: p.width / 2, y: this.baseHeigt + 150 }
    this.#botaoIniciar = new Botao('Iniciar', posicaoBotao, this.iniciar)
    this.#botaoIniciar.draw()
  }

  draw() {
    p.image(this.assets.telaInicial, 0, 0, p.width, p.height)

    this.texto()
  }

  setup() { }

  private texto() {
    p.push()

    p.textFont(this.assets.fonteTelaInicial)
    p.textAlign('center')

    p.textSize(50)

    p.text('As aventuras de ', p.width / 2, this.baseHeigt)
    p.textSize(150)
    p.text('Hipsta ', p.width / 2, this.baseHeigt + 110)
    p.pop()
  }


  keyPressed() {
    if (p.key === 'Enter')
      this.iniciar()
  }

  private iniciar = () => {
    this.gerenciadorDeCenas.alterarCena('jogo')
  }
}
