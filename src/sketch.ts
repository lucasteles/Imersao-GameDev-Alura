
import P5 from 'p5'
import 'p5/lib/addons/p5.dom'
import './styles.scss'

import { setup, draw } from './app'

const sketch = (p5: P5) => {
  p5.setup = () => {
    const canvas = p5.createCanvas(200, 200)
    canvas.parent("app")
    setup(p5)
  }

  p5.draw = () => draw()
}

new P5(sketch)