let imagemCenario: P5.Image
let imagemPersonagem: P5.Image
let imagemInimigo: P5.Image
let imagemInimigoGrande: P5.Image
let imagemVoador: P5.Image
let imagemGameOver: P5.Image
let telaInicial: P5.Image
let musica: P5.SoundFile
let somPulo: P5.SoundFile
let fonteTelaInicial: P5.Font
let imagemVida: P5.Image

export function preload() {
  imagemCenario = p.loadImage('imagens/cenario/floresta.png')
  imagemPersonagem = p.loadImage('imagens/personagem/correndo.png')
  imagemInimigo = p.loadImage('imagens/inimigos/gotinha.png')
  imagemVoador = p.loadImage('imagens/inimigos/gotinha-voadora.png')
  imagemInimigoGrande = p.loadImage('imagens/inimigos/troll.png')
  imagemGameOver = p.loadImage('imagens/assets/game-over.png')
  telaInicial = p.loadImage('imagens/assets/telaInicial.png')
  imagemVida = p.loadImage('imagens/assets/coracao.png')
  fonteTelaInicial = p.loadFont('imagens/assets/fonteTelaInicial.otf')
  musica = p.loadSound('sons/trilha_jogo.mp3')
  somPulo = p.loadSound('sons/somPulo.mp3')
}

export const getAssets = () => ({
  imagemCenario,
  imagemPersonagem,
  imagemInimigo,
  imagemVoador,
  imagemInimigoGrande,
  imagemGameOver,
  musica,
  somPulo,
  telaInicial,
  fonteTelaInicial,
  imagemVida,
})

export type AssetsDoJogo = ReturnType<typeof getAssets>
