import P5 from 'p5'

export = P5
export as namespace P5

declare global {
  interface Window {
    p5: P5
  }
  var p5: P5
}