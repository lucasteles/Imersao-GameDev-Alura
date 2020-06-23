import MyCircle from './MyCircle'

const myCircles: MyCircle[] = []

export function setup() {

    p5.background('white')

    for (let i = 1; i < 4; i++) {
      const p = p5.width / 4
      const circlePos = p5.createVector(p * i, p5.height / 2)
      const size = i % 2 !== 0 ? 24 : 32
      myCircles.push(new MyCircle(circlePos, size))
    }
}

export function draw() {
    myCircles.forEach(circle => circle.draw())
}

