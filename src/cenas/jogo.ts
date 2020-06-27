import { AssetsDoJogo } from '../preload'
import { Pontuação } from '../pontuacao'
import { Personagem } from '../personagem'
import { GerenciadorInimigos, Dificuldade } from '../gerenciadores/gerenciador-inimigos'
import { Cenario } from '../cenario'
import { Cena } from '../lib/types'
import { Vida } from '../vida'

export class JogoCena implements Cena {

  gerenciadorInimigos: GerenciadorInimigos
  cenario: Cenario
  personagem: Personagem
  pontuacao: Pontuação
  vida: Vida

  ultimaVida = 0
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
    this.assets.musica.setVolume(.3)
  }

  keyPressed() {
    if (p5.key === 'ArrowUp')
      this.personagem.pula()

    if (p5.key && this.gameOver)
      this.reiniciar()
  }

  private reiniciar() {
    this.gameOver = false
    this.gerenciadorInimigos.resetar()
    this.ultimaVida = 0
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

  private ajustaDificuldade() {
    const pontos = this.pontuacao.pontos

    if (pontos !== this.ultimaVida && pontos % 100 === 0) {
      this.vida.ganhaVida()
      this.ultimaVida = pontos
    }

    if (pontos > 30)
      this.gerenciadorInimigos.dificudade = Dificuldade.MEDIO
    if (pontos > 100)
      this.gerenciadorInimigos.dificudade = Dificuldade.DIFICIL
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

    if (this.personagem.colidiuComVarios(this.gerenciadorInimigos.inimigos))
      this.dano()

    this.pontuacao.adicionarPonto()
    this.ajustaDificuldade()
  }

}