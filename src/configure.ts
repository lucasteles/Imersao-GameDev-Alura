import './styles.css'
import P5 from 'p5'
import 'p5/lib/addons/p5.dom'
import 'p5/lib/addons/p5.sound'
import { setup, draw } from './app'
import { preload } from './preload'

const sketch = (p5: P5) => {
  window.p5 = p5
  p5.preload = preload
  p5.setup = setup
  p5.draw =  draw
}

new P5(sketch)