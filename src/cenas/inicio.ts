import { Cena } from '../lib/types'
import { AssetsDoJogo } from '../preload'
import { GerenciadorCenas } from '../gerenciadores/gerenciador-cenas'
import { Botao } from '../botao'

export class InicioCena implements Cena {

  #botaoIniciar: Botao
  baseHeigt = p5.height / 3
  constructor(
    private assets: AssetsDoJogo,
    private gerenciadorDeCenas: GerenciadorCenas
  ) {
    const posicaoBotao = { x: p5.width / 2, y: this.baseHeigt + 150 }
    this.#botaoIniciar = new Botao('Iniciar', posicaoBotao, this.iniciar)
    this.#botaoIniciar.draw()
  }

  draw() {
    p5.image(this.assets.telaInicial, 0, 0, p5.width, p5.height)

    this.texto()
  }

  private texto() {
    p5.push()

    p5.textFont(this.assets.fonteTelaInicial)
    p5.textAlign('center')

    p5.textSize(50)

    p5.text('As aventuras de ', p5.width / 2, this.baseHeigt)
    p5.textSize(150)
    p5.text('Hipsta ', p5.width / 2, this.baseHeigt + 110)
    p5.pop()
  }


  keyPressed() {
    if (p5.key === 'Enter')
      this.iniciar()
  }

  private iniciar = () => {
    this.gerenciadorDeCenas.alterarCena('jogo')
  }
}