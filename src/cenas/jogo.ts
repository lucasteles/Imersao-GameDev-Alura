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
  gameOverImage: P5.Image
  gameOver = false

  constructor(
    private assets: AssetsDoJogo,
  ) {
    this.cenario = new Cenario(assets.imagemCenario, 5)
    this.personagem = new Personagem(assets.imagemPersonagem, assets.somPulo)
    this.pontuacao = new Pontuação()
    this.gerenciadorInimigos = new GerenciadorInimigos(assets)
    this.gameOverImage = assets.imagemGameOver
  }

  perdeu() {
    p5.image(this.gameOverImage,
      p5.width / 2 - this.gameOverImage.width / 2,
      p5.height / 2 - this.gameOverImage.height / 2)

    this.gameOver = true
    p5.noLoop()
  }

  setup() {
    this.assets.musica.loop()
    this.assets.musica.setVolume(.1)
  }

  keyPressed() {
    if (p5.key === 'ArrowUp')
      this.personagem.pula()

    if (p5.key === 'Enter' && this.gameOver) {
      this.gameOver = false
      this.gerenciadorInimigos.resetar()
      p5.loop()
    }

  }
  draw() {
    this.cenario.draw()
    this.personagem.draw()
    this.gerenciadorInimigos.draw()
    this.pontuacao.draw()

    this.cenario.update()
    this.personagem.update()
    this.gerenciadorInimigos.update()

    if (this.personagem.colidiu(this.gerenciadorInimigos.inimigoAtual))
      this.perdeu()

    this.pontuacao.adicionarPonto()
  }

}