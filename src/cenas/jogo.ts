import { AssetsDoJogo } from '../preload'
import { Pontuação } from '../pontuacao'
import { Personagem } from '../personagem'
import { GerenciadorInimigos } from '../gerenciadores/gerenciador-inimigos'
import { Cenario } from '../cenario'
import { Cena } from '../lib/types'

export class JogoCena implements Cena {

  gerenciadorInimigos: GerenciadorInimigos
  cenario: Cenario
  personagem: Personagem
  pontuacao: Pontuação
  gameOver: P5.Image

  constructor(
    private assets: AssetsDoJogo,
  ) {
    this.cenario = new Cenario(assets.imagemCenario, 5)
    this.personagem = new Personagem(assets.imagemPersonagem, assets.somPulo)
    this.pontuacao = new Pontuação()
    this.gerenciadorInimigos = new GerenciadorInimigos(assets)
    this.gameOver = assets.imagemGameOver
  }

  exibeGameOver = () =>
    p5.image(this.gameOver,
      p5.width / 2 - this.gameOver.width / 2,
      p5.height / 2 - this.gameOver.height / 2)

  setup() {
    this.assets.musica.loop()
    this.assets.musica.setVolume(.1)
  }

  keyPressed() {
    if (p5.key === 'ArrowUp')
      this.personagem.pula()

  }
  draw() {
    this.cenario.draw()
    this.cenario.update()
    this.pontuacao.draw()
    this.pontuacao.adicionarPonto()

    this.gerenciadorInimigos.update()
    this.gerenciadorInimigos.draw()

    if (this.personagem.colidiu(this.gerenciadorInimigos.inimigoAtual)) {
      this.exibeGameOver()
      p5.noLoop()
    }

    this.personagem.draw()
    this.personagem.update()
  }

}