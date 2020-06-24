let imagemCenario: P5.Image
let imagemPersonagem: P5.Image
let imagemGotinha: P5.Image
let musica: P5.SoundFile

export function preload() {
  imagemCenario = p5.loadImage('imagens/cenario/floresta.png')
  imagemPersonagem = p5.loadImage('imagens/personagem/correndo.png')
  imagemGotinha = p5.loadImage('imagens/inimigos/gotinha.png')
  musica = p5.loadSound('sons/trilha_jogo.mp3')
}

export const getAssets = () => ({
  imagemCenario,
  imagemPersonagem,
  imagemGotinha,
  musica,
})
