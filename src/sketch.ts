import 'p5/lib/addons/p5.dom'
import './styles.css'
import P5 from 'p5'
import { setup, draw } from './app'

const sketch = (p5: P5) => {
  window.p5 = p5
  p5.setup = () => {

    const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight)
    canvas.parent('app')

    setup()
  }

  p5.draw = () => draw()
}

new P5(sketch)