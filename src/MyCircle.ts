export default class MyCircle {

  _pos: P5.Vector
  _size: number

  constructor(atPosition: P5.Vector, size: number) {
    this._pos = atPosition
    this._size = size
  }

  draw() {
    p5.push()

    p5.translate(this._pos)
    p5.noStroke()
    p5.fill('red')
    p5.ellipse(0, 0, this._size)

    p5.pop()
  }
}
