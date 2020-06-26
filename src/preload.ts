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

export function preload() {
  imagemCenario = p5.loadImage('imagens/cenario/floresta.png')
  imagemPersonagem = p5.loadImage('imagens/personagem/correndo.png')
  imagemInimigo = p5.loadImage('imagens/inimigos/gotinha.png')
  imagemVoador = p5.loadImage('imagens/inimigos/gotinha-voadora.png')
  imagemInimigoGrande = p5.loadImage('imagens/inimigos/troll.png')
  imagemGameOver = p5.loadImage('imagens/assets/game-over.png')
  telaInicial = p5.loadImage('imagens/assets/telainicial.png')
  fonteTelaInicial = p5.loadFont('imagens/assets/fontetelainicial.otf')
  musica = p5.loadSound('sons/trilha_jogo.mp3')
  somPulo = p5.loadSound('sons/somPulo.mp3')
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
})

export type AssetsDoJogo = ReturnType<typeof getAssets>