import { AssetsDoJogo } from '../preload'
import { Pontuação } from '../pontuacao'
import { Personagem } from '../personagem'
import { GerenciadorInimigos } from '../gerenciadores/gerenciador-inimigos'
import { Cenario } from '../cenario'
import { Cena } from '../lib/types'
import { Vida } from '../vida'

export class JogoCena implements Cena {

  gerenciadorInimigos: GerenciadorInimigos
  cenario: Cenario
  personagem: Personagem
  pontuacao: Pontuação
  vida: Vida

  gameOverImage: P5.Image
  gameOver = false

  constructor(
    private assets: AssetsDoJogo,
  ) {
    this.cenario = new Cenario(assets.imagemCenario, 5)
    this.personagem = new Personagem(assets.imagemPersonagem, assets.somPulo)
    this.pontuacao = new Pontuação()
    this.gerenciadorInimigos = new GerenciadorInimigos(assets)
    this.vida = new Vida(assets.imagemVida, 5, 3)
    this.gameOverImage = assets.imagemGameOver
  }


  setup() {
    this.assets.musica.loop()
    this.assets.musica.setVolume(.1)
  }

  keyPressed() {
    if (p5.key === 'ArrowUp')
      this.personagem.pula()

    if (p5.key && this.gameOver) {
      this.reiniciar()

    }
  }

  private reiniciar() {
    this.gameOver = false
    this.gerenciadorInimigos.resetar()
    this.vida.resetar()
    p5.loop()
  }

  dano() {
    this.vida.perdeVida()
    this.personagem.ficaInvensivel()

    if (this.vida.morreu()) {
      this.perdeu()
      return
    }
  }

  perdeu() {
    p5.draw()
    p5.image(this.gameOverImage,
      p5.width / 2 - this.gameOverImage.width / 2,
      p5.height / 2 - this.gameOverImage.height / 2)
    this.gameOver = true
    p5.noLoop()
  }

  draw() {
    this.cenario.draw()
    this.personagem.draw()
    this.gerenciadorInimigos.draw()
    this.pontuacao.draw()
    this.vida.draw()

    this.cenario.update()
    this.personagem.update()
    this.gerenciadorInimigos.update()

    if (this.personagem.colidiu(this.gerenciadorInimigos.inimigoAtual))
      this.dano()

    this.pontuacao.adicionarPonto()
  }

}